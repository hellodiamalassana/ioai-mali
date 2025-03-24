import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GraduationCap, User, ArrowRight, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApplicationForm from '@/components/application/ApplicationForm';
import { Alert, AlertDescription } from "@/components/ui/alert";

// Criteria Item component
interface CriteriaItemProps {
  title: string;
  description: string;
  delay?: number;
}

const CriteriaItem: React.FC<CriteriaItemProps> = ({ title, description, delay = 0 }) => (
  <ScrollReveal animation="fade-in" delay={delay}>
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle size={20} className="text-mali-blue" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

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

const Application = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Rejoignez l'Équipe Nationale
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              Participez à l'Aventure Internationale de l'IA ! Nous invitons les jeunes talents maliens à représenter notre pays à l'IOAI 2025 en Chine.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <Alert className="max-w-2xl mx-auto bg-mali-blue/10 border-mali-blue/20 text-center">
              <AlertCircle className="h-5 w-5 text-mali-blue mx-auto mb-2" />
              <AlertDescription className="text-center font-medium text-mali-blue">
                La première étape du concours commence le 4 Avril 2024. Chaque élève recevra un code personnel qui ne peut être utilisé qu'une seule fois.
              </AlertDescription>
            </Alert>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-8">Formulaire d'Inscription</h2>
          </ScrollReveal>
          
          <ApplicationForm />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal animation="fade-in" delay={100} className="h-full">
              <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Catégorie Internationale</h3>
                <p className="mb-4 flex-grow">Destinée aux lycéens, aux élèves et professionnels dont l'âge ne dépasse pas 20 ans en août 2025. Les meilleurs représenteront le Mali à l'IOAI.</p>
                
                <div className="mb-6 p-3 bg-white/30 backdrop-blur rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Pour qui ?</h4>
                  <p className="text-sm">Lycéens, élèves et professionnels (moins de 20 ans en août 2025)</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200} className="h-full">
              <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-mali-green to-emerald-600 text-white">
                <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                  <User size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Catégorie Nationale</h3>
                <p className="mb-4 flex-grow">Ouverte aux universitaires et au grand public. Cette catégorie vise à promouvoir l'apprentissage de l'IA à l'échelle nationale.</p>
                
                <div className="mb-6 p-3 bg-white/30 backdrop-blur rounded-lg">
                  <h4 className="font-medium text-sm mb-1">Pour qui ?</h4>
                  <p className="text-sm">Universitaires et tout le monde</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Critères d'Éligibilité</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="section-subtitle">
              Pour la Catégorie Internationale (celle qui mène à l'IOAI)
            </p>
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-blue-100">
            <div className="space-y-6">
              <CriteriaItem
                title="Résider au Mali"
                description="Les candidats doivent résider au Mali pour être éligibles à la sélection nationale."
                delay={100}
              />
              
              <CriteriaItem
                title="Statut d'étudiant ou professionnel"
                description="Être un lycéen, élève de l'école fondamentale ou professionnel (moins de 20 ans en août 2025)."
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Processus de Candidature</h2>
          </ScrollReveal>
          
          <div className="mt-12 space-y-12">
            <ProcessStep
              number={1}
              title="Enregistrement en Ligne"
              description="Remplissez le formulaire pour votre catégorie. Vous recevrez par email un identifiant et un code personnel pour accéder à la Phase 1."
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
              title="Formation et Aide"
              description="Vous aurez accès à des cours en ligne, des tutoriels, des vidéos et des séances d'aide pour bien vous préparer aux tests."
              delay={300}
            />
            
            <ProcessStep
              number={4}
              title="Sélection Finale – Camp d'Entraînement"
              description="Les candidats de la Catégorie Internationale qui réussissent la Phase 4 participeront à un camp d'entraînement intensif à RobotsMali. À la fin, maximum 4 participants seront choisis pour représenter le Mali à l'IOAI en Chine (2–9 août 2025), avec tous les frais de voyage payés."
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-mali-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Des questions?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Si vous avez besoin d'aide pour remplir le formulaire ou si vous avez des questions concernant le processus de sélection, n'hésitez pas à nous contacter.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/timeline" 
                className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
              >
                Voir le calendrier
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={600} className="mt-8">
            <div className="inline-flex items-center gap-2 text-white/80 text-sm">
              <Mail size={16} />
              Contactez-nous à <a href="mailto:contact@robotsmali.org" className="underline hover:text-white">contact@robotsmali.org</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Application;
