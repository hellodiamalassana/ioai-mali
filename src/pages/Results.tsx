
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
              Résultats de la Phase 1
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={200}>
            <Alert className="bg-yellow-50 border-yellow-200">
              <Clock className="h-5 w-5 text-yellow-500 mr-2" />
              <AlertDescription className="text-yellow-700 font-semibold">
                Les résultats de la Phase 1 seront disponibles le 23 avril 2025 à 00h00 GMT
              </AlertDescription>
            </Alert>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Results;

