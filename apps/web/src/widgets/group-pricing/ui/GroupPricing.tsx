import React from 'react';
import './GroupPricing.css';

const IconPlay = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

const IconRocket = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 12 12 17 22 12"></polyline>
    <polyline points="2 17 12 22 22 17"></polyline>
  </svg>
);

const IconCrown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
  </svg>
);

interface GroupPricingProps {
  groupId: string;
}

export const GroupPricing: React.FC<GroupPricingProps> = ({ groupId: _groupId }) => {
  const plans = [
    {
      id: 1,
      title: 'Бесплатный демо-урок',
      price: '0 ₽',
      desc: 'Первое знакомство с Академией. Ребёнок попробует — и вы оба поймёте, подходит ли формат.',
      icon: <IconPlay />,
      isFree: true,
    },
    {
      id: 2,
      title: 'Пробный урок',
      price: 'от 990 ₽',
      desc: 'Полноценное занятие с преподавателем. Стоимость зачитывается в курс при покупке.',
      icon: <IconRocket />,
    },
    {
      id: 3,
      title: 'Запись + консультации',
      price: 'от 3 990 ₽/мес',
      desc: 'Основной формат. Занятия в записи, консультации с педагогом, родительский кабинет.',
      icon: <IconLayers />,
      isPopular: true,
    },
    {
      id: 4,
      title: 'Персональный',
      price: 'от 7 990 ₽/мес',
      desc: 'Индивидуальные занятия 1-на-1 с педагогом. Максимальный результат в короткий срок.',
      icon: <IconCrown />,
    }
  ];

  return (
    <section id="pricing" className="widget-group-pricing">
      <div className="widget-group-pricing__container">
        <div className="widget-group-pricing__header">
          <h2 className="widget-group-pricing__title">Начни так, как удобно тебе</h2>
          <p className="widget-group-pricing__description">
            От бесплатного первого урока до персонального сопровождения — выбери формат, который подходит вашей семье.
          </p>
        </div>

        <div className="widget-group-pricing__grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`
                widget-group-pricing__card 
                ${plan.isFree ? 'widget-group-pricing__card--free' : ''} 
                ${plan.isPopular ? 'widget-group-pricing__card--popular' : ''}
              `}
            >
              {plan.isPopular && <div className="widget-group-pricing__badge">Популярный</div>}
              
              <div className="widget-group-pricing__icon-wrapper">
                {plan.icon}
              </div>
              
              <h3 className="widget-group-pricing__card-title">{plan.title}</h3>
              <div className="widget-group-pricing__card-price">{plan.price}</div>
              <p className="widget-group-pricing__card-desc">{plan.desc}</p>
            </div>
          ))}
        </div>

        <div className="widget-group-pricing__note">
          Стоимость пробного урока зачитывается в полную стоимость курса при покупке. Доступна рассрочка 0% на 6 и 12 месяцев.
        </div>
      </div>
    </section>
  );
};
