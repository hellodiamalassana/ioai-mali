
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ApplicationProcess from '@/components/home/ApplicationProcess';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Calendar, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      
      <Features />
      
      {/* Deux parcours disponibles Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center">Deux Parcours Disponibles</h2>
          </ScrollReveal>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Catégorie Internationale */}
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 md:p-8 shadow-lg border-2 border-mali-red/20 hover:border-mali-red/40 transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mali-red text-white rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-mali-red">Catégorie Internationale</h3>
                    <p className="text-sm text-muted-foreground">Pour aller à Abu Dhabi</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-mali-red/10 text-mali-red px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Moins de 20 ans en août 2026
                  </div>
                  
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-red mt-1 flex-shrink-0" />
                      <span>Phases 1, 2, 3, 4 ET 5</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-red mt-1 flex-shrink-0" />
                      <span>Stage intensif à RobotsMali AI4D Lab</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-red mt-1 flex-shrink-0" />
                      <span>Sélection de 4 participants pour Abu Dhabi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-red mt-1 flex-shrink-0" />
                      <span>Voyage tout frais payés (2-8 août 2026)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-red mt-1 flex-shrink-0" />
                      <span>Certification RobotsMali incluse</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/application" 
                  className="w-full bg-mali-red text-white font-medium py-3 px-4 rounded-lg hover:bg-mali-red/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Candidater - Internationale
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
            
            {/* Catégorie Nationale */}
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 md:p-8 shadow-lg border-2 border-mali-green/20 hover:border-mali-green/40 transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-mali-green text-white rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-mali-green">Catégorie Nationale</h3>
                    <p className="text-sm text-muted-foreground">Formation & Certification</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="inline-block bg-mali-green/10 text-mali-green px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Tous âges - Ouvert à tous
                  </div>
                  
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-green mt-1 flex-shrink-0" />
                      <span>Phases 1, 2 et 3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-green mt-1 flex-shrink-0" />
                      <span>Certification RobotsMali en IA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-green mt-1 flex-shrink-0" />
                      <span>Formation complète en Intelligence Artificielle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-green mt-1 flex-shrink-0" />
                      <span>Délivrance certificat à partir du 8 mars 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={18} className="text-mali-green mt-1 flex-shrink-0" />
                      <span>Idéal pour développer vos compétences</span>
                    </li>
                  </ul>
                </div>
                
                <Link 
                  to="/application" 
                  className="w-full bg-mali-green text-white font-medium py-3 px-4 rounded-lg hover:bg-mali-green/90 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Candidater - Nationale
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <ApplicationProcess />
      
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
                <img 
                  src="/lovable-uploads/7cc919d7-d1d7-4368-975d-44c37a313fb8.png" 
                  alt="EDUSPACE" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* IOAI Logo */}
              <div className="w-48 sm:w-56 md:w-60 h-24 md:h-32 flex items-center justify-center transition-transform hover:scale-105">
                <img 
                  src="/lovable-uploads/52b5ada1-f035-4056-b99d-318270e8fcbc.png" 
                  alt="IOAI - International Olympiad in Artificial Intelligence" 
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300} className="mt-6 md:mt-8">
            <Link 
              to="/sponsors" 
              className="text-mali-blue hover:text-mali-red transition-colors duration-300 font-medium flex items-center justify-center gap-2 text-sm md:text-base"
            >
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
              <Link 
                to="/application" 
                className="bg-white text-mali-red font-medium py-3 px-6 rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
              >
                S'inscrire maintenant
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/timeline" 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Voir le calendrier
                <Calendar size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
