
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Timeline Phase component
interface TimelinePhaseProps {
  number: number;
  title: string;
  dates: string;
  description: string;
  items: string[];
  isActive?: boolean;
  delay?: number;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ 
  number, 
  title, 
  dates, 
  description, 
  items, 
  isActive = false,
  delay = 0 
}) => (
  <ScrollReveal animation="slide-up" delay={delay}>
    <div className={`relative pl-10 pb-12 border-l-2 ${isActive ? 'border-mali-blue' : 'border-gray-200'}`}>
      <div className={`absolute left-[-10px] top-0 w-5 h-5 rounded-full ${isActive ? 'bg-mali-blue' : 'bg-gray-200'}`}></div>
      
      <div className="ml-6">
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${isActive ? 'bg-blue-100 text-mali-blue' : 'bg-gray-100 text-gray-700'}`}>
          Phase {number}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{dates}</p>
        
        <p className="mb-4">{description}</p>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-mali-blue flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

// Category Info component
interface CategoryInfoProps {
  title: string;
  description: string;
  details: string[];
  color: string;
  delay?: number;
}

const CategoryInfo: React.FC<CategoryInfoProps> = ({ title, description, details, color, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay} className="h-full">
    <div className={`h-full rounded-xl p-6 ${color}`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="mb-4">{description}</p>
      
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </ScrollReveal>
);

const Timeline = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Timeline phases data
  const phases = [
    {
      number: 1,
      title: "Test Initial",
      dates: "4 avril – 13 avril",
      description: "Première évaluation pour tester les connaissances de base et le raisonnement.",
      items: [
        "Test en ligne (20 questions QCM)",
        "1000 tokens répartis entre les deux catégories",
        "500 tokens pour la Catégorie Internationale",
        "500 tokens pour la Catégorie Nationale",
      ],
      isActive: true,
    },
    {
      number: 2,
      title: "Approfondissement",
      dates: "18 avril – 27 avril",
      description: "Seconde évaluation pour tester la compréhension approfondie.",
      items: [
        "Test en ligne (20 questions QCM)",
        "Ouvert aux candidats ayant validé la Phase 1",
        "Évaluation des notions plus avancées",
      ],
    },
    {
      number: 3,
      title: "Mise en Pratique",
      dates: "1ᵉʳ mai – 18 mai",
      description: "Application pratique des connaissances dans un projet concret d'IA.",
      items: [
        "Exercice en ligne",
        "Application des compétences acquises lors des phases précédentes",
      ],
    },
    {
      number: 4,
      title: "Tutorat Virtuel",
      dates: "23 mai – 27 juin",
      description: "Accompagnement personnalisé pour valider les compétences acquises.",
      items: [
        "Sessions tutorées virtuelles (5 à 10 heures par semaine)",
        "Validation du travail effectué lors des phases précédentes",
        "Attribution d'un certificat de validation",
        "Ouvert aux deux catégories",
      ],
    },
    {
      number: 5,
      title: "Bootcamp Final",
      dates: "28 juin – 31 juillet",
      description: "Formation intensive en présentiel pour sélectionner l'équipe nationale.",
      items: [
        "Bootcamp intensif en présentiel à RobotsMali",
        "Réservé à la Catégorie Internationale",
        "Sélection d'un maximum de 4 participants pour l'IOAI",
        "Prise en charge des frais (transport, hébergement, repas)",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Calendrier & Processus de Sélection
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              L'Olympiade Nationale d'Intelligence Artificielle (ONIA) se déroule en plusieurs phases, garantissant une évaluation progressive et un accompagnement complet.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400} className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-mali-blue px-4 py-2 rounded-lg">
              <Calendar size={20} />
              <span className="font-medium">IOAI 2025 : 2 - 9 août à Beijing, Chine</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-6">Catégories de Participation</h2>
              </ScrollReveal>
              
              <div className="space-y-6">
                <CategoryInfo
                  title="Catégorie Internationale"
                  description="Réservée aux lycéens et élèves des écoles fondamentales, cette catégorie mène à l'IOAI."
                  details={[
                    "Lycéens",
                    "Élèves des écoles fondamentales",
                    "Objectif : intégrer l'équipe nationale pour l'IOAI"
                  ]}
                  color="bg-mali-blue text-white"
                  delay={100}
                />
                
                <CategoryInfo
                  title="Catégorie Nationale"
                  description="Ouverte au grand public, cette catégorie favorise la diffusion des connaissances en IA."
                  details={[
                    "Universitaires",
                    "Grand public (20 ans et plus)",
                    "Objectif : développer les compétences en IA au Mali"
                  ]}
                  color="bg-mali-green text-white"
                  delay={200}
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-8">Phases du Concours</h2>
              </ScrollReveal>
              
              <div className="relative">
                {phases.map((phase, index) => (
                  <TimelinePhase
                    key={index}
                    number={phase.number}
                    title={phase.title}
                    dates={phase.dates}
                    description={phase.description}
                    items={phase.items}
                    isActive={phase.isActive}
                    delay={100 * index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">Prêt à commencer l'aventure?</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Inscrivez-vous dès maintenant pour participer à la première édition de l'ONIA et tenter de représenter le Mali à l'IOAI 2025.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all flex items-center gap-2"
              >
                Postuler Maintenant
                <ArrowRight size={18} />
              </Link>
              
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg border border-mali-blue/10 shadow-sm hover:bg-blue-50 transition-all"
              >
                Télécharger le Planning
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
