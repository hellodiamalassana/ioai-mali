
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
        
        <ScrollReveal animation="fade-in" delay={200}>
          <p className="section-subtitle text-mali-dark/80">
            Pour la Catégorie Internationale (celle qui mène à l'IOAI)
          </p>
        </ScrollReveal>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-mali-yellow/20">
          <div className="space-y-6">
            <CriteriaItem
              title="Résider au Mali"
              description="Les candidats doivent résider au Mali pour être éligibles à la sélection nationale."
              delay={100}
            />
            
            <CriteriaItem
              title="Statut"
              description="Être un lycéen, élève de l'école fondamentale (moins de 20 ans en août 2025)."
              delay={200}
            />
            
            <CriteriaItem
              title="Intérêt pour l'IA"
              description="Avoir un intérêt pour l'intelligence artificielle et ses applications."
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriteriaSection;
