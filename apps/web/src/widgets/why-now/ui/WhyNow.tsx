import React from 'react';
import styles from './WhyNow.module.css';

// Космическо-футуристичные SVG иконки
const Icons = {
  Network: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
      <path d="M12 3v6" />
      <path d="M15 12h6" />
      <path d="M3 12h6" />
    </svg>
  ),
  Creator: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Principles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  )
};

export const WhyNow: React.FC = () => {
  return (
    <section className={styles.whyNow}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Мир изменился. Образование — <span className={styles.highlight}>пока нет.</span>
        </h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icons.Network />
            </div>
            <h3 className={styles.cardTitle}>ИИ уже везде</h3>
            <p className={styles.cardDesc}>
              Нейросети используются в 70% современных профессий. Дети, которые умеют с ними работать, получают преимущество — уже сейчас, не через 10 лет.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icons.Creator />
            </div>
            <h3 className={styles.cardTitle}>Пользователь или создатель?</h3>
            <p className={styles.cardDesc}>
              Большинство детей уже «чатятся» с нейросетями. Но есть разница: пассивно использовать ИИ — или уметь строить с его помощью что-то настоящее.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icons.Principles />
            </div>
            <h3 className={styles.cardTitle}>Инструменты меняются — принципы остаются</h3>
            <p className={styles.cardDesc}>
              Мы не учим ChatGPT или MidJourney — они поменяются. Мы учим принципам нейро-инжиниринга: как думать задачами и строить продукты с любой нейросетью.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Icons.Shield />
            </div>
            <h3 className={styles.cardTitle}>Безопасно и под контролем</h3>
            <p className={styles.cardDesc}>
              Всё обучение — на закрытой платформе без рекламы, под руководством живых преподавателей. Родитель видит прогресс ребёнка в личном кабинете.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
