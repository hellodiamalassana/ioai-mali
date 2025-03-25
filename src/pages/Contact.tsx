import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères."
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide."
  }),
  subject: z.string().min(1, {
    message: "Veuillez sélectionner un sujet."
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères."
  })
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showDirectEmailInfo, setShowDirectEmailInfo] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Préparer les données du formulaire
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('subject', values.subject);
      formData.append('message', values.message);
      
      // Envoyer le formulaire avec FormSubmit
      const response = await fetch('https://formsubmit.co/info@robotsmali.org', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        
        toast({
          title: "Formulaire envoyé avec succès",
          description: "Nous vous contacterons dès que possible.",
          variant: "default",
        });
        
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      setShowDirectEmailInfo(true);
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-b from-red-50 to-white py-16 md:py-24">
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
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-mali-red flex-shrink-0">
                        {item.icon}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-mali-red transition-colors"
                          target={item.title === "Adresse" ? "_blank" : undefined}
                          rel={item.title === "Adresse" ? "noopener noreferrer" : undefined}
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
                        className="p-3 bg-gray-100 hover:bg-red-100 text-muted-foreground hover:text-mali-red rounded-full transition-colors flex items-center justify-center"
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
              
              {showDirectEmailInfo && (
                <ScrollReveal animation="fade-in" delay={100}>
                  <Alert className="mb-6 bg-blue-50 border-blue-200">
                    <AlertCircle className="h-5 w-5 text-blue-500" />
                    <AlertDescription className="text-blue-700">
                      Pour nous contacter plus rapidement, veuillez nous envoyer un email directement à{' '}
                      <a 
                        href="mailto:info@robotsmali.org"
                        className="font-medium text-blue-700 underline"
                      >
                        info@robotsmali.org
                      </a>
                    </AlertDescription>
                  </Alert>
                </ScrollReveal>
              )}
              
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  {formSubmitted ? (
                    <div className="text-center py-10">
                      <div className="mb-6 text-mali-red">
                        <Mail size={64} className="mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Merci pour votre message!</h3>
                      <p className="text-muted-foreground mb-8 text-lg">
                        Nous avons bien reçu votre message et nous vous contacterons dès que possible.
                      </p>
                      <Button
                        onClick={() => setFormSubmitted(false)}
                        variant="outline"
                        size="lg"
                        className="border-mali-red text-mali-red hover:bg-red-50"
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <form 
                      action="https://formsubmit.co/info@robotsmali.org" 
                      method="POST"
                      className="space-y-6"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_subject" value="Nouveau message de Robots Mali: {subject}" />
                      <input type="hidden" name="_template" value="box" />
                      <input type="hidden" name="_next" value={window.location.href} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Nom complet</label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Votre nom" 
                            required
                            minLength={2}
                            className="w-full border-gray-200 focus:border-mali-red focus:ring-mali-red shadow-sm rounded-lg"
                          />
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="votre.email@exemple.com" 
                            required
                            className="w-full border-gray-200 focus:border-mali-red focus:ring-mali-red shadow-sm rounded-lg"
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">Sujet</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-mali-red focus:border-transparent outline-none transition-colors text-base bg-white shadow-sm"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="Demande d'information">Demande d'information</option>
                          <option value="Candidature ONIA">Candidature ONIA</option>
                          <option value="Partenariat / Sponsoring">Partenariat / Sponsoring</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Votre message ici..." 
                          rows={5}
                          required
                          minLength={10}
                          className="w-full border-gray-200 focus:border-mali-red focus:ring-mali-red shadow-sm rounded-lg resize-none"
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="w-full sm:w-auto bg-mali-red hover:bg-mali-red/90 text-white shadow-md"
                        >
                          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                          <Send size={18} />
                        </Button>
                        
                        <a 
                          href="mailto:info@robotsmali.org"
                          className="w-full sm:w-auto px-6 py-3 bg-transparent text-mali-red font-medium rounded-lg border border-mali-red hover:bg-red-50 transition-all flex items-center justify-center gap-2 text-center"
                        >
                          Contacter directement
                          <Mail size={18} />
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

