
import React from 'react';
import { Users, Award, BookOpen } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0, className }) => (
  <ScrollReveal 
    animation="slide-up" 
    delay={delay}
    className={cn("bg-white rounded-xl p-6 shadow-sm border border-border", className)}
  >
    <div className="h-12 w-12 rounded-full bg-mali-blue/10 text-mali-blue flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </ScrollReveal>
);

const Features = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Pourquoi cette aventure va transformer votre avenir</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          <Feature 
            icon={<Users size={24} />}
            title="Une formation d'élite mondiale"
            description="Bénéficiez d'un accompagnement exceptionnel conçu par des experts internationaux. Développez des compétences qui vous distingueront sur le marché mondial de l'IA."
            delay={100}
            className="card-hover"
          />
          
          <Feature 
            icon={<Award size={24} />}
            title="Brillez à l'échelle internationale"
            description="Devenez l'un des ambassadeurs du Mali à Beijing en août 2025 et mesurez-vous aux meilleurs talents mondiaux dans la compétition la plus prestigieuse en IA."
            delay={200}
            className="card-hover"
          />
          
          <Feature 
            icon={<BookOpen size={24} />}
            title="Ressources exclusives & mentors d'exception"
            description="Accédez gratuitement à un contenu pédagogique de pointe et bénéficiez des conseils personnalisés d'experts reconnus qui vous guideront vers l'excellence."
            delay={300}
            className="card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
