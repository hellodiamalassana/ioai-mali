
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
      
      {/* Call to Action Section with Competition Date */}
      <section className="w-full py-16 bg-mali-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Calendar size={18} />
              <span className="font-medium">Début des tests: 4 avril</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Représentez le Mali à l'IOAI 2025
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Les inscriptions sont ouvertes! Obtenez votre code d'accès personnel dès maintenant.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://script.google.com/macros/s/AKfycbyCa4vHiBjzOV-PUw5_QQpEHyMitbrTQ_1Ayif3r513J1YEXSM5Fp0hJD04LWvLLl5GNA/exec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                Rejoins l'aventure
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
