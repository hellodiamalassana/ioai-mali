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
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16">Processus de Candidature</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 md:space-y-10">
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
              <Card className="overflow-hidden border-mali-blue/20 shadow-md">
                <div className="bg-gradient-to-r from-mali-blue/10 to-mali-blue/5 p-5 md:p-6 border-b border-mali-blue/20">
                  <h3 className="text-base md:text-lg font-bold text-mali-blue">📋 Conditions de test</h3>
                </div>
                <CardContent className="p-5 md:p-6">
                  <ul className="space-y-4 text-sm md:text-base">
                    <li className="flex gap-3 items-start group">
                      <div className="w-7 h-7 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                        1
                      </div>
                      <span className="text-muted-foreground leading-relaxed">Ce test est individuel. Pas la peine de tricher : si vous réussissez la sélection, vos connaissances seront validées par un test en présentiel.</span>
                    </li>
                    <li className="flex gap-3 items-start group">
                      <div className="w-7 h-7 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                        2
                      </div>
                      <span className="text-muted-foreground leading-relaxed">Aucune limite de temps, le compte à rebours n'est pas actif.</span>
                    </li>
                    <li className="flex gap-3 items-start group">
                      <div className="w-7 h-7 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                        3
                      </div>
                      <span className="text-muted-foreground leading-relaxed">Vous pouvez vous déconnecter et continuer ultérieurement.</span>
                    </li>
                    <li className="flex gap-3 items-start group">
                      <div className="w-7 h-7 bg-mali-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                        4
                      </div>
                      <span className="text-muted-foreground leading-relaxed">Les recherches supplémentaires sont encouragées.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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

export default ApplicationProcess;
