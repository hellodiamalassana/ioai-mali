
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ApplicationProcess from '@/components/home/ApplicationProcess';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Scroll to top when component mounts
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
              <div className="w-60 h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img 
                  src="/lovable-uploads/7cc919d7-d1d7-4368-975d-44c37a313fb8.png" 
                  alt="EDUSPACE" 
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
      
      {/* Call to Action Section with Competition Date */}
      <section className="w-full py-16 bg-mali-red text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar size={18} />
              <span className="font-medium">Début des tests: 4 avril</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ensemble, faisons rayonner le Mali à l'IOAI 2025
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Parents, enseignants, professionnels, étudiants - nous avons tous un rôle à jouer dans ce projet national. Les inscriptions sont ouvertes pour tous !
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://script.google.com/macros/s/AKfycbx42zuK8-f5R0TjpwEHEjUpiNgxhdcu5BXjIJjaosFSukL0hI5Kt01eN6zBBsapnyEm2A/exec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-mali-red font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                Participation
              </a>
              
              <Link 
                to="/timeline" 
                className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10"
              >
                Voir le calendrier
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
