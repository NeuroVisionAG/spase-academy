import React, { useState, useEffect } from 'react';
import './QuizModal.css';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupId: string;
}

const IconPremium = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--quiz-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    <path d="M12 7L13.5 10H10.5L12 7Z" fill="white" fillOpacity="0.2" />
  </svg>
);

const questions = [
  {
    id: 1,
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
    id: 2,
    title: 'Что хотите получить от курса?',
    options: [
      'Творческий проект (книга, мультик)',
      'Технический продукт (игра, сайт)',
      'Помощь в учёбе',
      'Ещё не знаю'
    ],
  },
  {
    id: 3,
    title: 'Есть ли у ребёнка опыт с нейросетями?',
    options: [
      'Никакого',
      'Немного, пробовал',
      'Использует регулярно'
    ],
  },
  {
    id: 4,
    title: 'Какой формат занятий удобнее?',
    options: [
      'Запись, смотрим когда удобно',
      'Живые занятия с педагогом',
      'Индивидуально',
      'Пока не знаю'
    ],
  }
];

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, groupId }) => {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    consentPolicy: false,
    consentData: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset quiz when opened
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers([]);
      setShowForm(false);
      setIsSuccess(false);
      setFormData({ name: '', email: '', channel: '', consentPolicy: false, consentData: false });
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = option;
    setAnswers(newAnswers);
    
    setTimeout(() => {
      setStep(step + 1);
    }, 250);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Пожалуйста, представьтесь';
    if (!formData.email.trim()) newErrors.email = 'Нам нужна почта, чтобы отправить программу';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Некорректный e-mail';
    
    if (!formData.consentPolicy) newErrors.consentPolicy = 'Необходимо ознакомиться с политиками';
    if (!formData.consentData) newErrors.consentData = 'Необходимо ваше согласие';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
    }
  };

  const getGroupName = () => {
    if (groupId === 'kadety') return 'Кадеты (7–9 лет)';
    if (groupId === 'stajery') return 'Стажеры (10–13 лет)';
    if (groupId === 'komanda') return 'Команда (14–17 лет)';
    return 'Студенты';
  };

  const calculateDirection = () => {
    const interest = answers[0] || '';
    if (interest.includes('Рисует') || interest.includes('Всего понемногу')) return 'Нейрокреатив';
    return 'Вайб-кодинг';
  };

  const handleScrollToPricing = () => {
    onClose();
    setTimeout(() => {
      document.querySelector('.widget-group-pricing')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const progress = (step / questions.length) * 100;

  return (
    <div className="quiz-modal-overlay" onClick={onClose}>
      <div className={`quiz-modal-content quiz-modal--${groupId}`} onClick={(e) => e.stopPropagation()}>
        <button className="quiz-modal-close" onClick={onClose}>&times;</button>
        
        <div className="quiz-modal-inner">
          {isSuccess ? (
            <div className="quiz-modal-success">
              <div className="quiz-modal-success-icon">✓</div>
              <h2 className="quiz-modal-result-title">Заявка принята!</h2>
              <p className="quiz-modal-success-text">Подробная программа курса придет на вашу почту в течение нескольких минут.</p>
              <button className="quiz-modal-btn quiz-modal-btn--primary" onClick={onClose}>Закрыть</button>
            </div>
          ) : showForm ? (
            <div className="quiz-modal-form-screen">
               <h2 className="quiz-modal-form-title">Получить подробную программу</h2>
               <p className="quiz-modal-form-subtitle">Оставьте контакты, и мы вышлем программу курса для группы {getGroupName()}</p>
               
               <form className="quiz-modal-form" onSubmit={handleFormSubmit}>
                 <div className="quiz-modal-input-group">
                   <label>Как к вам обращаться?</label>
                   <input 
                     type="text" 
                     placeholder="Ваше имя"
                     value={formData.name}
                     onChange={e => setFormData({...formData, name: e.target.value})}
                     className={errors.name ? 'input-error' : ''}
                   />
                   {errors.name && <span className="error-msg">{errors.name}</span>}
                 </div>

                 <div className="quiz-modal-input-group">
                   <label>Ваш e-mail (обязательно)</label>
                   <input 
                     type="email" 
                     placeholder="example@mail.ru"
                     value={formData.email}
                     onChange={e => setFormData({...formData, email: e.target.value})}
                     className={errors.email ? 'input-error' : ''}
                   />
                   {errors.email && <span className="error-msg">{errors.email}</span>}
                 </div>

                 <div className="quiz-modal-input-group">
                   <label>Удобный канал для связи (необязательно)</label>
                   <input 
                     type="text" 
                     placeholder="Ваш контакт для связи (например, телефон)"
                     value={formData.channel}
                     onChange={e => setFormData({...formData, channel: e.target.value})}
                   />
                 </div>

                 <div className="quiz-modal-checkbox-group">
                   <label className="checkbox-label">
                     <input 
                       type="checkbox" 
                       checked={formData.consentPolicy}
                       onChange={e => setFormData({...formData, consentPolicy: e.target.checked})}
                     />
                     <span>Я ознакомился с <a href="#">политикой обработки данных</a> и <a href="#">конфиденциальности</a></span>
                   </label>
                   {errors.consentPolicy && <span className="error-msg">{errors.consentPolicy}</span>}

                   <label className="checkbox-label">
                     <input 
                       type="checkbox" 
                       checked={formData.consentData}
                       onChange={e => setFormData({...formData, consentData: e.target.checked})}
                     />
                     <span>Я даю согласие на обработку моих персональных данных</span>
                   </label>
                   {errors.consentData && <span className="error-msg">{errors.consentData}</span>}
                 </div>

                 <button type="submit" className="quiz-modal-btn quiz-modal-btn--primary">Отправить и получить программу</button>
                 <button type="button" className="quiz-modal-btn quiz-modal-btn--ghost" onClick={() => setShowForm(false)}>Назад к результату</button>
               </form>
            </div>
          ) : step < questions.length ? (
            <div className="quiz-modal-step">
              <div className="quiz-modal-progress">
                <div className="quiz-modal-progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="quiz-modal-counter">Вопрос {step + 1} из {questions.length}</div>
              <h2 className="quiz-modal-question">{questions[step].title}</h2>
              <div className="quiz-modal-options">
                {questions[step].options.map((opt, idx) => (
                  <button 
                    key={idx} 
                    className="quiz-modal-option"
                    onClick={() => handleSelect(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-modal-result">
              <div className="quiz-modal-result-icon">
                <IconPremium />
              </div>
              <h2 className="quiz-modal-result-title">Готово!</h2>
              <div className="quiz-modal-recommendation">
                <p>Наши рекомендации для группы <strong>{getGroupName()}</strong>:</p>
                <div className="quiz-modal-result-badge">{calculateDirection()}</div>
                <p className="quiz-modal-result-note">Наш совет: оставьте главный выбор за своим ребенком.</p>
              </div>
              
              <div className="quiz-modal-result-actions">
                <button className="quiz-modal-btn quiz-modal-btn--primary" onClick={handleScrollToPricing}>
                  Перейти к тарифам
                </button>
                <button className="quiz-modal-btn quiz-modal-btn--secondary" onClick={() => setShowForm(true)}>
                  Получить подробную программу
                </button>
                <button className="quiz-modal-btn quiz-modal-btn--ghost" onClick={onClose}>
                  Закрыть окно
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
