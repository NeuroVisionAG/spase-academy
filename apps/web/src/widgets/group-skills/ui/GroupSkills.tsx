import React from 'react';
import './GroupSkills.css';

export const GroupSkills: React.FC<{ groupId: string }> = ({ groupId }) => {
  const groupData = {
    kadety: {
      name: 'Кадет',
      skills: [
        { title: 'Оживление идей', desc: 'Учим превращать фантазии в реальные картинки и истории за считанные минуты.' },
        { title: 'Цифровая этика', desc: 'Разбираем, что такое авторство и как использовать технологии честно.' },
        { title: 'Логика продуктов', desc: 'От пустой страницы до готовой игры или мультфильма за несколько шагов.' },
        { title: 'Кибербезопасность', desc: 'Правила поведения в цифровом мире и защита своих творений.' }
      ]
    },
    stajery: {
      name: 'Стажёр',
      skills: [
        { title: 'Создание продуктов', desc: 'Учим строить интерактивные гайды, презентации и исследования с помощью ИИ.' },
        { title: 'Эффективный поиск', desc: 'Как заставить нейросеть найти и структурировать нужную информацию за секунды.' },
        { title: 'Креативный инжиниринг', desc: 'Проектирование визуалов и контента для школы и личного портфолио.' },
        { title: 'Нейро-грамотность', desc: 'Понимание того, как работают алгоритмы и как ими правильно управлять.' }
      ]
    },
    komanda: {
      name: 'Участник Команды',
      skills: [
        { title: 'Архитектура решений', desc: 'Проектирование сложных систем и приложений от структуры до деплоя.' },
        { title: 'Бизнес-аналитика', desc: 'Использование ИИ для анализа рынка, конкурентов и поиска ниш для проектов.' },
        { title: 'Продвинутый промптинг', desc: 'Мастерство управления LLM для написания кода, текстов и генерации медиа.' },
        { title: 'Запуск продуктов', desc: 'Путь от прототипа к работающему сервису, которым пользуются люди.' }
      ]
    }
  };

  const current = groupData[groupId as keyof typeof groupData] || groupData.kadety;
  const { name, skills } = current;

  return (
    <section className="widget-group-skills">
      <div className="widget-group-skills__container">
        <h2 className="widget-group-skills__title">Чему научится ваш {name}</h2>
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
