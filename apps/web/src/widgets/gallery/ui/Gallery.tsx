import React from 'react';
import styles from './Gallery.module.css';

const projects = [
  {
    id: 1,
    title: '«Сказка о космическом котёнке»',
    desc: 'Иллюстрированная история, 12 страниц',
    meta: 'Маша, 8 лет · Кадеты · Нейрокреатив',
    img: '/images/project_kitten.png',
  },
  {
    id: 2,
    title: '«Игра-головоломка "Пиксельный мир"»',
    desc: 'Браузерная игра с 5 уровнями',
    meta: 'Иван, 15 лет · Команда · Вайб-кодинг',
    img: '/images/project_game.png',
  },
  {
    id: 3,
    title: '«Мой гайд по профессиям будущего»',
    desc: 'Интерактивная презентация, 20 слайдов',
    meta: 'Алина, 11 лет · Стажёры · Нейрокреатив',
    img: '/images/project_guide.png',
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className={styles.galleryBlock}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Это создали дети на курсах Академии</h2>
          <p className={styles.description}>
            Каждый ученик уходит с готовым проектом. Не сертификатом — а реальной работой, которую можно показать, опубликовать и использовать.
          </p>
        </div>

        <div className={styles.carousel}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={proj.img} alt={proj.title} className={styles.img} 
                     onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>Смотреть работу</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <div className={styles.cardDesc}>{proj.desc}</div>
                <div className={styles.cardMeta}>{proj.meta}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <button className={styles.btnAll}>Смотреть все работы</button>
        </div>
      </div>
    </section>
  );
};
