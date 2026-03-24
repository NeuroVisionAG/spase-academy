import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Input, Card } from '@space-academy/ui';
import './CourseLeadForm.css';

export const CourseLeadForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally we would validate with Zod (e.g. createLeadSchema from contracts) 
    // and send to an API. For MVP, we just navigate to thank-you.
    navigate('/thank-you');
  };

  return (
    <section className="widget-lead-form">
      <div className="widget-lead-form__container">
        <Card className="widget-lead-form__card" variant="portal" glowColor="purple">
          <div className="widget-lead-form__content">
            <h2 className="widget-lead-form__title">Готов начать обучение?</h2>
            <p className="widget-lead-form__desc">Оставь заявку, и наш менеджер свяжется с тобой для подтверждения.</p>
            
            <form className="widget-lead-form__form" onSubmit={handleSubmit}>
              <div className="widget-lead-form__group">
                <label>Имя родителя</label>
                <Input 
                  placeholder="Как к вам обращаться?" 
                  value={name} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
                  required 
                />
              </div>
              <div className="widget-lead-form__group">
                <label>Телефон</label>
                <Input 
                  placeholder="+7 (999) 000-00-00" 
                  type="tel" 
                  value={phone} 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} 
                  required 
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="widget-lead-form__submit">
                Отправить заявку
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};
