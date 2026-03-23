export const fonts = {
  families: { heading: "'Unbounded', 'Nunito', sans-serif", body: "'Nunito', 'Onest', sans-serif", mono: "'JetBrains Mono', 'Fira Code', monospace" },
  weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  sizes: { xs: '12px', sm: '14px', base: '16px', md: '18px', lg: '20px', xl: '24px', '2xl': '28px', '3xl': '32px', '4xl': '38px', '5xl': '44px', '6xl': '52px' },
  lineHeights: { tight: 1.2, snug: 1.35, normal: 1.55, relaxed: 1.65 },
  letterSpacing: { tight: '-0.02em', normal: '0', wide: '0.02em', wider: '0.06em', widest: '0.08em' },
} as const;

export const textStyles = {
  h1: { fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 52px)', lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--color-text-primary)' },
  h2: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'clamp(24px, 3.5vw, 32px)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--color-text-primary)' },
  h3: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'clamp(20px, 2.5vw, 24px)', lineHeight: 1.35, letterSpacing: '0', color: 'var(--color-text-primary)' },
  body: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 'clamp(15px, 1.5vw, 16px)', lineHeight: 1.55, letterSpacing: '0', color: 'var(--color-text-primary)' },
  bodySmall: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.55, letterSpacing: '0', color: 'var(--color-text-secondary)' },
  button: { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', lineHeight: 1.2, letterSpacing: '0.02em', textTransform: 'none' },
  label: { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '12px', lineHeight: 1.2, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' },
  caption: { fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '12px', lineHeight: 1.4, letterSpacing: '0', color: 'var(--color-text-tertiary)' },
} as const;
