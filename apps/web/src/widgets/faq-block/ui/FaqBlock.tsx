import React, { useState } from 'react';
import { mockFaq } from '@/shared/api/mockData';
import './FaqBlock.css';

export const FaqBlock: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(mockFaq[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="widget-faq">
      <div className="widget-faq__container">
        <h2 className="widget-faq__title">Частые вопросы</h2>
        
        <div className="widget-faq__list">
          {mockFaq.map((item) => (
            <div 
              key={item.id} 
              className={`widget-faq__item ${openId === item.id ? 'widget-faq__item--open' : ''}`}
            >
              <button 
                className="widget-faq__question"
                onClick={() => toggle(item.id)}
              >
                {item.question}
                <span className="widget-faq__icon">{openId === item.id ? '−' : '+'}</span>
              </button>
              <div 
                className="widget-faq__answer"
                style={{ maxHeight: openId === item.id ? '200px' : '0' }}
              >
                <div className="widget-faq__answer-inner">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
