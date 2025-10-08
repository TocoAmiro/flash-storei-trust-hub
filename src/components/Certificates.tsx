import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  image: string;
}

export const Certificates = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Placeholder certificates - in production, these would be actual uploaded documents
  const certificates: Certificate[] = [
    { id: '1', title: t.certificates.businessRegistration, image: 'https://images.unsplash.com/photo-1554224311-beee4ece3c5d?w=800&h=600&fit=crop' },
    { id: '2', title: t.certificates.tradeLicense, image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop' },
    { id: '3', title: t.certificates.nationalId, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop' },
    { id: '4', title: t.certificates.birthCertificate, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop' },
    { id: '5', title: t.certificates.hseMs, image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop' },
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.certificates.title}</h2>
          <p className="text-xl text-muted-foreground">{t.certificates.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={cert.id}
              className="glass-card hover-lift cursor-pointer overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg">
                  {cert.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedCert && (
              <div className="relative">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
