import { GroupInfo, DirectionInfo, Character } from '../types';

export const GROUPS: Record<string, GroupInfo> = {
  kadety: { 
    id: 'kadety', 
    slug: 'kadety', 
    name: 'Кадеты', 
    ageRange: '7-9 лет', 
    description: 'Основы цифрового творчества и оживления идей для самых маленьких исследователей.',
    h1: '<span>Кадетом Академии — Творцом с ИИ</span>',
    subtitle: 'Для детей 7–9 лет. Лео и другие Кадеты учатся оживлять идеи: пишут сказки, создают иллюстрации, делают открытки и мультики с помощью нейросетей. Всё под руководством живого педагога.'
  },
  stajery: { 
    id: 'stajery', 
    slug: 'stajery', 
    name: 'Стажёры', 
    ageRange: '10-13 лет', 
    description: 'Глубокое погружение во вселенные нейросетей и создание интерактивных проектов.',
    h1: '<span>Стажёром Академии — Исследователем с ИИ</span>',
    subtitle: 'Для детей 10–13 лет. Аури и другие Стажёры учатся использовать ИИ для учёбы и хобби: создают зажигательные презентации, интерактивные исследования и творческие проекты, которые пригодятся прямо сейчас.'
  },
  komanda: { 
    id: 'komanda', 
    slug: 'komanda', 
    name: 'Команда', 
    ageRange: '14+ лет', 
    description: 'Профессиональная подготовка: от создания ИИ-агентов до разработки полноценных продуктов.',
    h1: '<span>Участником Команды — Архитектором с ИИ</span>',
    subtitle: 'Для подростков 14+ лет. Арло и Команда разрабатывают реальные продукты: игры, сайты и приложения с нуля. Это не просто учёба, а создание портфолио для будущего.'
  },
};

export const DIRECTIONS: Record<string, DirectionInfo> = {
  neyrokreativ: { id: 'neyrokreativ', slug: 'neyrokreativ', name: 'Нейрокреатив', shortDesc: 'Цифровое искусство с ИИ', fullDesc: 'Курс по созданию изображений, видео и музыки с помощью современных нейросетей.' },
  'vayb-koding': { id: 'vayb-koding', slug: 'vayb-koding', name: 'Вайб-кодинг', shortDesc: 'Создание игр и приложений с ИИ', fullDesc: 'Программирование на Python и разработка игр с использованием ИИ-ассистентов.' },
};

export const CHARACTERS: Record<string, Character> = {
  leo: { id: 'leo', name: 'Лео', role: 'Капитан кадетов', image: '/images/leo-hero-front.png', glowColor: 'teal' },
  arlo: { id: 'arlo', name: 'Арло', role: 'Навигатор команды', image: '/images/arlo.png', glowColor: 'orange' },
  auri: { id: 'auri', name: 'Аури', role: 'Инженер стажёров', image: '/images/auri.png', glowColor: 'purple' },
};
