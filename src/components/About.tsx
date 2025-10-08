import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Users, Clock } from 'lucide-react';

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
