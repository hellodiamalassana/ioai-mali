
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
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

const ApplicationProcess = () => {
  return (
    <section className="w-full py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Comment participer</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          <div className="space-y-8">
            <ProcessStep
              number={1}
              title="Inscrivez-vous"
              description="Remplissez le formulaire et recevez votre code d'accès personnel."
              delay={100}
            />
            
            <ProcessStep
              number={2}
              title="Accédez aux tests"
              description="Utilisez votre code pour participer aux QCM à partir du 4 avril."
              delay={200}
            />
            
            <ProcessStep
              number={3}
              title="Progressez par phase"
              description="Qualifiez-vous pour chaque phase suivante du concours."
              delay={300}
            />
            
            <ProcessStep
              number={4}
              title="Sélection finale"
              description="Les 4 meilleurs représenteront le Mali à l'IOAI en Chine."
              delay={400}
            />
            
            <ScrollReveal animation="fade-in" delay={500}>
              <div className="bg-white p-4 rounded-lg border border-mali-blue/20 mt-6">
                <h3 className="text-lg font-semibold mb-3 text-mali-blue">Conditions de test :</h3>
                <ul className="space-y-2 text-muted-foreground">
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
              <div className="bg-mali-blue text-white p-6">
                <h3 className="text-xl font-bold mb-2">Informations importantes</h3>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4 text-mali-blue font-medium">
                    <Calendar size={18} />
                    <span>Début des tests: 4 avril 2025</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Code d'accès personnel envoyé après inscription</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Places limitées à 1000 participants</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>La Phase 1 est accessible à tous les niveaux</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Contactez-nous à <a href="mailto:info@robotsmali.org" className="text-mali-blue hover:underline">info@robotsmali.org</a></p>
                    </div>
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
