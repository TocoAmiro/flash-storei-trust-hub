import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('certificates')}
                className="hover-lift"
              >
                {t.hero.viewCertificates}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('team')}
                className="glass-button hover-lift"
              >
                {t.hero.viewTeam}
              </Button>
            </div>
          </div>

          {/* Trust Text Card */}
          <div className="glass-card p-8 space-y-4 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              ⚡ {t.hero.title.split(' - ')[0]}
            </h2>
            <div className="space-y-3 text-foreground/90 leading-relaxed whitespace-pre-line">
              {t.hero.trustText}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};
