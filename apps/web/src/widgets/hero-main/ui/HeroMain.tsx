import React from 'react';
import { useNavigate } from 'react-router';
import styles from './HeroMain.module.css';

export const HeroMain: React.FC = () => {
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Слой фона */}
      <div className={styles.stars}></div>
      <div className={styles.nebula1}></div>
      <div className={styles.nebula2}></div>

      <div className={styles.container}>
        {/* Верхний блок: Текст + Персонаж */}
        <div className={styles.topContent}>
          <div className={styles.leftCol}>
            <h1 className={styles.title}>
              Ваш ребёнок научится<br />
              управлять ИИ —<br />
              <span className={styles.highlight}>а не зависеть от него</span>
            </h1>
            <p className={styles.subtitle}>
              Космическая Академия — онлайн-школа, где дети от 7 до 17 лет создают настоящие продукты с помощью ИИ: книги, игры, сайты, приложения. Не просто учатся — делают.
            </p>
            
            <div className={styles.ctaGroup}>
              <button 
                className={styles.primaryBtn} 
                onClick={() => handleScroll('portals')}
              >
                Выбрать курс для ребёнка
              </button>
              <button 
                className={styles.secondaryBtn} 
                onClick={() => handleScroll('quiz')}
              >
                Смотреть бесплатный урок
              </button>
            </div>

            <div className={styles.badgesGroup}>
              <span className={styles.badge}>🚀 150+ учеников</span>
              <span className={styles.badge}>🎓 4 формата обучения</span>
              <span className={styles.badge}>🎁 Первый урок бесплатно</span>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.characterWrapper}>
              <img 
                src="/images/leo-hero-front.png" 
                alt="Лео, Кадет Академии" 
                className={styles.heroImage} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22280%22%20height%3D%22380%22%20viewBox%3D%220%200%20280%20380%22%3E%3Crect%20width%3D%22280%22%20height%3D%22380%22%20fill%3D%22%231e2432%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-size%3D%2260%22%3E%F0%9F%A7%91%E2%80%8D%F0%9F%9A%80%3C%2Ftext%3E%3C%2Fsvg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
