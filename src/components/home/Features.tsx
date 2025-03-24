
import React from 'react';
import { Award, Calendar, Zap, BookOpen, Users } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
    <div className="h-12 w-12 rounded-full bg-mali-red/10 text-mali-red flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </ScrollReveal>
);

const Features = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in" className="mb-6">
          <div className="inline-flex mx-auto items-center gap-2 bg-mali-red/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar size={18} className="text-mali-red" />
            <span className="font-medium text-mali-red">Début des tests: 4 avril</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in">
          <h2 className="section-title">Étapes du concours</h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={100} className="text-center mb-8">
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Inscrivez-vous dès maintenant et recevez votre code personnel pour débuter les tests le 4 avril.
          </p>
          <div className="mt-6">
            <a
              href="https://script.google.com/macros/s/AKfycbze1H_2LweWLypEbV0ZXiDXux-KOsGacAtBIbGbMyJs_jLCZM-nJnTn-fSBHe37gSkO0Q/exec"
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-mali-red text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-red/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Participation
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <Feature 
            icon={<Calendar size={24} />}
            title="Phase 1"
            description="QCM en ligne du 4 au 13 avril. 20 questions accessibles à tous."
            delay={100}
            className="card-hover bg-red-50 border-red-100"
          />
          
          <Feature 
            icon={<Zap size={24} />}
            title="Phase 2"
            description="QCM avancé du 18 au 27 avril pour les qualifiés de la Phase 1."
            delay={200}
            className="card-hover bg-green-50 border-green-100"
          />
          
          <Feature 
            icon={<BookOpen size={24} />}
            title="Phase 3"
            description="Exercices pratiques du 1er au 18 mai avec accompagnement."
            delay={300}
            className="card-hover bg-yellow-50 border-yellow-100"
          />
          
          <Feature 
            icon={<Users size={24} />}
            title="Phase 4"
            description="Cours en ligne du 23 mai au 27 juin adaptés à chaque niveau."
            delay={400}
            className="card-hover bg-purple-50 border-purple-100"
          />
          
          <Feature 
            icon={<Award size={24} />}
            title="Phase 5"
            description="Stage final à RobotsMali AI4D Lab et sélection pour Beijing 2025."
            delay={500}
            className="card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
