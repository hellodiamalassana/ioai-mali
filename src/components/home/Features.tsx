import React from 'react';
import { Users, Award, Calendar, Lock, Zap } from 'lucide-react';
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
          <h2 className="section-title">Pourquoi participer dès les premières phases</h2>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mt-4 mb-8">
            Les Phases 1 et 2 sont accessibles à tous et constituent votre porte d'entrée vers cette opportunité exceptionnelle
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          <Feature 
            icon={<Calendar size={24} />}
            title="Phase 1: Test Initial (4-13 avril)"
            description="Un simple QCM de 20 questions en ligne, accessible à tous les niveaux. Aucune connaissance particulière requise. 1000 places disponibles! Participez et découvrez le monde de l'IA."
            delay={100}
            className="card-hover bg-blue-50 border-blue-100"
          />
          
          <Feature 
            icon={<Zap size={24} />}
            title="Phase 2: Approfondissement (18-27 avril)"
            description="Réservé aux qualifiés de la Phase 1. Un second QCM en ligne qui teste votre logique et compréhension de l'IA. Une étape cruciale pour continuer l'aventure!"
            delay={200}
            className="card-hover bg-green-50 border-green-100"
          />
          
          <Feature 
            icon={<Award size={24} />}
            title="Objectif: Beijing 2025!"
            description="Les meilleurs talents maliens représenteront notre pays lors de la prestigieuse Olympiade mondiale d'IA en Chine. Voyage et séjour entièrement pris en charge. Une expérience inoubliable pour votre avenir."
            delay={300}
            className="card-hover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
          <Feature 
            icon={<Users size={24} />}
            title="Accessible à tous les niveaux"
            description="Que vous soyez débutant ou initié, lycéen ou professionnel, les premières phases sont conçues pour être inclusives. Seule votre curiosité et votre logique comptent pour démarrer."
            delay={400}
            className="card-hover"
          />
          
          <Feature 
            icon={<Zap size={24} />}
            title="Apprenez en participant"
            description="Même si vous ne réussissez pas à vous qualifier du premier coup, tenter votre chance vous permettra d'apprendre et de progresser dans le domaine de l'IA."
            delay={500}
            className="card-hover"
          />
          
          <Feature 
            icon={<Lock size={24} />}
            title="Sécurisez votre place maintenant"
            description="Les places sont limitées! Ne laissez pas passer cette chance unique de faire partie des pionniers de l'IA au Mali. Inscrivez-vous dès aujourd'hui pour réserver votre accès au test."
            delay={600}
            className="card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
