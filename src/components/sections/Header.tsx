'use client';

import React from 'react';
import { Button } from '../ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-black">
              <Image
                src="https://res.cloudinary.com/nishimweprince/image/upload/f_auto,q_auto/v1/lens/lens/cyxa57cp9qnf43ijgfh6"
                alt="Lens"
                width={100}
                height={100}
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-lens-primary transition-colors font-futura"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-lens-primary transition-colors font-futura"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-lens-primary transition-colors font-futura"
            >
              Team
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:block">
              Book a call
            </Button>
            <Button variant="primary" size="sm">
              Let&apos;s connect
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
