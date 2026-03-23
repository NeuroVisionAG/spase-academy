import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@space-academy/ui';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <main style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px' }}>
      <h1 style={{ fontSize: '72px', color: 'var(--color-teal-500)', marginBottom: '16px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>Упс... Связь со спутником потеряна</h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Кажется, вы забрели в неизведанный сектор галактики.</p>
      <Button variant="primary" onClick={() => navigate('/')}>Вернуться на базу (Главная)</Button>
    </main>
  );
};
