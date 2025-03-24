
import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface CriteriaItemProps {
  title: string;
  description: string;
  delay?: number;
  iconColor?: string;
}

const CriteriaItem: React.FC<CriteriaItemProps> = ({ 
  title, 
  description, 
  delay = 0,
  iconColor = "#0056B3" 
}) => (
  <ScrollReveal animation="fade-in" delay={delay}>
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle size={20} style={{ color: iconColor }} />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </ScrollReveal>
);

export default CriteriaItem;
