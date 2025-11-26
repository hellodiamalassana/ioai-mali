
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Heart, Network, Award, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sponsorship level component
interface SponsorLevelProps {
  title: string;
  description: string;
  benefits: string[];
  color: string;
  delay?: number;
}

const SponsorLevel: React.FC<SponsorLevelProps> = ({ title, description, benefits, color, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay} className="h-full">
    <div className={`h-full rounded-xl p-6 border shadow-sm ${color}`}>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="space-y-2 mt-4">
        <h4 className="font-medium text-sm text-muted-foreground">Avantages :</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="h-5 w-5 rounded-full bg-blue-100 text-mali-blue flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ScrollReveal>
);

// Sponsorship need component
interface SponsorshipNeedProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const SponsorshipNeed: React.FC<SponsorshipNeedProps> = ({ icon, title, description, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay}>
    <div className="bg-white rounded-lg p-5 shadow-sm border border-blue-100 flex gap-4">
      <div className="w-10 h-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-mali-blue">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

const Sponsors = () => {
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
              Devenez Sponsor de l'IOAI Mali
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              Votre soutien est essentiel pour permettre aux jeunes talents maliens de participer à l'IOAI et de représenter notre pays sur la scène internationale à Abu Dhabi en 2026, mais aussi pour offrir des formations en IA à tous les Maliens intéressés.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300} className="flex justify-center">
            <Link to="/contact" className="px-6 py-3 bg-mali-blue text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:bg-mali-blue/90 transition-all hover:-translate-y-0.5">
              Devenir Sponsor
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-12">Nos Partenaires Actuels</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* EDUSPACE Logo */}
              <div className="w-80 h-40 flex items-center justify-center bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
                <img 
                  src="/lovable-uploads/7cc919d7-d1d7-4368-975d-44c37a313fb8.png" 
                  alt="EDUSPACE" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* IOAI Logo */}
              <div className="w-80 h-40 flex items-center justify-center bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all">
                <img 
                  src="/lovable-uploads/52b5ada1-f035-4056-b99d-318270e8fcbc.png" 
                  alt="IOAI - International Olympiad in Artificial Intelligence" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Pourquoi Sponsoriser ?</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="slide-up" delay={100} className="h-full">
              <div className="h-full bg-white rounded-xl p-6 shadow-sm border flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Responsabilité Sociale</h3>
                <p className="text-muted-foreground flex-grow">
                  Soutenez la formation et l'épanouissement des futurs innovateurs en IA, contribuant ainsi au développement technologique du Mali.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200} className="h-full">
              <div className="h-full bg-white rounded-xl p-6 shadow-sm border flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-mali-blue mb-4">
                  <Network size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Opportunités de Réseautage</h3>
                <p className="text-muted-foreground flex-grow">
                  Participez à des événements exclusifs et rencontrez des experts, des leaders d'industrie et des talents émergents dans le domaine de l'IA.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={300} className="h-full">
              <div className="h-full bg-white rounded-xl p-6 shadow-sm border flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg text-green-600 mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Valorisation de Votre Marque</h3>
                <p className="text-muted-foreground flex-grow">
                  Votre entreprise sera mise en avant dans tous nos supports de communication incluant les réseaux sociaux, communiqués de presse et événements.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Niveaux de Parrainage</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="section-subtitle">
              Différentes options de parrainage sont disponibles pour s'adapter à vos objectifs et à votre budget.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SponsorLevel
              title="Partenaire Platine"
              description="Partenaires principaux de l'IOAI Mali avec une visibilité maximale et des avantages exclusifs."
              benefits={[
                "Logo sur tous les supports de communication (taille premium)",
                "Présence VIP lors de tous les événements",
                "Invitation à la cérémonie de départ de l'équipe nationale",
                "Publication d'articles dédiés sur notre site et réseaux sociaux",
                "Mention prioritaire dans les communiqués de presse"
              ]}
              color="bg-gradient-to-br from-white to-gray-100 border-gray-200"
              delay={100}
            />
            
            <SponsorLevel
              title="Partenaire Or"
              description="Soutien important avec une forte visibilité lors des événements et dans les communications."
              benefits={[
                "Logo sur les supports de communication principaux",
                "Présence lors des événements majeurs",
                "Mention dans nos communications sur les réseaux sociaux",
                "Invitation aux cérémonies officielles",
                "Contenu dédié sur notre site web"
              ]}
              color="bg-gradient-to-br from-white to-yellow-50 border-yellow-200"
              delay={200}
            />
            
            <SponsorLevel
              title="Partenaire Bronze"
              description="Collaboration précieuse incluant visibilité et reconnaissance de votre soutien à notre initiative."
              benefits={[
                "Logo sur notre site web",
                "Mention dans nos communications",
                "Invitation aux principaux événements",
                "Remerciements officiels lors des cérémonies",
                "Certificat de partenariat"
              ]}
              color="bg-gradient-to-br from-white to-blue-50 border-blue-200"
              delay={300}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title">Besoins de Parrainage</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="section-subtitle">
              Votre soutien peut prendre différentes formes selon vos possibilités et vos domaines d'expertise.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <SponsorshipNeed
              icon={<Award size={20} />}
              title="Financier"
              description="Couvrir les frais de logistique, de formation et d'organisation liés à la compétition nationale et internationale."
              delay={100}
            />
            
            <SponsorshipNeed
              icon={<Network size={20} />}
              title="Matériel et Logistique"
              description="Fourniture d'équipements informatiques, de licences logicielles et prise en charge des déplacements."
              delay={200}
            />
            
            <SponsorshipNeed
              icon={<Heart size={20} />}
              title="Services et Ressources"
              description="Formation, mentorat et mise à disposition d'installations pour les concours et les sessions de préparation."
              delay={300}
            />
            
            <SponsorshipNeed
              icon={<Gift size={20} />}
              title="Bourses et Récompenses"
              description="Encourager les participants par des aides financières et des prix pour valoriser l'excellence et l'innovation."
              delay={400}
            />
          </div>
          
          <ScrollReveal animation="fade-in" delay={500} className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all hover:-translate-y-0.5">
              En savoir plus
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
