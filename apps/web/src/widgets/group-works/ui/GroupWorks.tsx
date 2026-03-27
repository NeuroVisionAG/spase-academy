import React from 'react';
import './GroupWorks.css';

interface Project {
  id: number;
  title: string;
  desc: string;
  meta: string;
  img: string;
}

interface GroupWorksProps {
  groupId: string;
}

export const GroupWorks: React.FC<GroupWorksProps> = ({ groupId }) => {
  const projectsByGroup: Record<string, Project[]> = {
    kadety: [
      {
        id: 1,
        title: '«Сказка о космическом котёнке»',
        desc: 'Иллюстрированная история, 12 страниц',
        meta: 'Маша, 8 лет · Кадеты · Нейрокреатив',
        img: '/images/project_kitten.png',
      },
      {
        id: 2,
        title: '«Мой первый мультфильм»',
        desc: 'Анимация с озвучкой, 30 сек',
        meta: 'Артем, 7 лет · Кадеты · Нейрокреатив',
        img: '/images/project_cartoon_small.png',
      }
    ],
    stajery: [
      {
        id: 3,
        title: '«Мой гайд по профессиям будущего»',
        desc: 'Интерактивная презентация, 20 слайдов',
        meta: 'Алина, 11 лет · Стажёры · Нейрокреатив',
        img: '/images/project_guide.png',
      },
      {
        id: 4,
        title: '«Бот-помощник для учёбы»',
        desc: 'Умный чат-бот со структурой знаний',
        meta: 'Максим, 12 лет · Стажёры · Вайб-кодинг',
        img: '/images/project_bot.png',
      }
    ],
    komanda: [
      {
        id: 5,
        title: '«Игра-головоломка "Пиксельный мир"»',
        desc: 'Браузерная игра с 5 уровнями',
        meta: 'Иван, 15 лет · Команда · Вайб-кодинг',
        img: '/images/project_game.png',
      },
      {
        id: 6,
        title: '«Сайт-портфолио архитектора»',
        desc: 'Личный сайт с ИИ-ассистентом',
        meta: 'София, 16 лет · Команда · Вайб-кодинг',
        img: '/images/project_portfolio.png',
      }
    ]
  };

  const currentProjects = projectsByGroup[groupId as keyof typeof projectsByGroup] || projectsByGroup.kadety;

  const groupTitles = {
    kadety: 'Смотри, что уже создали Кадеты',
    stajery: 'Смотри, что уже создали Стажёры',
    komanda: 'Смотри, что уже создали Архитекторы'
  };

  return (
    <section className="widget-group-works">
      <div className="widget-group-works__container">
        <h2 className="widget-group-works__title">{groupTitles[groupId as keyof typeof groupTitles]}</h2>
        <p className="widget-group-works__subtitle">Каждая работа — финальный проект реального ученика Академии.</p>
        
        <div className="widget-group-works__grid">
          {currentProjects.map((proj) => (
            <div key={proj.id} className="widget-group-works__card">
              <div className="widget-group-works__img-wrapper">
                <div className="widget-group-works__placeholder">
                   <span className="widget-group-works__label">Проект ученика</span>
                </div>
                <img src={proj.img} alt={proj.title} className="widget-group-works__img" 
                     onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                <div className="widget-group-works__overlay">
                  <span>Смотреть работу</span>
                </div>
              </div>
              <div className="widget-group-works__info">
                <h3 className="widget-group-works__proj-title">{proj.title}</h3>
                <p className="widget-group-works__proj-desc">{proj.desc}</p>
                <div className="widget-group-works__proj-meta">{proj.meta}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="widget-group-works__footer">
          <button className="widget-group-works__btn-more">Смотреть все работы группы</button>
        </div>
      </div>
    </section>
  );
};
