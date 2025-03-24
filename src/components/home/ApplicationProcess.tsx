
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Mail, AlertCircle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { Card, CardContent } from '../ui/card';
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <section className="w-full py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Processus de Candidature</h2>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mt-4 mb-8">
            Commencez votre aventure vers l'IOAI 2025 en suivant ces étapes simples
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          <div className="space-y-10">
            <ProcessStep
              number={1}
              title="Inscrivez-vous dès aujourd'hui"
              description="Remplissez le formulaire pour votre catégorie. Vous recevrez votre identifiant et un code personnel pour accéder à la Phase 1."
              delay={100}
            />
            
            <ProcessStep
              number={2}
              title="Participez aux tests en ligne"
              description="À partir du 4 avril, utilisez votre code personnel pour accéder aux QCM de la Phase 1. Si vous réussissez, vous passerez à la Phase 2."
              delay={200}
            />
            
            <ProcessStep
              number={3}
              title="Avancez étape par étape"
              description="Après chaque phase, vous recevrez vos résultats et les instructions pour la suite. Seuls les candidats qualifiés continueront."
              delay={300}
            />
            
            <ProcessStep
              number={4}
              title="Sélection finale pour l'IOAI"
              description="Les meilleurs candidats participeront au camp d'entraînement final, où 4 participants seront sélectionnés pour représenter le Mali en Chine."
              delay={400}
            />
            
            <div className="mt-8">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 w-fit"
              >
                S'inscrire maintenant
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          <ScrollReveal animation="slide-left" delay={200}>
            <Card className="overflow-hidden border-mali-blue/20 shadow-md">
              <div className="bg-mali-blue text-white p-6">
                <h3 className="text-xl font-bold mb-3">À savoir avant de vous inscrire</h3>
                <p className="text-white/80">
                  Votre parcours vers l'IOAI 2025 commence ici. Inscrivez-vous pour réserver votre place.
                </p>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Alert className="bg-mali-blue/10 border-mali-blue/20">
                    <AlertCircle className="h-5 w-5 text-mali-blue" />
                    <AlertDescription className="text-mali-blue">
                      Les tests commenceront le 4 avril 2024. Inscrivez-vous dès maintenant pour recevoir votre code personnel.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="space-y-3 mt-6">
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Après votre inscription, vous recevrez un code personnel unique qui sera nécessaire pour accéder aux tests.</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Ce code ne peut être utilisé qu'une seule fois et est strictement personnel.</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>Les places sont limitées à 1000 participants pour la Phase 1.</p>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <p>La Phase 1 est accessible à tous les niveaux et ne nécessite pas de connaissances particulières en IA.</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail size={16} />
                      <span>Des questions ? Contactez-nous à <a href="mailto:info@robotsmali.org" className="text-mali-blue hover:underline">info@robotsmali.org</a></span>
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
