import React from 'react';
import './GroupSafety.css';

const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconBell = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 11 11 13 15 9"></polyline>
  </svg>
);

export const GroupSafety: React.FC<{ groupId?: string }> = ({ groupId }) => {
  const safetyPoints = [
    {
      title: 'Закрытая платформа',
      desc: 'Без рекламы, без внешних ссылок и случайного контента. Ребёнок видит только учебные материалы.',
      icon: <IconShield />
    },
    {
      title: 'Родительский кабинет',
      desc: 'Видите прогресс, пройденные миссии и время занятий. Полная прозрачность процесса обучения.',
      icon: <IconEye />
    },
    {
      title: 'Уведомления для вас',
      desc: 'По указанным вами контактам — сразу узнаете о выполненных уроках и успехах ребёнка.',
      icon: <IconBell />
    },
    {
      title: 'Защита данных (152-ФЗ)',
      desc: 'Обработка персональных данных по закону. Данные ребёнка никогда не передаются третьим лицам.',
      icon: <IconLock />
    },
    {
      title: 'Живой педагог',
      desc: 'На каждом занятии присутствует наставник, а не просто алгоритм. Личное внимание каждому.',
      icon: <IconUsers />
    },
    {
      title: 'Safety Shield',
      desc: 'В каждом уроке — отдельный блок о правилах цифровой безопасности и этике работы с ИИ.',
      icon: <IconShieldCheck />
    }
  ];

  return (
    <section id="safety" className={`widget-group-safety widget-group-safety--${groupId}`}>
      <div className="widget-group-safety__container">
        <div className="widget-group-safety__header">
          <h2 className="widget-group-safety__title">Вы контролируете всё — мы за безопасность</h2>
          <p className="widget-group-safety__subtitle">Мы создали защищенную среду, где технологии приносят только пользу и развитие.</p>
        </div>
        
        <div className="widget-group-safety__grid">
          {safetyPoints.map((point, i) => (
            <div key={i} className="widget-group-safety__card">
              <div className="widget-group-safety__icon-wrapper">
                {point.icon}
              </div>
              <div className="widget-group-safety__text-content">
                <h3 className="widget-group-safety__point-title">{point.title}</h3>
                <p className="widget-group-safety__point-desc">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
