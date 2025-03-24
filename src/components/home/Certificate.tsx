
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="slide-right">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-mali-blue/10 relative overflow-hidden">
              {/* Official Certificate Image */}
              <img 
                src="/lovable-uploads/69b22ddc-22f8-42af-81ce-5fa857035f30.png" 
                alt="Certificat d'Accréditation IOAI" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IOAI 2025 à Beijing</h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <p className="text-muted-foreground mb-8">
                La 2ème édition de l'Olympiade Internationale d'Intelligence Artificielle se tiendra dans la capitale chinoise. 
                Une opportunité unique pour les jeunes talents maliens de se mesurer aux meilleurs du monde.
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
        </div>
      </div>
    </section>
  );
};

export default Certificate;
