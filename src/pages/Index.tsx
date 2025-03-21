
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Certificate from '@/components/home/Certificate';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ChevronRight, Calendar } from 'lucide-react';
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
      
      {/* AI Illustration Section */}
      <section className="w-full py-16 bg-gradient-to-b from-blue-50/50 to-white/50 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-12">L'Intelligence Artificielle au Cœur de Notre Avenir</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal animation="slide-up" delay={100} className="h-full">
              <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 h-full flex flex-col card-hover">
                <div className="bg-blue-50 rounded-lg mb-6 p-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1677442135133-4521dfd2964f?q=80&w=1932&auto=format&fit=crop" 
                    alt="Intelligence Artificielle" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Apprentissage Automatique</h3>
                <p className="text-muted-foreground flex-grow">
                  Découvrez comment les algorithmes peuvent apprendre à partir de données et prendre des décisions autonomes.
                </p>
                <Link 
                  to="/resources" 
                  className="mt-4 text-mali-blue hover:underline inline-flex items-center gap-1 text-sm font-medium"
                >
                  Explorer les ressources
                  <ChevronRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200} className="h-full">
              <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 h-full flex flex-col card-hover">
                <div className="bg-blue-50 rounded-lg mb-6 p-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563265470-2d3a464c9828?q=80&w=1932&auto=format&fit=crop" 
                    alt="Intelligence Artificielle" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Traitement du Langage Naturel</h3>
                <p className="text-muted-foreground flex-grow">
                  Apprenez comment les machines peuvent comprendre, interpréter et générer du langage humain.
                </p>
                <Link 
                  to="/resources" 
                  className="mt-4 text-mali-blue hover:underline inline-flex items-center gap-1 text-sm font-medium"
                >
                  Explorer les ressources
                  <ChevronRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={300} className="h-full">
              <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100 h-full flex flex-col card-hover">
                <div className="bg-blue-50 rounded-lg mb-6 p-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1932&auto=format&fit=crop" 
                    alt="Intelligence Artificielle" 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vision par Ordinateur</h3>
                <p className="text-muted-foreground flex-grow">
                  Explorez comment les ordinateurs peuvent extraire des informations significatives à partir d'images et de vidéos.
                </p>
                <Link 
                  to="/resources" 
                  className="mt-4 text-mali-blue hover:underline inline-flex items-center gap-1 text-sm font-medium"
                >
                  Explorer les ressources
                  <ChevronRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <Certificate />
      
      {/* Call to Action Section with Competition Date */}
      <section className="w-full py-20 bg-mali-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Calendar size={18} />
              <span className="font-medium">Phase 1 débute le 4 avril 2024</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à relever le défi?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Inscrivez-vous dès maintenant pour participer à l'Olympiade Nationale d'Intelligence Artificielle et tenter de représenter le Mali à l'IOAI 2025.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/application" 
                className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                Commencer le test
                <ChevronRight size={18} />
              </Link>
              
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
