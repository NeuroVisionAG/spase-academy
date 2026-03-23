import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const classNames = ['ui-button', `ui-button--${variant}`, `ui-button--${size}`, className].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classNames} disabled={disabled || isLoading} {...props}>
        {isLoading ? <span className="ui-button__spinner" /> : null}
        <span className="ui-button__content">{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
