import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@kabanovcurses.ru',
      link: 'mailto:support@kabanovcurses.ru',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', url: '#' },
    { icon: 'Share2', name: 'VK', url: '#' },
    { icon: 'Youtube', name: 'YouTube', url: '#' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg"
              alt="Кабан на связи"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы? Кабан и команда всегда рады помочь вам в вашем обучении
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={info.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в течение 24 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Тема</Label>
                  <Input
                    id="subject"
                    placeholder="О чем вы хотите поговорить?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите подробнее..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Как записаться на курс?</h4>
                  <p className="text-sm text-muted-foreground">
                    Выберите интересующий курс в каталоге и нажмите кнопку "Записаться". Следуйте инструкциям для регистрации.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Есть ли сертификаты?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, после успешного завершения курса вы получите сертификат, который можно добавить в портфолио.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Можно ли вернуть деньги?</h4>
                  <p className="text-sm text-muted-foreground">
                    Да, мы предлагаем 14-дневную гарантию возврата денег, если курс вам не подошел.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Мы в социальных сетях</CardTitle>
                <CardDescription>Следите за нашими новостями и обновлениями</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      title={social.name}
                    >
                      <Icon name={social.icon as any} size={20} />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Наша команда готова помочь вам в любое время суток
                    </p>
                    <Button variant="outline" size="sm">
                      Начать чат
                      <Icon name="MessageCircle" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;