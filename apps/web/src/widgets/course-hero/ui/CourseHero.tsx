import React from 'react';
import { DIRECTIONS, CourseId } from '@space-academy/shared';
import './CourseHero.css';

export const CourseHero: React.FC<{ courseId: CourseId }> = ({ courseId }) => {
  const [, dirSlug] = (courseId || '').split('-');
  
  // Find direction by slug for mock
  const dir = Object.values(DIRECTIONS).find(d => d.slug === dirSlug);

  if (!dir) return null;

  return (
    <section className="widget-course-hero">
      <div className="widget-course-hero__container">
        <h1 className="widget-course-hero__title">{dir.name}</h1>
        <p className="widget-course-hero__desc">{dir.fullDesc}</p>
        <div className="widget-course-hero__tags">
          <span className="widget-course-hero__tag">🚀 8 миссий (1 месяц)</span>
          <span className="widget-course-hero__tag">👾 Создание игр / ИИ</span>
          <span className="widget-course-hero__tag">💡 С нуля</span>
        </div>
      </div>
    </section>
  );
};
