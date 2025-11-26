
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
      
      {/* Dates importantes Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-12 text-center">Dates Importantes</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-gradient-to-r from-mali-green/10 to-mali-green/5 border-l-4 border-mali-green p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Début des tests</p>
                <p className="text-muted-foreground">14 décembre 2025</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-blue/10 to-mali-blue/5 border-l-4 border-mali-blue p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Phase 1 : QCM en ligne</p>
                <p className="text-muted-foreground">14 décembre 2025 - 11 janvier 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-blue/10 to-mali-blue/5 border-l-4 border-mali-blue p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Phase 2 : QCM avancé</p>
                <p className="text-muted-foreground">18 janvier - 1 février 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-blue/10 to-mali-blue/5 border-l-4 border-mali-blue p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Phase 3 : Exercices pratiques</p>
                <p className="text-muted-foreground">8 février - 1 mars 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-yellow/20 to-mali-yellow/10 border-l-4 border-mali-yellow p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Certification (Catégorie Nationale)</p>
                <p className="text-muted-foreground">À partir du 8 mars 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-red/10 to-mali-red/5 border-l-4 border-mali-red p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Phase 4 : Cours en ligne (Catégorie Internationale uniquement)</p>
                <p className="text-muted-foreground">À partir du 8 mars 2026</p>
              </div>
              
              <div className="bg-gradient-to-r from-mali-red/10 to-mali-red/5 border-l-4 border-mali-red p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Phase 5 : Stage final (Catégorie Internationale uniquement)</p>
                <p className="text-muted-foreground">[Dates à définir]</p>
              </div>
              
              <div className="bg-gradient-to-r from-red-600/20 to-red-600/10 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="font-semibold text-mali-dark mb-1">Voyage à Abu Dhabi (Catégorie Internationale uniquement)</p>
                <p className="text-muted-foreground">2-8 août 2026</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Features />
      
      {/* Comment participer Section */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title mb-12 text-center">Comment participer</h2>
          </ScrollReveal>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal animation="fade-in" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-mali-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-mali-dark">Inscrivez-vous</h3>
                <p className="text-muted-foreground">
                  Remplissez le formulaire pour votre catégorie (Internationale ou Nationale) et recevez votre code d'accès personnel (TOKEN pour accéder à la plateforme de compétition).
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-mali-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-mali-dark">Accédez aux tests</h3>
                <p className="text-muted-foreground">
                  Utilisez votre token pour participer aux QCM à partir du 14 décembre.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-mali-yellow text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-mali-dark">Progressez par phase</h3>
                <p className="text-muted-foreground">
                  Qualifiez-vous pour chaque phase suivante du concours.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-mali-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-mali-dark">Objectif final</h3>
                <p className="text-muted-foreground text-sm">
                  <strong>Catégorie Internationale :</strong> Les 4 meilleurs seront sélectionnés pour représenter le Mali à Abu Dhabi (2-8 août 2026), avec tous les frais de voyage payés.
                  <br/><br/>
                  <strong>Catégorie Nationale :</strong> Obtenez votre certification RobotsMali à l'issue de la Phase 3.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
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
