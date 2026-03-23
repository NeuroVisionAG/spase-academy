import React from 'react';
import styles from './UtpBlock.module.css';

const Icons = {
  Sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
};

export const UtpBlock: React.FC = () => {
  const handleScroll = () => {
    const el = document.getElementById('portals');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.utpBlock}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Мы не учим «пользоваться ChatGPT».<br />
            <span className={styles.highlight}>Мы учим создавать с ИИ.</span>
          </h2>
          <p className={styles.description}>
            Два направления обучения — для разных интересов ребёнка. Оба заканчиваются реальным продуктом, которым можно гордиться.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Направление 1: Нейрокреатив */}
          <div className={`${styles.card} ${styles.cardPurple}`}>
            <div className={styles.leftColumn}>
              <div className={styles.badgeTop}>НАПРАВЛЕНИЕ 1 · НЕЙРОКРЕАТИВ</div>
              
              <div className={styles.cardHeaderRow}>
                <div className={`${styles.iconWrapper} ${styles.iconPurple}`}>
                  <Icons.Sparkles />
                </div>
                <h3 className={styles.cardTitle}>Нейрокреатив</h3>
              </div>

              <div className={styles.cardSubtitle}>Для тех, кто любит придумывать, рисовать, рассказывать истории.</div>
              <p className={styles.cardText}>
                Ребёнок создаёт с ИИ: иллюстрированные книги, сценарии, мультики, видео для соцсетей, открытки, комиксы, музыкальные клипы.
              </p>
              
              <button className={styles.actionBtn} onClick={handleScroll}>Узнать подробнее</button>
            </div>
            
            <div className={styles.rightColumn}>
              <div className={styles.imageWrapper}>
                <img src="/images/neurocreative.png" alt="Иллюстрация Нейрокреатив" className={styles.illustrationImg} 
                     onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                <div className={styles.glowPurple}></div>
              </div>
              <div className={styles.pills}>
                <span className={styles.pill}>Книга с картинками</span>
                <span className={styles.pill}>Мультфильм</span>
                <span className={styles.pill}>Видео для TikTok</span>
                <span className={styles.pill}>Комикс</span>
                <span className={styles.pill}>Музыкальный клип</span>
              </div>
            </div>
          </div>

          {/* Направление 2: Вайб-кодинг */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.leftColumn}>
              <div className={styles.badgeTop}>НАПРАВЛЕНИЕ 2 · ВАЙБ-КОДИНГ</div>
              
              <div className={styles.cardHeaderRow}>
                <div className={`${styles.iconWrapper} ${styles.iconBlue}`}>
                  <Icons.Code />
                </div>
                <h3 className={styles.cardTitle}>Вайб-кодинг</h3>
              </div>

              <div className={styles.cardSubtitle}>Для тех, кто хочет строить что-то, что работает.</div>
              <p className={styles.cardText}>
                Ребёнок создаёт с ИИ: игры, сайты, мини-приложения — от идеи до запуска. Без скучного синтаксиса, с реальным результатом.
              </p>

              <button className={styles.actionBtn} onClick={handleScroll}>Узнать подробнее</button>
            </div>
            
            <div className={styles.rightColumn}>
              <div className={styles.imageWrapper}>
                <img src="/images/vibecoding.png" alt="Иллюстрация Вайб-кодинг" className={styles.illustrationImg} 
                     onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                <div className={styles.glowBlue}></div>
              </div>
              <div className={styles.pills}>
                <span className={styles.pill}>Игра</span>
                <span className={styles.pill}>Личный сайт</span>
                <span className={styles.pill}>Telegram-бот</span>
                <span className={styles.pill}>Мини-приложение</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
