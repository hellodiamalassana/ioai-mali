
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to April 4, 2024 at midnight
    const targetDate = new Date('2024-04-04T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        // Tests have started
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Set up interval to update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/40 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/30 to-transparent rounded-tr-full"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mali-blue/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-mali-green/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-mali-yellow/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal animation="slide-right">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block py-1 px-3 bg-blue-100 text-mali-blue rounded-full text-sm font-medium">
                  IOAI 2025
                </span>
                <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  <span>Début: 4 avril</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Olympiade Internationale d'Intelligence Artificielle
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Rejoignez l'équipe malienne pour l'IOAI 2025 à Beijing. Inscrivez-vous dès maintenant pour obtenir votre code d'accès personnel.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <Link to="/application" className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                  Participer à l'aventure
                  <ArrowRight size={18} />
                </Link>
                <Link to="/timeline" className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg border border-mali-blue/20 transition-all duration-300 hover:bg-mali-blue/5 shadow-sm hover:shadow">
                  Voir le calendrier
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="slide-left" delay={300} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50"></div>
              
              <div className="p-6 relative z-10">
                <div className="relative mb-6 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200&h=720" 
                    alt="Intelligence Artificielle au Mali" 
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    width="1200"
                    height="720"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Countdown Timer replacing the accreditation image */}
                <div className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-100">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock size={20} className="text-mali-blue" />
                      <h3 className="text-xl font-semibold text-mali-blue">Début des tests</h3>
                    </div>
                    <p className="text-muted-foreground">4 avril 2024</p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-3xl font-bold text-mali-blue">{timeLeft.days}</div>
                      <div className="text-xs text-muted-foreground">Jours</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-3xl font-bold text-mali-blue">{timeLeft.hours}</div>
                      <div className="text-xs text-muted-foreground">Heures</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-3xl font-bold text-mali-blue">{timeLeft.minutes}</div>
                      <div className="text-xs text-muted-foreground">Minutes</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-3xl font-bold text-mali-blue">{timeLeft.seconds}</div>
                      <div className="text-xs text-muted-foreground">Secondes</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Link 
                      to="/application" 
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-mali-blue/10 text-mali-blue rounded-lg hover:bg-mali-blue/20 transition-colors"
                    >
                      Rejoins l'aventure maintenant
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <a 
                    href="https://ioai-official.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-mali-blue hover:underline text-sm font-medium"
                  >
                    Site officiel de l'IOAI
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mali-yellow/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mali-green/10 rounded-full"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
