import React from 'react';
import { Card } from '@space-academy/ui';
import './GroupInfo.css';

interface GroupInfoProps {
  groupId: string;
}

export const GroupInfo: React.FC<GroupInfoProps> = ({ groupId }) => {
  const groupMeta = {
    kadety: {
      title: 'Почему 7–9 лет — идеальное время?',
      desc: 'В этом возрасте дети максимально открыты новому. Мы превращаем их любопытство в мощный навык управления будущим.',
      features: [
        { icon: '🧠', title: 'Развитие логики', text: 'Учим ставить четкие задачи и оживлять идеи шаг за шагом.' },
        { icon: '🎨', title: 'Творческая свобода', text: 'ИИ убирает технические барьеры — теперь ребёнок может создать всё, что вообразит.' }
      ],
      glowColor: 'teal'
    },
    stajery: {
      title: 'Почему 10–13 лет — идеальное время?',
      desc: 'В этом возрасте дети переходят от игр к осмысленному созиданию. Мы даем инструменты, которые превращают их в исследователей.',
      features: [
        { icon: '🚀', title: 'Проектный подход', text: 'Учим полному циклу создания проекта: от идеи до презентации.' },
        { icon: '🤖', title: 'Умный помощник', text: 'ИИ становится напарником, который помогает ускорить рутину и сфокусироваться на творчестве.' }
      ],
      glowColor: 'purple'
    },
    komanda: {
      title: 'Почему 14+ лет — идеальное время?',
      desc: 'Время закладывать фундамент будущей карьеры. Мы учим профессиональным инструментам, которые используют взрослые.',
      features: [
        { icon: '💻', title: 'Бизнес-мышление', text: 'Учим видеть в идеях продукты и строить их для реальных пользователей.' },
        { icon: '⚡', title: 'Профессиональный стек', text: 'Освоение инструментов, которые станут стандартом индустрии через пару лет.' }
      ],
      glowColor: 'orange'
    }
  };

  const currentMeta = groupMeta[groupId as keyof typeof groupMeta];
  if (!currentMeta) return null;

  return (
    <section className="widget-group-info">
      <div className="widget-group-info__container">
        <div className="widget-group-info__grid">
          <div className="widget-group-info__text">
            <h2 className="widget-group-info__title">{currentMeta.title}</h2>
            <p className="widget-group-info__desc">
              {currentMeta.desc}
            </p>
            <div className="widget-group-info__features">
              {currentMeta.features.map((f, i) => (
                <div key={i} className="widget-group-info__feature">
                  <span className="widget-group-info__icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="widget-group-info__card-col">
            <Card className="widget-group-info__stat-card" variant="portal" glowColor={currentMeta.glowColor as any}>
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
