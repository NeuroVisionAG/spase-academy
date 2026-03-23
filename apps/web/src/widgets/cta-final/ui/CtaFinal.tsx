import React from 'react';
import styles from './CtaFinal.module.css';

export const CtaFinal: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      {/* Background with stars and nebula */}
      <div className={styles.nebulaBackground}></div>
      <div className={styles.starsOverlay}></div>

      <div className={styles.container}>
        
        {/* Leo Character positioned above/right */}
        <div className={styles.characterContainer}>
          <div className={styles.glowEffect}></div>
          <img 
            src="/cta_rocket.png"
            alt="Космическая ракета"
            className={styles.characterImg}
            onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement!.style.display = 'none';
            }}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Готовы начать<br/>космическое путешествие?</h2>
          <p className={styles.subtitle}>
            Демо-урок — бесплатно. Просто попробуйте вместе с ребёнком.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Начать бесплатно</button>
            <button className={styles.btnSecondary}>Выбрать группу</button>
          </div>

          <p className={styles.footnote}>
            Уже 150+ учеников из России и Казахстана. Присоединяйтесь к Академии.
          </p>
        </div>

      </div>
    </section>
  );
};
