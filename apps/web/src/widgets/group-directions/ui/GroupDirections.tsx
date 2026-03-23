import React from 'react';
import { useNavigate } from 'react-router';
import { Card, Button } from '@space-academy/ui';
import { DIRECTIONS } from '@space-academy/shared';
import './GroupDirections.css';

export const GroupDirections: React.FC<{ groupId: string }> = ({ groupId }) => {
  const navigate = useNavigate();
  const dirKeys = Object.keys(DIRECTIONS);

  return (
    <section className="widget-group-dirs">
      <div className="widget-group-dirs__container">
        <h2 className="widget-group-dirs__title">Выбери направление</h2>
        
        <div className="widget-group-dirs__grid">
          {dirKeys.map((key) => {
            const dir = DIRECTIONS[key];
            return (
              <Card key={dir.id} className="widget-group-dirs__card">
                <div className="widget-group-dirs__card-content">
                  <h3 className="widget-group-dirs__name">{dir.name}</h3>
                  <div className="widget-group-dirs__short">{dir.shortDesc}</div>
                  <p className="widget-group-dirs__desc">{dir.fullDesc}</p>
                </div>
                <div className="widget-group-dirs__actions">
                  <Button 
                    variant="primary" 
                    onClick={() => navigate(`/${groupId}/${dir.slug}`)}
                  >
                    Перейти к курсу
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
