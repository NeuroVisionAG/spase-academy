import React from 'react';
import './GroupSkills.css';

interface SkillSet {
  common: string[];
  neurocreative: string[];
  vibecoding: string[];
}

interface GroupSkillsProps {
  groupId: string;
}

const CheckIcon = () => (
  <svg className="widget-group-skills__check-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.1" />
    <path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GroupSkills: React.FC<GroupSkillsProps> = ({ groupId }) => {
  const groupData: Record<string, { label: string; skills: SkillSet }> = {
    kadety: {
      label: 'кадет',
      skills: {
        common: [
          'Объяснять, что такое ИИ — просто и понятно (даже бабушке)',
          'Ставить задачи нейросети — писать правильные промпты',
          'Создавать иллюстрации и персонажей с помощью ИИ',
          'Соблюдать правила цифровой безопасности',
          'Применять ИИ для школьных задач',
          'Рассказать о своём проекте — и гордиться результатом'
        ],
        neurocreative: [
          'Написать и проиллюстрировать историю с ИИ',
          'Создать анимацию или короткий мультик',
          'Опубликовать свою работу онлайн'
        ],
        vibecoding: [
          'Создать браузерную игру без знания синтаксиса',
          'Объяснить, как работает программа',
          'Показать игру друзьям через браузер'
        ]
      }
    },
    stajery: {
      label: 'стажёр',
      skills: {
        common: [
          'Использовать ИИ как умного напарника в учёбе и жизни',
          'Быстро находить и структурировать сложную информацию',
          'Создавать презентации и исследования, которые удивят учителей',
          'Разбираться в том, как работают современные алгоритмы',
          'Соблюдать этику и безопасность при работе с ИИ',
          'Сформировать базу для будущей IT-профессии'
        ],
        neurocreative: [
          'Создавать видео-контент и анимации для соцсетей',
          'Проектировать персонажей и игровые вселенные',
          'Масштабировать идеи с помощью ИИ'
        ],
        vibecoding: [
          'Создавать персональных ИИ-ассистентов и интерактивные учебные материалы',
          'Создавать сайты-визитки и интерактивные страницы',
          'Разбираться в логике программирования на Python'
        ]
      }
    },
    komanda: {
      label: 'архитектор',
      skills: {
        common: [
          'Разрабатывать реальные продукты: от идеи до запуска',
          'Мастерски управлять LLM для написания кода и текстов',
          'Использовать бизнес-аналитику и ИИ для поиска рыночных ниш',
          'Понимать основы деплоя и монетизации IT-продуктов',
          'Работать как в стартапе: с четкими сроками и результатом',
          'Сформировать мощное портфолио для будущего трудоустройства'
        ],
        neurocreative: [
          'Создавать профессиональный медиа-контент с полным продакшеном',
          'Генерировать идеи для бизнеса и маркетинга',
          'Автоматизировать творческие процессы'
        ],
        vibecoding: [
          'Проектировать архитектуру web-приложений с ИИ-логикой',
          'Работать с базами данных и API',
          'Создавать полноценные веб-сервисы с нуля'
        ]
      }
    }
  };

  const current = groupData[groupId] || groupData.kadety;
  const { label, skills } = current;

  return (
    <section id="skills" className="widget-group-skills">
      <div className="widget-group-skills__container">
        <div className="widget-group-skills__header">
          <h2 className="widget-group-skills__title">После курса ваш {label} умеет:</h2>
        </div>

        <div className="widget-group-skills__main-grid">
          {/* Common Skills Card */}
          <div className="widget-group-skills__card widget-group-skills__card--common">
            <h3 className="widget-group-skills__card-label">БАЗОВЫЕ НАВЫКИ</h3>
            <div className="widget-group-skills__list">
              {skills.common.map((skill, i) => (
                <div key={i} className="widget-group-skills__item">
                  <CheckIcon />
                  <p className="widget-group-skills__text">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="widget-group-skills__sub-grid">
            {/* Neurocreative Skills Card */}
            <div className="widget-group-skills__card widget-group-skills__card--purple">
              <h3 className="widget-group-skills__card-label">НЕЙРОКРЕАТИВ</h3>
              <div className="widget-group-skills__list">
                {skills.neurocreative.map((skill, i) => (
                  <div key={i} className="widget-group-skills__item">
                    <CheckIcon />
                    <p className="widget-group-skills__text">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vibecoding Skills Card */}
            <div className="widget-group-skills__card widget-group-skills__card--blue">
              <h3 className="widget-group-skills__card-label">ВАЙБ-КОДИНГ</h3>
              <div className="widget-group-skills__list">
                {skills.vibecoding.map((skill, i) => (
                  <div key={i} className="widget-group-skills__item">
                    <CheckIcon />
                    <p className="widget-group-skills__text">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
