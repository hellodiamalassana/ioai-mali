import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GraduationCap, User, Trophy, BookOpen } from 'lucide-react';

const ParticipationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title mb-8 text-mali-dark">Catégories de Participation</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <ScrollReveal animation="fade-in" delay={100} className="h-full">
            <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-mali-blue to-mali-blue/90 text-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                <Trophy size={24} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">Catégorie Internationale (Pour aller à Abu Dhabi)</h3>
              <p className="text-lg font-medium mb-2 bg-white/20 backdrop-blur rounded-lg p-2">
                PARCOURS COMPLET : Phases 1, 2, 3, 4 ET 5
              </p>
              <p className="mb-4 flex-grow">
                Destinée aux lycéens, élèves et jeunes professionnels dont l'âge ne dépasse pas 20 ans en août 2026. Les meilleurs représenteront le Mali à l'IOAI à Abu Dhabi.
              </p>
              
              <div className="mb-6 p-4 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <User size={16} />
                  Pour qui ?
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Lycéens et élèves de l'école fondamentale</li>
                  <li>• Élèves des écoles professionnelles</li>
                  <li>• Jeunes professionnels (MOINS DE 20 ANS en août 2026)</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Objectif final :</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Participer aux 5 phases de sélection</li>
                  <li>✓ Stage intensif à RobotsMali AI4D Lab (Phase 5)</li>
                  <li>✓ Sélection de 4 participants pour Abu Dhabi</li>
                  <li>✓ Voyage tout frais payés (2-8 août 2026)</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200} className="h-full">
            <div className="h-full rounded-xl p-6 border shadow-sm bg-gradient-to-br from-mali-green to-mali-green/90 text-white">
              <div className="w-12 h-12 flex items-center justify-center bg-white/50 backdrop-blur rounded-lg mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">Catégorie Nationale (Pour tous - Formation & Certification)</h3>
              <p className="text-lg font-medium mb-2 bg-white/20 backdrop-blur rounded-lg p-2">
                PARCOURS FORMATION : Phases 1, 2, 3 + Certification
              </p>
              <p className="mb-4 flex-grow">
                Ouverte aux universitaires et au grand public. Cette catégorie vise à promouvoir l'apprentissage de l'IA à l'échelle nationale avec certification RobotsMali.
              </p>
              
              <div className="mb-6 p-4 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <User size={16} />
                  Pour qui ?
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• Étudiants universitaires</li>
                  <li>• Professionnels de tous âges</li>
                  <li>• Toute personne intéressée par l'IA</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white/30 backdrop-blur rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Objectif final :</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Parcourir les phases 1, 2 et 3</li>
                  <li>✓ Développer des compétences en IA</li>
                  <li>✓ Obtenir une CERTIFICATION ROBOTSMALI (à partir du 8 mars 2026)</li>
                  <li className="font-bold">✗ PAS de Phase 4</li>
                  <li className="font-bold">✗ PAS de Phase 5 (stage final)</li>
                  <li className="font-bold">✗ PAS de voyage à Abu Dhabi</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Tableau comparatif */}
        <ScrollReveal animation="fade-in" delay={300}>
          <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-2xl font-semibold mb-6 text-center">Tableau Comparatif des Catégories</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-3 border-b font-semibold"></th>
                    <th className="p-3 border-b font-semibold text-center text-mali-blue">Catégorie Internationale</th>
                    <th className="p-3 border-b font-semibold text-center text-mali-green">Catégorie Nationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Âge requis</td>
                    <td className="p-3 text-center">Moins de 20 ans (août 2026)</td>
                    <td className="p-3 text-center">Tous âges</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">Phase 1</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Phase 2</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✓</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">Phase 3</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Certification RobotsMali</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✓ (fin parcours)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">Phase 4</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Phase 5 (Stage final)</td>
                    <td className="p-3 text-center">✓</td>
                    <td className="p-3 text-center">✗</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 font-medium">Voyage Abu Dhabi</td>
                    <td className="p-3 text-center font-bold text-mali-blue">✓ (4 sélectionnés)</td>
                    <td className="p-3 text-center">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ParticipationSection;