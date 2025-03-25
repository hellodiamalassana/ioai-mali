
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
      // Simuler l'envoi d'email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormSubmitted(true);
      setShowDirectEmailInfo(true);
      
      toast({
        title: "Formulaire soumis",
        description: "Veuillez utiliser le lien d'email direct pour nous contacter.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez utiliser l'email directement.",
        variant: "destructive",
      });
      setShowDirectEmailInfo(true);
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

  const generateMailtoLink = (values?: z.infer<typeof formSchema>) => {
    if (!values) return "mailto:info@robotsmali.org";
    
    const subject = encodeURIComponent(`[Site Web - ${values.subject}] Message de ${values.name}`);
    const body = encodeURIComponent(`Nom: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
    
    return `mailto:info@robotsmali.org?subject=${subject}&body=${body}`;
  };

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
                <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100">
                  {formSubmitted ? (
                    <div className="text-center py-8">
                      <div className="mb-4 text-mali-red">
                        <Mail size={48} className="mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Merci pour votre message!</h3>
                      <p className="text-muted-foreground mb-6">
                        Pour vous assurer que votre message est bien reçu, veuillez également nous contacter directement par email.
                      </p>
                      <a 
                        href={generateMailtoLink(form.getValues())} 
                        className="px-6 py-3 bg-mali-red text-white font-medium rounded-lg shadow-md hover:bg-mali-red/90 transition-all flex items-center justify-center gap-2 mx-auto w-fit"
                      >
                        Envoyer par email
                        <Mail size={18} />
                      </a>
                    </div>
                  ) : (
                    <form 
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">Nom complet</label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Votre nom" 
                            {...form.register("name")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-red focus:border-transparent outline-none transition-colors"
                          />
                          {form.formState.errors.name && (
                            <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.name.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                          <Input 
                            id="email"
                            name="email"
                            type="email" 
                            placeholder="votre.email@exemple.com" 
                            {...form.register("email")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-red focus:border-transparent outline-none transition-colors"
                          />
                          {form.formState.errors.email && (
                            <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                        <select
                          id="subject"
                          name="subject"
                          {...form.register("subject")}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-red focus:border-transparent outline-none transition-colors"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="information">Demande d'information</option>
                          <option value="application">Candidature ONIA</option>
                          <option value="sponsorship">Partenariat / Sponsoring</option>
                          <option value="other">Autre</option>
                        </select>
                        {form.formState.errors.subject && (
                          <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.subject.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Votre message ici..." 
                          rows={5}
                          {...form.register("message")}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mali-red focus:border-transparent outline-none transition-colors resize-none"
                        />
                        {form.formState.errors.message && (
                          <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.message.message}</p>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-mali-red text-white font-medium rounded-lg shadow-md hover:bg-mali-red/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                          <Send size={18} />
                        </Button>
                        
                        <a 
                          href="mailto:info@robotsmali.org"
                          className="px-6 py-3 bg-transparent text-mali-red font-medium rounded-lg border border-mali-red hover:bg-red-50 transition-all flex items-center justify-center gap-2"
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
