
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResultData {
  'Nom Complet': string;
  'Sexe': string;
  'Ville': string;
  'Dernier établissement scolaire': string;
}

const initialResults: ResultData[] = [
  {
    'Nom Complet': 'Halleg Badara Doumbia',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'UIE'
  },
  {
    'Nom Complet': 'Nouh Aly BARRY',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique de Bamako'
  },
  {
    'Nom Complet': 'MAMADOU LAMINE FOFANA',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'lycée TECHNIQUE DE Bamako'
  },
  {
    'Nom Complet': 'Amina Oumar Traoré',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privé les Castors'
  },
  {
    'Nom Complet': 'Kabel Cisse',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Enko International School of Bamako'
  },
  {
    'Nom Complet': 'Cheickna Sidi CISSE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Mamadou BEYE'
  },
  {
    'Nom Complet': 'mariam toure',
    'Sexe': 'Féminin',
    'Ville': 'banako',
    'Dernier établissement scolaire': 'graine d\'eveil'
  },
  {
    'Nom Complet': 'Djan Mande Sacko',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée kalilou fofana de Bougouni'
  },
  {
    'Nom Complet': 'Idrissa Emanuel camara',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Marie Louise Konaté',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privé les castors'
  },
  {
    'Nom Complet': 'Nene awa Oumou Salama Aw',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Bamako'
  },
  {
    'Nom Complet': 'MOHAMED DOUMBIA',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique De Bamako'
  },
  {
    'Nom Complet': 'Ibrahim Djimé Diakité',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Faculté des sciences et techniques de Bamako'
  },
  {
    'Nom Complet': 'Aliétou dite Coumba sidibé',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée planète enfants'
  },
  {
    'Nom Complet': 'Boubacar Diam SANGARE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Faculté des sciences Dhar Marhez'
  },
  {
    'Nom Complet': 'Daouda Diabate',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée soundiata Keita'
  },
  {
    'Nom Complet': 'Sira BAGAYOKO',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique'
  },
  {
    'Nom Complet': 'Abdoul Wahide Maïga',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Abdrahamane samaké',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Aïchata Théra',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privé Karamoko Baba Traoré(LPKABAT)'
  },
  {
    'Nom Complet': 'Adama Dama',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privé Aissata sissoko de Magnanbougou'
  },
  {
    'Nom Complet': 'Ruth SOGOBA',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée planète enfants'
  },
  {
    'Nom Complet': 'abdoulaye nimaga',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'lycée priver la bruyère'
  },
  {
    'Nom Complet': 'Gaoussou koné',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique'
  },
  {
    'Nom Complet': 'Maïmouna Coulibaly',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée les Castors'
  },
  {
    'Nom Complet': 'Felix Ibrahima Malle',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Dembele Bakony',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'ENETP'
  },
  {
    'Nom Complet': 'Cheick Khalif Bilal GUINDO',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Institut Supérieure de Technologie Appliquée et de Gestion'
  },
  {
    'Nom Complet': 'Amouhani Cissé',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Mamadou Beye'
  },
  {
    'Nom Complet': 'Alphady Sadio Diarra',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Planète Enfants'
  },
  {
    'Nom Complet': 'Mamadou diawara',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lekt'
  },
  {
    'Nom Complet': 'Sidi Dit Hasseye Sonfo',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée les castors'
  },
  {
    'Nom Complet': 'Oumar Diakite',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privé MAMA THIAM'
  },
  {
    'Nom Complet': 'Diye Hamidou Diallo',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Complexe Scolaire Aminata Dramane Traoré'
  },
  {
    'Nom Complet': 'Miguel Eli Ziggah',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'MAMOUDOU Guissé',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Biya de Niamana'
  },
  {
    'Nom Complet': 'Clarisse yasségué togo',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Castors'
  },
  {
    'Nom Complet': 'Sambou Coumaré',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privé Mama Thiam'
  },
  {
    'Nom Complet': 'Mohamed Hadissa',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique de Bamako'
  },
  {
    'Nom Complet': 'Idrissa sangaré',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Planète Enfants'
  },
  {
    'Nom Complet': 'Klégnara Abdoul Jabar Bengaly',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privé Ousmane Toure'
  },
  {
    'Nom Complet': 'T Barthelemy Traoré',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée du séminaire Pie XII de Koulikoro'
  },
  {
    'Nom Complet': 'brema issa djiguiba',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'le complexe scolaire le relais des mamans'
  },
  {
    'Nom Complet': 'Samuel DIARRA',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'complexe scolaire le relais des mamas'
  },
  {
    'Nom Complet': 'Youssouf Sekou MAIGA',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Institut du sacré cœur'
  },
  {
    'Nom Complet': 'Mariam Mamadou Mariko',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique de Bamako'
  },
  {
    'Nom Complet': 'Alassane SAMAKE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Djinèssira Coulibaly'
  },
  {
    'Nom Complet': 'Mariam F Sidibé',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Planète enfants'
  },
  {
    'Nom Complet': 'Hamidou Diallo',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privée les grands Hogons'
  },
  {
    'Nom Complet': 'Alfoussein Ballo',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique de Bamako'
  },
  {
    'Nom Complet': 'Aymane DEMBELE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Faculté des Sciences et Techniques - Bamako'
  },
  {
    'Nom Complet': 'TANGARA ABDOULAYE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Faculté des sciences économiques et de gestion'
  },
  {
    'Nom Complet': 'Mamadou Lamine Magassouba',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Gnetaaso(LGN)'
  },
  {
    'Nom Complet': 'Hawa Diallo',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'ITMA'
  },
  {
    'Nom Complet': 'Mohamadou Togola',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privé Les Grands Hogons'
  },
  {
    'Nom Complet': 'Abdoulaye Issa Dessoh',
    'Sexe': 'Masculin',
    'Ville': 'Kati',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Issa Coulibaly',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Abdoul Karim Hamadoun Cissé',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycé Maarif de Sébénikoro'
  },
  {
    'Nom Complet': 'Salif Keita',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privée LaTigana'
  },
  {
    'Nom Complet': 'Souleymane FOMBA',
    'Sexe': 'Masculin',
    'Ville': 'Koulikoro',
    'Dernier établissement scolaire': 'INSTITUT POLYTECHNIQUE RURAL DE FORMATION ET DE RECHERCHE APPLIQUÉE'
  },
  {
    'Nom Complet': 'Arsiké Bah',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Écoles Normale d\'Enseignement Technique et Professionnelle'
  },
  {
    'Nom Complet': 'Hamidou YALCOUYÉ',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Sacré Cœur'
  },
  {
    'Nom Complet': 'Kamanan jean ives DIARRA',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée privé Gnetasso'
  },
  {
    'Nom Complet': 'Bintou Doumbia',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée El Hadj Karim Traoré'
  },
  {
    'Nom Complet': 'Alpha Raha Cissé',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée El hadj Karim Traoré'
  },
  {
    'Nom Complet': 'Diamory Ibrahima Koné',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Aminata Dramane Traoré'
  },
  {
    'Nom Complet': 'Fatoumata Sidibé',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'LYCÉE PRIVÉ LES GRANDS HOGONS'
  },
  {
    'Nom Complet': 'Bodé Niangadou',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Technolab-Ista'
  },
  {
    'Nom Complet': 'Nana Siriki Keïta',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'ENI-ABT'
  },
  {
    'Nom Complet': 'Ramata Ziré Dao',
    'Sexe': 'Féminin',
    'Ville': 'Koulikoro',
    'Dernier établissement scolaire': 'Lycée pie Xll'
  },
  {
    'Nom Complet': 'Adama moussa Traoré',
    'Sexe': 'Masculin',
    'Ville': 'Kati',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Issa Doumbia',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée El Hadji Karim Traoré'
  },
  {
    'Nom Complet': 'Adama Koné',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Ecole Nationale d\'Ingenieurs'
  },
  {
    'Nom Complet': 'Mahalmadane laïla yattara',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Gnetaaso de N\'tabacoro'
  },
  {
    'Nom Complet': 'Alou Gueye',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée soundiata Keita'
  },
  {
    'Nom Complet': 'Nènè Satourou Coumaré',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'École nationale d\'ingénieurs Abderhamane Baba Touré'
  },
  {
    'Nom Complet': 'Alfousséni Mambé Soumaré',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Privé les Grands Hogons'
  },
  {
    'Nom Complet': 'Doussouba Diarra',
    'Sexe': 'Féminin',
    'Ville': 'Ségou',
    'Dernier établissement scolaire': 'Lycée privé Cheick Modibo'
  },
  {
    'Nom Complet': 'Awa Diarra',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Complexe Scolaire Aminata Dramane Traoré'
  },
  {
    'Nom Complet': 'Nana Kadidia Diarra',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Planète Enfants'
  },
  {
    'Nom Complet': 'Kadidiatou Thienta',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Planète enfants'
  },
  {
    'Nom Complet': 'Aboubacar Diarra',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycee ba fanta coulibaly de djelibougou'
  },
  {
    'Nom Complet': 'Marie Madeleine Camara',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée planète enfants'
  },
  {
    'Nom Complet': 'Mohamed Diallo',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée planète enfants'
  },
  {
    'Nom Complet': 'Aboubacrine ASCOFARE',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Technique'
  },
  {
    'Nom Complet': 'Mamet Gakou',
    'Sexe': 'Masculin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée technique de Bamako'
  },
  {
    'Nom Complet': 'Aminatou Wallet Inorène',
    'Sexe': 'Féminin',
    'Ville': 'Bamako',
    'Dernier établissement scolaire': 'Lycée Les Grand Hogon'
  }
];

