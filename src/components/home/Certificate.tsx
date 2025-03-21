
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-mali-blue/10 relative overflow-hidden">
              {/* Certificate-like design */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mali-green via-mali-yellow to-mali-red"></div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-mali-blue">Certificat d'Accréditation</h3>
                <p className="text-muted-foreground text-sm">Numéro 81 / 4 février 2025</p>
              </div>
              
              <div className="mb-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-mali-blue flex items-center justify-center">
                    <span className="text-sm font-semibold text-mali-blue">IOAI 2025</span>
                  </div>
                </div>
                
                <p className="text-base">
                  RobotsMali est officiellement accrédité pour coordonner la participation du Mali à l'IOAI.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Ce certificat est valide jusqu'à la fin de l'édition 2025.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="https://ioai-official.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-mali-blue text-white rounded-md text-sm font-medium transition-all hover:bg-mali-blue/90"
                >
                  Consultez le statut sur ioai-official.org
                </a>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-4 left-4 w-20 h-20 border-4 border-mali-blue/5 rounded-full"></div>
              <div className="absolute top-12 right-6 w-16 h-16 border-4 border-mali-yellow/10 rounded-full"></div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">L'IOAI 2025 à Beijing</h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <p className="text-muted-foreground mb-8">
                La 2ème édition de l'Olympiade Internationale d'Intelligence Artificielle se tiendra à Beijing, Chine. 
                C'est une opportunité unique pour les jeunes talents maliens de se mesurer aux meilleurs du monde.
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
                    <p className="text-muted-foreground">La compétition s'étend sur une semaine intensive d'épreuves et d'activités culturelles.</p>
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
                    <p className="text-muted-foreground">La capitale chinoise accueillera les délégations de plus de 60 pays participants.</p>
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
                    <p className="text-muted-foreground">Le Mali sera représenté par les 4 meilleurs talents sélectionnés lors de l'ONIA.</p>
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
