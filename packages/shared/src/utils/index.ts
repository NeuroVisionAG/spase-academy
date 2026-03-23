export function clsx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(value: number, currency: 'RUB' | 'KZT' = 'RUB') {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

export function buildUrl(parts: string[]) {
  return '/' + parts.filter(Boolean).map(p => p.replace(/^\/|\/$/g, '')).join('/');
}
