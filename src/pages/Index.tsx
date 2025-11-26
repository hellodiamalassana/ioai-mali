
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ApplicationProcess from '@/components/home/ApplicationProcess';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <ApplicationProcess />
      
      {/* Partners Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-12">Nos Partenaires</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* EDUSPACE Logo */}
              <div className="w-60 h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img 
                  src="/lovable-uploads/7cc919d7-d1d7-4368-975d-44c37a313fb8.png" 
                  alt="EDUSPACE" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* IOAI Logo */}
              <div className="w-60 h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img 
                  src="/lovable-uploads/52b5ada1-f035-4056-b99d-318270e8fcbc.png" 
                  alt="IOAI - International Olympiad in Artificial Intelligence" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300} className="mt-8">
            <Link 
              to="/sponsors" 
              className="text-mali-blue hover:text-mali-red transition-colors duration-300 font-medium flex items-center justify-center gap-2"
            >
              Voir tous nos partenaires
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="w-full py-16 bg-mali-red text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar size={18} />
              <span className="font-medium">Début des tests: 14 décembre 2025</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ensemble, faisons rayonner le Mali à l'IOAI 2026
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Deux parcours disponibles : représentez le Mali à Abu Dhabi (Catégorie Internationale) ou obtenez une certification RobotsMali en IA (Catégorie Nationale). Les inscriptions sont ouvertes pour tous !
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
