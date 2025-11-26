import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, CheckCircle, ArrowRight, Clock, Target, Users, Award, BookOpen, Star, GraduationCap } from 'lucide-react';
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
  category?: string;
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
  color = 'bg-blue-50',
  category
}) => (
  <ScrollReveal animation="slide-up" delay={delay}>
    <div className={`relative pl-10 pb-12 border-l-2 ${isActive ? 'border-mali-blue' : 'border-gray-200'}`}>
      <div className={`absolute left-[-10px] top-0 w-5 h-5 rounded-full ${isActive ? 'bg-mali-blue' : 'bg-gray-200'}`}></div>
      
      <div className="ml-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isActive ? 'bg-blue-100 text-mali-blue' : 'bg-gray-100 text-gray-700'}`}>
            Phase {number}
          </div>
          {category && (
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${category === 'Internationale' ? 'bg-mali-blue/10 text-mali-blue' : 'bg-mali-green/10 text-mali-green'}`}>
              {category === 'Internationale' ? '🏆 Catégorie Internationale' : '🎓 Catégorie Nationale'}
            </div>
          )}
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
      dates: "14 décembre 2025 – 11 janvier 2026",
      description: "Ton premier pas vers l'aventure ! Un test simple que tout le monde peut réussir.",
      items: [
        "Test en ligne avec 20 questions à choix multiples",
        "Pas besoin de savoir programmer",
        "Tu peux le faire sur n'importe quel appareil (téléphone, ordinateur)",
        "Questions de logique et sur les bases de l'IA",
        "Sans limite de temps",
      ],
      highlightItems: [],
      isActive: true,
      color: "bg-blue-50",
      category: ""
    },
    {
      number: 2,
      title: "Second Test - Toujours Accessible",
      dates: "18 janvier – 1 février 2026",
      description: "Si tu réussis la Phase 1, tu passeras à cette deuxième étape, toujours sans programmation difficile.",
      items: [
        "Test en ligne de 20 questions à choix multiples",
        "Toujours pas besoin de savoir programmer",
        "Introduction aux idées de base de l'intelligence artificielle",
        "Tu recevras des ressources pour t'aider après la Phase 1",
      ],
      highlightItems: [
        "80% des participants de la Phase 1 pourront continuer !",
        "Tu recevras un certificat numérique que tu pourras partager",
        "Tous les participants reçoivent des ressources gratuites pour apprendre",
      ],
      color: "bg-green-50",
      category: ""
    },
    {
      number: 3,
      title: "Premiers Exercices Pratiques",
      dates: "8 février – 1 mars 2026",
      description: "Tu commenceras à mettre en pratique ce que tu as appris, avec l'aide de nos mentors.",
      items: [
        "Exercices guidés en ligne - pas à pas",
        "Découverte des outils d'IA faciles à utiliser",
        "Des mentors disponibles pour répondre à tes questions",
      ],
      color: "bg-yellow-50",
      category: ""
    },
    {
      number: "CERT",
      title: "Certification RobotsMali (Catégorie Nationale - FIN DU PARCOURS)",
      dates: "À partir du 8 mars 2026",
      description: "Obtiens ta certification officielle RobotsMali en Intelligence Artificielle.",
      items: [
        "Certification officielle RobotsMali",
        "Attestation de compétences en IA",
        "Valorisation pour ton parcours professionnel et académique",
        "Document téléchargeable et partageable",
      ],
      highlightItems: [
        "⚠️ FIN DU PARCOURS POUR LA CATÉGORIE NATIONALE",
        "FÉLICITATIONS ! Tu as complété ta formation en IA. 🎓"
      ],
      color: "bg-green-50",
      category: "Nationale"
    } as any,
    {
      number: 4,
      title: "Cours Personnalisés en Ligne",
      dates: "À partir du 8 mars 2026",
      description: "Tu suivras des cours adaptés à ton niveau avec des experts en IA pour te préparer au stage final.",
      items: [
        "Cours en ligne (5 à 10 heures par semaine)",
        "Formation intensive adaptée à ton niveau",
        "Préparation spécifique pour le stage final",
        "Certification RobotsMali également délivrée",
      ],
      highlightItems: [
        "⚠️ PAS ACCESSIBLE À LA CATÉGORIE NATIONALE",
        "Réservé aux participants de la CATÉGORIE INTERNATIONALE",
        "Avoir MOINS de 20 ans en août 2026"
      ],
      color: "bg-purple-50",
      category: "Internationale"
    },
    {
      number: 5,
      title: "Stage Intensif Final",
      dates: "[À définir - avant août 2026]",
      description: "Formation sur place pour sélectionner l'équipe qui représentera le Mali à l'olympiade internationale.",
      items: [
        "Stage intensif à RobotsMali AI4D Lab (à Bamako)",
        "Durée : plusieurs semaines",
        "Formation intensive avec experts",
        "Sélection de MAXIMUM 4 participants pour le voyage à Abu Dhabi",
        "Tout est pris en charge (transport vers Bamako, logement, repas)",
      ],
      highlightItems: [
        "⚠️ PAS ACCESSIBLE À LA CATÉGORIE NATIONALE",
        "Réservé aux participants de la CATÉGORIE INTERNATIONALE",
        "Avoir MOINS de 20 ans en août 2026"
      ],
      color: "bg-indigo-50",
      category: "Internationale"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Ton chemin vers l'excellence en IA
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-4">
              L'Olympiade d'Intelligence Artificielle se déroule en plusieurs étapes. Deux parcours disponibles selon votre catégorie :
            </p>
            <p className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-block bg-mali-blue/10 text-mali-blue px-4 py-2 rounded-full font-medium mr-2">
                → Catégorie Internationale : Phases 1 à 5 (Objectif Abu Dhabi)
              </span>
              <span className="inline-block bg-mali-green/10 text-mali-green px-4 py-2 rounded-full font-medium">
                → Catégorie Nationale : Phases 1 à 3 + Certification (Objectif Apprentissage)
              </span>
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal animation="fade-in" delay={300} className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-mali-blue" />
                <h3 className="text-xl font-semibold">Dates importantes</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-medium">Ouvert à toutes les catégories :</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-mali-blue/10 flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                  <span>14 déc 2025 - 11 jan 2026 : Phase 1</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-mali-green/10 flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                  <span>18 jan - 1 fév 2026 : Phase 2</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-mali-yellow/10 flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                  <span>8 fév - 1 mars 2026 : Phase 3</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <GraduationCap size={20} className="text-mali-green flex-shrink-0" />
                  <span>À partir 8 mars : Certification (Cat. Nationale)</span>
                </li>
              </ul>
              <div className="mt-6 bg-white p-3 rounded-lg border border-mali-blue/20">
                <p className="font-medium text-xs text-center mb-2">Réservé à la Catégorie Internationale uniquement :</p>
                <ul className="space-y-2 text-xs">
                  <li>• Phase 4 : À partir du 8 mars</li>
                  <li>• Phase 5 : [Dates à définir]</li>
                  <li className="font-bold text-mali-red">• Voyage Abu Dhabi : 2-8 août 2026</li>
                </ul>
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
                  <span>Découvrir ton potentiel en résolution de problèmes (pas besoin de connaissances techniques au départ)</span>
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
                  <span>Obtenir une certification reconnue (toutes catégories)</span>
                </li>
              </ul>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={500} className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-mali-yellow" />
                <h3 className="text-xl font-semibold">Qui peut participer?</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded-lg border border-mali-blue/20">
                  <h4 className="font-medium flex items-center gap-2 mb-2 text-mali-blue">
                    <BookOpen size={16} />
                    Catégorie Internationale
                  </h4>
                  <p className="text-sm text-muted-foreground">Élèves au lycée, en école professionnelle ou jeunes professionnels de moins de 20 ans en août 2026</p>
                  <p className="text-xs font-medium mt-2 text-mali-blue">→ Parcours complet : Phases 1 à 5</p>
                  <p className="text-xs font-medium text-mali-blue">→ Objectif : Représenter le Mali à Abu Dhabi</p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-mali-green/20">
                  <h4 className="font-medium flex items-center gap-2 mb-2 text-mali-green">
                    <Award size={16} />
                    Catégorie Nationale
                  </h4>
                  <p className="text-sm text-muted-foreground">Étudiants universitaires et toute personne intéressée par l'IA, quel que soit votre âge</p>
                  <p className="text-xs font-medium mt-2 text-mali-green">→ Parcours formation : Phases 1 à 3 + Certification</p>
                  <p className="text-xs font-medium text-mali-green">→ Objectif : Certification RobotsMali en IA</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={600} className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-mali-red/10 text-mali-red px-4 py-2 rounded-lg">
              <Calendar size={20} />
              <span className="font-medium">Compétition internationale: 2-8 août 2026 à Abu Dhabi, UAE</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">Les étapes du concours</h2>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
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
                category={phase.category}
              />
            ))}
            
            <ScrollReveal animation="slide-up" delay={600}>
              <div className="relative pl-10 pb-12">
                <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-mali-red"></div>
                <div className="ml-6">
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-mali-red/10 text-mali-red mb-3">
                    🎯 FINALE
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Compétition Internationale : IOAI 2026</h3>
                  <p className="text-muted-foreground mb-4">2-8 août 2026 • Abu Dhabi, United Arab Emirates</p>
                  <p className="mb-4 font-medium">Participants : 4 représentants du Mali (Catégorie Internationale uniquement)</p>
                  
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="mb-3 font-semibold">La grande finale ! Les 4 représentants du Mali concourront contre les meilleures équipes du monde.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-mali-red flex-shrink-0 mt-0.5" />
                        <span>Tous les frais payés (billets d'avion, hébergement, repas)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-mali-red flex-shrink-0 mt-0.5" />
                        <span>Accompagnement par l'équipe RobotsMali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-mali-red flex-shrink-0 mt-0.5" />
                        <span>Expérience internationale inoubliable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-mali-red flex-shrink-0 mt-0.5" />
                        <span>Rencontre avec les meilleurs jeunes talents en IA du monde entier</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl font-bold mb-6">Inscrivez-vous dès maintenant</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              Recevez votre token personnel (code d'accès) pour débuter les tests le 14 décembre. 
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              <strong>Choisissez votre catégorie lors de l'inscription :</strong><br/>
              → Catégorie Internationale (si moins de 20 ans en août 2026)<br/>
              → Catégorie Nationale (tous âges)
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
              Chaque participant aura un identifiant unique qui ne peut être utilisé qu'une seule fois.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all flex items-center gap-2"
              >
                Je m'inscris - Catégorie Internationale
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/application" 
                className="px-6 py-3 bg-mali-green text-white font-medium rounded-lg shadow-md hover:bg-mali-green/90 transition-all flex items-center gap-2"
              >
                Je m'inscris - Catégorie Nationale
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