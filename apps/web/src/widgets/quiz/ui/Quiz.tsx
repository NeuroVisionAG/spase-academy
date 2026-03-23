import React, { useState } from 'react';
import styles from './Quiz.module.css';

const questions = [
  {
    id: 1,
    title: 'Сколько лет вашему ребёнку?',
    options: ['7–9 лет', '10–13 лет', '14–17 лет'],
  },
  {
    id: 2,
    title: 'Чем больше всего увлекается ребёнок?',
    options: [
      'Рисует / придумывает истории',
      'Играет в видеоигры',
      'Интересуется технологиями',
      'Учится / исследует',
      'Всего понемногу'
    ],
  },
  {
    id: 3,
    title: 'Что хотите получить от курса?',
    options: [
      'Творческий проект (книга, мультик)',
      'Технический продукт (игра, сайт)',
      'Помощь в учёбе',
      'Ещё не знаю'
    ],
  },
  {
    id: 4,
    title: 'Есть ли у ребёнка опыт с нейросетями?',
    options: [
      'Никакого',
      'Немного, пробовал',
      'Использует регулярно'
    ],
  },
  {
    id: 5,
    title: 'Какой формат занятий удобнее?',
    options: [
      'Запись, смотрим когда удобно',
      'Живые занятия с педагогом',
      'Индивидуально',
      'Пока не знаю'
    ],
  }
];

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0); // 0-4 questions, 5 form, 6 success
  const [answers, setAnswers] = useState<string[]>([]);
  
  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);
    
    // Переход к следующему шагу с небольшой задержкой для визуала
    setTimeout(() => {
      setStep(step + 1);
    }, 250);
  };

  const calculateGroup = () => {
    const age = answers[0] || '';
    if (age === '7–9 лет') return 'Кадеты';
    if (age === '14–17 лет') return 'Команда';
    return 'Стажёры'; // default
  };

  const calculateDirection = () => {
    const interest = answers[1] || '';
    if (interest.includes('Рисует') || interest.includes('Всего понемногу')) return 'Нейрокреатив';
    return 'Вайб-кодинг';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки формы
    setStep(6);
  };

  const progress = Math.min(((step) / questions.length) * 100, 100);

  return (
    <section className={styles.quizBlock} id="quiz">
      <div className={styles.container}>
        
        {step < 5 && (
          <div className={styles.header}>
            <h2 className={styles.title}>Какой курс подойдёт вашему ребёнку?</h2>
            <p className={styles.description}>
              Ответьте на 5 вопросов — получите персональную рекомендацию и программу курса на почту.
            </p>
          </div>
        )}

        <div className={styles.quizCardWrapper}>
          <div className={styles.quizCard}>
            
            {/* Progress Bar */}
            {step < 5 && (
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.progressText}>Вопрос {step + 1} из {questions.length}</div>
              </div>
            )}

            {/* Questions */}
            {step < 5 && (
              <div key={step} className={styles.slideIn}>
                <h3 className={styles.questionTitle}>{questions[step].title}</h3>
                <div className={styles.optionsList}>
                  {questions[step].options.map((opt, idx) => (
                    <button 
                      key={idx} 
                      className={`${styles.optionBtn} ${answers[step] === opt ? styles.selected : ''}`}
                      onClick={() => handleSelect(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Form Screen */}
            {step === 5 && (
              <div key="form" className={styles.slideIn}>
                <div className={styles.resultHeader}>
                  <img src="/images/leo_interior.png" alt="Лео с результатом" className={styles.resultImage} 
                       onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  <div className={styles.resultMatch}>
                    <h4>Для вашего ребёнка идеально подходит:</h4>
                    <div className={styles.groupBadge}>Группа {calculateGroup()}</div>
                    <div className={styles.directionBadge}>Направление {calculateDirection()}</div>
                  </div>
                </div>

                <div className={styles.formContainer}>
                  <p className={styles.formDesc}>
                    Получите полную программу курса и ответы на вопросы — наш куратор свяжется с вами в течение 15 минут.
                  </p>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="text" placeholder="Имя родителя" required className={styles.input} />
                    <input type="tel" placeholder="Телефон*" required className={styles.input} />
                    <input type="email" placeholder="Email (опционально)" className={styles.input} />
                    <button type="submit" className={styles.submitBtn}>Получить рекомендацию</button>
                  </form>
                </div>
              </div>
            )}

            {/* Thank You Screen */}
            {step === 6 && (
              <div key="thanks" className={styles.slideIn}>
                <div className={styles.confetti}></div>
                <div className={styles.thankYouContent}>
                  <div className={styles.thankYouIcon}>🚀</div>
                  <h3 className={styles.thankYouTitle}>Отлично!</h3>
                  <p className={styles.thankYouDesc}>
                    Куратор Академии свяжется с вами в ближайшие 15 минут. Пока ждёте — посмотрите примеры работ наших учеников.
                  </p>
                  <a href="#works" className={styles.btnSecondary} onClick={(e) => {e.preventDefault(); document.querySelector('.galleryBlock')?.scrollIntoView({behavior: 'smooth'})}}>
                    Смотреть работы
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
