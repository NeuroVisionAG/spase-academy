export const semantic = {
  bg: {
    page: 'var(--color-bg-page)', surface: 'var(--color-bg-surface)', surfaceHover: 'var(--color-bg-surface-hover)',
    elevated: 'var(--color-bg-elevated)', overlay: 'var(--color-bg-overlay)', header: 'var(--color-bg-header)',
  },
  text: {
    primary: 'var(--color-text-primary)', secondary: 'var(--color-text-secondary)', tertiary: 'var(--color-text-tertiary)',
    inverse: 'var(--color-text-inverse)', link: 'var(--color-text-link)', linkHover: 'var(--color-text-link-hover)',
  },
  border: {
    default: 'var(--color-border-default)', strong: 'var(--color-border-strong)', focus: 'var(--color-border-focus)', error: 'var(--color-border-error)',
  },
  accent: {
    kadety: 'var(--color-accent-kadety)', stajery: 'var(--color-accent-stajery)', komanda: 'var(--color-accent-komanda)', leo: 'var(--color-accent-leo)',
  },
  cta: {
    primary: 'var(--color-cta-primary)', primaryHover: 'var(--color-cta-primary-hover)', primaryText: 'var(--color-cta-primary-text)',
    secondary: 'var(--color-cta-secondary)', secondaryBorder: 'var(--color-cta-secondary-border)', secondaryText: 'var(--color-cta-secondary-text)',
  },
  state: {
    success: 'var(--color-state-success)', successBg: 'var(--color-state-success-bg)', error: 'var(--color-state-error)', errorBg: 'var(--color-state-error-bg)',
    warning: 'var(--color-state-warning)', warningBg: 'var(--color-state-warning-bg)', info: 'var(--color-state-info)', infoBg: 'var(--color-state-info-bg)',
  },
} as const;
