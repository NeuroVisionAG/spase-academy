import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'portal' | 'pricing';
  glowColor?: 'teal' | 'purple' | 'orange' | 'navy';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'base', glowColor, children, ...props }, ref) => {
    const classNames = ['ui-card', `ui-card--${variant}`, glowColor && `ui-card--glow-${glowColor}`, className].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
