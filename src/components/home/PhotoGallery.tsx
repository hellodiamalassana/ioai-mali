import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/ioai-2025-ceremony-team.jpg',
    alt: 'Équipe malienne sur scène lors de la cérémonie IOAI 2025',
    caption: 'Fierté malienne 🇲🇱 - Notre équipe représente le Mali sur la scène internationale à Beijing'
  },
  {
    id: 2,
    src: '/images/gallery/ioai-2025-certificate-award.jpg',
    alt: 'Remise de certificat à un participant malien IOAI 2025',
    caption: 'Moment de reconnaissance - Remise officielle des certificats de participation'
  },
  {
    id: 3,
    src: '/images/gallery/ioai-2025-mali-team-awards.jpg',
    alt: 'Équipe Mali avec certificats et drapeau IOAI 2025',
    caption: 'Mission accomplie ! L\'équipe malienne célèbre ses certificats d\'excellence'
  },
  {
    id: 4,
    src: '/images/gallery/ioai-2025-space-museum.jpg',
    alt: 'Participante malienne au musée spatial de Beijing',
    caption: 'Découverte culturelle - Visite du musée spatial et des technologies de pointe en Chine'
  },
  {
    id: 5,
    src: '/images/gallery/ioai-2025-opening-ceremony.jpg',
    alt: 'Cérémonie d\'ouverture IOAI 2025 avec délégations internationales',
    caption: 'Cérémonie d\'ouverture - Plus de 40 pays réunis pour célébrer l\'intelligence artificielle'
  },
  {
    id: 6,
    src: '/images/gallery/ioai-2025-mali-team-official.jpg',
    alt: 'Photo officielle équipe Mali devant panneau IOAI',
    caption: 'Notre équipe au complet devant le panneau officiel de la 2ème édition IOAI'
  }
];

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12">
            <div className="inline-block bg-mali-red/10 px-4 py-2 rounded-full mb-4">
              <span className="text-mali-red font-semibold text-sm">ÉDITION 2025 - BEIJING</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-mali-dark">
              Le Mali Brille à l'International 🇲🇱
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revivez l'aventure exceptionnelle de nos participants à Beijing 2025 et préparez-vous pour Abu Dhabi 2026 !
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal 
              key={image.id} 
              animation="scale" 
              delay={index * 100}
            >
              <Card 
                className="group cursor-pointer overflow-hidden border-2 border-transparent hover:border-mali-blue/30 transition-all duration-300 hover:shadow-xl"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={600}>
          <div className="text-center mt-12">
            <Card className="inline-block bg-gradient-to-r from-mali-yellow/10 to-mali-red/10 border-mali-yellow/30">
              <CardContent className="p-6">
                <p className="text-mali-dark font-medium mb-2">
                  🌟 <span className="font-bold">Votre tour est venu !</span>
                </p>
                <p className="text-muted-foreground text-sm">
                  Inscrivez-vous dès maintenant pour vivre cette expérience inoubliable à Abu Dhabi 2026
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              {selectedImage !== null && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>

                  <div className="p-4">
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <p className="text-white text-center mt-4 text-lg">
                      {galleryImages[selectedImage].caption}
                    </p>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotoGallery;