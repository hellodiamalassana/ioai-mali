
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GraduationCap, User } from 'lucide-react';

const ParticipationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title mb-8 text-mali-dark">Participation</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal animation="fade-in" delay={100} className="h-full">
            <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-mali-blue to-mali-blue/90 text-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Catégorie Internationale</h3>
              <p className="mb-4 flex-grow">Destinée aux lycéens, aux élèves et professionnels dont l'âge ne dépasse pas 20 ans en août 2025. Les meilleurs représenteront le Mali à l'IOAI.</p>
              
              <div className="mb-6 p-3 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-medium text-sm mb-1">Pour qui ?</h4>
                <p className="text-sm">Lycéens, élèves et professionnels (moins de 20 ans en août 2025)</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200} className="h-full">
            <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-mali-green to-mali-green/90 text-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                <User size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Catégorie Nationale</h3>
              <p className="mb-4 flex-grow">Ouverte aux universitaires et au grand public. Cette catégorie vise à promouvoir l'apprentissage de l'IA à l'échelle nationale.</p>
              
              <div className="mb-6 p-3 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-medium text-sm mb-1">Pour qui ?</h4>
                <p className="text-sm">Universitaires et tout le monde</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
