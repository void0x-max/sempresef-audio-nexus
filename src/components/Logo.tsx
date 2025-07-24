import { useState, useEffect } from 'react';

const Logo = ({ className = "" }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Animated Sound Waves */}
      <div className="relative">
        <svg width="40" height="40" viewBox="0 0 40 40" className="relative z-10">
          {/* Radio waves */}
          <circle 
            cx="20" 
            cy="20" 
            r="8" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
            className={`${isAnimating ? 'animate-ping' : ''}`}
          />
          <circle 
            cx="20" 
            cy="20" 
            r="12" 
            fill="none" 
            stroke="hsl(var(--secondary))" 
            strokeWidth="1.5"
            className={`${isAnimating ? 'animate-ping' : ''}`}
            style={{ animationDelay: '0.2s' }}
          />
          <circle 
            cx="20" 
            cy="20" 
            r="16" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1"
            className={`${isAnimating ? 'animate-ping' : ''}`}
            style={{ animationDelay: '0.4s' }}
          />
          
          {/* Central core */}
          <circle 
            cx="20" 
            cy="20" 
            r="4" 
            fill="url(#radioGradient)"
            className="pulse-radio"
          />
          
          {/* Gradient definition */}
          <defs>
            <radialGradient id="radioGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Text Logo */}
      <div className="flex flex-col">
        <h1 className="font-bebas text-2xl md:text-3xl tracking-wider text-foreground">
          SEMPRESEF
        </h1>
        <span className="font-inter text-xs md:text-sm text-muted-foreground tracking-widest -mt-1">
          MEDIA
        </span>
      </div>
    </div>
  );
};

export default Logo;