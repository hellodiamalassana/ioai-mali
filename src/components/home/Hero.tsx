
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/40 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-100/30 to-transparent rounded-tr-full"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-mali-blue/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-mali-green/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-mali-yellow/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal animation="slide-right">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block py-1 px-3 bg-blue-100 text-mali-blue rounded-full text-sm font-medium">
                  IOAI 2025
                </span>
                <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  <span>Début: 4 avril</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Olympiade Internationale d'Intelligence Artificielle
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Rejoignez l'équipe malienne pour l'IOAI 2025 à Beijing. Inscrivez-vous dès maintenant pour obtenir votre code d'accès personnel.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://script.google.com/macros/s/AKfycbyCa4vHiBjzOV-PUw5_QQpEHyMitbrTQ_1Ayif3r513J1YEXSM5Fp0hJD04LWvLLl5GNA/exec" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Participer à l'aventure
                  <ArrowRight size={18} />
                </a>
                <Link to="/timeline" className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg border border-mali-blue/20 transition-all duration-300 hover:bg-mali-blue/5 shadow-sm hover:shadow">
                  Voir le calendrier
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="slide-left" delay={300} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50"></div>
              
              <div className="p-6 relative z-10">
                <div className="relative mb-6 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/38f18643-f066-4cbe-afd5-63fc53a5716f.png" 
                    alt="Beijing, Chine" 
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    width="1200"
                    height="720"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="text-center mt-4">
                  <a 
                    href="https://ioai-official.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-mali-blue hover:underline text-sm font-medium"
                  >
                    Site officiel de l'IOAI
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mali-yellow/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mali-green/10 rounded-full"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
