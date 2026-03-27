import React from 'react';
import './GroupDirections.css';

interface Direction {
  id: string;
  name: string;
  short: string;
  subtitle: string;
  desc: string;
  tags: string[];
  slug: string;
  color: 'purple' | 'blue' | 'teal' | 'orange';
  image: string;
  badge: string;
}

interface GroupDirectionsProps {
  groupId: string;
}

const Icons = {
  Sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
};

export const GroupDirections: React.FC<GroupDirectionsProps> = ({ groupId }) => {
  const groupDirections: Record<string, Direction[]> = {
    kadety: [
      {
        id: 'neyrokreativ',
        name: 'Нейрокреатив',
        subtitle: 'Для тех, кто любит придумывать, рисовать, рассказывать истории.',
        short: 'Цифровое искусство с ИИ',
        desc: 'Курс по созданию изображений, видео и музыки с помощью современных нейросетей.',
        tags: ['Сказка с картинками', 'Открытка', 'Мультфильм', 'Комикс'],
        slug: 'neyrokreativ',
        color: 'purple',
        image: '/images/neurocreative.png',
        badge: 'НАПРАВЛЕНИЕ 1 · НЕЙРОКРЕАТИВ'
      },
      {
        id: 'vayb-koding',
        name: 'Вайб-кодинг',
        subtitle: 'Для тех, кто хочет строить что-то, что работает.',
        short: 'Создание игр и приложений с ИИ',
        desc: 'Программирование на Python и разработка игр с использованием ИИ-ассистентов.',
        tags: ['Мини-игра', 'Чат-бот', 'Простая анимация'],
        slug: 'vayb-koding',
        color: 'blue',
        image: '/images/vibecoding.png',
        badge: 'НАПРАВЛЕНИЕ 2 · ВАЙБ-КОДИНГ'
      }
    ],
    stajery: [
      {
        id: 'neyrokreativ',
        name: 'Нейрокреатив',
        subtitle: 'Для тех, кто любит придумывать, рисовать, рассказывать истории.',
        short: 'Цифровое искусство с ИИ',
        desc: 'Стажёр научится создавать видео для соцсетей, презентации и мини-фильмы с помощью ИИ.',
        tags: ['Видео для соцсетей', 'Презентации', 'Мини-фильм'],
        slug: 'neyrokreativ',
        color: 'purple',
        image: '/images/neurocreative.png',
        badge: 'НАПРАВЛЕНИЕ 1 · НЕЙРОКРЕАТИВ'
      },
      {
        id: 'vayb-koding',
        name: 'Вайб-кодинг',
        subtitle: 'Для тех, кто хочет строить что-то, что работает.',
        short: 'Создание игр и приложений с ИИ',
        desc: 'Стажёр научится строить практичные инструменты: боты, сайты-визитки и интерактив.',
        tags: ['Telegram-бот', 'Сайт-визитка', 'Интерактив'],
        slug: 'vayb-koding',
        color: 'blue',
        image: '/images/vibecoding.png',
        badge: 'НАПРАВЛЕНИЕ 2 · ВАЙБ-КОДИНГ'
      }
    ],
    komanda: [
      {
        id: 'neyrokreativ',
        name: 'Нейрокреатив',
        subtitle: 'Для тех, кто любит придумывать, рисовать, рассказывать истории.',
        short: 'Цифровое искусство с ИИ',
        desc: 'Архитекторы создают полноценные медиа-продукты: мини-сериалы и рекламные кампании.',
        tags: ['Мини-сериал', 'Рекламный ролик', 'Медиа-проект'],
        slug: 'neyrokreativ',
        color: 'purple',
        image: '/images/neurocreative.png',
        badge: 'НАПРАВЛЕНИЕ 1 · НЕЙРОКРЕАТИВ'
      },
      {
        id: 'vayb-koding',
        name: 'Вайб-кодинг',
        subtitle: 'Для тех, кто хочет строить что-то, что работает.',
        short: 'Создание игр и приложений с ИИ',
        desc: 'Архитекторы строят настоящие продукты: игры, web-приложения и Telegram-боты.',
        tags: ['Web-приложение', 'База данных', 'Монетизация'],
        slug: 'vayb-koding',
        color: 'blue',
        image: '/images/vibecoding.png',
        badge: 'НАПРАВЛЕНИЕ 2 · ВАЙБ-КОДИНГ'
      }
    ]
  };

  const directions = groupDirections[groupId] || [];

  return (
    <section id="directions" className="widget-group-directions">
      <div className="widget-group-directions__container">
        <div className="widget-group-directions__header">
          <h2 className="widget-group-directions__title">
            Мы не учим «пользоваться ChatGPT».<br />
            <span className="widget-group-directions__highlight">Мы учим создавать с ИИ.</span>
          </h2>
          <p className="widget-group-directions__description">
            Два направления обучения — для разных интересов ребёнка. Оба заканчиваются реальным продуктом, которым можно гордиться.
          </p>
        </div>

        <div className="widget-group-directions__grid">
          {directions.map((dir) => (
            <div key={dir.id} className={`widget-group-directions__card widget-group-directions__card--${dir.color}`}>
              <div className="widget-group-directions__left-column">
                <div className="widget-group-directions__badge-top">{dir.badge}</div>
                
                <div className="widget-group-directions__card-header">
                  <div className={`widget-group-directions__icon-wrapper widget-group-directions__icon-wrapper--${dir.color}`}>
                    {dir.id === 'neyrokreativ' ? <Icons.Sparkles /> : <Icons.Code />}
                  </div>
                  <h3 className="widget-group-directions__card-title">{dir.name}</h3>
                </div>

                <div className="widget-group-directions__card-subtitle">{dir.subtitle}</div>
                <p className="widget-group-directions__card-text">{dir.desc}</p>
                
                <button 
                  className="widget-group-directions__action-btn"
                  onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </button>
              </div>
              
              <div className="widget-group-directions__right-column">
                <div className="widget-group-directions__image-wrapper">
                  <img src={dir.image} alt={dir.name} className="widget-group-directions__illustration" />
                  <div className={`widget-group-directions__glow widget-group-directions__glow--${dir.color}`}></div>
                </div>
                <div className="widget-group-directions__pills">
                  {dir.tags.map((tag, idx) => (
                    <span key={idx} className="widget-group-directions__pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
