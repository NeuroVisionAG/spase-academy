import { GroupInfo, DirectionInfo, Character } from '../types';

export const GROUPS: Record<string, GroupInfo> = {
  kadety: { id: 'kadety', slug: 'kadety', name: 'Кадеты', ageRange: '7-9 лет', description: 'Основы цифрового творчества и программирования для самых маленьких исследователей.' },
  stajery: { id: 'stajery', slug: 'stajery', name: 'Стажёры', ageRange: '10-13 лет', description: 'Глубокое погружение во вселенные нейросетей и объектно-ориентированного программирования.' },
  komanda: { id: 'komanda', slug: 'komanda', name: 'Команда', ageRange: '14+ лет', description: 'Профессиональная подготовка: от создания ИИ-агентов до разработки полноценных проектов.' },
};

export const DIRECTIONS: Record<string, DirectionInfo> = {
  neyrokreativ: { id: 'neyrokreativ', slug: 'neyrokreativ', name: 'Нейрокреатив', shortDesc: 'Цифровое искусство с ИИ', fullDesc: 'Курс по созданию изображений, видео и музыки с помощью современных нейросетей.' },
  'vayb-koding': { id: 'vayb-koding', slug: 'vayb-koding', name: 'Вайб-кодинг', shortDesc: 'Создание игр и приложений с ИИ', fullDesc: 'Программирование на Python и разработка игр с использованием ИИ-ассистентов.' },
};

export const CHARACTERS: Record<string, Character> = {
  leo: { id: 'leo', name: 'Лео', role: 'Капитан кадетов', image: '/images/characters/01.jpg' },
  arlo: { id: 'arlo', name: 'Арло', role: 'Навигатор команды', image: '/images/characters/02.jpg' },
  auri: { id: 'auri', name: 'Аури', role: 'Инженер стажёров', image: '/images/characters/03.jpg' },
};
