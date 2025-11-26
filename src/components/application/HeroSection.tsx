import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { AlertCircle, Globe } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-mali-dark">
            Rejoignez l'Équipe Nationale - IOAI 2026
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-mali-red/10 text-mali-red px-5 py-2.5 rounded-full mb-6 shadow-sm">
              <Globe size={20} />
              <span className="font-semibold text-sm md:text-base">IOAI 2026 - Abu Dhabi, UAE</span>
            </div>
            <p className="text-muted-foreground text-base md:text-lg text-center mb-6 leading-relaxed">
              Cette compétition est ouverte à tous les acteurs de l'écosystème numérique malien ! Qu'importe votre niveau, votre âge ou votre parcours, venez découvrir l'IA et contribuer à faire briller le Mali sur la scène internationale.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-xl p-5 md:p-6 mb-6 w-full shadow-sm">
              <p className="text-center font-bold text-mali-blue mb-4 text-base md:text-lg">DEUX PARCOURS DISPONIBLES :</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 bg-white/60 p-3 rounded-lg">
                  <span className="text-mali-red font-bold">→</span>
                  <p className="text-sm md:text-base"><span className="font-semibold">Catégorie Internationale :</span> Pour représenter le Mali à Abu Dhabi</p>
                </div>
                <div className="flex items-start gap-2 bg-white/60 p-3 rounded-lg">
                  <span className="text-mali-green font-bold">→</span>
                  <p className="text-sm md:text-base"><span className="font-semibold">Catégorie Nationale :</span> Pour se former et obtenir une certification</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={300}>
          <Alert className="max-w-2xl mx-auto bg-mali-yellow/10 border-mali-yellow/30 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <AlertCircle className="h-6 w-6 text-mali-yellow mb-3" />
              <AlertDescription className="font-medium text-mali-dark text-sm md:text-base">
                La première étape du concours commence le <span className="font-bold">14 décembre 2025</span>. Chaque participant recevra un token personnel (code d'accès unique) qui permet de se connecter à la plateforme de compétition.
              </AlertDescription>
            </div>
          </Alert>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={400} className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/timeline" className="px-6 py-3 bg-transparent text-mali-red font-medium rounded-lg border-2 border-mali-red/30 transition-all duration-300 hover:bg-mali-red/5 hover:border-mali-red shadow-sm">
              Voir le calendrier
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;