import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CriteriaItem from './CriteriaItem';
import { Trophy, GraduationCap } from 'lucide-react';

const CriteriaSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-mali-yellow/5 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16 text-mali-dark">Critères d'Éligibilité</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Catégorie Internationale */}
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-mali-blue/20 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-mali-blue flex items-center gap-3">
                <div className="w-10 h-10 bg-mali-blue/10 rounded-full flex items-center justify-center">
                  <Trophy size={20} className="text-mali-blue" />
                </div>
                Catégorie Internationale
              </h3>
              <div className="space-y-5 md:space-y-6">
                <CriteriaItem
                  title="✓ Résider au Mali"
                  description="Les candidats doivent résider au Mali pour être éligibles à la sélection nationale."
                  delay={100}
                />
                
                <CriteriaItem
                  title="✓ Âge"
                  description="MOINS de 20 ans en août 2026 (condition obligatoire)."
                  delay={200}
                />
                
                <CriteriaItem
                  title="✓ Statut"
                  description="Être un lycéen, élève de l'école fondamentale, élève d'école professionnelle ou jeune professionnel."
                  delay={300}
                />
                
                <CriteriaItem
                  title="✓ Intérêt pour l'IA"
                  description="Avoir un intérêt pour l'intelligence artificielle et ses applications."
                  delay={400}
                />
                
                <CriteriaItem
                  title="✓ Disponibilité"
                  description="Pouvoir participer aux 5 phases incluant le stage final à Bamako et potentiellement le voyage à Abu Dhabi."
                  delay={500}
                />
              </div>
            </div>
          </ScrollReveal>
          
          {/* Catégorie Nationale */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-mali-green/20 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-mali-green flex items-center gap-3">
                <div className="w-10 h-10 bg-mali-green/10 rounded-full flex items-center justify-center">
                  <GraduationCap size={20} className="text-mali-green" />
                </div>
                Catégorie Nationale
              </h3>
              <div className="space-y-5 md:space-y-6">
                <CriteriaItem
                  title="✓ Aucune restriction d'âge"
                  description="Cette catégorie est ouverte à tous, quel que soit l'âge."
                  delay={100}
                />
                
                <CriteriaItem
                  title="✓ Intérêt pour l'IA"
                  description="Avoir un intérêt pour l'intelligence artificielle et l'apprentissage."
                  delay={200}
                />
                
                <CriteriaItem
                  title="✓ Disponibilité"
                  description="Pouvoir participer aux phases 1, 2 et 3."
                  delay={300}
                />
                
                <CriteriaItem
                  title="✓ Objectif"
                  description="Volonté d'apprendre et d'obtenir une certification en IA."
                  delay={400}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;