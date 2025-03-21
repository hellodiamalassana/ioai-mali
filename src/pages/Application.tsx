
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GraduationCap, User, ArrowRight, CheckCircle, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// Category Card component
interface CategoryCardProps {
  title: string;
  description: string;
  audience: string;
  color: string;
  icon: React.ReactNode;
  formLink?: string;
  delay?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  audience, 
  color, 
  icon, 
  formLink = "#", 
  delay = 0 
}) => (
  <ScrollReveal animation="slide-up" delay={delay} className="h-full">
    <div className={`h-full rounded-xl p-6 border shadow-sm flex flex-col ${color}`}>
      <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-4 flex-grow">{description}</p>
      
      <div className="mb-6 p-3 bg-white/30 backdrop-blur rounded-lg">
        <h4 className="font-medium text-sm mb-1">Pour qui ?</h4>
        <p className="text-sm">{audience}</p>
      </div>
      
      <a 
        href={formLink} 
        className="px-4 py-2 bg-white/80 backdrop-blur text-center rounded-lg font-medium hover:bg-white transition-colors shadow-sm"
      >
        Formulaire d'Inscription
      </a>
    </div>
  </ScrollReveal>
);

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
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Catégories de Participation</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="section-subtitle">
              Les candidatures se font via deux catégories distinctes, adaptées à différents profils de participants.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <CategoryCard
              title="Catégorie Internationale"
              description="Destinée aux lycéens, aux élèves des écoles professionnelles et aux étudiants du secondaire. Les meilleurs représenteront le Mali à l'IOAI."
              audience="Moins de 20 ans"
              color="bg-gradient-to-br from-blue-600 to-blue-700 text-white"
              icon={<GraduationCap size={24} className="text-white" />}
              formLink="#"
              delay={100}
            />
            
            <CategoryCard
              title="Catégorie Nationale"
              description="Ouverte aux universitaires et au grand public. Cette catégorie vise à promouvoir l'apprentissage de l'IA à l'échelle nationale."
              audience="20 ans et plus"
              color="bg-gradient-to-br from-mali-green to-emerald-600 text-white"
              icon={<User size={24} className="text-white" />}
              formLink="#"
              delay={200}
            />
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
                title="Statut d'étudiant"
                description="Être un lycéen, élève d'école professionnelle ou étudiant du secondaire (moins de 20 ans)."
                delay={200}
              />
              
              <CriteriaItem
                title="Connaissances de base"
                description="Avoir des connaissances de base en programmation et en intelligence artificielle."
                delay={300}
              />
              
              <CriteriaItem
                title="Réalisations (bonus)"
                description="Des distinctions ou réalisations dans des concours connexes sont un plus pour votre candidature."
                delay={400}
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
              title="Inscription en Ligne"
              description="Remplissez le formulaire correspondant à votre catégorie. Un identifiant et des tokens pour la Phase 1 vous seront envoyés par email après validation."
              delay={100}
            />
            
            <ProcessStep
              number={2}
              title="Validation des Phases"
              description="Le concours se déroule en plusieurs phases (voir Calendrier). À chaque phase, les résultats et instructions vous seront communiqués. Seuls les candidats atteignant le seuil requis passeront à l'étape suivante."
              delay={200}
            />
            
            <ProcessStep
              number={3}
              title="Accompagnement et Ressources"
              description="Accédez à nos cours en ligne, tutoriels, vidéos et séances de mentorat pour vous préparer aux épreuves."
              delay={300}
            />
            
            <ProcessStep
              number={4}
              title="Sélection Finale – Bootcamp"
              description="Les candidats de la Catégorie Internationale ayant validé la Phase 4 participeront à un Bootcamp intensif en présentiel à RobotsMali. À l'issue de cette phase, un maximum de 4 participants sera sélectionné pour représenter le Mali à l'IOAI en Chine (2–9 août 2025), avec prise en charge complète du voyage."
              delay={400}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-mali-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à relever le défi?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Inscrivez-vous dès maintenant pour participer à l'Olympiade Nationale d'Intelligence Artificielle et tentez votre chance de représenter le Mali sur la scène internationale.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <FileText size={18} />
                Formulaire d'Inscription
              </a>
              
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
              Des questions? Contactez-nous à <a href="mailto:contact@robotsmali.org" className="underline hover:text-white">contact@robotsmali.org</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Application;
