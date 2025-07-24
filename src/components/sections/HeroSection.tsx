import { useState, useEffect } from 'react';
import { Play, Radio, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AudioEqualizer from '../AudioEqualizer';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    "Bine ai venit pe frecvența SempreSef",
    "Unde sunetul prinde viață",
    "Muzica care te mișcă"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/20 animate-ping"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-wider text-foreground mb-4">
            SEMPRESEF
          </h1>
          <div className="font-bebas text-xl md:text-3xl text-secondary tracking-[0.3em] mb-6">
            MEDIA
          </div>
        </div>

        {/* Anunturi Button */}
        <div className="flex justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-radio hover:scale-110 transition-all duration-300 glow-primary font-bebas text-xl tracking-wide px-8 py-6 rounded-2xl"
          >
            ANUNTURI
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;