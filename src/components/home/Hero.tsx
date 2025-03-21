
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
                  RobotsMali IOAI 2025
                </span>
                <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <Calendar size={14} />
                  <span>Phase 1: dès le 4 avril</span>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
                Le Mali fait ses débuts à l'Olympiade Internationale d'Intelligence Artificielle
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Bienvenue sur le site officiel de RobotsMali, coordinateur national pour l'IOAI au Mali ! 
                Préparez-vous à relever des défis stimulants et à vivre une aventure internationale unique.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="px-6 py-3 bg-mali-blue text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-blue/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                  Découvrir l'ONIA
                  <ArrowRight size={18} />
                </Link>
                <Link to="/application" className="px-6 py-3 bg-white text-mali-blue font-medium rounded-lg border border-mali-blue/20 transition-all duration-300 hover:bg-mali-blue/5 shadow-sm hover:shadow">
                  Commencer le test
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="slide-left" delay={300} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50"></div>
              
              <div className="p-6 relative z-10">
                {/* Updated image showing AI illustrations */}
                <div className="relative mb-4 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1676377421944-724ed6dbea2a?q=80&w=2070&auto=format&fit=crop" 
                    alt="Intelligence Artificielle" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-semibold">L'IA du Futur</h3>
                      <p className="text-sm">Le Mali à l'avant-garde de l'innovation</p>
                    </div>
                  </div>
                </div>
                
                {/* Updated to show actual certificate */}
                <img 
                  src="/lovable-uploads/69b22ddc-22f8-42af-81ce-5fa857035f30.png" 
                  alt="Certificat d'Accréditation IOAI" 
                  className="w-full h-auto rounded-lg mb-4"
                />
                
                <div className="text-center">
                  <a 
                    href="https://ioai-official.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-mali-blue hover:underline text-sm font-medium"
                  >
                    Consultez le statut sur ioai-official.org
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mali-yellow/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-mali-green/10 rounded-full"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
