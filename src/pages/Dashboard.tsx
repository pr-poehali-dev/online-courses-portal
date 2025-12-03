import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const myCourses = [
  {
    id: 1,
    title: 'Основы веб-разработки',
    progress: 65,
    totalLessons: 48,
    completedLessons: 31,
    nextLesson: 'CSS Grid и Flexbox',
    lastActivity: '2 часа назад',
  },
  {
    id: 2,
    title: 'Python для анализа данных',
    progress: 30,
    totalLessons: 56,
    completedLessons: 17,
    nextLesson: 'Работа с Pandas DataFrame',
    lastActivity: '1 день назад',
  },
  {
    id: 3,
    title: 'UI/UX дизайн',
    progress: 85,
    totalLessons: 32,
    completedLessons: 27,
    nextLesson: 'Прототипирование в Figma',
    lastActivity: '3 часа назад',
  },
];

const achievements = [
  { id: 1, icon: 'Award', title: 'Первый курс', description: 'Завершили первый курс', earned: true },
  { id: 2, icon: 'Target', title: 'Целеустремленный', description: '10 дней подряд', earned: true },
  { id: 3, icon: 'Zap', title: 'Быстрый старт', description: '5 уроков за день', earned: true },
  { id: 4, icon: 'Star', title: 'Звездный студент', description: '100% прогресс в курсе', earned: false },
];

const stats = [
  { label: 'Активных курсов', value: 3, icon: 'BookOpen', color: 'text-blue-500' },
  { label: 'Завершено курсов', value: 2, icon: 'CheckCircle', color: 'text-green-500' },
  { label: 'Часов обучения', value: 47, icon: 'Clock', color: 'text-purple-500' },
  { label: 'Достижений', value: 3, icon: 'Trophy', color: 'text-yellow-500' },
];

const Dashboard = () => {
  const totalProgress = Math.round(
    myCourses.reduce((acc, course) => acc + course.progress, 0) / myCourses.length
  );

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="bg-gradient-to-br from-primary/10 to-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/99d23596-3284-4535-aa32-c811a8e7cbd7/files/d1a0616d-6bd4-453d-8721-1145a38b0b73.jpg"
                alt="Кабан-ученик"
                className="w-16 h-16 rounded-full object-cover shadow-md hidden md:block"
              />
              <div>
                <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
                <p className="text-muted-foreground">Отслеживайте свой прогресс обучения</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline">
                <Icon name="Settings" size={18} className="mr-2" />
                Настройки
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center ${stat.color}`}>
                      <Icon name={stat.icon as any} size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="courses">Мои курсы</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Общий прогресс</CardTitle>
                <CardDescription>Средний прогресс по всем активным курсам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{totalProgress}%</span>
                    <Badge variant="secondary">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      В процессе
                    </Badge>
                  </div>
                  <Progress value={totalProgress} className="h-3" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>
                      {myCourses.reduce((acc, c) => acc + c.completedLessons, 0)} из{' '}
                      {myCourses.reduce((acc, c) => acc + c.totalLessons, 0)} уроков
                    </span>
                    <span>Продолжайте в том же духе! 🚀</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myCourses.map((course, index) => (
                <Card
                  key={course.id}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <Badge
                        variant={course.progress === 100 ? 'default' : 'secondary'}
                      >
                        {course.progress}%
                      </Badge>
                    </div>
                    <CardDescription>
                      Последняя активность: {course.lastActivity}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Icon name="BookOpen" size={16} className="mr-1" />
                          <span>
                            {course.completedLessons} / {course.totalLessons} уроков
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground mb-1">Следующий урок</p>
                        <p className="font-medium">{course.nextLesson}</p>
                      </div>
                      <Button className="w-full">
                        <Icon name="Play" size={18} className="mr-2" />
                        Продолжить обучение
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Мои достижения</CardTitle>
                <CardDescription>
                  Заработано: {achievements.filter((a) => a.earned).length} из {achievements.length}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.id}
                      className={`p-6 rounded-lg border-2 transition-all animate-scale-in ${
                        achievement.earned
                          ? 'border-primary bg-primary/5'
                          : 'border-muted bg-muted/30 opacity-60'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            achievement.earned ? 'bg-primary text-white' : 'bg-muted'
                          }`}
                        >
                          <Icon name={achievement.icon as any} size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{achievement.title}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          {achievement.earned && (
                            <Badge className="mt-2" variant="outline">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Получено
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;