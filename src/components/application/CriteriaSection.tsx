import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CriteriaItem from './CriteriaItem';

const CriteriaSection = () => {
  return (
    <section className="py-16 bg-mali-yellow/10">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-mali-dark">Critères d'Éligibilité</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Catégorie Internationale */}
          <ScrollReveal animation="fade-in" delay={100}>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-mali-blue/20">
              <h3 className="text-2xl font-semibold mb-6 text-mali-blue">Pour la Catégorie Internationale</h3>
              <div className="space-y-6">
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
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-mali-green/20">
              <h3 className="text-2xl font-semibold mb-6 text-mali-green">Pour la Catégorie Nationale</h3>
              <div className="space-y-6">
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