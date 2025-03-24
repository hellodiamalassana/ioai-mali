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
      title: "Test Initial - Facile et Pour Tous",
      dates: "4 avril – 13 avril",
      description: "Ton premier pas vers l'aventure! Un test simple que tout le monde peut réussir.",
      items: [
        "Test en ligne avec 20 questions à choix multiples (30 minutes)",
        "Pas besoin de savoir programmer",
        "Tu peux le faire sur n'importe quel appareil (téléphone, ordinateur)",
        "Questions de logique et sur les bases de l'IA",
      ],
      highlightItems: [
        "1000 places seulement - Ne tarde pas à t'inscrire!",
        "500 codes d'accès pour chaque catégorie",
        "Tu recevras tes résultats par email le 15 avril",
      ],
      isActive: true,
      color: "bg-blue-50"
    },
    {
      number: 2,
      title: "Second Test - Toujours Accessible",
      dates: "18 avril – 27 avril",
      description: "Si tu réussis la Phase 1, tu passeras à cette deuxième étape, toujours sans programmation difficile.",
      items: [
        "Test en ligne de 20 questions à choix multiples (45 minutes)",
        "Toujours pas besoin de savoir programmer",
        "Introduction aux idées de base de l'intelligence artificielle",
        "Tu recevras des ressources pour t'aider après la Phase 1",
      ],
      highlightItems: [
        "80% des participants de la Phase 1 pourront continuer!",
        "Tu recevras un certificat numérique que tu pourras partager",
        "Tous les participants reçoivent des ressources gratuites pour apprendre",
      ],
      color: "bg-green-50"
    },
    {
      number: 3,
      title: "Premiers Exercices Pratiques",
      dates: "1ᵉʳ mai – 18 mai",
      description: "Tu commenceras à mettre en pratique ce que tu as appris, avec l'aide de nos mentors.",
      items: [
        "Exercices guidés en ligne - pas à pas",
        "Découverte des outils d'IA faciles à utiliser",
        "Des mentors disponibles pour répondre à tes questions",
      ],
      color: "bg-yellow-50"
    },
    {
      number: 4,
      title: "Cours Personnalisés en Ligne",
      dates: "23 mai – 27 juin",
      description: "Tu suivras des cours adaptés à ton niveau avec des experts en IA.",
      items: [
        "Cours en ligne (5 à 10 heures par semaine)",
        "Formation adaptée à ton niveau, même débutant",
        "Tu obtiendras un certificat officiel",
        "Ouvert à tous, avec des parcours différents selon ta catégorie",
      ],
      color: "bg-purple-50"
    },
    {
      number: 5,
      title: "Stage Intensif Final",
      dates: "28 juin – 31 juillet",
      description: "Formation sur place pour sélectionner l'équipe qui représentera le Mali à l'olympiade internationale.",
      items: [
        "Stage intensif à RobotsMali (à Bamako)",
        "Réservé aux jeunes de la Catégorie Internationale",
        "Sélection de maximum 4 participants pour le voyage en Chine",
        "Tout est pris en charge (transport, logement, repas)",
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
              Ton chemin vers Beijing 2025
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              L'Olympiade d'Intelligence Artificielle se déroule en plusieurs étapes simples, commençant par des tests faciles et se terminant par la sélection de l'équipe qui ira en Chine.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal animation="fade-in" delay={300} className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-mali-blue" />
                <h3 className="text-xl font-semibold">Dates importantes</h3>
              </div>
              <p className="text-muted-foreground mb-4">Premières étapes ouvertes à tous:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-mali-blue font-medium">
                  <div className="w-6 h-6 rounded-full bg-mali-blue/10 flex items-center justify-center text-sm">1</div>
                  <span>4-13 avril: Phase 1 (Test facile en ligne)</span>
                </li>
                <li className="flex items-center gap-2 text-mali-green font-medium">
                  <div className="w-6 h-6 rounded-full bg-mali-green/10 flex items-center justify-center text-sm">2</div>
                  <span>18-27 avril: Phase 2 (Second test)</span>
                </li>
              </ul>
              <div className="mt-6 bg-white p-3 rounded-lg border border-blue-100">
                <p className="font-medium text-center">Voyage en Chine: 2-9 août 2025, Beijing</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400} className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-mali-green" />
                <h3 className="text-xl font-semibold">Ce que tu vas apprendre</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Découvrir ton potentiel en résolution de problèmes (pas besoin de connaissances techniques)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Apprendre l'IA de façon simple et amusante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Développer des compétences pour ton avenir</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-mali-green flex-shrink-0 mt-0.5" />
                  <span>Recevoir une formation gratuite, même si tu ne vas pas jusqu'au bout</span>
                </li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={500} className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-mali-yellow" />
                <h3 className="text-xl font-semibold">Qui peut participer?</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg border border-yellow-100">
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-mali-blue" />
                    Catégorie Internationale (Pour aller en Chine)
                  </h4>
                  <p className="text-sm">Élèves au lycée, en école professionnelle ou jeunes professionnels de moins de 20 ans (août 2025)</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-yellow-100">
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <Award size={16} className="text-mali-green" />
                    Catégorie Nationale (Pour tous)
                  </h4>
                  <p className="text-sm">Étudiants universitaires et toute personne intéressée par l'IA, quel que soit ton âge</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={600} className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-mali-blue px-4 py-2 rounded-lg">
              <Calendar size={20} />
              <span className="font-medium">Compétition internationale: 2 - 9 août 2025 à Beijing, Chine</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-6">Qui peut participer?</h2>
              </ScrollReveal>
              
              <div className="space-y-6">
                <CategoryInfo
                  title="Catégorie Internationale"
                  description="Pour les jeunes de moins de 20 ans qui veulent représenter le Mali en Chine."
                  details={[
                    "Élèves au lycée et écoles professionnelles",
                    "Jeunes professionnels de moins de 20 ans (en août 2025)",
                    "Objectif: voyager en Chine pour l'olympiade IOAI 2025"
                  ]}
                  color="bg-mali-blue text-white"
                  delay={100}
                />
                
                <CategoryInfo
                  title="Catégorie Nationale"
                  description="Ouverte à tout le monde pour apprendre l'IA, quel que soit ton âge."
                  details={[
                    "Étudiants universitaires",
                    "Tout le monde, même sans expérience",
                    "Objectif: développer tes compétences en IA"
                  ]}
                  color="bg-mali-green text-white"
                  delay={200}
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-8">Les étapes du concours</h2>
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
              Les premières étapes sont faciles et accessibles à tous! Maintenant pour tenter ta chance et peut-être représenter le Mali en Chine en 2025.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex justify-center">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all flex items-center gap-2"
              >
                Je tente ma chance
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
