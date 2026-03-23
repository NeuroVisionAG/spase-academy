export const animations = {
  duration: { instant: '0ms', fast: '150ms', normal: '300ms', slow: '500ms', slower: '800ms' },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  presets: {
    fadeUp: {
      keyframes: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      duration: '400ms', easing: 'ease-out',
    },
    fadeDown: {
      keyframes: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      duration: '200ms', easing: 'ease-out',
    },
    float: {
      keyframes: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' }, '100%': { transform: 'translateY(0)' } },
      duration: '3s', easing: 'ease-in-out', iterationCount: 'infinite',
    },
    glow: {
      keyframes: { '0%': { filter: 'brightness(1)' }, '50%': { filter: 'brightness(1.2)' }, '100%': { filter: 'brightness(1)' } },
      duration: '2s', easing: 'ease-in-out', iterationCount: 'infinite',
    },
    sparkle: {
      keyframes: { '0%': { opacity: 0.3 }, '50%': { opacity: 1 }, '100%': { opacity: 0.3 } },
      duration: '1.5s', easing: 'ease-in-out', iterationCount: 'infinite',
    },
    slideDown: {
      keyframes: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(0)' } },
      duration: '300ms', easing: 'ease-out',
    },
    scaleUp: {
      hover: { transform: 'scale(1.02)' },
      duration: '200ms', easing: 'ease-out',
    },
  },
  stagger: {
    hero: { h1: '0ms', subtitle: '150ms', buttons: '300ms', character: '100ms', portals: '450ms' },
    cards: { base: '0ms', step: '100ms' },
  },
} as const;
