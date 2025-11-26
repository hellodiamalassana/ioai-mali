import React from 'react';
import { Calendar, Zap, BookOpen, Users, Award, GraduationCap } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
  badge?: string;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  delay = 0,
  className,
  badge
}) => (
  <ScrollReveal animation="slide-up" delay={delay} className={cn("bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow", className)}>
    {badge && (
      <div className="mb-3">
        <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-mali-red/10 text-mali-red">
          {badge}
        </span>
      </div>
    )}
    <div className="h-12 w-12 rounded-full bg-mali-red/10 text-mali-red flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
    <p className="text-sm md:text-base text-muted-foreground">{description}</p>
  </ScrollReveal>
);

const Features = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in" className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-mali-red/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar size={18} className="text-mali-red" />
            <span className="font-medium text-mali-red text-sm md:text-base">Début des tests: 14 décembre 2025</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">Étapes du concours</h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={100} className="text-center mb-8">
          <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-base px-4">
            Deux parcours disponibles selon votre catégorie : 
            <span className="font-semibold text-mali-blue"> Catégorie Internationale</span> (Phases 1-5 + Abu Dhabi) ou 
            <span className="font-semibold text-mali-green"> Catégorie Nationale</span> (Phases 1-3 + Certification)
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-8">
          <Feature 
            icon={<Calendar size={24} />} 
            title="Phase 1" 
            description="QCM en ligne du 14 décembre 2025 au 11 janvier 2026. 20 questions accessibles à tous."
            delay={100} 
            className="card-hover bg-red-50 border-red-100" 
            badge="Toutes catégories"
          />
          
          <Feature 
            icon={<Zap size={24} />} 
            title="Phase 2" 
            description="QCM avancé du 18 janvier au 1 février 2026 pour les qualifiés de la Phase 1."
            delay={150} 
            className="card-hover bg-green-50 border-green-100" 
            badge="Toutes catégories"
          />
          
          <Feature 
            icon={<BookOpen size={24} />} 
            title="Phase 3" 
            description="Exercices pratiques du 8 février au 1 mars 2026 avec accompagnement."
            delay={200} 
            className="card-hover bg-yellow-50 border-yellow-100" 
            badge="Toutes catégories"
          />
          
          <Feature 
            icon={<GraduationCap size={24} />} 
            title="Certification" 
            description="Certification RobotsMali en IA à partir du 8 mars 2026. Fin du parcours National."
            delay={250} 
            className="card-hover bg-orange-50 border-orange-100" 
            badge="🎓 Catégorie Nationale"
          />
          
          <Feature 
            icon={<Users size={24} />} 
            title="Phase 4" 
            description="Cours en ligne à partir du 8 mars 2026, adaptés à chaque niveau."
            delay={300} 
            className="card-hover bg-purple-50 border-purple-100" 
            badge="🏆 Catégorie Internationale"
          />
          
          <Feature 
            icon={<Award size={24} />} 
            title="Phase 5" 
            description="Stage final à RobotsMali AI4D Lab et sélection pour Abu Dhabi 2026."
            delay={350} 
            className="card-hover bg-blue-50 border-blue-100" 
            badge="🏆 Catégorie Internationale"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
