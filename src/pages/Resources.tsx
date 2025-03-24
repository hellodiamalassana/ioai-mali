
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              IOAI Mali
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
              L'Olympiade Internationale d'Intelligence Artificielle au Mali
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Relevez le défi par vous-même
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              L'IOAI est une compétition qui valorise l'autonomie et la créativité. 
              Nous encourageons les participants à explorer et développer leurs compétences 
              par eux-mêmes pour relever les défis de la compétition.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <Link 
              to="/application" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all hover:-translate-y-0.5"
            >
              Participer maintenant
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Resources;
