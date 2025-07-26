import { useState } from 'react';
import { Menu, X, Radio, Instagram, Send } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Acasă', href: '#home' },
    { label: 'Program', href: '#program' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com/sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://tiktok.com/@sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/sempresefmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
            >
              <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-inter text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-radio group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Live Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex items-center gap-2 bg-gradient-radio hover:scale-105 transition-transform duration-300 glow-primary"
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
                className="flex items-center gap-2 bg-gradient-radio hover:scale-105 transition-transform duration-300 glow-primary w-fit"
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