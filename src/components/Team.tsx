import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import logo from '@/assets/logo.png';

interface Admin {
  id: string;
  name: string;
  telegram: string;
  role: string;
}

export const Team = () => {
  const { t } = useLanguage();

  const admins: Admin[] = [
    { id: '1', name: t.team.admin1, telegram: '@Flashe_ad1', role: 'Senior Sales' },
    { id: '2', name: t.team.admin2, telegram: '@Flashe_ad2', role: 'Sales Support' },
    { id: '3', name: t.team.admin3, telegram: '@Flashe_ad3', role: 'Customer Service' },
    { id: '4', name: t.team.admin4, telegram: '@Flashe_ad4', role: 'Technical Support' },
    { id: '5', name: t.team.adminInternational, telegram: '@Flashe_ad_vaset', role: 'Outside Channel' },
  ];

  const handleContact = (telegram: string) => {
    window.open(`https://t.me/${telegram.replace('@', '')}`, '_blank');
  };

  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.team.title}</h2>
          <p className="text-xl text-muted-foreground">{t.team.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {admins.map((admin, index) => (
            <Card
              key={admin.id}
              className="glass-card p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Admin Avatar */}
                <div className="w-24 h-24 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img src={logo} alt={admin.name} className="w-16 h-16 logo-pulse" />
                  </div>
                </div>

                {/* Admin Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{admin.name}</h3>
                  <p className="text-sm text-muted-foreground">{admin.role}</p>
                  <p className="text-sm text-primary font-mono">{admin.telegram}</p>
                </div>

                {/* Contact Button */}
                <Button
                  className="w-full hover-lift"
                  onClick={() => handleContact(admin.telegram)}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {t.team.contact}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
