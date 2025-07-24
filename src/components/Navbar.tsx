import { useState } from 'react';
import { Menu, X, Radio } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Acasă', href: '#home' },
    { label: 'Program', href: '#program' },
    { label: 'Echipa', href: '#echipa' },
    { label: 'Media', href: '#media' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

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