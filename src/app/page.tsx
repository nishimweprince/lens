import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { ServicesMarquee } from '@/components/sections/ServicesMarquee';
import { IllustrationSection } from '@/components/sections/IllustrationSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ServicesDetail } from '@/components/sections/ServicesDetail';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServicesMarquee />
        <IllustrationSection />
        <ProcessSection />
        <ServicesDetail />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
