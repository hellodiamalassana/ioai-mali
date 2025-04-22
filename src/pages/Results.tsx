
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileSpreadsheet } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Results = () => {
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
                      <TableHead>Rang</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Statut</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Participant #123</TableCell>
                      <TableCell>95/100</TableCell>
                      <TableCell className="text-green-600">Qualifié</TableCell>
                    </TableRow>
                    {/* Ajoutez plus de lignes selon vos données */}
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
