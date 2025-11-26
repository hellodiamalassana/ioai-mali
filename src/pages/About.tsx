
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Globe, Trophy, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
              L'Olympiade Internationale d'Intelligence Artificielle (IOAI)
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
              Découvrez la compétition internationale la plus prestigieuse en IA, ouverte aux jeunes de moins de 20 ans et à tous les passionnés, et comment le Mali y participe pour la deuxième année consécutive.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slide-right">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/30 rounded-full -z-10"></div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-mali-blue mb-4">Qu'est-ce que l'IOAI ?</h2>
                    <p className="text-muted-foreground mb-6">
                      L'Olympiade Internationale d'Intelligence Artificielle (IOAI) est la compétition annuelle la plus prestigieuse en IA pour les lycéens. Créée en 2023, elle réunit chaque été des équipes de plus de 40 pays et territoires.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-mali-green/20 text-mali-green flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-mali-green"></span>
                        </div>
                        <p><strong>1ʳᵉ édition (2024) :</strong> Burgas, Bulgarie, avec 41 équipes provenant de 32 pays.</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-mali-yellow/20 text-mali-yellow flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-mali-yellow"></span>
                        </div>
                        <p><strong>2ᵉ édition (2025) :</strong> Beijing, Chine - Première participation du Mali</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-mali-red/20 text-mali-red flex items-center justify-center mt-1">
                          <span className="h-2 w-2 rounded-full bg-mali-red"></span>
                        </div>
                        <p><strong>3ᵉ édition (2026) :</strong> Abu Dhabi, United Arab Emirates - Deuxième participation du Mali</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-10">
              <ScrollReveal animation="slide-left" delay={200}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Objectifs de l'IOAI</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-mali-blue">
                      <Brain size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Explorer et Innover</h3>
                      <p className="text-muted-foreground">
                        Offrir aux jeunes l'opportunité d'explorer et d'innover dans le domaine de l'IA.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-mali-blue">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Évaluer les Compétences</h3>
                      <p className="text-muted-foreground">
                        Évaluer des compétences en apprentissage automatique et résolution de problèmes complexes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-mali-blue">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Former la Prochaine Génération</h3>
                      <p className="text-muted-foreground">
                        Former la prochaine génération de pionniers de l'IA et favoriser les échanges internationaux.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-6">L'Aventure IOAI Mali</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="section-subtitle max-w-3xl mx-auto mb-12 md:mb-16">
              Pour la deuxième année consécutive, le Mali participe à l'IOAI grâce à RobotsMali. Notre mission est claire et ambitieuse.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-mali-blue to-mali-blue/80 rounded-xl text-white mb-6 shadow-md">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-mali-dark">Vulgariser</h3>
                <p className="text-muted-foreground flex-grow">
                  Rendre accessible l'IA au plus grand nombre et susciter l'intérêt des jeunes talents à travers tout le Mali.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-mali-green to-mali-green/80 rounded-xl text-white mb-6 shadow-md">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-mali-dark">Sélectionner</h3>
                <p className="text-muted-foreground flex-grow">
                  Identifier les talents locaux parmi les lycéens, élèves des écoles professionnelles et du secondaire (moins de 20 ans en août 2026) pour la compétition internationale.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-mali-yellow to-mali-yellow/80 rounded-xl text-white mb-6 shadow-md">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-mali-dark">Former</h3>
                <p className="text-muted-foreground flex-grow">
                  Offrir des formations en IA à tous les participants, quel que soit leur âge, avec certification RobotsMali.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={400}>
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-mali-red to-mali-red/80 rounded-xl text-white mb-6 shadow-md">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-mali-dark">Représenter</h3>
                <p className="text-muted-foreground flex-grow">
                  Envoyer une équipe nationale compétitive à Abu Dhabi pour représenter fièrement le Mali sur la scène internationale.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in" delay={500} className="mt-12 md:mt-16 text-center">
            <Link 
              to="/application" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-mali-blue text-white font-medium rounded-lg shadow-lg hover:bg-mali-blue/90 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              En savoir plus sur la participation
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
