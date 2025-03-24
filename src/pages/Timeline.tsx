import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, CheckCircle, ArrowRight, Clock, Target, Users, Award, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Timeline Phase component
interface TimelinePhaseProps {
  number: number;
  title: string;
  dates: string;
  description: string;
  items: string[];
  highlightItems?: string[];
  isActive?: boolean;
  delay?: number;
  color?: string;
}

const TimelinePhase: React.FC<TimelinePhaseProps> = ({ 
  number, 
  title, 
  dates, 
  description, 
  items,
  highlightItems = [],
  isActive = false,
  delay = 0,
  color = 'bg-blue-50'
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
        
        <div className={`${color} rounded-lg p-4`}>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-mali-blue flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          {highlightItems.length > 0 && (
            <div className="mt-4 p-3 bg-white/60 rounded-lg border border-mali-blue/20">
              <ul className="space-y-2">
                {highlightItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star size={18} className="text-mali-yellow flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
      title: "Test Initial - OUVERT À TOUS",
      dates: "4 avril – 13 avril",
      description: "Votre première étape vers l'aventure internationale! Un simple test en ligne accessible à tous les niveaux.",
      items: [
        "Test en ligne de 20 questions QCM (30 minutes)",
        "AUCUNE expérience en programmation requise",
        "Accessible sur ordinateur, tablette ou smartphone",
        "Questions de logique et culture générale sur l'IA",
      ],
      highlightItems: [
        "1000 places disponibles - Inscrivez-vous vite!",
        "500 tokens pour chaque catégorie (Internationale/Nationale)",
        "Résultats communiqués par email le 15 avril",
      ],
      isActive: true,
      color: "bg-blue-50"
    },
    {
      number: 2,
      title: "Approfondissement - QUALIFICATION FACILE",
      dates: "18 avril – 27 avril",
      description: "Si vous réussissez la Phase 1, participez à cette seconde évaluation toujours accessible et sans programmation complexe.",
      items: [
        "Test en ligne de 20 questions QCM (45 minutes)",
        "Toujours aucun besoin de savoir programmer",
        "Concepts basiques d'intelligence artificielle",
        "Ressources d'étude fournies après la Phase 1",
      ],
      highlightItems: [
        "80% des participants de Phase 1 seront qualifiés!",
        "Recevez un certificat de participation digital",
        "Tous les participants reçoivent des ressources éducatives gratuites",
      ],
      color: "bg-green-50"
    },
    {
      number: 3,
      title: "Mise en Pratique",
      dates: "1ᵉʳ mai – 18 mai",
      description: "Première application pratique des connaissances acquises, avec support continu de nos mentors.",
      items: [
        "Exercice pratique guidé en ligne",
        "Introduction aux outils et plateformes d'IA",
        "Support technique disponible en continu",
      ],
      color: "bg-yellow-50"
    },
    {
      number: 4,
      title: "Tutorat Virtuel",
      dates: "23 mai – 27 juin",
      description: "Formation et accompagnement personnalisé par des experts en intelligence artificielle.",
      items: [
        "Sessions tutorées virtuelles (5 à 10 heures par semaine)",
        "Formation adaptée à votre niveau de compétence",
        "Attribution d'un certificat de validation",
        "Ouvert aux deux catégories avec parcours différenciés",
      ],
      color: "bg-purple-50"
    },
    {
      number: 5,
      title: "Bootcamp Final",
      dates: "28 juin – 31 juillet",
      description: "Formation intensive en présentiel pour sélectionner l'équipe nationale qui représentera le Mali.",
      items: [
        "Bootcamp intensif en présentiel à RobotsMali",
        "Réservé à la Catégorie Internationale",
        "Sélection d'un maximum de 4 participants pour l'IOAI",
        "Prise en charge complète (transport, hébergement, repas)",
      ],
      color: "bg-indigo-50"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Votre parcours vers Beijing 2025
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              L'Olympiade Nationale d'Intelligence Artificielle (ONIA) se déroule en plusieurs phases, débutant par des tests accessibles à tous et culminant avec la sélection de l'équipe nationale.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal animation="fade-in" delay={300} className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-mali-blue" />
                <h3 className="text-xl font-semibold">Calendrier clé</h3>
              </div>
              <p className="text-muted-foreground mb-4">Phases initiales ouvertes à tous:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-mali-blue font-medium">
                  <div className="w-6 h-6 rounded-full bg-mali-blue/10 flex items-center justify-center text-sm">1</div>
                  <span>4-13 avril: Phase 1 (Test en ligne)</span>
                </li>
                <li className="flex items-center gap-2 text-mali-green font-medium">
                  <div className="w-6 h-6 rounded-full bg-mali-green/10 flex items-center justify-center text-sm">2</div>
                  <span>18-27 avril: Phase 2 (Test d'approfondissement)</span>
                </li>
              </ul>
              <div className="mt-6 bg-white p-3 rounded-lg border border-blue-100">
                <p className="font-medium text-center">IOAI 2025: 2-9 août, Beijing, Chine</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400} className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-mali-green" />
                <h3 className="text-xl font-semibold">Objectifs des premières phases</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Évaluer votre potentiel et votre logique (pas vos connaissances techniques)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Identifier les talents cachés dans tout le Mali</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Vous faire découvrir l'IA sans barrière technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Offrir une formation gratuite même sans qualification</span>
                </li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={500} className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-mali-yellow" />
                <h3 className="text-xl font-semibold">Pour qui?</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg border border-yellow-100">
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-mali-blue" />
                    Catégorie Internationale
                  </h4>
                  <p className="text-sm">Lycéens, élèves des écoles professionnelles et professionnels de moins de 20 ans (en août 2025)</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-yellow-100">
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Award size={16} className="text-mali-green" />
                    Catégorie Nationale
                  </h4>
                  <p className="text-sm">Universitaires et grand public de tous âges, désireux d'apprendre l'IA</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={600} className="text-center mt-10">
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
                  description="Réservée aux jeunes de moins de 20 ans, cette catégorie mène à l'IOAI."
                  details={[
                    "Lycéens et élèves des écoles professionnelles",
                    "Professionnels de moins de 20 ans (en août 2025)",
                    "Objectif: représenter le Mali à l'IOAI 2025 en Chine"
                  ]}
                  color="bg-mali-blue text-white"
                  delay={100}
                />
                
                <CategoryInfo
                  title="Catégorie Nationale"
                  description="Ouverte au grand public, cette catégorie favorise la diffusion des connaissances en IA."
                  details={[
                    "Universitaires de tous âges",
                    "Grand public et professionnels",
                    "Objectif: développer l'écosystème IA au Mali"
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
                    highlightItems={phase.highlightItems}
                    isActive={phase.isActive}
                    delay={100 * index}
                    color={phase.color}
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
              Les premières phases sont conçues pour être accessibles à tous! Inscrivez-vous dès maintenant pour réserver votre place et tenter de représenter le Mali à l'IOAI 2025.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all flex items-center gap-2"
              >
                S'inscrire à la Phase 1
                <ArrowRight size={18} />
              </Link>
              
              <a 
                href="#" 
                className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg border border-mali-blue/10 shadow-sm hover:bg-blue-50 transition-all"
              >
                Télécharger le Planning Complet
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Timeline;

