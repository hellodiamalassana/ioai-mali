
import React, { useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/button';
import { MedalIcon, FileText, Download } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample results data
  const resultsData = [
    { rank: 1, name: "Ahmed Diallo", school: "Lycée Askia Mohamed", region: "Bamako", score: 97 },
    { rank: 2, name: "Fatoumata Coulibaly", school: "Lycée Technique de Bamako", region: "Bamako", score: 95 },
    { rank: 3, name: "Ibrahim Touré", school: "Lycée Soundiata Keita", region: "Kayes", score: 92 },
    { rank: 4, name: "Aminata Traoré", school: "Lycée Dougoukolo Konaré", region: "Sikasso", score: 90 },
    { rank: 5, name: "Oumar Keita", school: "Lycée Massa Makan Diabaté", region: "Ségou", score: 89 },
    { rank: 6, name: "Kadiatou Sylla", school: "Lycée Mahamane Alassane Haïdara", region: "Tombouctou", score: 87 },
    { rank: 7, name: "Mamadou Sanogo", school: "Lycée Hamadoun Dicko", region: "Mopti", score: 86 },
    { rank: 8, name: "Aïcha Konaté", school: "Lycée Tènèmba Diakité", region: "Koulikoro", score: 84 },
    { rank: 9, name: "Seydou Sidibé", school: "Lycée Abdoul Karim Camara", region: "Gao", score: 83 },
    { rank: 10, name: "Hawa Dembélé", school: "Lycée Monseigneur Luc Sangaré", region: "Bamako", score: 82 },
  ];

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
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText size={16} />
                  Voir attestation
                </Button>
                <Button className="flex items-center gap-2 bg-mali-red hover:bg-mali-red/80">
                  <Download size={16} />
                  Télécharger PDF
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={300} className="mb-6">
            <div className="bg-white rounded-lg shadow-sm border p-1">
              <Table>
                <TableCaption>Les 10 meilleurs participants de la Phase 1</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] text-center">Rang</TableHead>
                    <TableHead>Nom Complet</TableHead>
                    <TableHead className="hidden md:table-cell">Établissement</TableHead>
                    <TableHead className="hidden sm:table-cell">Région</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {resultsData.map((result) => (
                    <TableRow key={result.rank} className={result.rank <= 3 ? "bg-amber-50" : ""}>
                      <TableCell className="text-center font-medium">
                        {result.rank <= 3 ? (
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-200 text-amber-900">
                            {result.rank}
                          </span>
                        ) : (
                          result.rank
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{result.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{result.school}</TableCell>
                      <TableCell className="hidden sm:table-cell">{result.region}</TableCell>
                      <TableCell className="text-right">{result.score}/100</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={400}>
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Results;
