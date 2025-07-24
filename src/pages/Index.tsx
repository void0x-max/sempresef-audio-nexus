import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/sections/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content - Only Hero Section */}
      <main className="pt-16 md:pt-20">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