const Results = () => {
  const [results] = useState<ResultData[]>(initialResults);
  const [selectedResult, setSelectedResult] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const { toast } = useToast();

  const handleDeleteResult = (index: number) => {
    // This is a placeholder for the delete functionality
    // In a real application, you would delete the result from your database
    toast({
      title: "Résultat supprimé",
      description: "Le résultat a été supprimé avec succès",
    });
    setSelectedResult(null);
  };

  // Calculate pagination values
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Display limited page numbers with ellipsis
  const maxPageButtons = 5;
  let pagesToShow = [];
  
  if (totalPages <= maxPageButtons) {
    pagesToShow = pageNumbers;
  } else {
    const leftSide = Math.floor(maxPageButtons / 2);
    const rightSide = maxPageButtons - leftSide - 1;
    
    if (currentPage <= leftSide + 1) {
      // Near the start
      pagesToShow = [...pageNumbers.slice(0, maxPageButtons - 1), "ellipsis", totalPages];
    } else if (currentPage >= totalPages - rightSide) {
      // Near the end
      pagesToShow = [1, "ellipsis", ...pageNumbers.slice(totalPages - maxPageButtons + 1)];
    } else {
      // In the middle
      pagesToShow = [
        1,
        "ellipsisFront",
        ...pageNumbers.slice(currentPage - 2, currentPage + 1),
        "ellipsisBack",
        totalPages
      ];
    }
  }

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
              <div className="mb-4">
                <p className="text-muted-foreground">
                  Affichage de {indexOfFirstResult + 1}-{Math.min(indexOfLastResult, results.length)} sur {results.length} résultats
                </p>
              </div>
              <ScrollArea className="h-[500px]">
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
                    {currentResults.map((result, index) => (
                      <TableRow key={index + indexOfFirstResult}>
                        <TableCell>{result['Nom Complet']}</TableCell>
                        <TableCell>{result['Sexe']}</TableCell>
                        <TableCell>{result['Ville']}</TableCell>
                        <TableCell>{result['Dernier établissement scolaire']}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => console.log('Edit', index + indexOfFirstResult)}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <Pencil className="w-4 h-4 text-blue-600" />
                            </button>
                            <button
                              onClick={() => setSelectedResult(index + indexOfFirstResult)}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
              
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={prevPage} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
                  </PaginationItem>
                  
                  {pagesToShow.map((page, i) => 
                    page === "ellipsis" || page === "ellipsisFront" || page === "ellipsisBack" ? (
                      <PaginationItem key={`ellipsis-${i}`}>
                        <div className="flex h-9 w-9 items-center justify-center">...</div>
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={`page-${page}`}>
                        <PaginationLink 
                          isActive={currentPage === page} 
                          onClick={() => changePage(Number(page))}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}
                  
                  <PaginationItem>
                    <PaginationNext onClick={nextPage} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
