
import React from "react";
import { AlertCircle } from "lucide-react";

const ImportantInfo: React.FC = () => (
  <div className="w-full max-w-2xl mx-auto bg-mali-yellow/20 border border-mali-yellow/70 rounded-xl px-6 py-5 mb-6 flex flex-col gap-2 shadow-md animate-fade-in">
    <div className="flex items-center gap-2 mb-2">
      <AlertCircle className="text-mali-yellow" size={22} />
      <span className="uppercase font-semibold text-mali-dark text-lg tracking-wide">
        Informations importantes
      </span>
    </div>
    <ul className="list-disc pl-6 text-mali-dark space-y-1 font-medium">
      <li>
        <span className="font-semibold">Début des tests&nbsp;:</span> 4 avril 2025
      </li>
      <li>
        <span className="font-semibold">Code d'accès personnel</span> envoyé après inscription
      </li>
      <li>
        <span className="font-semibold">Places limitées à 1000 participants</span>
      </li>
      <li>
        <span className="font-semibold">La Phase 1 est accessible à tous les niveaux</span>
      </li>
      <li>
        Contactez-nous à <a href="mailto:info@robotsmali.org" className="text-mali-blue underline hover:text-mali-red transition-colors">info@robotsmali.org</a>
      </li>
    </ul>
  </div>
);

export default ImportantInfo;
