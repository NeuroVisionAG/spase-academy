import React, { useRef } from 'react';
import styles from './Testimonials.module.css';

const StarRating = () => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" style={{marginRight: '2px'}}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const reviews = [
  {
    id: 1,
    parentName: 'Анна Соколова',
    initials: 'АС',
    avatarBg: '#a78bfa',
    childInfo: 'мама Миши, 9 лет',
    text: '«Мы переживали, что Миша просто будет сидеть в телефоне. Но он реально создал сказку с картинками! Теперь каждый вечер сам просит: "Мам, давай я ещё поделаю". Результат мы увидели уже после третьего занятия.»',
    group: 'Кадеты',
    track: 'Нейрокреатив',
  },
  {
    id: 2,
    parentName: 'Игорь Смирнов',
    initials: 'ИС',
    avatarBg: '#34d399',
    childInfo: 'папа Кирилла, 14 лет',
    text: '«Сын давно играл в Roblox, а теперь сам программирует там механики с помощью ИИ. Очень крутой подход преподавателей — они общаются с ребятами на одном языке и реально мотивируют учиться.»',
    group: 'Команда',
    track: 'Вайб-кодинг',
  },
  {
    id: 3,
    parentName: 'Елена Волкова',
    initials: 'ЕВ',
    avatarBg: '#f472b6',
    childInfo: 'мама Алисы, 11 лет',
    text: '«Раньше дочка стеснялась делать доклады в школе. После модуля по нейросетям она создаёт такие крутые интерактивные презентации, что учителя в шоке. Огромное спасибо нашему куратору Кристине!»',
    group: 'Стажёры',
    track: 'Нейрокреатив',
  },
  {
    id: 4,
    parentName: 'Дмитрий В.',
    initials: 'ДВ',
    avatarBg: '#60a5fa',
    childInfo: 'папа Максима, 8 лет',
    text: '«Формат просто супер. Макс сам ждёт выходных, чтобы подсоединиться к занятию. Научился генерировать крутые мультики на планшете, хотя раньше только Ютуб смотрел. Рекомендую всем родителям!»',
    group: 'Кадеты',
    track: 'Нейрокреатив',
  },
  {
    id: 5,
    parentName: 'Марина',
    initials: 'М',
    avatarBg: '#fbbf24',
    childInfo: 'мама Сони, 15 лет',
    text: '«Дочь думает поступать на IT, и мы решили попробовать Академию. За первый месяц она написала телеграм-бота для расписания уроков. Я даже не знала, что так можно делать без классического скучного кода!»',
    group: 'Команда',
    track: 'Вайб-кодинг',
  },
  {
    id: 6,
    parentName: 'Ольга',
    initials: 'О',
    avatarBg: '#fb7185',
    childInfo: 'мама Ильи, 12 лет',
    text: '«Илья стал сам придумывать сюжеты для игр и рисовать для них графику в Midjourney. Очень нравится, что есть родительский кабинет, где я вижу его успехи и каждый новый проект.»',
    group: 'Стажёры',
    track: 'Вайб-кодинг',
  }
];

const mockChats = [
  {
    id: 1,
    time: '14:23',
    messages: [
      { type: 'user', text: 'Кристина, добрый день! Спасибо огромное за занятие. Алиса весь вечер показывала нам свою презентацию, мы в восторге! 😍' },
      { type: 'admin', text: 'Добрый день, Елена! Алиса большая молодец, она очень креативно подошла к задаче. На следующем уроке будем анимировать её проект! 🚀' }
    ]
  },
  {
    id: 2,
    time: '18:05',
    messages: [
      { type: 'user', text: 'Миша только что прислал ссылку на свою игру. Я даже не поверил, что он это сам сделал за 2 недели! Спасибо вашей команде.' },
      { type: 'admin', text: 'Супер! Миша отлично справляется с логикой уровня. Дальше будет только интереснее 🎮' }
    ]
  }
];

export const Testimonials: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Что говорят родители и дети</h2>
          <p className={styles.description}>
            Более 1000 выпускников уже создали свои проекты. Почитайте, как меняется отношение детей к технологиям.
          </p>
        </div>

        {/* Carousel */}
        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.navBtnLeft}`} onClick={scrollLeft} aria-label="Предыдущий отзыв">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <div className={styles.carousel} ref={carouselRef}>
            {reviews.map((review) => (
              <div key={review.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.avatar} style={{ backgroundColor: review.avatarBg }}>
                    {review.initials}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{review.parentName}</div>
                    <div className={styles.childInfo}>{review.childInfo}</div>
                  </div>
                </div>
                
                <StarRating />
                
                <p className={styles.reviewText}>{review.text}</p>
                
                <div className={styles.tags}>
                  <span className={styles.tagGroup}>{review.group}</span>
                  <span className={styles.tagTrack}>{review.track}</span>
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.navBtnRight}`} onClick={scrollRight} aria-label="Следующий отзыв">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Chat Screenshots Mockups */}
        <div className={styles.chatsSection}>
          <h3 className={styles.chatsTitle}>Прямая связь и живые эмоции</h3>
          <div className={styles.chatsGrid}>
            {mockChats.map((chat) => (
              <div key={chat.id} className={styles.chatWindow}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatAvatar}>А</div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatName}>Куратор Академии</div>
                    <div className={styles.chatStatus}>В сети</div>
                  </div>
                </div>
                <div className={styles.chatBody}>
                  {chat.messages.map((msg, idx) => (
                    <div key={idx} className={`${styles.message} ${msg.type === 'user' ? styles.msgUser : styles.msgAdmin}`}>
                      {msg.text}
                      <span className={styles.msgTime}>{chat.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
