
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { AlertCircle, ExternalLink, Globe } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-black">
            Rejoignez l'Équipe Nationale
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-mali-red/10 text-mali-red px-4 py-2 rounded-full mb-4">
              <Globe size={18} />
              <span className="font-medium">IOAI 2025 - Beijing, Chine</span>
            </div>
            <p className="text-black text-lg text-center">
              Cette compétition est ouverte à tous les acteurs de l'écosystème numérique malien ! Qu'importe votre niveau, votre âge ou votre parcours, venez découvrir l'IA et contribuer à faire briller le Mali sur la scène internationale.
            </p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={300}>
          <Alert className="max-w-2xl mx-auto bg-mali-yellow/10 border-mali-yellow/20 text-center">
            <AlertCircle className="h-5 w-5 text-mali-yellow mx-auto mb-2" />
            <AlertDescription className="text-center font-medium text-black">
              La première étape du concours commence le 4 Avril 2024. Chaque élève recevra un code personnel qui ne peut être utilisé qu'une seule fois.
            </AlertDescription>
          </Alert>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={400} className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://script.google.com/macros/s/AKfycbyCa4vHiBjzOV-PUw5_QQpEHyMitbrTQ_1Ayif3r513J1YEXSM5Fp0hJD04LWvLLl5GNA/exec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-mali-red text-white font-medium rounded-lg transition-all duration-300 hover:bg-mali-red/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Participation
              <ExternalLink size={18} />
            </a>
            
            <a 
              href="/timeline" 
              className="px-6 py-3 bg-transparent text-black font-medium rounded-lg border border-mali-red/20 transition-all duration-300 hover:bg-mali-red/5"
            >
              Voir le calendrier
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
