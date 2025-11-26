import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import PhotoGallery from '@/components/home/PhotoGallery';
import ApplicationProcess from '@/components/home/ApplicationProcess';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Hero />
      
      <Features />
      
      <PhotoGallery />
      
      {/* Deux parcours disponibles Section */}
      
      
      
      
      {/* Partners Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12">Nos Partenaires</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* EDUSPACE Logo */}
              <div className="w-48 sm:w-56 md:w-60 h-24 md:h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img src="/lovable-uploads/7cc919d7-d1d7-4368-975d-44c37a313fb8.png" alt="EDUSPACE" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              
              {/* IOAI Logo */}
              <div className="w-48 sm:w-56 md:w-60 h-24 md:h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img src="/lovable-uploads/52b5ada1-f035-4056-b99d-318270e8fcbc.png" alt="IOAI - International Olympiad in Artificial Intelligence" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300} className="mt-6 md:mt-8">
            <Link to="/sponsors" className="text-mali-blue hover:text-mali-red transition-colors duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base">
              Voir tous nos partenaires
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-16 bg-mali-red text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full mb-6">
              <Calendar size={16} className="md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Début des tests: 14 décembre 2025</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 px-4">
              Ensemble, faisons rayonner le Mali à l'IOAI 2026
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 px-4">
              Deux parcours disponibles : représentez le Mali à Abu Dhabi (Catégorie Internationale) ou obtenez une certification RobotsMali en IA (Catégorie Nationale). Les inscriptions sont ouvertes pour tous !
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/application" className="bg-white text-mali-red font-medium py-3 px-6 rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 shadow-lg text-sm md:text-base">
                S'inscrire maintenant
                <ArrowRight size={18} />
              </Link>
              <Link to="/timeline" className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
                Voir le calendrier
                <Calendar size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>;
};
export default Index;