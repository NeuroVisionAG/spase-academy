import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', hasError, ...props }, ref) => {
    const classNames = ['ui-input', hasError && 'ui-input--error', className].filter(Boolean).join(' ');

    return (
      <input ref={ref} className={classNames} {...props} />
    );
  }
);

Input.displayName = 'Input';
