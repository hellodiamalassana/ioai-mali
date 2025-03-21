import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-mali-blue font-display text-2xl font-bold">RobotsMali</span>
              <div className="flex gap-0.5">
                <div className="w-2 h-2 rounded-full bg-mali-green"></div>
                <div className="w-2 h-2 rounded-full bg-mali-yellow"></div>
                <div className="w-2 h-2 rounded-full bg-mali-red"></div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Coordinateur national pour l'Olympiade Internationale d'Intelligence Artificielle au Mali
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-mali-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-mali-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-mali-blue transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-mali-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-mali-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-mali-blue transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-mali-blue transition-colors">IOAI</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-mali-blue transition-colors">Ressources</Link></li>
              <li><Link to="/sponsors" className="text-muted-foreground hover:text-mali-blue transition-colors">Sponsors</Link></li>
              <li><Link to="/application" className="text-muted-foreground hover:text-mali-blue transition-colors">Candidature</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Email: info@robotsmali.org</li>
              <li className="text-muted-foreground">Téléphone: +223 73 65 55 01</li>
              <li className="text-muted-foreground">Adresse: SEBENIKORO COMMUNE IV, Rue: 00394 Porte: 08 Bamako, Mali</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} RobotsMali. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-mali-blue transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-mali-blue transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
