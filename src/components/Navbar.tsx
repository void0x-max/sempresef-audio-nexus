import { useState } from 'react';
import { Menu, X, Radio, Instagram, Send } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Social Media Icons - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <a 
              href="https://instagram.com/sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://tiktok.com/@sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-gradient-to-r from-gray-800 to-black hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Send className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Live Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border-0"
            >
              <Radio className="w-4 h-4" />
              <span className="font-bebas tracking-wide">LIVE</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-glass-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-inter text-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border-0 w-fit"
              >
                <Radio className="w-4 h-4" />
                <span className="font-bebas tracking-wide">LIVE</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;