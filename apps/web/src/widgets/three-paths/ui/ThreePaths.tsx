import { useNavigate } from 'react-router';
import styles from './ThreePaths.module.css';

export const ThreePaths: React.FC = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <section id="portals" className={styles.threePaths}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Выбери свой путь в Академии</h2>
          <p className={styles.description}>
            Три группы — три роли. Каждая со своим персонажем, задачами и финальным проектом.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Кадеты (Leo) */}
          <div className={`${styles.card} ${styles.cardTeal}`} onClick={() => navigateTo('kadety')}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTop}>КАРТОЧКА 1 · КАДЕТЫ · ПЕРСОНАЖ: ЛЕО</div>
              <h3 className={styles.cardTitle}>
                <span className={`${styles.dot} ${styles.dotTeal}`}></span>
                Кадеты
              </h3>
              <div className={styles.cardSubtitle}>7–9 лет · «Творцы»</div>
            </div>
            <p className={styles.cardText}>
              Знакомятся с тем, что умеет ИИ. Учатся ставить задачи, оживлять картинки, писать сказки и создавать открытки с помощью нейросетей.
            </p>
            <div className={`${styles.actionLink} ${styles.textTeal}`}>Выбрать этот путь →</div>
            
            <div className={styles.characterWrapper}>
              <img src="/images/leo_interior.png" alt="Лео, Кадеты" className={styles.characterImg} 
                   onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
              <div className={styles.glowTeal}></div>
            </div>
          </div>

          {/* Card 2: Стажёры (Auri) */}
          <div className={`${styles.card} ${styles.cardPurple}`} onClick={() => navigateTo('stajery')}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTop}>КАРТОЧКА 2 · СТАЖЁРЫ · ПЕРСОНАЖ: АУРИ (RU) / ЛИНА (KZ)</div>
              <h3 className={styles.cardTitle}>
                <span className={`${styles.dot} ${styles.dotPurple}`}></span>
                Стажёры
              </h3>
              <div className={styles.cardSubtitle}>10–13 лет · «Исследователи»</div>
            </div>
            <p className={styles.cardText}>
              Учатся использовать ИИ для учёбы и личных интересов. Создают презентации, исследования, творческие проекты — всё, что пригодится прямо сейчас.
            </p>
            <div className={`${styles.actionLink} ${styles.textPurple}`}>Выбрать этот путь →</div>

            <div className={styles.characterWrapper}>
              <img src="/images/auri.png" alt="Аури, Стажёры" className={styles.characterImg} 
                   onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
              <div className={styles.glowPurple}></div>
            </div>
          </div>

          {/* Card 3: Команда (Arlo) */}
          <div className={`${styles.card} ${styles.cardOrange}`} onClick={() => navigateTo('komanda')}>
            <div className={styles.cardHeader}>
              <div className={styles.badgeTop}>КАРТОЧКА 3 · КОМАНДА · ПЕРСОНАЖ: АРЛО</div>
              <h3 className={styles.cardTitle}>
                <span className={`${styles.dot} ${styles.dotOrange}`}></span>
                Команда
              </h3>
              <div className={styles.cardSubtitle}>14+ лет · «Архитекторы»</div>
            </div>
            <p className={styles.cardText}>
              Разрабатывают реальные продакт-проекты от идеи до готового продукта. Игры, сайты, боты — всё по-настоящему.
            </p>
            <div className={`${styles.actionLink} ${styles.textOrange}`}>Выбрать этот путь →</div>

            <div className={styles.characterWrapper}>
              <img src="/images/arlo.png" alt="Арло, Команда" className={styles.characterImg} 
                   onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
              <div className={styles.glowOrange}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
