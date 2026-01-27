import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { ServicesMarquee } from '@/components/sections/ServicesMarquee';
import { IllustrationSection } from '@/components/sections/IllustrationSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ServicesDetail } from '@/components/sections/ServicesDetail';
import { UmuhinziSection } from '@/components/sections/UmuhinziSection';
import { NyibutsaSection } from '@/components/sections/NyibutsaSection';
import { WarehouseSection } from '@/components/sections/WarehouseSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { LensMusicSection } from '@/components/sections/LensMusicSection';
import Scene3D from '@/components/3d/Scene3D';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Scene3D />
      <Header />
      <main className="relative z-10">
        <Hero />
        <div className="bg-white">
          <ServicesMarquee />
          <IllustrationSection />
          <ProcessSection />
          <ServicesDetail />
          <UmuhinziSection />
          <LensMusicSection />
          <NyibutsaSection />
          <WarehouseSection />
          <TeamSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
