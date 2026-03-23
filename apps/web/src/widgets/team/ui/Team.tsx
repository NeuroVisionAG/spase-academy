import React from 'react';
import styles from './Team.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Михаил',
    role: 'Адмирал Академии',
    shortDesc: 'Технический директор и хранитель платформы.',
    detailedDesc: 'Обеспечивает бесперебойную работу всех систем Академии. Более 10 лет опыта в разработке сложных IT-продуктов и управлении командами программистов.',
    img: '/images/team_mikhail.png',
  },
  {
    id: 2,
    name: 'Камила',
    role: 'Вице-адмирал · Кадеты',
    shortDesc: 'Преподаватель и руководитель группы «Творцы».',
    detailedDesc: 'Эксперт по нейрокреативу и детской психологии. Помогает самым юным кадетам освоить ИИ для создания сказок, анимаций и графики на понятном языке.',
    img: '/images/team_kamila.png',
  },
  {
    id: 3,
    name: 'Кристина',
    role: 'Вице-адмирал · Стажёры',
    shortDesc: 'Преподаватель и руководитель группы «Исследователи».',
    detailedDesc: 'Специалист по внедрению ИИ в учебный процесс. Учит подростков использовать нейросети для школьных исследований и личных творческих проектов.',
    img: '/images/team_kristina.png',
  },
  {
    id: 4,
    name: 'Валентина',
    role: 'Вице-адмирал · Команда',
    shortDesc: 'Преподаватель и руководитель группы «Архитекторы».',
    detailedDesc: 'Senior-разработчик и наставник. Ведет старшую группу через реальный цикл продуктовой разработки: от идеи до запуска собственных продуктов.',
    img: '/images/team_valentina.png',
  },
  {
    id: 5,
    name: 'Мария',
    role: 'Центр управления полётом',
    shortDesc: 'Методист и разработчик курсов.',
    detailedDesc: 'Проектирует образовательные траектории и следит за тем, чтобы материал был не только полезным, но и захватывающим.',
    img: '/images/team_maria.png',
  },
  {
    id: 6,
    name: 'Елена',
    role: 'Центр управления полётом',
    shortDesc: 'Методист и создатель контента.',
    detailedDesc: 'Разрабатывает практические задания, игровые механики и миссии для каждой возрастной группы, адаптируя их под современные тренды ИИ.',
    img: '/images/team_elena.png',
  }
];

export const Team: React.FC = () => {
  return (
    <section className={styles.teamBlock}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Познакомьтесь с командованием Академии</h2>
          <p className={styles.description}>
            Живые педагоги, практики ИИ и методисты — не боты, не записанные видео. Каждое занятие ведёт реальный человек, который знает и любит своё дело.
          </p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.cardContainer}>
              <div className={styles.cardInner}>
                
                {/* Лицевая сторона */}
                <div className={styles.cardFront}>
                  <img src={member.img} alt={member.name} className={styles.frontImage} 
                       onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                  <div className={styles.frontOverlay}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <div className={styles.memberRole}>{member.role}</div>
                    <div className={styles.memberShortDesc}>{member.shortDesc}</div>
                  </div>
                </div>

                {/* Оборотная сторона */}
                <div className={styles.cardBack}>
                  <div className={styles.backContent}>
                    <h3 className={styles.backName}>{member.name}</h3>
                    <div className={styles.backRole}>{member.role}</div>
                    <div className={styles.divider}></div>
                    <p className={styles.backDesc}>{member.detailedDesc}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
