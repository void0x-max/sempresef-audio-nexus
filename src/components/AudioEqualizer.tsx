import { useEffect, useState } from 'react';

interface AudioEqualizerProps {
  isPlaying?: boolean;
  barCount?: number;
  className?: string;
}

const AudioEqualizer = ({ isPlaying = true, barCount = 5, className = "" }: AudioEqualizerProps) => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    // Initialize bars with random heights
    setBars(Array.from({ length: barCount }, () => Math.random() * 100 + 20));

    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBars(Array.from({ length: barCount }, () => Math.random() * 100 + 20));
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying, barCount]);

  return (
    <div className={`flex items-end justify-center gap-1 ${className}`}>
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-radio rounded-sm transition-all duration-150 ease-out"
          style={{
            height: isPlaying ? `${height}%` : '20%',
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AudioEqualizer;