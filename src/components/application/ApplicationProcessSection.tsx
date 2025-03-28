
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProcessStep from './ProcessStep';
import { ExternalLink, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ApplicationProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-mali-dark">Processus de Candidature</h2>
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
        
        <ScrollReveal animation="fade-in" delay={400} className="mt-12">
          <div className="bg-mali-red/5 p-6 rounded-lg border border-mali-red/20">
            <h3 className="text-xl font-semibold mb-4 text-mali-red">Conditions de test :</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="font-bold text-mali-red">1 -</span>
                <span>Ce test est individuel. Pas la peine de tricher : si vous réussissez la sélection, vos connaissances seront validées par un test en présentiel.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-mali-red">2 -</span>
                <span>Aucune limite de temps, le compte à rebours n'est pas actif.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-mali-red">3 -</span>
                <span>Vous pouvez vous déconnecter et continuer ultérieurement.</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="font-bold text-mali-red">4 -</span>
                <span>Les recherches supplémentaires sont encouragées.</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
        
        <div className="text-center mt-8">
          <a 
            href="https://script.google.com/macros/s/AKfycbze1H_2LweWLypEbV0ZXiDXux-KOsGacAtBIbGbMyJs_jLCZM-nJnTn-fSBHe37gSkO0Q/exec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-mali-green text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-green/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
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
