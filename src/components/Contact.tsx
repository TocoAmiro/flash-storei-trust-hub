import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    toast.success('پیام شما با موفقیت ارسال شد!');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.contact.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.name}
                  className="glass-button"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.email}
                  className="glass-button"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.message}
                  rows={5}
                  className="glass-button"
                />
              </div>
              
              <Button type="submit" className="w-full hover-lift">
                <Send className="mr-2 h-4 w-4" />
                {t.contact.send}
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="space-y-6">
            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{t.contact.telegram}</h3>
                  <p className="text-sm text-muted-foreground">@STORMSHOPr</p>
                </div>
                <Button
                  onClick={() => window.open('https://t.me/STORMSHOPr', '_blank')}
                  variant="outline"
                  className="glass-button"
                >
                  {t.team.contact}
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};
