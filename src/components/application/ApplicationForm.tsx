
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Define form schema with Zod
const formSchema = z.object({
  category: z.enum(["international", "national"], {
    required_error: "Veuillez sélectionner une catégorie",
  }),
  firstName: z.string().min(2, {
    message: "Le prénom doit comporter au moins 2 caractères",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(8, {
    message: "Veuillez entrer un numéro de téléphone valide",
  }),
  birthdate: z.string().refine((val) => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  }, {
    message: "Veuillez entrer une date de naissance valide",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Veuillez sélectionner votre genre",
  }),
  address: z.string().min(5, {
    message: "Veuillez entrer une adresse valide",
  }),
  city: z.string().min(2, {
    message: "Veuillez entrer une ville valide",
  }),
  school: z.string().optional(),
  level: z.string().optional(),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les conditions d'utilisation" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "international",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthdate: "",
      gender: "male",
      address: "",
      city: "",
      school: "",
      level: "",
      termsAccepted: false as unknown as true, // This line fixes the type error
    },
  });

  const selectedCategory = form.watch("category");
  const isInternational = selectedCategory === "international";
  
  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // This is where you would normally send the form data to your backend
      console.log("Form data:", data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Inscription réussie !",
        description: `Merci pour votre inscription. Un email contenant vos tokens d'accès uniques sera envoyé à ${data.email}`,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur lors de l'inscription",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-sm border p-6 md:p-8">
      <Alert className="mb-6 bg-amber-50 border-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-700">
          <strong>Attention :</strong> Les tokens d'accès pour la Phase 1 seront à usage unique et strictement personnels. 
          Toute tentative de partage ou d'utilisation multiple entraînera la disqualification immédiate du candidat.
        </AlertDescription>
      </Alert>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Catégorie */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Catégorie</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="international" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Internationale (Lycéens et école fondamentale)
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="national" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Nationale (Universitaires et tout le monde)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prénom */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nom */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Téléphone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input placeholder="+223 xxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date de naissance */}
            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date de naissance</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Masculin</SelectItem>
                      <SelectItem value="female">Féminin</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Adresse */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre adresse" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ville */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville</FormLabel>
                  <FormControl>
                    <Input placeholder="Votre ville" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isInternational && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* École */}
                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>École / Établissement</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de votre établissement" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Niveau d'études */}
                <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Niveau d'études</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lycee1">Lycée - 1ère année</SelectItem>
                          <SelectItem value="lycee2">Lycée - 2ème année</SelectItem>
                          <SelectItem value="lycee3">Lycée - 3ème année</SelectItem>
                          <SelectItem value="fondamentale7">École Fondamentale - 7ème année</SelectItem>
                          <SelectItem value="fondamentale8">École Fondamentale - 8ème année</SelectItem>
                          <SelectItem value="fondamentale9">École Fondamentale - 9ème année</SelectItem>
                          <SelectItem value="fondamentale6">École Fondamentale - 6ème année</SelectItem>
                          <SelectItem value="fondamentale5">École Fondamentale - 5ème année</SelectItem>
                          <SelectItem value="fondamentale4">École Fondamentale - 4ème année</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          {/* Conditions d'utilisation */}
          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    J'accepte les conditions d'utilisation et la politique de confidentialité
                  </FormLabel>
                  <FormDescription>
                    En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour traiter votre candidature.
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-mali-blue hover:bg-mali-blue/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              <>
                Soumettre ma candidature
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
