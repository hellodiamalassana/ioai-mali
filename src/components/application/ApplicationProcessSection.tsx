import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';

// Process Step component
interface ProcessStepProps {
  number: number | string;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay}>
    <div className="flex gap-4 md:gap-5">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg md:text-xl shadow-md">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-lg md:text-xl mb-3 text-mali-dark">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

const ApplicationProcessSection = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16">Processus de Candidature</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 md:space-y-10">
            <ProcessStep
              number={1}
              title="Enregistrement en Ligne"
              description="Remplissez le formulaire en sélectionnant VOTRE CATÉGORIE : → Catégorie Internationale (si moins de 20 ans en août 2026) ou → Catégorie Nationale (tous âges). Vous recevrez votre identifiant et un TOKEN personnel (code d'accès unique) pour accéder à la plateforme de compétition dès la Phase 1."
              delay={100}
            />
            
            <ProcessStep
              number={2}
              title="Réussite des Phases"
              description="Le concours a plusieurs étapes (voir Calendrier). → CATÉGORIE INTERNATIONALE : Phases 1, 2, 3, 4 et 5 | → CATÉGORIE NATIONALE : Phases 1, 2 et 3 + Certification. Après chaque étape, vous recevrez vos résultats et les prochaines instructions."
              delay={200}
            />
            
            <ProcessStep
              number="3A"
              title="Sélection Finale – Catégorie Internationale"
              description="Les candidats de la Catégorie Internationale qui réussissent la Phase 4 participeront à un camp d'entraînement intensif à RobotsMali (PHASE 5). À la fin, maximum 4 participants seront choisis pour représenter le Mali à Abu Dhabi (2-8 août 2026)."
              delay={300}
            />
            
            <ProcessStep
              number="3B"
              title="Certification – Catégorie Nationale"
              description="Les participants de la Catégorie Nationale qui complètent avec succès la Phase 3 recevront une CERTIFICATION ROBOTSMALI (à partir du 8 mars 2026) attestant de leurs compétences en intelligence artificielle."
              delay={400}
            />
            
            <ScrollReveal animation="fade-in" delay={500}>
              <div className="bg-white p-5 md:p-6 rounded-lg border border-mali-blue/20 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold mb-4 text-mali-blue">Conditions de test :</h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-mali-blue min-w-[24px]">1 -</span>
                    <span>Ce test est individuel. Pas la peine de tricher : si vous réussissez la sélection, vos connaissances seront validées par un test en présentiel.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-mali-blue min-w-[24px]">2 -</span>
                    <span>Aucune limite de temps, le compte à rebours n'est pas actif.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-mali-blue min-w-[24px]">3 -</span>
                    <span>Vous pouvez vous déconnecter et continuer ultérieurement.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="font-bold text-mali-blue min-w-[24px]">4 -</span>
                    <span>Les recherches supplémentaires sont encouragées.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="slide-left" delay={200}>
            <Card className="overflow-hidden border-mali-blue/20 shadow-lg sticky top-24">
              <div className="bg-gradient-to-r from-mali-blue to-mali-blue/90 text-white p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold">Informations importantes</h3>
              </div>
              
              <CardContent className="p-5 md:p-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-mali-blue/10">
                    <div className="p-2 bg-mali-blue/10 rounded-lg">
                      <Calendar size={20} className="text-mali-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Début des tests</p>
                      <p className="font-semibold text-mali-blue">14 décembre 2025</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base">Code d'accès personnel (TOKEN) envoyé après inscription</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base">Deux parcours : Internationale (Abu Dhabi) ou Nationale (Certification)</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base">La Phase 1 est accessible à tous les niveaux et toutes les catégories</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Check size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm md:text-base">Contactez-nous à <a href="mailto:info@robotsmali.org" className="text-mali-blue hover:underline font-medium">info@robotsmali.org</a></p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-mali-blue/10">
                    <Link 
                      to="/application" 
                      className="w-full bg-mali-red text-white font-medium py-3.5 px-4 rounded-lg hover:bg-mali-red/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                      Je m'inscris maintenant
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
