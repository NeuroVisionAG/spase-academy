import React from 'react';
import { Card } from '@space-academy/ui';
import './CourseProgram.css';

// Mock data directly here since it applies to both for now
const mockMissions = [
  { id: 1, title: 'Миссия 1: Запуск двигателей', desc: 'Знакомимся с нейросетями и создаем первый промпт.' },
  { id: 2, title: 'Миссия 2: Генерация персонажа', desc: 'Создаем главного героя для нашей будущей игры.' },
  { id: 3, title: 'Миссия 3: Кодинг-Вайб', desc: 'Пишем первые строчки кода с ИИ-помощником.' },
  { id: 4, title: 'Миссия 4: Механика', desc: 'Заставляем персонажа двигаться.' },
  { id: 5, title: 'Миссия 5: Уровни и препятствия', desc: 'Добавляем врагов и собираем монетки.' },
  { id: 6, title: 'Миссия 6: Звук и FX', desc: 'Генерируем саундтрек для игры.' },
  { id: 7, title: 'Миссия 7: Тестирование', desc: 'Ищем баги и просим ИИ их исправить.' },
  { id: 8, title: 'Миссия 8: Релиз', desc: 'Публикуем игру и делимся с друзьями!' }
];

export const CourseProgram: React.FC = () => {
  return (
    <section className="widget-course-program">
      <div className="widget-course-program__container">
        <h2 className="widget-course-program__title">Программа обучения</h2>
        
        <div className="widget-course-program__grid">
          {mockMissions.map((m) => (
            <Card key={m.id} className="widget-course-program__card">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
