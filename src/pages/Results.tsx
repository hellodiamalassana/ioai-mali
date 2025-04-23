
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { MedalIcon, FileText, Download } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadPDF = () => {
    // Create a link to the PDF file
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQBxjqiFko0Vcb0NlS1waChk0mv8RtRopI6V9Blns02sQdeK14vupwThSe0bsEzO0P4cQ8y-EqLx2HN/pub?output=pdf';
    link.setAttribute('download', 'Resultats_Phase1_IOAI.pdf');
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCertificate = () => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vQBxjqiFko0Vcb0NlS1waChk0mv8RtRopI6V9Blns02sQdeK14vupwThSe0bsEzO0P4cQ8y-EqLx2HN/pub', '_blank');
  };

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
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
              <Alert className="bg-green-50 border-green-200 w-full sm:w-auto">
                <MedalIcon className="h-5 w-5 text-green-500 mr-2" />
                <AlertDescription className="text-green-700 font-semibold">
                  Félicitations à tous les participants qualifiés !
                </AlertDescription>
              </Alert>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={handleViewCertificate}
                >
                  <FileText size={16} />
                  Voir attestation
                </Button>
                <Button 
                  className="flex items-center gap-2 bg-mali-red hover:bg-mali-red/80"
                  onClick={handleDownloadPDF}
                >
                  <Download size={16} />
                  Télécharger PDF
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={300} className="mb-6">
            <div className="bg-white rounded-lg shadow-sm border p-4 w-full">
              <iframe 
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBxjqiFko0Vcb0NlS1waChk0mv8RtRopI6V9Blns02sQdeK14vupwThSe0bsEzO0P4cQ8y-EqLx2HN/pubhtml?gid=100934450&amp;single=true&amp;widget=true&amp;headers=false" 
                className="w-full border-0"
                style={{ height: "600px" }}
                title="Résultats de la Phase 1"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Results;
