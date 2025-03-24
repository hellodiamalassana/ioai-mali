
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-16 bg-mali-red text-white">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Des questions?
          </h2>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={200}>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Si vous avez besoin d'aide ou si vous avez des questions concernant le processus de sélection, n'hésitez pas à nous contacter.
          </p>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={400}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/timeline" 
              className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
            >
              Voir le calendrier
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fade-in" delay={600} className="mt-8">
          <div className="inline-flex items-center gap-2 text-white/80 text-sm">
            <Mail size={16} />
            Contactez-nous à <a href="mailto:info@robotsmali.org" className="underline hover:text-white">info@robotsmali.org</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
