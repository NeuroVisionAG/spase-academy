import React from 'react';
import './GroupSkills.css';

export const GroupSkills: React.FC = () => {
  const skills = [
    { title: 'Оживление идей', desc: 'Учим превращать фантазии в реальные картинки и истории за считанные минуты.' },
    { title: 'Цифровая этика', desc: 'Разбираем, что такое авторство и как использовать технологии честно.' },
    { title: 'Логика продуктов', desc: 'От пустой страницы до готовой игры или мультфильма за несколько шагов.' },
    { title: 'Кибербезопасность', desc: 'Правила поведения в цифровом мире и защита своих творений.' }
  ];

  return (
    <section className="widget-group-skills">
      <div className="widget-group-skills__container">
        <h2 className="widget-group-skills__title">Чему научится ваш Кадет</h2>
        <div className="widget-group-skills__grid">
          {skills.map((skill, i) => (
            <div key={i} className="widget-group-skills__item">
              <div className="widget-group-skills__num">0{i + 1}</div>
              <h3 className="widget-group-skills__name">{skill.title}</h3>
              <p className="widget-group-skills__desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
