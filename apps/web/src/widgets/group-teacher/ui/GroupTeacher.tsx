import React from 'react';
import './GroupTeacher.css';

interface Teacher {
  name: string;
  role: string;
  bio: string;
  edu: string;
  achievement: string;
  experience: string;
  quote: string;
  image: string;
}

interface GroupTeacherProps {
  groupId: string;
}

const IconEducation = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconAward = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const IconHistory = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const GroupTeacher: React.FC<GroupTeacherProps> = ({ groupId }) => {
  const teachersByGroup: Record<string, Teacher> = {
    kadety: {
      name: 'Камила Тетерина',
      role: 'Вице-адмирал · Командир группы «Кадеты»',
      bio: 'Эксперт по нейрокреативу и детской психологии. Знает, как превратить первый опыт работы с ИИ в настоящее приключение, полное открытий.',
      edu: 'РГПУ им. А. И. Герцена, Психология',
      achievement: 'Автор курса «ИИ для самых маленьких»',
      experience: 'Работает с детьми 6 лет',
      quote: '«Для ребёнка ИИ — это волшебная палочка. Моя задача — научить ею пользоваться правильно.»',
      image: '/images/team_kamila.png'
    },
    stajery: {
      name: 'Кристина Воробьева',
      role: 'Вице-адмирал · Командир группы «Стажёры»',
      bio: 'Специалист по внедрению ИИ в учебный процесс. Помогает подросткам использовать нейросети для школьных исследований и личных творческих проектов.',
      edu: 'МПГУ, Педагогическое образование',
      achievement: 'Победитель конкурса «Инновации в образовании»',
      experience: 'Педагогический стаж 5 лет',
      quote: '«Стажёры — это будущее науки. Мы учим их не просто пользоваться ИИ, а понимать его логику.»',
      image: '/images/team_kristina.png'
    },
    komanda: {
      name: 'Валентина Осинцева',
      role: 'Вице-адмирал · Командир группы «Команда»',
      bio: 'Senior-разработчик и наставник. Ведет старшую группу через реальный цикл продуктовой разработки: от идеи до запуска собственных продуктов.',
      edu: 'МГТУ им. Н.Э. Баумана, ИТ-системы',
      achievement: 'Запустила 5 успешных IT-стартапов',
      experience: 'В индустрии более 8 лет',
      quote: '«В Команде мы строим настоящие продукты. Это уровень, которым можно гордиться.»',
      image: '/images/team_valentina.png'
    }
  };

  const teacher = teachersByGroup[groupId as keyof typeof teachersByGroup] || teachersByGroup.kadety;

  return (
    <section id="teacher" className="widget-group-teacher">
      <div className="widget-group-teacher__container">
        <h2 className="widget-group-teacher__main-title">Ваш Вице-адмирал</h2>
        
        <div className="widget-group-teacher__grid">
          {/* Левая колонка: Переворачивающаяся карточка */}
          <div className="widget-group-teacher__card-col">
            <div className="teacher-flip-card">
              <div className="teacher-flip-card__inner">
                {/* Лицевая сторона */}
                <div className="teacher-flip-card__front">
                  <div className="teacher-flip-card__image-wrapper">
                    <img src={teacher.image} alt={teacher.name} className="teacher-flip-card__image" 
                         onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                    <div className="teacher-flip-card__image-overlay"></div>
                  </div>
                  <div className="teacher-flip-card__front-info">
                    <h3 className="teacher-flip-card__name">{teacher.name}</h3>
                    <div className="teacher-flip-card__role">{teacher.role}</div>
                  </div>
                  <div className="teacher-flip-card__hint">Наведите, чтобы узнать больше ↺</div>
                </div>

                {/* Оборотная сторона */}
                <div className="teacher-flip-card__back">
                  <div className="teacher-flip-card__back-content">
                    <h4 className="teacher-flip-card__back-title">{teacher.name}</h4>
                    <div className="teacher-flip-card__back-bio">{teacher.bio}</div>
                    
                    <div className="teacher-flip-card__stats">
                      <div className="teacher-flip-card__stat">
                        <span className="teacher-flip-card__stat-icon">
                          <IconEducation />
                        </span>
                        <div>
                          <div className="teacher-flip-card__stat-label">Образование</div>
                          <div className="teacher-flip-card__stat-value">{teacher.edu}</div>
                        </div>
                      </div>
                      <div className="teacher-flip-card__stat">
                        <span className="teacher-flip-card__stat-icon">
                          <IconAward />
                        </span>
                        <div>
                          <div className="teacher-flip-card__stat-label">Достижение</div>
                          <div className="teacher-flip-card__stat-value">{teacher.achievement}</div>
                        </div>
                      </div>
                      <div className="teacher-flip-card__stat">
                        <span className="teacher-flip-card__stat-icon">
                          <IconHistory />
                        </span>
                        <div>
                          <div className="teacher-flip-card__stat-label">Опыт работы</div>
                          <div className="teacher-flip-card__stat-value">{teacher.experience}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: Цитата и Видео */}
          <div className="widget-group-teacher__info-col">
            <div className="teacher-quote-card">
              <div className="teacher-quote-card__icon">“</div>
              <p className="teacher-quote-card__text">{teacher.quote}</p>
            </div>

            <div className="teacher-video-block">
              <div className="teacher-video-preview">
                <div className="teacher-video-overlay">
                  <button className="teacher-video-play-btn">
                    <div className="play-triangle"></div>
                  </button>
                  <div className="teacher-video-caption">Смотреть приветствие</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
