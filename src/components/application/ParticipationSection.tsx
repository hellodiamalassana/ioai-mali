import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { GraduationCap, User, Trophy, BookOpen } from 'lucide-react';

const ParticipationSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16 text-mali-dark">Catégories de Participation</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="h-full rounded-xl p-6 md:p-8 border-2 border-mali-blue/30 shadow-lg bg-gradient-to-br from-mali-blue to-mali-blue/90 text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur rounded-xl mb-5 shadow-md">
                <Trophy size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Catégorie Internationale</h3>
              <p className="text-sm md:text-base opacity-90 mb-2">Pour aller à Abu Dhabi</p>
              <p className="text-base md:text-lg font-semibold mb-4 bg-white/20 backdrop-blur rounded-lg p-3">
                PARCOURS COMPLET : Phases 1, 2, 3, 4 ET 5
              </p>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                Destinée aux lycéens, élèves et jeunes professionnels dont l'âge ne dépasse pas 20 ans en août 2026. Les meilleurs représenteront le Mali à l'IOAI à Abu Dhabi.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 md:p-5 bg-white/20 backdrop-blur rounded-lg">
                  <h4 className="font-semibold text-sm md:text-base mb-3 flex items-center gap-2">
                    <User size={18} />
                    Pour qui ?
                  </h4>
                  <ul className="text-xs md:text-sm space-y-2">
                    <li>• Lycéens et élèves de l'école fondamentale</li>
                    <li>• Élèves des écoles professionnelles</li>
                    <li>• Jeunes professionnels (MOINS DE 20 ANS en août 2026)</li>
                  </ul>
                </div>
                
                <div className="p-4 md:p-5 bg-white/20 backdrop-blur rounded-lg">
                  <h4 className="font-semibold text-sm md:text-base mb-3">Objectif final :</h4>
                  <ul className="text-xs md:text-sm space-y-2">
                    <li>✓ Participer aux 5 phases de sélection</li>
                    <li>✓ Stage intensif à RobotsMali AI4D Lab</li>
                    <li>✓ Sélection de 4 participants pour Abu Dhabi</li>
                    <li>✓ Voyage tout frais payés (2-8 août 2026)</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="h-full rounded-xl p-6 md:p-8 border-2 border-mali-green/30 shadow-lg bg-gradient-to-br from-mali-green to-mali-green/90 text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur rounded-xl mb-5 shadow-md">
                <BookOpen size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4">Catégorie Nationale</h3>
              <p className="text-sm md:text-base opacity-90 mb-2">Pour tous - Formation & Certification</p>
              <p className="text-base md:text-lg font-semibold mb-4 bg-white/20 backdrop-blur rounded-lg p-3">
                PARCOURS FORMATION : Phases 1, 2, 3 + Certification
              </p>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                Ouverte aux universitaires et au grand public. Cette catégorie vise à promouvoir l'apprentissage de l'IA à l'échelle nationale avec certification RobotsMali.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 md:p-5 bg-white/20 backdrop-blur rounded-lg">
                  <h4 className="font-semibold text-sm md:text-base mb-3 flex items-center gap-2">
                    <User size={18} />
                    Pour qui ?
                  </h4>
                  <ul className="text-xs md:text-sm space-y-2">
                    <li>• Étudiants universitaires</li>
                    <li>• Professionnels de tous âges</li>
                    <li>• Toute personne intéressée par l'IA</li>
                  </ul>
                </div>
                
                <div className="p-4 md:p-5 bg-white/20 backdrop-blur rounded-lg">
                  <h4 className="font-semibold text-sm md:text-base mb-3">Objectif final :</h4>
                  <ul className="text-xs md:text-sm space-y-2">
                    <li>✓ Parcourir les phases 1, 2 et 3</li>
                    <li>✓ Développer des compétences en IA</li>
                    <li>✓ Obtenir une CERTIFICATION ROBOTSMALI (8 mars 2026)</li>
                    <li className="font-bold">✗ PAS de Phase 4, 5 ni voyage à Abu Dhabi</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Tableau comparatif */}
        <ScrollReveal animation="fade-in" delay={300}>
          <div className="mt-12 md:mt-16 bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center">Tableau Comparatif des Catégories</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="p-3 md:p-4 border-b-2 border-gray-300 font-bold"></th>
                    <th className="p-3 md:p-4 border-b-2 border-gray-300 font-bold text-center text-mali-blue">Catégorie Internationale</th>
                    <th className="p-3 md:p-4 border-b-2 border-gray-300 font-bold text-center text-mali-green">Catégorie Nationale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 md:p-4 font-semibold">Âge requis</td>
                    <td className="p-3 md:p-4 text-center">Moins de 20 ans (août 2026)</td>
                    <td className="p-3 md:p-4 text-center">Tous âges</td>
                  </tr>
                  <tr className="border-b bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 md:p-4 font-semibold">Phase 1</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 md:p-4 font-semibold">Phase 2</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr className="border-b bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 md:p-4 font-semibold">Phase 3</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 md:p-4 font-semibold">Certification RobotsMali</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓ (fin parcours)</td>
                  </tr>
                  <tr className="border-b bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 md:p-4 font-semibold">Phase 4</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-red-600 font-bold">✗</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-3 md:p-4 font-semibold">Phase 5 (Stage final)</td>
                    <td className="p-3 md:p-4 text-center text-green-600 font-bold">✓</td>
                    <td className="p-3 md:p-4 text-center text-red-600 font-bold">✗</td>
                  </tr>
                  <tr className="border-b bg-gray-50 hover:bg-gray-100">
                    <td className="p-3 md:p-4 font-semibold">Voyage Abu Dhabi</td>
                    <td className="p-3 md:p-4 text-center font-bold text-mali-blue">✓ (4 sélectionnés)</td>
                    <td className="p-3 md:p-4 text-center text-red-600 font-bold">✗</td>
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