import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import AudioEqualizer from '../AudioEqualizer';

const LivePlayerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const currentShow = {
    title: "Dimineți cu Seba",
    host: "Sebastian",
    currentTrack: "The Weeknd - Blinding Lights",
    listeners: 2847
  };

  return (
    <section id="player" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            PLAYER LIVE
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Ascultă SempreSef Media live și simte energia muzicii
          </p>
        </div>

        {/* Main Player */}
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-radio opacity-5 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Now Playing Info */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full pulse-radio"></div>
                <span className="font-bebas text-sm text-primary tracking-wide">LIVE ACUM</span>
              </div>
              
              <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-foreground mb-2">
                {currentShow.title}
              </h3>
              <p className="font-inter text-muted-foreground mb-1">
                cu <span className="text-secondary">{currentShow.host}</span>
              </p>
              <p className="font-inter text-sm text-foreground">
                🎵 {currentShow.currentTrack}
              </p>
            </div>

            {/* Equalizer */}
            <div className="flex justify-center mb-8">
              <AudioEqualizer 
                isPlaying={isPlaying} 
                barCount={15} 
                className="h-20 w-80"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-8">
              {/* Play/Pause Button */}
              <Button
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-gradient-radio hover:scale-110 transition-all duration-300 glow-primary"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>

              {/* Like Button */}
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setIsLiked(!isLiked)}
                className="w-12 h-12 rounded-full hover:bg-primary/10"
              >
                <Heart 
                  className={`w-6 h-6 transition-colors ${
                    isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'
                  }`} 
                />
              </Button>

              {/* Share Button */}
              <Button
                variant="ghost"
                size="lg"
                className="w-12 h-12 rounded-full hover:bg-secondary/10"
              >
                <Share2 className="w-6 h-6 text-muted-foreground hover:text-secondary transition-colors" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="p-2"
              >
                {isMuted || volume[0] === 0 ? (
                  <VolumeX className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                )}
              </Button>
              
              <Slider
                value={isMuted ? [0] : volume}
                onValueChange={(value) => {
                  setVolume(value);
                  setIsMuted(value[0] === 0);
                }}
                max={100}
                step={1}
                className="flex-1"
              />
              
              <span className="text-sm text-muted-foreground w-10 text-right">
                {isMuted ? 0 : volume[0]}%
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-center">
              <div>
                <div className="font-bebas text-2xl text-primary">
                  {currentShow.listeners.toLocaleString()}
                </div>
                <div className="font-inter text-xs text-muted-foreground">
                  ASCULTĂTORI
                </div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <div className="font-bebas text-2xl text-secondary">
                  24/7
                </div>
                <div className="font-inter text-xs text-muted-foreground">
                  NON-STOP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Request", icon: "🎵" },
            { label: "Podcast", icon: "🎧" },
            { label: "Schedule", icon: "📅" },
            { label: "Archive", icon: "📼" }
          ].map((action, index) => (
            <button
              key={index}
              className="glass p-4 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                {action.icon}
              </div>
              <div className="font-bebas text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                {action.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivePlayerSection;