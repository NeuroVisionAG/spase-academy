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
        <div className="widget-group-hero__content">
          <div className="widget-group-hero__kicker">Группа {group.name}</div>
          <h1 className="widget-group-hero__title">
            Твоя первая<br />
            <span>космическая экспедиция</span>
          </h1>
          <p className="widget-generate__desc">{group.description}</p>
        </div>
        
        <div className="widget-group-hero__visual">
          <div className="widget-group-hero__bg-fx"></div>
          <img src={character.image} alt={character.name} className="widget-group-hero__char" />
          <div className="widget-group-hero__caption">
            <strong>{character.name}</strong>
            <span>{character.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
