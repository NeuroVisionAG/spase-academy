import React, { useState } from 'react';
import { Link } from 'react-router';
import { GROUPS, CHARACTERS } from '@space-academy/shared';
import { QuizModal } from '@/widgets/group-cta/ui/QuizModal';
import './GroupHero.css';

export const GroupHero: React.FC<{ groupId: string }> = ({ groupId }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const group = GROUPS[groupId];
  const charId = groupId === 'kadety' ? 'leo' : groupId === 'stajery' ? 'auri' : 'arlo';
  const character = CHARACTERS[charId];

  if (!group || !character) return null;

  return (
    <section className={`widget-group-hero widget-group-hero--${groupId}`}>
      <div className="widget-group-hero__container">
        <div className="widget-breadcrumb">
          <Link to="/" className="widget-breadcrumb__link">Академия</Link>
          <span className="widget-breadcrumb__separator">→</span>
          <span className="widget-breadcrumb__current">{group.name} ({group.ageRange})</span>
        </div>

        <div className="widget-group-hero__content">
          <div className="widget-group-hero__kicker">Н1 - {group.name.toUpperCase()}</div>
          
          <div className="widget-group-hero__nav">
            <button onClick={() => document.getElementById('directions')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Направления</button>
            <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Навыки</button>
            <button onClick={() => document.getElementById('teacher')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Преподаватель</button>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Стоимость</button>
            <button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Отзывы</button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">FAQ</button>
            <button onClick={() => document.getElementById('safety')?.scrollIntoView({ behavior: 'smooth' })} className="widget-group-hero__nav-pill">Безопасность</button>
          </div>

          <h1 
            className="widget-group-hero__title"
            dangerouslySetInnerHTML={{ __html: group.h1 }}
          />
          <p className="widget-group-hero__subtitle">
            {group.subtitle}
          </p>

          <div className="widget-group-hero__actions">
            <button 
              className="widget-group-hero__btn widget-group-hero__btn--primary"
              onClick={() => setIsQuizOpen(true)}
            >
              Пройти квиз для выбора направления
            </button>
            <button className="widget-group-hero__btn widget-group-hero__btn--secondary">
              Смотреть бесплатный урок
            </button>
          </div>
        </div>
        
        <div className="widget-group-hero__visual">
          <div className="widget-group-hero__bg-fx"></div>
          <div className="widget-group-hero__char-wrapper">
             <img src={character.image} alt={character.name} className="widget-group-hero__char" />
          </div>
          <div className="widget-group-hero__caption">
            <strong>{character.name}</strong>
            <span>{character.role}</span>
          </div>
        </div>
      </div>

      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        groupId={groupId} 
      />
    </section>
  );
};
