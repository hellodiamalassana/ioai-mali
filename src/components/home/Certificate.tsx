
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Certificate = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mali-blue/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDU2QjMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDB2Nmg2di02aC02em0tMjQgMTJ2Nmg2di02aC02em0wLTEydjZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IOAI 2025 à Beijing</h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <p className="text-muted-foreground mb-8">
                La 2ème édition de l'Olympiade Internationale d'Intelligence Artificielle se tiendra 
                à Beijing, Chine. Une opportunité unique pour les jeunes talents maliens 
                de se mesurer aux meilleurs du monde.
              </p>
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal animation="slide-up" delay={300}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-blue-100/50 text-mali-blue">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">2 - 9 août 2025</h3>
                    <p className="text-muted-foreground">Une semaine intensive d'épreuves et d'activités culturelles.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={400}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-blue-100/50 text-mali-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Beijing, Chine</h3>
                    <p className="text-muted-foreground">Plus de 60 pays participants réunis dans un événement mondial.</p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={500}>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-full bg-blue-100/50 text-mali-blue">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Une délégation de 4 participants</h3>
                    <p className="text-muted-foreground">Les meilleurs talents sélectionnés lors de l'Olympiade Nationale d'IA (ONIA).</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ScrollReveal animation="slide-left">
              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200&h=720" 
                  alt="Beijing, Chine" 
                  className="w-full h-auto object-cover rounded-lg"
                  loading="eager"
                  width="1200"
                  height="720"
                />
                <div className="absolute bottom-0 right-0 p-3">
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow">
                    <div className="w-6 h-4 mr-2 overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-full h-full">
                        <rect width="5" height="3" fill="#DE2910"/>
                        <svg x="0" y="0" width="5" height="3" viewBox="0 0 30 20">
                          <path d="M5,1 L6,2 L5,3 L4,2 z" fill="#FFDE00"/>
                          <path d="M8,1 L9,2 L8,3 L7,2 z" fill="#FFDE00"/>
                          <path d="M8,4 L9,5 L8,6 L7,5 z" fill="#FFDE00"/>
                          <path d="M5,4 L6,5 L5,6 L4,5 z" fill="#FFDE00"/>
                          <path d="M2,2 L3,3 L2,4 L1,3 z" fill="#FFDE00"/>
                        </svg>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Beijing, Chine</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
