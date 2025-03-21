
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ExternalLink, BookOpen, Code, Brain, Database, MessageSquare, Image, Network, Monitor } from 'lucide-react';

// Resource card component
interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, link, delay = 0 }) => (
  <ScrollReveal animation="slide-up" delay={delay} className="h-full">
    <div className="bg-white rounded-xl border border-blue-100 shadow-sm p-6 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg text-mali-blue mb-4 flex-shrink-0">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-mali-blue font-medium hover:underline mt-auto text-sm"
      >
        En savoir plus
        <ExternalLink size={14} />
      </a>
    </div>
  </ScrollReveal>
);

const Resources = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Resources data
  const resources = [
    {
      icon: <Code size={20} />,
      title: "Python",
      description: "Le langage de programmation incontournable pour développer des modèles d'IA.",
      link: "https://www.python.org/",
    },
    {
      icon: <Database size={20} />,
      title: "PyTorch",
      description: "Un framework puissant et flexible pour construire et entraîner des modèles de machine learning.",
      link: "https://pytorch.org/",
    },
    {
      icon: <Brain size={20} />,
      title: "Apprentissage Automatique",
      description: "Cours et tutoriels pour maîtriser les bases et les applications pratiques, avec focus sur les leçons 1 à 5 et 11 à 13.",
      link: "https://www.coursera.org/learn/machine-learning",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "Traitement du Langage Naturel",
      description: "Utilisez le manuel « Traitement de la parole et du langage » pour comprendre les concepts clés de la PNL.",
      link: "https://web.stanford.edu/~jurafsky/slp3/",
    },
    {
      icon: <Code size={20} />,
      title: "Word Embeddings",
      description: "Découvrez comment fonctionne l'algorithme word2vec et ses applications pour traiter le texte.",
      link: "https://www.tensorflow.org/tutorials/text/word_embeddings",
    },
    {
      icon: <Network size={20} />,
      title: "Transformers",
      description: "Apprenez l'architecture qui a révolutionné le traitement de texte et d'images grâce à sa parallélisabilité.",
      link: "https://huggingface.co/docs/transformers/index",
    },
    {
      icon: <Brain size={20} />,
      title: "Modélisation Générative",
      description: "Introduction aux modèles génératifs, avec le référentiel d'Andrej Karpathy comme référence pratique.",
      link: "https://github.com/karpathy/nanoGPT",
    },
    {
      icon: <Image size={20} />,
      title: "Vision par Ordinateur",
      description: "Cours sur les fondamentaux du deep learning pour la reconnaissance et la classification d'images.",
      link: "https://www.fast.ai/",
    },
    {
      icon: <Monitor size={20} />,
      title: "Deep Learning",
      description: "Suivez le cours de Andrew Ng et explorez le manuel interactif sur d2l.ai pour une immersion complète dans le deep learning.",
      link: "https://d2l.ai/",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Ressources et Formation pour l'IOAI Mali
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
              Nous mettons à votre disposition un ensemble complet de ressources pédagogiques pour vous aider à vous préparer aux défis de l'IA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <div className="bg-gradient-to-r from-mali-blue to-blue-600 text-white rounded-xl p-8 md:p-10 mb-16 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen size={28} className="text-white" />
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-3">Cours en Ligne Gratuit</h2>
                  <p className="text-white/90 mb-4 max-w-3xl">
                    Accédez à un cours complet sur l'intelligence artificielle, la programmation et l'apprentissage automatique, disponible avant l'annonce des sujets scientifiques.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-mali-blue px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors"
                  >
                    Accéder au cours
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={200}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Supports Pédagogiques Essentiels</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Ces ressources ont été sélectionnées pour vous aider à acquérir les connaissances fondamentales et à développer vos compétences pratiques.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                delay={100 + index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Tutoriels & Vidéos</h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              En plus des ressources ci-dessus, nous mettons à votre disposition des tutoriels et des vidéos pour vous accompagner dans votre apprentissage.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={300}>
            <div className="inline-flex items-center gap-2 bg-mali-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-mali-blue/90 transition-colors shadow-md">
              Accéder aux Tutoriels & Vidéos
              <ExternalLink size={18} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Resources;
