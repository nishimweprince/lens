'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface MousePosition {
    x: number;
    y: number;
}

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return mousePosition;
}

function FloatingCube({ position, speed, rotationSpeed, scale = 1 }: {
    position: [number, number, number],
    speed: number,
    rotationSpeed: number,
    scale?: number
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const mousePosition = useMousePosition();

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        meshRef.current.position.x = position[0] + mousePosition.x * 0.2;
        meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.2 + mousePosition.y * 0.15;

        meshRef.current.rotation.x += 0.001 * rotationSpeed;
        meshRef.current.rotation.y += 0.0015 * rotationSpeed;
    });

    return (
        <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.4}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    color="#1F628E"
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.15}
                />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
                    <lineBasicMaterial color="#1F628E" transparent opacity={0.3} />
                </lineSegments>
            </mesh>
        </Float>
    );
}

function CameraController() {
    const { camera } = useThree();
    const mousePosition = useMousePosition();

    useFrame(() => {
        const scrollY = window.scrollY;

        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            -scrollY * 0.002 + mousePosition.y * 0.2,
            0.04
        );
        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            mousePosition.x * 0.4,
            0.04
        );

        camera.lookAt(0, -scrollY * 0.002, 0);
    });

    return null;
}

function SceneContents() {
    const shapes = useMemo(() => [
        { position: [-4, 4, -5] as [number, number, number], speed: 0.5, rotationSpeed: 1, scale: 1.5 },
        { position: [5, 1, -6] as [number, number, number], speed: 0.7, rotationSpeed: 0.8, scale: 2 },
        { position: [-6, -2, -4] as [number, number, number], speed: 0.6, rotationSpeed: 1.2, scale: 1.2 },
        { position: [4, -5, -7] as [number, number, number], speed: 0.8, rotationSpeed: 0.9, scale: 1.8 },
        { position: [-2, -8, -5] as [number, number, number], speed: 0.5, rotationSpeed: 1.1, scale: 1.3 },
    ], []);

    return (
        <>
            <CameraController />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1F628E" />

            {shapes.map((shape, i) => (
                <FloatingCube
                    key={i}
                    position={shape.position}
                    speed={shape.speed}
                    rotationSpeed={shape.rotationSpeed}
                    scale={shape.scale}
                />
            ))}

            <Environment preset="city" />
        </>
    );
}

export default function Scene3D() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <Canvas
                    camera={{ position: [0, 0, 10], fov: 45 }}
                    dpr={isMobile ? 1 : [1, 2]}
                >
                    <SceneContents />
                </Canvas>
            </div>
            {/* Subtle white radial gradient for content readability */}
            <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-radial from-white/80 via-white/40 to-transparent" />
        </>
    );
}
