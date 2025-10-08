import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Flash Storei" className="h-10 w-10 logo-pulse" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              فلش storei
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
              {t.header.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              {t.header.about}
            </button>
            <button onClick={() => scrollToSection('certificates')} className="hover:text-primary transition-colors">
              {t.header.certificates}
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">
              {t.header.team}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              {t.header.contact}
            </button>
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={language === 'fa' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('fa')}
              className="text-sm"
            >
              🇮🇷 فارسی
            </Button>
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-sm"
            >
              🇬🇧 English
            </Button>
            <Button
              variant={language === 'ar' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('ar')}
              className="text-sm"
            >
              🇸🇦 العربية
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-start py-2 hover:text-primary transition-colors"
            >
              {t.header.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-start py-2 hover:text-primary transition-colors"
            >
              {t.header.about}
            </button>
            <button
              onClick={() => scrollToSection('certificates')}
              className="block w-full text-start py-2 hover:text-primary transition-colors"
            >
              {t.header.certificates}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="block w-full text-start py-2 hover:text-primary transition-colors"
            >
              {t.header.team}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-start py-2 hover:text-primary transition-colors"
            >
              {t.header.contact}
            </button>
            
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button
                variant={language === 'fa' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('fa')}
                className="w-full"
              >
                🇮🇷 فارسی
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="w-full"
              >
                🇬🇧 English
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className="w-full"
              >
                🇸🇦 العربية
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
