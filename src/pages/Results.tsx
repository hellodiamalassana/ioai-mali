
import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, Upload } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { read, utils } from 'xlsx';
import { useToast } from '@/hooks/use-toast';

interface ResultData {
  Rang: number;
  Nom: string;
  Score: string;
  Statut: string;
}

const Results = () => {
  const [results, setResults] = useState<ResultData[]>([]);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const data = await file.arrayBuffer();
      const workbook = read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json<ResultData>(worksheet);

      setResults(jsonData);
      toast({
        title: "Fichier chargé avec succès",
        description: `${jsonData.length} résultats importés`,
      });
    } catch (error) {
      toast({
        title: "Erreur lors du chargement",
        description: "Le format du fichier n'est pas valide",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-6 h-6 text-green-600" />
                  <CardTitle>Résultats de la Phase 1 - IOAI 2025</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    <label className="cursor-pointer">
                      Importer Excel
                      <input
                        type="file"
                        accept=".xlsx,.xls"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rang</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Statut</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.length > 0 ? (
                      results.map((result, index) => (
                        <TableRow key={index}>
                          <TableCell>{result.Rang}</TableCell>
                          <TableCell>{result.Nom}</TableCell>
                          <TableCell>{result.Score}</TableCell>
                          <TableCell className={result.Statut.toLowerCase() === 'qualifié' ? 'text-green-600' : ''}>
                            {result.Statut}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell className="text-center" colSpan={4}>
                          Importez un fichier Excel pour voir les résultats
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Results;
