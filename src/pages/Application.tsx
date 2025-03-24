
import React, { useEffect } from 'react';
import HeroSection from '@/components/application/HeroSection';
import ParticipationSection from '@/components/application/ParticipationSection';
import CriteriaSection from '@/components/application/CriteriaSection';
import ApplicationProcessSection from '@/components/application/ApplicationProcessSection';
import ContactSection from '@/components/application/ContactSection';

const Application = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <ParticipationSection />
      <CriteriaSection />
      <ApplicationProcessSection />
      <ContactSection />
    </div>
  );
};

export default Application;
