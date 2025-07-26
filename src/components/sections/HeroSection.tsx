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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.03%22%3E%3Cpath d=%22m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Modern Title */}
        <div className="mb-12">
          <div className="relative">
            <h1 className="font-bebas text-7xl md:text-9xl lg:text-[12rem] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-4 leading-none">
              SEMPRESEF
            </h1>
            <div className="absolute inset-0 font-bebas text-7xl md:text-9xl lg:text-[12rem] tracking-wider text-white opacity-5 blur-sm leading-none">
              SEMPRESEF
            </div>
          </div>
          <div className="relative">
            <div className="font-inter text-2xl md:text-4xl text-gray-300 tracking-[0.5em] mb-8 font-light">
              M E D I A
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Dynamic Text */}
        <div className="mb-12">
          <p 
            key={currentText}
            className="font-inter text-xl md:text-2xl text-gray-400 animate-fade-in duration-1000"
          >
            {heroTexts[currentText]}
          </p>
        </div>

        {/* Modern Anunturi Button */}
        <div className="flex justify-center items-center mb-16">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 border-0 font-bebas text-2xl tracking-wider px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10">ANUNTURI</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </div>

        {/* Audio Visualizer */}
        <div className="flex justify-center mb-8">
          <div className="flex items-end gap-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 30 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-sm font-inter">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;