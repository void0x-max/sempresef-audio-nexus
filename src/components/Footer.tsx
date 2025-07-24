import { Heart, Radio } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Program', href: '#program' },
      { label: 'Echipa', href: '#echipa' },
      { label: 'Media', href: '#media' },
      { label: 'Contact', href: '#contact' }
    ],
    'Emisiuni': [
      { label: 'Dimineți cu Seba', href: '#' },
      { label: 'Noaptea Nebună', href: '#' },
      { label: 'MindSet Urban', href: '#' },
      { label: 'Electronic Vibes', href: '#' }
    ],
    'Legal': [
      { label: 'Termeni și Condiții', href: '#' },
      { label: 'Politica de Confidențialitate', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer className="bg-background border-t border-glass-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Logo className="mb-6" />
              <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                Radio online care aduce energia urbană și muzica fresh direct în casele voastre. 
                24/7 non-stop beats și vibes.
              </p>
              
              {/* Live Status */}
              <div className="flex items-center gap-3 p-4 glass rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-radio"></div>
                  <Radio className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-bebas text-sm text-primary tracking-wide">
                    LIVE ACUM
                  </div>
                  <div className="font-inter text-xs text-muted-foreground">
                    Dimineți cu Seba
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="font-bebas text-lg tracking-wide text-foreground mb-4">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors duration-300 block relative group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} SempreSef Media. Făcut cu</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>în România.</span>
            </div>

            {/* Technical Info */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Server Status: Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Stream: 320kbps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radio"></div>
      </div>
    </footer>
  );
};

export default Footer;