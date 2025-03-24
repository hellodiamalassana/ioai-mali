
import React from 'react';
import { Award, Calendar, Zap } from 'lucide-react';
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
    <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Étapes du concours</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
          <Feature 
            icon={<Calendar size={24} />}
            title="Phase 1"
            description="QCM en ligne du 4 au 13 avril. 20 questions accessibles à tous niveaux."
            delay={100}
            className="card-hover bg-blue-50 border-blue-100"
          />
          
          <Feature 
            icon={<Zap size={24} />}
            title="Phase 2"
            description="QCM avancé du 18 au 27 avril pour les qualifiés de la Phase 1."
            delay={200}
            className="card-hover bg-green-50 border-green-100"
          />
          
          <Feature 
            icon={<Award size={24} />}
            title="Finale - Beijing 2025"
            description="4 finalistes représenteront le Mali à l'Olympiade mondiale en Chine."
            delay={300}
            className="card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
