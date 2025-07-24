import { Clock, Mic, Music, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EmisiuniSection = () => {
  const emisiuni = [
    {
      id: 1,
      title: "Dimineți cu Seba",
      emoji: "🎤",
      host: "Sebastian",
      time: "06:00 - 10:00",
      description: "Start perfect pentru ziua ta cu muzică fresh și energie pozitivă",
      status: "live",
      color: "primary"
    },
    {
      id: 2,
      title: "Noaptea Nebună",
      emoji: "🕶️",
      host: "DJ Alex",
      time: "22:00 - 02:00",
      description: "Beats underground și vibes nocturne pentru nopțile tale",
      status: "upcoming",
      color: "secondary"
    },
    {
      id: 3,
      title: "MindSet Urban",
      emoji: "🧠",
      host: "Radu",
      time: "14:00 - 16:00",
      description: "Hip-hop autentic și cultura urbană românească",
      status: "upcoming",
      color: "primary"
    },
    {
      id: 4,
      title: "Electronic Vibes",
      emoji: "⚡",
      host: "DJ Marina",
      time: "18:00 - 20:00",
      description: "Electronic music journey prin cele mai fresh sound-uri",
      status: "upcoming",
      color: "secondary"
    }
  ];

  return (
    <section id="emisiuni" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            EMISIUNI & SHOW-URI
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperă programul nostru divers de emisiuni care acoperă toate genurile muzicale
          </p>
        </div>

        {/* Emisiuni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {emisiuni.map((emisiune, index) => (
            <Card
              key={emisiune.id}
              className={`glass hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden
                ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'}
              `}
            >
              <CardContent className="p-8 relative">
                {/* Status Badge */}
                {emisiune.status === 'live' && (
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full pulse-radio"></div>
                    <span className="font-bebas text-xs text-primary tracking-wide">LIVE</span>
                  </div>
                )}

                {/* Emoji & Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                    {emisiune.emoji}
                  </div>
                  <div className={`p-3 rounded-full bg-${emisiune.color}/10 border border-${emisiune.color}/20`}>
                    <Mic className={`w-6 h-6 text-${emisiune.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-bebas text-2xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {emisiune.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{emisiune.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Headphones className="w-4 h-4" />
                      <span>{emisiune.host}</span>
                    </div>
                  </div>

                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {emisiune.description}
                  </p>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-radio opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass p-8 rounded-3xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-radio/10 border border-primary/20">
              <Music className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-4">
            VREI SĂ AI PROPRIA EMISIUNE?
          </h3>
          <p className="font-inter text-muted-foreground mb-6 max-w-md mx-auto">
            Trimite-ne demo-ul tău și poate vei face parte din echipa SempreSef Media
          </p>
          <button className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide px-8 py-3 rounded-2xl text-background">
            APLICĂ ACUM
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmisiuniSection;