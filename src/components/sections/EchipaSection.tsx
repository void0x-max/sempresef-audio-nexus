import { useState } from 'react';
import { Mic, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EchipaSection = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const echipa = [
    {
      id: 1,
      name: "Sebastian",
      role: "Morning Show Host",
      emoji: "🎤",
      bio: "Energia dimineții și vocea care te trezește cu zâmbetul pe față",
      show: "Dimineți cu Seba",
      timeSlot: "06:00 - 10:00",
      experience: "5 ani",
      social: {
        instagram: "@seba_radio",
        facebook: "/sebastian.radio",
        twitter: "@seba_morning"
      },
      gradient: "from-primary to-purple-500"
    },
    {
      id: 2,
      name: "DJ Alex",
      role: "Night Show Producer",
      emoji: "🕶️",
      bio: "Master al beat-urilor underground și arhitectul nopților nebune",
      show: "Noaptea Nebună",
      timeSlot: "22:00 - 02:00",
      experience: "8 ani",
      social: {
        instagram: "@dj_alex_nights",
        facebook: "/djalex.official",
        twitter: "@alex_beats"
      },
      gradient: "from-secondary to-blue-500"
    },
    {
      id: 3,
      name: "Radu",
      role: "Hip-Hop Specialist",
      emoji: "🧠",
      bio: "Pasionat de cultura urbană și promotor al hip-hop-ului autentic",
      show: "MindSet Urban",
      timeSlot: "14:00 - 16:00",
      experience: "6 ani",
      social: {
        instagram: "@radu_urban",
        facebook: "/radu.hiphop",
        twitter: "@radu_mindset"
      },
      gradient: "from-yellow-500 to-primary"
    },
    {
      id: 4,
      name: "Marina",
      role: "Electronic Music Curator",
      emoji: "⚡",
      bio: "Ghidul tău prin galaxia electronic music și sound-urile fresh",
      show: "Electronic Vibes",
      timeSlot: "18:00 - 20:00",
      experience: "4 ani",
      social: {
        instagram: "@marina_electronic",
        facebook: "/marina.dj",
        twitter: "@marina_vibes"
      },
      gradient: "from-secondary to-green-500"
    }
  ];

  return (
    <section id="echipa" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            ECHIPA NOASTRĂ
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Vocile care îți colorează zilele și nopțile cu muzică de calitate
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {echipa.map((member) => (
            <Card
              key={member.id}
              className="glass hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <CardContent className="p-6 text-center relative z-10">
                {/* Avatar Placeholder with Emoji */}
                <div className="relative mb-6">
                  <div 
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl shadow-deep group-hover:shadow-glow transition-all duration-500`}
                  >
                    <span className={`transition-all duration-300 ${hoveredMember === member.id ? 'glitch' : ''}`}>
                      {member.emoji}
                    </span>
                  </div>
                  
                  {/* Live indicator if currently on air */}
                  {member.id === 1 && (
                    <div className="absolute -top-2 -right-2 flex items-center gap-1 bg-primary px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full pulse-radio"></div>
                      <span className="font-bebas text-xs text-white tracking-wide">LIVE</span>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-bebas text-2xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm text-secondary font-medium">
                    {member.role}
                  </p>
                  
                  {/* Show Info */}
                  <div className="space-y-1">
                    <p className="font-inter text-sm text-foreground font-medium">
                      {member.show}
                    </p>
                    <p className="font-inter text-xs text-muted-foreground">
                      {member.timeSlot}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4 text-primary" />
                    <span className="font-inter text-xs text-muted-foreground">
                      {member.experience} experiență
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full hover:bg-primary/10 transition-colors group/social">
                    <Instagram className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-primary/10 transition-colors group/social">
                    <Facebook className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-primary/10 transition-colors group/social">
                    <Twitter className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </button>
                </div>

                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎙️</div>
            <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-4">
              VINO ÎN ECHIPA SEMPRESEF
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Căutăm constant talente noi pentru a ne extinde programul și a aduce fresh-ness în broadcasting-ul românesc
            </p>
            <button className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide px-8 py-3 rounded-2xl text-background">
              APLICĂ ACUM
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EchipaSection;