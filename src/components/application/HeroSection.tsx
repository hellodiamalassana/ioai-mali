import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { AlertCircle, Globe } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-mali-dark">
            Rejoignez l'Équipe Nationale - IOAI 2026
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 bg-mali-red/10 text-mali-red px-4 py-2 rounded-full mb-4">
              <Globe size={18} />
              <span className="font-medium">IOAI 2026 - Abu Dhabi, UAE</span>
            </div>
            <p className="text-muted-foreground text-lg text-center mb-4">
              Cette compétition est ouverte à tous les acteurs de l'écosystème numérique malien ! Qu'importe votre niveau, votre âge ou votre parcours, venez découvrir l'IA et contribuer à faire briller le Mali sur la scène internationale.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 w-full">
              <p className="text-center font-semibold text-mali-blue mb-2">DEUX PARCOURS DISPONIBLES :</p>
              <div className="flex flex-col gap-2">
                <p className="text-sm"><span className="font-medium">→ Catégorie Internationale :</span> Pour représenter le Mali à Abu Dhabi</p>
                <p className="text-sm"><span className="font-medium">→ Catégorie Nationale :</span> Pour se former et obtenir une certification</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={300}>
          <Alert className="max-w-2xl mx-auto bg-mali-yellow/10 border-mali-yellow/20 text-center">
            <AlertCircle className="h-5 w-5 text-mali-yellow mx-auto mb-2" />
            <AlertDescription className="text-center font-medium text-mali-dark">
              La première étape du concours commence le 14 décembre 2025. Chaque participant recevra un token personnel (code d'accès unique) qui permet de se connecter à la plateforme de compétition.
            </AlertDescription>
          </Alert>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={400} className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/timeline" className="px-6 py-3 bg-transparent text-mali-red font-medium rounded-lg border border-mali-red/20 transition-all duration-300 hover:bg-mali-red/5">
              Voir le calendrier
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;