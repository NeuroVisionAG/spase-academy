export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Work {
  id: string;
  title: string;
  author: string;
  image: string;
}

export const mockTeam: TeamMember[] = [
  { id: '1', name: 'Алексей', role: 'Chief AI Officer', description: 'Эксперт в AI-разработке и нейросетях', image: '/images/team/alexey.jpg' },
  { id: '2', name: 'Мария', role: 'Lead Educator', description: 'Создатель методики Вайб-кодинга', image: '/images/team/maria.jpg' },
  { id: '3', name: 'Давид', role: 'Art Director', description: 'Гуру генеративного дизайна', image: '/images/team/david.jpg' },
];

export const mockTestimonials: Testimonial[] = [
  { id: '1', author: 'Елена (мама Никиты, 9 лет)', role: 'Кадеты', content: 'Сын в восторге от Лео и создания игр! Теперь за компьютером проводит время с пользой.', rating: 5 },
  { id: '2', author: 'Максим (12 лет)', role: 'Стажёры', content: 'Очень круто! Я сам написал бота для телеграма с нейросетью.', rating: 5 },
];

export const mockFaq: FaqItem[] = [
  { id: '1', question: 'Нужен ли мощный компьютер?', answer: 'Нет, большинство нейросетей работает в облаке. Достаточно обычного ноутбука и стабильного интернета.' },
  { id: '2', question: 'С какого возраста можно начать?', answer: 'Мы принимаем Кадетов с 7 лет, главное — умение читать и базовая компьютерная грамотность.' },
  { id: '3', question: 'Выдаёте ли вы сертификаты?', answer: 'Да, после прохождения всех миссий курса выдаётся сертификат Академии.' },
];

export const mockWorks: Work[] = [
  { id: '1', title: 'Аркада Asteroids', author: 'Никита, 9 лет', image: '/images/works/1.jpg' },
  { id: '2', title: 'AI Аватары', author: 'Алиса, 11 лет', image: '/images/works/2.jpg' },
];
