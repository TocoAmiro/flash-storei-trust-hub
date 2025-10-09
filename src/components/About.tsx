import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';
import enamadLogo from '@/assets/enamad-logo.png';

export const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, title: 'امنیت کامل', titleEn: 'Complete Security', titleAr: 'أمان كامل' },
    { icon: Award, title: 'مدارک معتبر', titleEn: 'Valid Documents', titleAr: 'وثائق صالحة' },
    { icon: Users, title: 'پشتیبانی ۲۴/۷', titleEn: '24/7 Support', titleAr: 'دعم على مدار الساعة' },
    { icon: Clock, title: 'تحویل سریع', titleEn: 'Fast Delivery', titleAr: 'توصيل سريع' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.about.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8 mb-12">
          <p className="text-lg leading-relaxed text-foreground/90">
            {t.about.content}
          </p>
        </div>

        {/* Trust Badge Section */}
        <div className="max-w-2xl mx-auto glass-card p-8 mb-12">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={enamadLogo} alt="Enamad Logo" className="w-24 h-24 object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t.trust.title}
            </h3>

            {/* Badge Details */}
            <div className="space-y-4 text-right" dir="rtl">
              <div className="flex justify-between items-center border-b border-border/30 pb-3">
                <span className="font-semibold text-foreground/90">{t.trust.storeName}</span>
                <span className="text-foreground/70">{t.trust.storeValue}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-border/30 pb-3">
                <span className="font-semibold text-foreground/90">{t.trust.registrationNumber}</span>
                <span className="text-foreground/70">{t.trust.registrationValue}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-border/30 pb-3">
                <span className="font-semibold text-foreground/90">{t.trust.managerName}</span>
                <span className="text-foreground/70">{t.trust.managerValue}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-border/30 pb-3">
                <span className="font-semibold text-foreground/90">{t.trust.issueDate}</span>
                <span className="text-foreground/70">{t.trust.issueDateValue}</span>
              </div>
              
              <div className="flex justify-center items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg py-3 px-4">
                <span className="font-semibold text-foreground/90">{t.trust.status}</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-500 font-bold">{t.trust.statusValid}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pt-4 text-right" dir="rtl">
              <p className="text-sm text-foreground/70 leading-relaxed">
                <span className="font-semibold text-foreground/90">{t.trust.notes}: </span>
                {t.trust.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 text-center space-y-4 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
