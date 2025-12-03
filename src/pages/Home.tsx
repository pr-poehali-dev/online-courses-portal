import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Основы веб-разработки',
    description: 'Изучите HTML, CSS и JavaScript с нуля',
    category: 'Программирование',
    students: 1243,
    rating: 4.8,
    duration: '8 недель',
    level: 'Начинающий',
    progress: 0,
  },
  {
    id: 2,
    title: 'Python для анализа данных',
    description: 'Pandas, NumPy и визуализация данных',
    category: 'Data Science',
    students: 892,
    rating: 4.9,
    duration: '10 недель',
    level: 'Средний',
    progress: 0,
  },
  {
    id: 3,
    title: 'UI/UX дизайн',
    description: 'Создание пользовательских интерфейсов',
    category: 'Дизайн',
    students: 756,
    rating: 4.7,
    duration: '6 недель',
    level: 'Начинающий',
    progress: 0,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg" 
                alt="Оранжевый Кабан" 
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Обучайтесь в своём темпе
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Тысячи курсов от ведущих экспертов. Начните своё обучение уже сегодня.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/catalog">
                <Button size="lg" className="w-full sm:w-auto">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Посмотреть курсы
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'Users', title: '50,000+', subtitle: 'Активных студентов' },
              { icon: 'BookOpen', title: '500+', subtitle: 'Курсов' },
              { icon: 'Award', title: '98%', subtitle: 'Довольных студентов' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={stat.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.subtitle}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-center mb-12">Популярные курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center text-sm">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Icon name="Users" size={16} className="mr-1" />
                        <span>{course.students} студентов</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{course.level}</Badge>
                      <Button size="sm">
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" variant="outline">
                Показать все курсы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <h2 className="text-4xl font-bold text-center">Почему выбирают нас</h2>
              <img 
                src="https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg"
                alt="Счастливый кабан"
                className="w-16 h-16 rounded-full object-cover hidden md:block"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: 'Target',
                  title: 'Персональный подход',
                  description: 'Индивидуальный план обучения для каждого студента',
                },
                {
                  icon: 'TrendingUp',
                  title: 'Отслеживание прогресса',
                  description: 'Визуализация вашего прогресса в реальном времени',
                },
                {
                  icon: 'CheckCircle',
                  title: 'Сертификаты',
                  description: 'Получите признанный сертификат после завершения',
                },
                {
                  icon: 'MessageCircle',
                  title: 'Поддержка 24/7',
                  description: 'Наша команда всегда готова помочь вам',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-background hover:shadow-md transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name={feature.icon as any} size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;