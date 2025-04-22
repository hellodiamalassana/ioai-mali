
import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileSpreadsheet, Pencil, Trash2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

interface ResultData {
  'Nom Complet': string;
  'Sexe': string;
  'Ville': string;
  'Dernier établissement scolaire': string;
}

const Results = () => {
  const [results, setResults] = useState<ResultData[]>([]);
  const [selectedResult, setSelectedResult] = useState<number | null>(null);
  const { toast } = useToast();

  const handleDeleteResult = (index: number) => {
    const newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
    setSelectedResult(null);
    toast({
      title: "Résultat supprimé",
      description: "Le résultat a été supprimé avec succès",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="w-6 h-6 text-green-600" />
                <CardTitle>Résultats de la Phase 1 - IOAI 2025</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom Complet</TableHead>
                      <TableHead>Sexe</TableHead>
                      <TableHead>Ville</TableHead>
                      <TableHead>Dernier établissement scolaire</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.length > 0 ? (
                      results.map((result, index) => (
                        <TableRow key={index}>
                          <TableCell>{result['Nom Complet']}</TableCell>
                          <TableCell>{result['Sexe']}</TableCell>
                          <TableCell>{result['Ville']}</TableCell>
                          <TableCell>{result['Dernier établissement scolaire']}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => console.log('Edit', index)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                              >
                                <Pencil className="w-4 h-4 text-blue-600" />
                              </button>
                              <button
                                onClick={() => setSelectedResult(index)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell className="text-center" colSpan={5}>
                          Aucun résultat disponible
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

      <AlertDialog open={selectedResult !== null} onOpenChange={() => setSelectedResult(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmer la suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer ce résultat ? Cette action ne peut pas être annulée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => selectedResult !== null && handleDeleteResult(selectedResult)}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Results;
