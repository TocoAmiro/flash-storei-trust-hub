import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="STORM SOPH" className="h-8 w-8" />
            <span className="font-bold text-lg">STORM SOPH</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2024 STORM SOPH. All rights reserved.
          </p>
          
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">
              {t.header.home}
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              {t.header.about}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t.header.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
