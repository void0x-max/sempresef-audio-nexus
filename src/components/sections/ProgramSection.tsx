import { useState } from 'react';
import { Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProgramSection = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const days = ['LUN', 'MAR', 'MIE', 'JOI', 'VIN', 'SAM', 'DUM'];
  
  const program = {
    0: [ // Monday
      { time: '06:00', duration: 4, show: 'Dimineți cu Seba', host: 'Sebastian', color: 'primary' },
      { time: '10:00', duration: 4, show: 'Music Flow', host: 'Auto DJ', color: 'muted' },
      { time: '14:00', duration: 2, show: 'MindSet Urban', host: 'Radu', color: 'secondary' },
      { time: '16:00', duration: 2, show: 'Afternoon Mix', host: 'Auto DJ', color: 'muted' },
      { time: '18:00', duration: 2, show: 'Electronic Vibes', host: 'Marina', color: 'primary' },
      { time: '20:00', duration: 2, show: 'Evening Chill', host: 'Auto DJ', color: 'muted' },
      { time: '22:00', duration: 4, show: 'Noaptea Nebună', host: 'DJ Alex', color: 'secondary' },
      { time: '02:00', duration: 4, show: 'Night Waves', host: 'Auto DJ', color: 'muted' },
    ],
    1: [ // Tuesday
      { time: '06:00', duration: 4, show: 'Dimineți cu Seba', host: 'Sebastian', color: 'primary' },
      { time: '10:00', duration: 4, show: 'Music Flow', host: 'Auto DJ', color: 'muted' },
      { time: '14:00', duration: 2, show: 'Rock Hour', host: 'Andrei', color: 'secondary' },
      { time: '16:00', duration: 2, show: 'Afternoon Mix', host: 'Auto DJ', color: 'muted' },
      { time: '18:00', duration: 2, show: 'Electronic Vibes', host: 'Marina', color: 'primary' },
      { time: '20:00', duration: 2, show: 'Evening Chill', host: 'Auto DJ', color: 'muted' },
      { time: '22:00', duration: 4, show: 'Noaptea Nebună', host: 'DJ Alex', color: 'secondary' },
      { time: '02:00', duration: 4, show: 'Night Waves', host: 'Auto DJ', color: 'muted' },
    ],
    // Add similar structure for other days
  };

  // Fill missing days with Monday's schedule
  for (let i = 2; i < 7; i++) {
    program[i] = program[0];
  }

  const currentProgram = program[selectedDay] || program[0];
  const currentTime = new Date().getHours();

  const isLive = (showTime: string, duration: number) => {
    const showHour = parseInt(showTime.split(':')[0]);
    return currentTime >= showHour && currentTime < showHour + duration && selectedDay === new Date().getDay() - 1;
  };

  return (
    <section id="program" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-4">
            PROGRAM RADIO
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Programul complet al săptămânii cu toate emisiunile și show-urile tale preferate
          </p>
        </div>

        {/* Day Selector */}
        <div className="glass rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedDay((prev) => (prev - 1 + 7) % 7)}
              className="p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2 md:gap-4 overflow-x-auto">
              {days.map((day, index) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(index)}
                  className={`font-bebas text-sm md:text-lg tracking-wide px-4 py-2 rounded-xl transition-all duration-300 whitespace-nowrap
                    ${selectedDay === index 
                      ? 'bg-gradient-radio text-background glow-primary scale-105' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedDay((prev) => (prev + 1) % 7)}
              className="p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Current Day Display */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-bebas text-xl text-foreground tracking-wide">
                {days[selectedDay]}
              </span>
            </div>
            <p className="font-inter text-sm text-muted-foreground">
              {selectedDay === new Date().getDay() - 1 ? 'Azi' : 'Program'}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {currentProgram.map((slot, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden
                ${isLive(slot.time, slot.duration) ? 'ring-2 ring-primary glow-primary' : ''}
              `}
            >
              {/* Live Indicator */}
              {isLive(slot.time, slot.duration) && (
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-radio"></div>
                  <span className="font-bebas text-xs text-primary tracking-wide">LIVE</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Time */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-full ${
                    slot.color === 'primary' ? 'bg-primary/10 border border-primary/20' :
                    slot.color === 'secondary' ? 'bg-secondary/10 border border-secondary/20' :
                    'bg-muted/10 border border-muted/20'
                  }`}>
                    <Clock className={`w-5 h-5 ${
                      slot.color === 'primary' ? 'text-primary' :
                      slot.color === 'secondary' ? 'text-secondary' :
                      'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <div className="font-bebas text-xl text-foreground tracking-wide">
                      {slot.time}
                    </div>
                    <div className="font-inter text-xs text-muted-foreground">
                      {slot.duration}h duration
                    </div>
                  </div>
                </div>

                {/* Show Info */}
                <div className="flex-1">
                  <h3 className={`font-bebas text-2xl tracking-wide mb-1 transition-colors
                    ${isLive(slot.time, slot.duration) ? 'text-primary' : 'text-foreground'}
                  `}>
                    {slot.show}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    cu <span className={`font-medium ${
                      slot.color === 'primary' ? 'text-primary' :
                      slot.color === 'secondary' ? 'text-secondary' :
                      'text-foreground'
                    }`}>
                      {slot.host}
                    </span>
                  </p>
                </div>

                {/* Action Button */}
                {isLive(slot.time, slot.duration) ? (
                  <Button
                    variant="default"
                    className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas tracking-wide"
                  >
                    ASCULTĂ ACUM
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="border-muted hover:border-primary hover:text-primary transition-all duration-300 font-bebas tracking-wide"
                  >
                    SETEAZĂ REMINDER
                  </Button>
                )}
              </div>

              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none
                ${slot.color === 'primary' ? 'bg-gradient-to-r from-primary to-purple-500' :
                  slot.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-blue-500' :
                  'bg-gradient-to-r from-muted to-foreground'
                }`}>
              </div>
            </div>
          ))}
        </div>

        {/* Download Schedule CTA */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-3xl max-w-lg mx-auto">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-bebas text-2xl tracking-wide text-foreground mb-4">
              DESCARCĂ PROGRAMUL
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Salvează programul săptămânal pe device-ul tău pentru a nu rata emisiunile preferate
            </p>
            <button className="bg-gradient-radio hover:scale-105 transition-all duration-300 glow-primary font-bebas text-lg tracking-wide px-8 py-3 rounded-2xl text-background">
              DOWNLOAD PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;