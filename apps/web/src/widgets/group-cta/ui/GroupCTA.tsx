import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { QuizModal } from './QuizModal';
import './GroupCTA.css';

interface GroupCTAProps {
  groupId: string;
}

export const GroupCTA: React.FC<GroupCTAProps> = ({ groupId }) => {
  const navigate = useNavigate();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <section className="widget-group-cta">
      <div className="widget-group-cta__container">
        <div className="widget-group-cta__header">
          <h2 className="widget-group-cta__title">Готовы выбрать направление?</h2>
          <p className="widget-group-cta__subtitle">
            Оба пути ведут к реальному результату. Выбирайте то, что больше нравится ребёнку — или пройдите квиз, если нужна подсказка.
          </p>
        </div>

        <div className="widget-group-cta__grid">
          <button 
            className="widget-group-cta__nav-btn widget-group-cta__nav-btn--neyro"
            onClick={() => navigate(`/${groupId}/neyrokreativ`)}
          >
            <span className="widget-group-cta__btn-icon">✨</span>
            <span className="widget-group-cta__btn-text">Нейрокреатив</span>
            <span className="widget-group-cta__btn-arrow">→</span>
          </button>

          <button 
            className="widget-group-cta__nav-btn widget-group-cta__nav-btn--vibecoding"
            onClick={() => navigate(`/${groupId}/vayb-koding`)}
          >
            <span className="widget-group-cta__btn-icon">💻</span>
            <span className="widget-group-cta__btn-text">Вайб-кодинг</span>
            <span className="widget-group-cta__btn-arrow">→</span>
          </button>
        </div>

        <div className="widget-group-cta__quiz-trigger">
          <button 
            className="widget-group-cta__quiz-link"
            onClick={() => setIsQuizOpen(true)}
          >
            Не знаете что выбрать? Пройдите квиз →
          </button>
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
