import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mesaj trimis!",
        description: "Îți vom răspunde în cel mai scurt timp posibil.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@sempresefmedia.ro",
      link: "mailto:contact@sempresefmedia.ro"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+40 123 456 789",
      link: "tel:+40123456789"
    },
    {
      icon: MapPin,
      label: "Locație",
      value: "București, România",
      link: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "from-pink-500 to-purple-500" },
    { icon: Facebook, label: "Facebook", href: "#", color: "from-blue-600 to-blue-700" },
    { icon: Twitter, label: "Twitter", href: "#", color: "from-sky-400 to-sky-500" },
    { icon: Youtube, label: "YouTube", href: "#", color: "from-red-500 to-red-600" }
  ];

  return (
    <section id="contact" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            CONTACT & SOCIAL
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectează-te cu noi și fii parte din comunitatea SempreSef Media
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <div className="mb-8">
              <h3 className="font-bebas text-3xl tracking-wide text-foreground mb-4">
                TRIMITE-NE UN MESAJ
              </h3>
              <p className="font-inter text-muted-foreground">
                Ai o întrebare, sugestie sau vrei să colaborezi cu noi? Completează formularul de mai jos.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-inter text-sm font-medium text-foreground">
                    Nume *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Numele tău complet"
                    required
                    className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-inter text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@exemplu.com"
                    required
                    className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-foreground">
                  Subiect *
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Despre ce vrei să vorbești?"
                  required
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter text-sm font-medium text-foreground">
                  Mesaj *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Scrie-ne mesajul tău aici..."
                  required
                  rows={5}
                  className="bg-background/50 border-glass-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin"></div>
                    TRIMITE...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    TRIMITE MESAJUL
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bebas text-3xl tracking-wide text-foreground mb-6">
                INFORMAȚII CONTACT
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/5 transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-inter text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-inter text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bebas text-3xl tracking-wide text-foreground mb-6">
                URMĂREȘTE-NE
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl hover:scale-105 transition-all duration-300 group border border-glass-border hover:border-primary/20"
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-br ${social.color} group-hover:shadow-glow transition-all duration-300`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bebas text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-bebas text-3xl tracking-wide text-foreground mb-6">
                ACȚIUNI RAPIDE
              </h3>
              
              <div className="space-y-4">
                <button className="w-full p-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors text-left group">
                  <div className="font-bebas text-lg tracking-wide text-primary mb-1 group-hover:scale-105 transition-transform">
                    REQUEST MELODIE
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Solicită piesa ta preferată
                  </div>
                </button>
                
                <button className="w-full p-4 rounded-2xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-colors text-left group">
                  <div className="font-bebas text-lg tracking-wide text-secondary mb-1 group-hover:scale-105 transition-transform">
                    APLICĂ CA DJ
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    Alătură-te echipei noastre
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;