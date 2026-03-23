import React from 'react';

export const StubPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <main style={{ padding: '100px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>Эта страница находится в разработке и появится в ближайшее время!</p>
    </main>
  );
};
