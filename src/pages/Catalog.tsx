import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const allCourses = [
  {
    id: 1,
    title: 'Основы веб-разработки',
    description: 'Изучите HTML, CSS и JavaScript с нуля',
    category: 'Программирование',
    students: 1243,
    rating: 4.8,
    duration: '8 недель',
    level: 'Начинающий',
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
  },
  {
    id: 4,
    title: 'React и современный фронтенд',
    description: 'Создание интерактивных приложений',
    category: 'Программирование',
    students: 1567,
    rating: 4.9,
    duration: '12 недель',
    level: 'Средний',
  },
  {
    id: 5,
    title: 'Машинное обучение',
    description: 'Введение в ML и нейронные сети',
    category: 'Data Science',
    students: 634,
    rating: 4.8,
    duration: '14 недель',
    level: 'Продвинутый',
  },
  {
    id: 6,
    title: 'Figma для дизайнеров',
    description: 'Профессиональный дизайн в Figma',
    category: 'Дизайн',
    students: 923,
    rating: 4.6,
    duration: '5 недель',
    level: 'Начинающий',
  },
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = ['all', 'Программирование', 'Data Science', 'Дизайн'];
  const levels = ['all', 'Начинающий', 'Средний', 'Продвинутый'];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог курсов</h1>
          <p className="text-xl text-center text-muted-foreground mb-8">
            Найдите идеальный курс для вашего обучения
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.slice(1).map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Уровень" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                {levels.slice(1).map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
          </p>
          <Button variant="outline" size="sm">
            <Icon name="SlidersHorizontal" size={18} className="mr-2" />
            Фильтры
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <Card
              key={course.id}
              className="hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <div className="flex items-center text-sm">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-1" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course.level}</Badge>
                    <Button size="sm" className="group-hover:shadow-md transition-shadow">
                      Записаться
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/2f07a9e7-5c2a-4024-beb0-3165a033f1f6.jpg"
                alt="Грустный кабан"
                className="w-full h-full rounded-full object-cover opacity-50"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Курсы не найдены</h3>
            <p className="text-muted-foreground mb-6">Кабан искал везде, но ничего не нашёл. Попробуйте изменить параметры поиска</p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedLevel('all');
            }}>
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;