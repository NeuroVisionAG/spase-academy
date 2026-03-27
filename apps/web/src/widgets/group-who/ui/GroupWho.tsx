import React from 'react';
import { Card } from '@space-academy/ui';
import './GroupWho.css';

interface GroupWhoProps {
  groupId: string;
}

export const GroupWho: React.FC<GroupWhoProps> = ({ groupId }) => {
  const groupMeta = {
    kadety: {
      id: 'kadety',
      name: 'Кадеты',
      title: 'Ваш ребёнок — будущий Кадет, если...',
      items: [
        'Ему 7, 8 или 9 лет',
        'Любит рисовать, придумывать истории, мастерить',
        'Уже слышал про нейросети или хочет узнать',
        'Умеет пользоваться планшетом или компьютером',
        'Вам важно, чтобы он не просто «сидел в экране», а создавал что-то своё'
      ],
      note: 'Кадеты не нуждаются в предыдущем опыте. Мы начинаем с самых основ — безопасно, весело и по-настоящему. Первое, что создаст ребёнок уже на третьем занятии — иллюстрированная история.',
    },
    stajery: {
      id: 'stajery',
      name: 'Стажёры',
      title: 'Ваш ребёнок — Стажёр, если...',
      items: [
        'Ему 10–13 лет',
        'Хочет делать домашние задания быстрее и интереснее',
        'Увлекается хобби — музыкой, спортом, играми, наукой',
        'Хочет создать что-то крутое, чем можно похвастаться в классе',
        'Любопытный, активный, немного «не как все»'
      ],
      note: 'В этом возрасте дети переходят от игр к осмысленному созиданию. ИИ становится напарником, который помогает ускорить рутину и сфокусироваться на творчестве.',
    },
    komanda: {
      id: 'komanda',
      name: 'Команда',
      title: 'Ты — Архитектор Академии, если...',
      items: [
        'Тебе 14 лет и старше',
        'Хочешь создать что-то настоящее — не поделку, а реальный продукт',
        'Интересуешься технологиями, играми, дизайном, бизнесом',
        'Хочешь уметь то, чего не умеют твои сверстники',
        'Готов работать как в стартапе — с задачами и результатом'
      ],
      note: '*На странице Команды обращение идёт напрямую к ребёнку (ты-форма), так как он сам принимает решение о записи вместе с родителем',
    }
  };

  const current = groupMeta[groupId as keyof typeof groupMeta];
  if (!current) return null;

  return (
    <section id="group-who" className={`widget-group-who widget-group-who--${groupId}`}>
      <div className="widget-group-who__container">
        <h2 className="widget-group-who__title">Для кого эта группа</h2>
        
        <div className="widget-group-who__grid">
          <Card className="widget-group-who__card widget-group-who__card--primary" variant="portal">
            <h3 className="widget-group-who__card-title">{current.title}</h3>
            <ul className="widget-group-who__list">
              {current.items.map((item, i) => (
                <li key={i} className="widget-group-who__item">
                  <div className="widget-group-who__check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="6" fill="#10B981" fillOpacity="0.2"/>
                      <path d="M7 12L10 15L17 8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="widget-group-who__item-text">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="widget-group-who__card widget-group-who__card--secondary" variant="portal">
            <div className="widget-group-who__section-label">Пояснение для родителей</div>
            <p className="widget-group-who__note">{current.note}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
