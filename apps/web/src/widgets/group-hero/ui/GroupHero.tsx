import React from 'react';
import { GROUPS, CHARACTERS } from '@space-academy/shared';
import './GroupHero.css';

export const GroupHero: React.FC<{ groupId: string }> = ({ groupId }) => {
  const group = GROUPS[groupId];
  // Simplistic mapping for mock data
  const charId = groupId === 'kadety' ? 'leo' : groupId === 'stajery' ? 'auri' : 'arlo';
  const character = CHARACTERS[charId];

  if (!group || !character) return null;

  return (
    <section className={`widget-group-hero widget-group-hero--${groupId}`}>
      <div className="widget-group-hero__container">
        <div className="widget-breadcrumb">
          Академия → {group.name} ({group.ageRange})
        </div>

        <div className="widget-group-hero__content">
          <div className="widget-group-hero__kicker">Н1 - {group.name.toUpperCase()}</div>
          <h1 className="widget-group-hero__title">
            Ваш ребёнок станет<br />
            <span>Кадетом Академии — Творцом с ИИ</span>
          </h1>
          <p className="widget-group-hero__subtitle">
            Для детей 7–9 лет. Лео и другие Кадеты учатся оживлять идеи: пишут сказки, создают иллюстрации, делают открытки и мультики с помощью нейросетей. Всё под руководством живого педагога.
          </p>

          <div className="widget-group-hero__actions">
            <button className="widget-group-hero__btn widget-group-hero__btn--primary">
              Выбрать курс для {group.name}а
            </button>
            <button className="widget-group-hero__btn widget-group-hero__btn--secondary">
              Смотреть бесплатный урок
            </button>
          </div>
        </div>
        
        <div className="widget-group-hero__visual">
          <div className="widget-group-hero__bg-fx"></div>
          <div className="widget-group-hero__char-wrapper">
             <img src="/images/leo-hero-front.png" alt={character.name} className="widget-group-hero__char" />
          </div>
          <div className="widget-group-hero__caption">
            <strong>{character.name}</strong>
            <span>{character.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
