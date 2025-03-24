
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProcessStep from './ProcessStep';
import { ExternalLink } from 'lucide-react';

const ApplicationProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Processus de Candidature</h2>
        </ScrollReveal>
        
        <div className="mt-12 space-y-12">
          <ProcessStep
            number={1}
            title="Enregistrement en Ligne"
            description="Remplissez le formulaire pour votre catégorie. Vous recevrez votre identifiant et un code personnel pour accéder à la Phase 1."
            delay={100}
          />
          
          <ProcessStep
            number={2}
            title="Réussite des Phases"
            description="Le concours a plusieurs étapes (voir Calendrier). Après chaque étape, vous recevrez vos résultats et les prochaines instructions. Seuls ceux qui obtiennent les points nécessaires passent à l'étape suivante."
            delay={200}
          />
          
          <ProcessStep
            number={3}
            title="Sélection Finale – Camp d'Entraînement"
            description="Les candidats de la Catégorie Internationale qui réussissent la Phase 4 participeront à un camp d'entraînement intensif à RobotsMali. À la fin, maximum 4 participants seront choisis pour représenter le Mali à l'IOAI en Chine (2–9 août 2025), avec tous les frais de voyage payés."
            delay={300}
          />
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://script.google.com/macros/s/AKfycbyCa4vHiBjzOV-PUw5_QQpEHyMitbrTQ_1Ayif3r513J1YEXSM5Fp0hJD04LWvLLl5GNA/exec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Participation
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
