import { useState } from 'react';
import { Play, ExternalLink, Camera, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import studio1 from '@/assets/studio-1.jpg';
import studio2 from '@/assets/studio-2.jpg';
import studio3 from '@/assets/studio-3.jpg';

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const mediaItems = {
    photos: [
      {
        id: 1,
        src: studio1,
        title: "Studio principal",
        description: "Echipamente de ultimă generație pentru calitate audio premium",
        type: "photo"
      },
      {
        id: 2,
        src: studio2,
        title: "Live recording",
        description: "În timpul înregistrării emisiunii \"Dimineți cu Seba\"",
        type: "photo"
      },
      {
        id: 3,
        src: studio3,
        title: "DJ Booth",
        description: "Setup-ul pentru show-urile de electronic music",
        type: "photo"
      }
    ],
    videos: [
      {
        id: 4,
        src: studio1,
        title: "Behind the Scenes",
        description: "Pregătirile pentru prima emisiune a zilei",
        type: "video",
        duration: "02:15"
      },
      {
        id: 5,
        src: studio2,
        title: "Studio Tour",
        description: "O plimbare prin facilități cu Sebastian",
        type: "video", 
        duration: "05:42"
      },
      {
        id: 6,
        src: studio3,
        title: "Live Mix Session",
        description: "DJ Alex în acțiune pentru Noaptea Nebună",
        type: "video",
        duration: "12:30"
      }
    ]
  };

  const currentItems = mediaItems[activeTab as keyof typeof mediaItems];

  return (
    <section id="media" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            MEDIA & BACKSTAGE
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Aruncă o privire în culisele SempreSef Media și vezi cum se face magia
          </p>
        </div>

        {/* Media Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bebas tracking-wide transition-all duration-300
                  ${activeTab === 'photos' 
                    ? 'bg-gradient-radio text-background glow-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Camera className="w-5 h-5" />
                FOTO
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bebas tracking-wide transition-all duration-300
                  ${activeTab === 'videos' 
                    ? 'bg-gradient-radio text-background glow-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Video className="w-5 h-5" />
                VIDEO
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentItems.map((item, index) => (
            <Card
              key={item.id}
              className="glass hover:scale-105 transition-all duration-500 group cursor-pointer overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-0 relative">
                {/* Image/Video Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Duration Badge for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-inter text-xs text-foreground font-medium">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  {/* View Button */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bebas text-xl tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Ore Live", value: "24/7", icon: "📡" },
            { label: "Emisiuni", value: "12+", icon: "🎙️" },
            { label: "Ascultători", value: "50K+", icon: "👥" },
            { label: "Experiență", value: "5 ani", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                {stat.icon}
              </div>
              <div className="font-bebas text-3xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media CTA */}
        <div className="text-center">
          <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-4">
              URMĂREȘTE-NE PE SOCIAL MEDIA
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Pentru mai multe backstage moments, live stories și content exclusiv
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide px-6 py-3 rounded-2xl text-background">
                INSTAGRAM
              </button>
              <button className="border border-secondary text-secondary hover:bg-secondary hover:text-background transition-all duration-300 font-bebas text-lg tracking-wide px-6 py-3 rounded-2xl">
                FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;