
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
        variant: "default",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "info@robotsmali.org",
      link: "mailto:info@robotsmali.org",
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "+223 73 65 55 01",
      link: "tel:+22373655501",
    },
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      value: "SEBENIKORO COMMUNE IV, Rue: 00394 Porte: 08 Bamako, Mali",
      link: "https://maps.google.com/maps?q=SEBENIKORO+COMMUNE+IV,+Rue:+00394+Porte:+08+Bamako,+Mali",
    },
  ];

  const socialMedia = [
    { icon: <Facebook size={20} />, name: "Facebook", link: "#" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", link: "#" },
    { icon: <Youtube size={20} />, name: "Youtube", link: "#" },
    { icon: <Instagram size={20} />, name: "Instagram", link: "#" },
    { icon: <Twitter size={20} />, name: "X-twitter", link: "#" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Contactez-nous
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in" delay={200}>
            <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8">
              Pour toute question, demande d'information ou assistance, n'hésitez pas à nous joindre. Notre équipe est à votre disposition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-8">Nos coordonnées</h2>
              </ScrollReveal>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={index} animation="slide-right" delay={100 * index}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-mali-blue flex-shrink-0">
                        {item.icon}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-mali-blue transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal animation="fade-in" delay={400}>
                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialMedia.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link} 
                        className="p-3 bg-gray-100 hover:bg-blue-100 text-muted-foreground hover:text-mali-blue rounded-full transition-colors flex items-center justify-center"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-2">
              <ScrollReveal animation="fade-in">
                <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
              </ScrollReveal>
              
              <ScrollReveal animation="slide-up" delay={200}>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-blue focus:border-transparent outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-blue focus:border-transparent outline-none transition-colors"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-blue focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="application">Candidature ONIA</option>
                      <option value="sponsorship">Partenariat / Sponsoring</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-blue focus:border-transparent outline-none transition-colors resize-none"
                      placeholder="Votre message ici..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-mali-blue text-white font-medium rounded-lg shadow-md hover:bg-mali-blue/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
