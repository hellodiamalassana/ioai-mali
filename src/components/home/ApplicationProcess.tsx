import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { Card, CardContent } from '../ui/card';

// Process Step component
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay}>
    <div className="flex gap-3 md:gap-4">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg md:text-xl">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-base md:text-lg mb-2">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

const ApplicationProcess = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Processus de Candidature</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8">
          <div className="space-y-6 md:space-y-8">
            <ProcessStep
              number={1}
              title="Inscrivez-vous"
              description="Remplissez le formulaire pour votre catégorie (Internationale ou Nationale) et recevez votre code d'accès personnel (TOKEN)."
              delay={100}
            />
            
            <ProcessStep
              number={2}
              title="Accédez aux tests"
              description="Utilisez votre TOKEN pour participer aux QCM à partir du 14 décembre 2025."
              delay={200}
            />
            
            <ProcessStep
              number={3}
              title="Progressez par phase"
              description="Qualifiez-vous pour chaque phase suivante du concours selon votre catégorie."
              delay={300}
            />
            
            <ProcessStep
              number={4}
              title="Objectif final"
              description="Catégorie Internationale : Représenter le Mali à Abu Dhabi (4 sélectionnés). Catégorie Nationale : Obtenir votre certification RobotsMali."
              delay={400}
            />
            
            <ScrollReveal animation="fade-in" delay={500}>
              <div className="bg-white p-4 md:p-5 rounded-lg border border-mali-blue/20 mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-mali-blue">Conditions de test :</h3>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-mali-blue">1 -</span>
                    <span>Ce test est individuel. Pas la peine de tricher : si vous réussissez la sélection, vos connaissances seront validées par un test en présentiel.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-mali-blue">2 -</span>
                    <span>Aucune limite de temps, le compte à rebours n'est pas actif.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-mali-blue">3 -</span>
                    <span>Vous pouvez vous déconnecter et continuer ultérieurement.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="font-bold text-mali-blue">4 -</span>
                    <span>Les recherches supplémentaires sont encouragées.</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="slide-left" delay={200}>
            <Card className="overflow-hidden border-mali-blue/20 shadow-md">
              <div className="bg-mali-blue text-white p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">Informations importantes</h3>
              </div>
              
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4 text-mali-blue font-medium text-sm md:text-base">
                    <Calendar size={18} />
                    <span>Début des tests: 14 décembre 2025</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-sm md:text-base">Code d'accès personnel (TOKEN) envoyé après inscription</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-sm md:text-base">Deux parcours : Internationale (Abu Dhabi) ou Nationale (Certification)</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-sm md:text-base">La Phase 1 est accessible à tous les niveaux et toutes les catégories</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p className="text-sm md:text-base">Contactez-nous à <a href="mailto:info@robotsmali.org" className="text-mali-blue hover:underline">info@robotsmali.org</a></p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-mali-blue/10">
                    <Link 
                      to="/application" 
                      className="w-full bg-mali-red text-white font-medium py-3 px-4 rounded-lg hover:bg-mali-red/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
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

export default ApplicationProcess;
