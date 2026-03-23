import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@space-academy/ui';

export const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
      <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Заявка принята в орбитальный центр!</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Наш капитан свяжется с вами в ближайшее время для подтверждения участия.</p>
      <Button variant="primary" onClick={() => navigate('/')}>Вернуться на главную</Button>
    </main>
  );
};
