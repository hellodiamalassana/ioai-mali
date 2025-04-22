
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-3xl font-semibold mb-8">
              Résultats
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in">
            <h2 className="text-2xl font-semibold mb-4">
              Liste des 268 candidat·e·s qualifié·e·s
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="overflow-x-auto rounded-lg shadow-sm">
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBxjqiFko0Vcb0NlS1waChk0mv8RtRopI6V9Blns02sQdeK14vupwThSe0bsEzO0P4cQ8y-EqLx2HN/pubhtml?gid=100934450&amp;single=true&amp;widget=true&amp;headers=false"
                className="w-full border-0 h-64 sm:h-96 md:h-[600px]"
                loading="lazy"
                title="Liste des candidats qualifiés"
                allowFullScreen
              />
            </div>
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-mali-red text-mali-red hover:bg-mali-red/10"
                onClick={() => window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vQBxjqiFko0Vcb0NlS1waChk0mv8RtRopI6V9Blns02sQdeK14vupwThSe0bsEzO0P4cQ8y-EqLx2HN/pub?output=pdf", "_blank")}
              >
                <Download size={18} />
                Version PDF
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Pour une meilleure expérience, visualisez directement la liste dans l'iframe ci-dessus.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Results;
