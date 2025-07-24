import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';
import EmisiuniSection from '@/components/sections/EmisiuniSection';
import LivePlayerSection from '@/components/sections/LivePlayerSection';
import EchipaSection from '@/components/sections/EchipaSection';
import ProgramSection from '@/components/sections/ProgramSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        <HeroSection />
        <EmisiuniSection />
        <LivePlayerSection />
        <EchipaSection />
        <ProgramSection />
        <MediaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
