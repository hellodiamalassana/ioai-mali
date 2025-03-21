
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
          <h2 className="section-title">Trois raisons de saisir cette opportunité unique</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          <Feature 
            icon={<Users size={24} />}
            title="Formation d'excellence internationale"
            description="Accédez à un programme exclusif développé par des experts mondiaux en IA. Acquérez des compétences recherchées qui vous ouvriront des portes partout dans le monde."
            delay={100}
            className="card-hover"
          />
          
          <Feature 
            icon={<Award size={24} />}
            title="Représentez le Mali à Beijing 2025"
            description="Devenez ambassadeur de l'innovation malienne sur la scène internationale. Affrontez les meilleurs talents mondiaux dans la compétition la plus prestigieuse d'IA en Chine."
            delay={200}
            className="card-hover"
          />
          
          <Feature 
            icon={<BookOpen size={24} />}
            title="Mentorat personnalisé et réseau global"
            description="Bénéficiez gratuitement d'un accompagnement d'élite et rejoignez une communauté mondiale de pionniers qui façonnent l'avenir de l'IA. Votre réseau sera votre force."
            delay={300}
            className="card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
