import React from 'react';
import { Card } from '@space-academy/ui';
import './GroupInfo.css';

interface GroupInfoProps {
  groupId: string;
}

export const GroupInfo: React.FC<GroupInfoProps> = ({ groupId }) => {
  // Mock data for Kadety
  if (groupId !== 'kadety') return null;

  return (
    <section className="widget-group-info">
      <div className="widget-group-info__container">
        <div className="widget-group-info__grid">
          <div className="widget-group-info__text">
            <h2 className="widget-group-info__title">Почему 7-9 лет — идеальное время?</h2>
            <p className="widget-group-info__desc">
              В этом возрасте дети максимально открыты новому. Мы превращаем их любопытство в мощный навык управления будущим.
            </p>
            <div className="widget-group-info__features">
              <div className="widget-group-info__feature">
                <span className="widget-group-info__icon">🧠</span>
                <div>
                  <strong>Развитие логики</strong>
                  <p>Учим ставить четкие задачи и оживлять идеи шаг за шагом.</p>
                </div>
              </div>
              <div className="widget-group-info__feature">
                <span className="widget-group-info__icon">🎨</span>
                <div>
                  <strong>Творческая свобода</strong>
                  <p>ИИ убирает технические барьеры — теперь ребёнок может создать всё, что вообразит.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-group-info__card-col">
            <Card className="widget-group-info__stat-card" variant="portal" glowColor="teal">
              <div className="widget-group-info__stat">
                <span className="widget-group-info__stat-val">100%</span>
                <span className="widget-group-info__stat-label">Практики</span>
              </div>
              <p className="widget-group-info__stat-desc">Каждое занятие заканчивается готовым мини-продуктом.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
