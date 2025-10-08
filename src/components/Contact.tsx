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
                  <p className="text-sm text-muted-foreground">@flashstorei</p>
                </div>
                <Button
                  onClick={() => window.open('https://t.me/flashstorei', '_blank')}
                  variant="outline"
                  className="glass-button"
                >
                  {t.team.contact}
                </Button>
              </div>
            </Card>

            <Card className="glass-card p-8 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{t.contact.instagram}</h3>
                  <p className="text-sm text-muted-foreground">@flashstorei</p>
                </div>
                <Button
                  onClick={() => window.open('https://instagram.com/flashstorei', '_blank')}
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
