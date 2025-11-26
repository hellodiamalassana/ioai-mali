import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ProcessStep from './ProcessStep';

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
            description="Remplissez le formulaire en sélectionnant VOTRE CATÉGORIE : → Catégorie Internationale (si moins de 20 ans en août 2026) ou → Catégorie Nationale (tous âges). Vous recevrez votre identifiant et un TOKEN personnel (code d'accès unique) pour accéder à la plateforme de compétition dès la Phase 1."
            delay={100}
          />
          
          <ProcessStep
            number={2}
            title="Réussite des Phases"
            description="Le concours a plusieurs étapes (voir Calendrier). → CATÉGORIE INTERNATIONALE : Phases 1, 2, 3, 4 et 5 | → CATÉGORIE NATIONALE : Phases 1, 2 et 3 + Certification. Après chaque étape, vous recevrez vos résultats et les prochaines instructions. Seuls ceux qui obtiennent les points nécessaires passent à l'étape suivante."
            delay={200}
          />
          
          <ProcessStep
            number="3A"
            title="Sélection Finale – Catégorie Internationale"
            description="Les candidats de la Catégorie Internationale qui réussissent la Phase 4 participeront à un camp d'entraînement intensif à RobotsMali (PHASE 5). À la fin, maximum 4 participants seront choisis pour représenter le Mali à l'IOAI à Abu Dhabi (2-8 août 2026), avec tous les frais de voyage payés."
            delay={300}
          />
          
          <ProcessStep
            number="3B"
            title="Certification – Catégorie Nationale"
            description="Les participants de la Catégorie Nationale qui complètent avec succès la Phase 3 recevront une CERTIFICATION ROBOTSMALI (à partir du 8 mars 2026) attestant de leurs compétences en intelligence artificielle. Cette certification est un atout pour votre parcours professionnel et académique."
            delay={400}
          />
        </div>
        
        <ScrollReveal animation="fade-in" delay={500} className="mt-12">
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
      </div>
    </section>
  );
};

export default ApplicationProcessSection;