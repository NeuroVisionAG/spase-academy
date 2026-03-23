# SPACE MANIFEST · v1.2

> **Единый источник истины (SSOT)** для платформы Space Academy.
> Документ описывает архитектуру, дизайн-систему, структуру страниц, backend API,
> файловое дерево и правила разработки.
>
> **Актуальность:** Март 2026
> **Рынки:** 🇷🇺 Россия · 🇰🇿 Казахстан
> **Стек:** TypeScript · React · Vite · Turborepo · FSD

---

## Содержание

- [Часть 1 — Обзор проекта](#часть-1--обзор-проекта)
- [Часть 2 — Глоссарий](#часть-2--глоссарий)
- [Часть 3 — Дизайн-система и токены](#часть-3--дизайн-система-и-токены)
- [Часть 4 — Архитектура Monorepo](#часть-4--архитектура-monorepo)
- [Часть 5 — Feature-Sliced Design (FSD)](#часть-5--feature-sliced-design-fsd)
- [Часть 6 — Полное файловое дерево](#часть-6--полное-файловое-дерево)
- [Часть 7 — Уровень 1: Главная страница](#часть-7--уровень-1-главная-страница)
- [Часть 8 — Уровень 2: Страницы групп](#часть-8--уровень-2-страницы-групп)
- [Часть 9 — Уровень 3: Страницы курсов](#часть-9--уровень-3-страницы-курсов)
- [Часть 10 — Backend API](#часть-10--backend-api)
- [Часть 11 — Персонажи и визуальная система](#часть-11--персонажи-и-визуальная-система)
- [Часть 12 — Казахстанский рынок](#часть-12--казахстанский-рынок)
- [Часть 13 — SSOT-контракты и валидация](#часть-13--ssot-контракты-и-валидация)
- [Часть 14 — Правила разработки](#часть-14--правила-разработки)
- [Часть 15 — Обработка ошибок и логирование](#часть-15--обработка-ошибок-и-логирование)
- [Часть 16 — Стратегия интернационализации (i18n)](#часть-16--стратегия-интернационализации-i18n)
- [Часть 17 — Аналитика и UTM-трекинг](#часть-17--аналитика-и-utm-трекинг)
- [Часть 18 — Управление состоянием](#часть-18--управление-состоянием)
- [Часть 19 — Доступность (Accessibility)](#часть-19--доступность-accessibility)
- [Часть 20 — Переменные окружения](#часть-20--переменные-окружения)
- [Часть 21 — Тестирование](#часть-21--тестирование)
- [Часть 22 — Деплой и инфраструктура](#часть-22--деплой-и-инфраструктура)
- [Часть 23 — Roadmap и Phase Plan](#часть-23--roadmap-и-phase-plan)
- [Приложение A — Детальные навыки по 6 курсам](#приложение-a--детальные-навыки-по-6-курсам)
- [Приложение B — Глоссарий терминов UI-компонентов](#приложение-b--глоссарий-терминов-ui-компонентов)
- [Приложение C — Чеклист запуска](#приложение-c--чеклист-запуска-launch-checklist)

---

# Часть 1 — Обзор проекта

## 1.1. Миссия

Space Academy (Космическая Академия) — онлайн-платформа для обучения детей от 7 до 17 лет
работе с искусственным интеллектом. Платформа учит не конкретным нейросетям, а принципам
нейро-инжиниринга и построению готовых продакт-решений.

**Ключевой принцип:**
> Мы учим ребёнка делать продукт от идеи до реализации, а не просто чатиться с нейросетью.

## 1.2. Целевая аудитория

### Первичная аудитория — родители

| Сегмент | Описание | Триггер |
|---------|----------|---------|
| Тревожные | Родители, боящиеся, что ребёнок отстанет от технологий | «Ваш ребёнок научится управлять ИИ — а не зависеть от него» |
| Прагматики | Родители, ищущие конкретный навык для будущего ребёнка | «ИИ-навык, который останется с ребёнком навсегда» |
| Продвинутые | Родители из IT, ищущие системный подход | «Мы учим принципам — подходит для любых нейросетей» |
| Исследователи | Внимательно изучают программу, читают FAQ | Детальная программа, структура пилларов |

### Вторичная аудитория — дети

| Группа | Возраст | Роль | Позиция |
|--------|---------|------|---------|
| Кадеты | 7–9 лет | Творцы | Знакомятся с возможностями ИИ, учатся ставить задачи |
| Стажёры | 10–13 лет | Исследователи | Используют ИИ для учёбы и личных интересов |
| Команда | 14+ лет | Архитекторы | Разрабатывают реальные продакт-проекты |

## 1.3. Два направления обучения

### Нейрокреатив

Создание продукта при помощи генеративных нейросетей.
Примеры финальных продуктов: сказка, сценарий, книжка с картинками, презентация,
мультфильм, видео для соцсети, мини-сериал.

**Фокус:** Генераторный промпт-инжиниринг, работа с визуальным и текстовым контентом,
сторителлинг, мультимодальное творчество.

### Вайб-кодинг

Создание продукта через ИИ-ассистированную разработку.
Примеры финальных продуктов: игра, сайт, приложение, бот.

**Фокус:** Программная логика, UI/UX мышление, деплой на собственную площадку,
итерационная разработка с ИИ-инструментами.

## 1.4. Командование Академии

| Звание | Роль | Описание |
|--------|------|----------|
| Адмирал | Технический директор | Поддерживает обучающую платформу (хаб), обеспечивает внутренние процессы |
| Вице-адмиралы (×3) | Преподаватели | Руководители возрастных групп, ведут занятия |
| ЦУП (×2) | Разработчики курсов | Практики ИИ, специалисты по онлайн-обучению и методист |

## 1.5. Форматы обучения

| # | Формат | Цена (RU) | Цена (KZ) | Описание |
|---|--------|-----------|-----------|----------|
| 1 | 🎁 Бесплатный урок | 0 ₽ | 0 ₸ | Первое знакомство с Академией |
| 2 | 🚀 Пробный урок | от 990 ₽ | от 4 500 ₸ | Полноценное занятие, стоимость зачитывается в курс |
| 3 | 📚 Запись + консультации | от 3 990 ₽/мес | от 18 900 ₸/мес | Основной формат. Занятия в записи + консультации педагога |
| 4 | 👑 Персональный | от 7 990 ₽/мес | от 37 900 ₸/мес | Индивидуальные занятия 1-на-1 с педагогом |

## 1.6. Воронка продаж — 3 уровня

```
┌─────────────────────────────────────────────────────────┐
│                    УРОВЕНЬ 1                            │
│              Главная страница (/)                       │
│         Холодная аудитория · 13 блоков                  │
│     Цель: заинтересовать → выбрать группу               │
│                                                         │
│    ┌──────────┬──────────┬──────────┐                   │
│    │ Кадеты   │ Стажёры  │ Команда  │                   │
│    │  7–9     │  10–13   │   14+    │                   │
│    └────┬─────┴────┬─────┴────┬─────┘                   │
└─────────┼──────────┼──────────┼─────────────────────────┘
          │          │          │
          ▼          ▼          ▼
┌─────────────────────────────────────────────────────────┐
│                    УРОВЕНЬ 2                            │
│          Страницы групп (×3)                            │
│       Тёплая аудитория · 11 блоков                      │
│    Цель: убедить → выбрать направление                  │
│                                                         │
│    ┌────────────────┬────────────────┐                   │
│    │ Нейрокреатив   │ Вайб-кодинг   │                   │
│    └───────┬────────┴───────┬────────┘                   │
└────────────┼───────────────┼────────────────────────────┘
             │               │
             ▼               ▼
┌─────────────────────────────────────────────────────────┐
│                    УРОВЕНЬ 3                            │
│          Страницы курсов (×6)                           │
│       Горячая аудитория · 11 блоков                     │
│    Цель: закрыть возражения → оплата / заявка           │
└─────────────────────────────────────────────────────────┘
```

### Математика страниц

| Элемент | Количество на рынок | RU + KZ |
|---------|--------------------:|--------:|
| Главная (L1) | 1 | 2 |
| Группы (L2) | 3 | 6 |
| Курсы (L3) | 6 | 12 |
| Thank You Page | 1 | 2 |
| О нас (About) | 1 | 2 |
| Все работы (Gallery) | 1 | 2 |
| Конфиденциальность | 1 | 1 |
| Оферта | 1 | 1 |
| 404 | 1 | 1 |
| **Итого** | **16** | **~27** |

## 1.7. URL-структура

### Уровень 1

| Страница | URL (RU) | URL (KZ) |
|----------|----------|----------|
| Главная | `/` | `/` (kz. поддомен) |
| О нас | `/about` | `/about` |
| Все работы | `/gallery` | `/gallery` |

### Уровень 2

| Группа | URL (RU) | URL (KZ) |
|--------|----------|----------|
| Кадеты 7–9 | `/kadety` | `/kadety` |
| Стажёры 10–13 | `/stajery` | `/stajery` |
| Команда 14+ | `/komanda` | `/komanda` |

### Уровень 3

| Курс | URL (RU) | URL (KZ) |
|------|----------|----------|
| Кадеты · Нейрокреатив | `/kadety/neyrokreativ` | `/kadety/neyrokreativ` |
| Кадеты · Вайб-кодинг | `/kadety/vayb-koding` | `/kadety/vayb-koding` |
| Стажёры · Нейрокреатив | `/stajery/neyrokreativ` | `/stajery/neyrokreativ` |
| Стажёры · Вайб-кодинг | `/stajery/vayb-koding` | `/stajery/vayb-koding` |
| Команда · Нейрокреатив | `/komanda/neyrokreativ` | `/komanda/neyrokreativ` |
| Команда · Вайб-кодинг | `/komanda/vayb-koding` | `/komanda/vayb-koding` |

### Сервисные страницы

| Страница | URL |
|----------|-----|
| Thank You | `/thank-you` |
| Политика конфиденциальности | `/privacy` |
| Оферта | `/terms` |
| 404 | `/404` |

## 1.8. Структура урока — 6 пилларов

Каждый урок построен по единому шаблону из 6 пилларов.
Общее время: 45–75 минут (можно разбить на 3–5 дней).
Прогресс достигается через постепенное усложнение заданий от урока к уроку.

| # | Пиллар | Время | Назначение |
|---|--------|-------|------------|
| 0 | 🔥 Warm-up | 3–5 мин | Продающая часть для родителей — что ребёнок узнает и создаст |
| 1 | 🤖 AI Awakening | 5 мин | Мини-видео/анимация с новым углом о возможностях ИИ |
| 2 | 🛡️ Safety Shield | 7 мин | 1–2 правила цифровой безопасности + мини-задание |
| 3 | 📖 Новая тема | 8 мин | Объяснение на примерах + воркшоп |
| 4 | 📚 Study Supercharge | 8 мин | Применение к школьному/учебному примеру |
| 5 | 🚀 Creative & Future Mode | 8 мин | Креативный или футуристичный твист темы |
| 6 | 🏅 AI Habit Builder | 5–7 мин | Встраивание навыка в день + рефлексия + трекер/бейдж |

**Домашнее задание:** Показать и объяснить родителю результат урока.

---

# Часть 2 — Глоссарий

## 2.1. Бизнес-термины

| Термин | Определение |
|--------|-------------|
| L1 | Уровень 1 воронки — Главная страница. Холодная аудитория |
| L2 | Уровень 2 воронки — Страница возрастной группы. Тёплая аудитория |
| L3 | Уровень 3 воронки — Страница курса. Горячая аудитория |
| Кадеты | Возрастная группа 7–9 лет. Роль: «Творцы» |
| Стажёры | Возрастная группа 10–13 лет. Роль: «Исследователи» |
| Команда | Возрастная группа 14+ лет. Роль: «Архитекторы» |
| Нейрокреатив | Направление обучения — создание контента через генеративные нейросети |
| Вайб-кодинг | Направление обучения — разработка продуктов через ИИ-ассистированное программирование |
| Миссия | Урок курса в терминологии Академии |
| Пиллар | Структурный блок урока (6 пилларов в каждой миссии) |
| Адмирал | Технический директор платформы |
| Вице-адмирал | Преподаватель, руководитель возрастной группы |
| ЦУП | Центр управления полётом — разработчики курсов |
| КА | Космическая Академия (сокращение) |
| CTA | Call-to-Action — призыв к действию (кнопка) |
| Hero | Первый экран страницы (100vh) |
| Квиз | Интерактивный опросник для подбора курса и захвата лидов |
| Лид | Контакт потенциального клиента (телефон, email) |

## 2.2. Технические термины

| Термин | Определение |
|--------|-------------|
| FSD | Feature-Sliced Design — архитектурная методология фронтенда |
| SSOT | Single Source of Truth — единый источник истины |
| Monorepo | Единый репозиторий для всех пакетов проекта (Turborepo) |
| Turborepo | Инструмент для управления монорепозиторием (от Vercel) |
| DDD | Domain-Driven Design — предметно-ориентированное проектирование |
| BFF | Backend-for-Frontend — слой API, специализированный для фронтенда |
| DTO | Data Transfer Object — объект передачи данных между слоями |
| Entity | Бизнес-сущность в терминах DDD |
| Aggregate | Кластер связанных Entity с общим корнем |
| Repository | Паттерн доступа к данным (абстракция над базой данных) |
| Use Case | Сценарий использования — бизнес-логика одной операции |
| Middleware | Промежуточный обработчик запроса в API |
| Token | Дизайн-токен — атомарное значение визуальной системы |
| Semantic Token | Токен с семантическим названием (напр. `color-cta-primary`) |

## 2.3. Персонажи

| Имя | Описание | Цвет костюма | Рынок RU | Рынок KZ | Группа привязки |
|-----|----------|--------------|----------|----------|-----------------|
| Лео | Мальчик с рыжими кудрями, веснушки | Бирюзовый + оранж | ✅ Hero L1 | ✅ Hero L1 | Кадеты (7–9) |
| Аури | Девочка с косичками, зелёные глаза | Фиолетовый + зелёный неон | ✅ | — | Стажёры (10–13) |
| Лина | Девочка азиатской внешности, тёмные волосы | Фиолетовый + зелёный неон | — | ✅ | Стажёры (10–13) |
| Арло | Мальчик, тёмные волосы с бирюзовыми прядями | Тёмно-синий + оранж | ✅ | ✅ | Команда (14+) |
| Зара | Тёмнокожая девочка с косичками | Фиолетовый + зелёный | ✅ (галерея) | ✅ (инклюзивность) | Все группы |

---

# Часть 3 — Дизайн-система и токены

## 3.1. Философия дизайна

### Визуальный стиль

- **3D Cartoon-рендер** в стиле Pixar / Big Hero 6
- Мягкое студийное освещение, без жёстких теней
- Персонажи выполнены в едином стиле и пропорциях
- Космический фон: звёзды, туманности, голограммы как декоративные элементы
- Анимации: float (левитация), glow (свечение), sparkle (мерцание)

### Принципы

1. **Космическая иммерсивность** — каждый элемент поддерживает тематику Академии
2. **Возрастная адаптация** — визуал мягче для Кадетов, серьёзнее для Команды
3. **Доверие через премиальность** — стиль вызывает ощущение серьёзного проекта
4. **Консистентность** — один визуальный язык на все 26 страниц обоих рынков
5. **Производительность** — эффекты через CSS, не GIF; WebP вместо PNG

## 3.2. Цветовые токены

### Primitive Tokens (base palette)

Базовые цвета палитры. Используются ТОЛЬКО через semantic tokens.
Никогда не применяются напрямую в компонентах.

```typescript
// packages/tokens/src/colors/primitive.ts

export const primitive = {
  // === Космический фон ===
  cosmos: {
    900: '#0e1118',   // Самый тёмный — шапка с opacity
    800: '#151822',   // Фон секций
    700: '#1A1E35',   // Основной фон страницы
    600: '#1E2440',   // Карточки на тёмном фоне
    500: '#2A3050',   // Hover-состояние карточек
    400: '#3A4060',   // Неактивные элементы
    300: '#5A6080',   // Субзаголовки
    200: '#8b96b0',   // Вторичный текст
    100: '#c5cde0',   // Разделители
    50:  '#e8ecf4',   // Светлые акценты
  },

  // === Бирюза / Тил ===
  teal: {
    900: '#0a3d3d',
    800: '#115e5e',
    700: '#198080',
    600: '#20a0a0',
    500: '#2DD4BF',   // Основной акцент — Кадеты
    400: '#5EDDCC',
    300: '#8FE8DC',
    200: '#B8F0E8',
    100: '#DAFAF4',
    50:  '#F0FDFA',
  },

  // === Оранжевый ===
  orange: {
    900: '#5c2d0e',
    800: '#8a3f10',
    700: '#b85518',
    600: '#e06a20',
    500: '#FB923C',   // CTA-кнопки, Лео
    400: '#FCA85C',
    300: '#FDBF7C',
    200: '#FDD6A0',
    100: '#FEECC8',
    50:  '#FFF7ED',
  },

  // === Фиолетовый ===
  purple: {
    900: '#2e1065',
    800: '#3b1382',
    700: '#5521A0',
    600: '#6D2DC0',
    500: '#7C3AED',   // Стажёры, Аури/Лина
    400: '#9B6AF0',
    300: '#B794F4',
    200: '#D4BFFA',
    100: '#E9DDFB',
    50:  '#F5F0FF',
  },

  // === Тёмно-синий ===
  navy: {
    900: '#0a1628',
    800: '#0f2240',
    700: '#142E55',
    600: '#1A3A6A',
    500: '#1E3A5F',   // Арло, Команда
    400: '#2E5A8F',
    300: '#4A7AB5',
    200: '#7AA5D0',
    100: '#B0CEE8',
    50:  '#E0EDF7',
  },

  // === Зелёный неон ===
  neon: {
    900: '#0a3d0a',
    800: '#157015',
    700: '#1E9E1E',
    600: '#30C030',
    500: '#4ADE80',   // Детали костюмов
    400: '#6EE898',
    300: '#90F0B0',
    200: '#B5F5CC',
    100: '#D8FAE5',
    50:  '#F0FDF4',
  },

  // === Нейтральные ===
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    950: '#0a0a0a',
    900: '#171717',
    800: '#262626',
    700: '#404040',
    600: '#525252',
    500: '#737373',
    400: '#a3a3a3',
    300: '#d4d4d4',
    200: '#e5e5e5',
    100: '#f5f5f5',
    50:  '#fafafa',
  },

  // === Состояния (семантические базовые) ===
  red: {
    500: '#EF4444',
    400: '#F87171',
    100: '#FEE2E2',
  },
  green: {
    500: '#22C55E',
    400: '#4ADE80',
    100: '#DCFCE7',
  },
  yellow: {
    500: '#EAB308',
    400: '#FACC15',
    100: '#FEF9C3',
  },
} as const;
```

### Semantic Tokens (theme-aware)

Семантические токены привязаны к ролям в интерфейсе.
Поддерживают переключение тем (dark / light).

```typescript
// packages/tokens/src/colors/semantic.ts

export const semantic = {
  // === Фоны ===
  bg: {
    page:         'var(--color-bg-page)',         // #1A1E35 (dark) / #FFFFFF (light)
    surface:      'var(--color-bg-surface)',       // #1E2440 / #F5F5F5
    surfaceHover: 'var(--color-bg-surface-hover)', // #2A3050 / #E5E5E5
    elevated:     'var(--color-bg-elevated)',      // #151822 / #FFFFFF
    overlay:      'var(--color-bg-overlay)',       // rgba(14,17,24,0.92)
    header:       'var(--color-bg-header)',        // rgba(14,17,24,0.92) + blur
  },

  // === Текст ===
  text: {
    primary:   'var(--color-text-primary)',    // #FFFFFF / #1A1918
    secondary: 'var(--color-text-secondary)',  // #8b96b0 / #68665f
    tertiary:  'var(--color-text-tertiary)',   // #5A6080 / #9a9790
    inverse:   'var(--color-text-inverse)',    // #1A1E35 / #FFFFFF
    link:      'var(--color-text-link)',       // teal.500
    linkHover: 'var(--color-text-link-hover)', // teal.400
  },

  // === Границы ===
  border: {
    default:  'var(--color-border-default)',   // rgba(255,255,255,0.1) / rgba(0,0,0,0.11)
    strong:   'var(--color-border-strong)',    // rgba(255,255,255,0.2) / rgba(0,0,0,0.2)
    focus:    'var(--color-border-focus)',      // teal.500
    error:    'var(--color-border-error)',      // red.500
  },

  // === Акценты по группам ===
  accent: {
    kadety:   'var(--color-accent-kadety)',    // teal.500 (#2DD4BF)
    stajery:  'var(--color-accent-stajery)',   // purple.500 (#7C3AED)
    komanda:  'var(--color-accent-komanda)',   // navy.500 (#1E3A5F)
    leo:      'var(--color-accent-leo)',       // orange.500 (#FB923C)
  },

  // === CTA ===
  cta: {
    primary:      'var(--color-cta-primary)',       // gradient teal→orange
    primaryHover: 'var(--color-cta-primary-hover)',  // gradient teal.400→orange.400
    primaryText:  'var(--color-cta-primary-text)',   // #FFFFFF
    secondary:      'var(--color-cta-secondary)',       // transparent
    secondaryBorder:'var(--color-cta-secondary-border)',// rgba(255,255,255,0.3)
    secondaryText:  'var(--color-cta-secondary-text)',  // #FFFFFF
  },

  // === Состояния ===
  state: {
    success:    'var(--color-state-success)',    // green.500
    successBg:  'var(--color-state-success-bg)', // green.100
    error:      'var(--color-state-error)',       // red.500
    errorBg:    'var(--color-state-error-bg)',    // red.100
    warning:    'var(--color-state-warning)',     // yellow.500
    warningBg:  'var(--color-state-warning-bg)', // yellow.100
    info:       'var(--color-state-info)',        // teal.500
    infoBg:     'var(--color-state-info-bg)',     // teal.100
  },
} as const;
```

### Group Color Map

Привязка цветов к возрастным группам и направлениям.
Используется для динамической темизации страниц L2 и L3.

```typescript
// packages/tokens/src/colors/group-map.ts

export const groupColorMap = {
  kadety: {
    primary:    'teal.500',      // #2DD4BF — основной акцент
    secondary:  'orange.500',    // #FB923C — CTA
    gradient:   'linear-gradient(135deg, #2DD4BF 0%, #20a0a0 100%)',
    heroGlow:   'radial-gradient(ellipse at 70% 30%, rgba(45,212,191,0.15), transparent 60%)',
    character:  'Leo',
    characterRU: 'Leo',
    characterKZ: 'Leo',
    badge:      '#2DD4BF',
    badgeText:  '#0a3d3d',
  },
  stajery: {
    primary:    'purple.500',    // #7C3AED — основной акцент
    secondary:  'neon.500',      // #4ADE80 — детали
    gradient:   'linear-gradient(135deg, #7C3AED 0%, #5521A0 100%)',
    heroGlow:   'radial-gradient(ellipse at 70% 30%, rgba(124,58,237,0.15), transparent 60%)',
    character:  'Auri',
    characterRU: 'Auri',
    characterKZ: 'Lina',
    badge:      '#7C3AED',
    badgeText:  '#FFFFFF',
  },
  komanda: {
    primary:    'navy.500',      // #1E3A5F — основной акцент
    secondary:  'orange.500',    // #FB923C — CTA
    gradient:   'linear-gradient(135deg, #1E3A5F 0%, #0f2240 100%)',
    heroGlow:   'radial-gradient(ellipse at 70% 30%, rgba(30,58,95,0.2), transparent 60%)',
    character:  'Arlo',
    characterRU: 'Arlo',
    characterKZ: 'Arlo',
    badge:      '#1E3A5F',
    badgeText:  '#FFFFFF',
  },
} as const;
```

## 3.3. Типографика

### Font Tokens

```typescript
// packages/tokens/src/typography/fonts.ts

export const fonts = {
  families: {
    heading:  "'Unbounded', 'Nunito', sans-serif",   // H1 заголовки
    body:     "'Nunito', 'Onest', sans-serif",       // Основной текст
    mono:     "'JetBrains Mono', 'Fira Code', monospace", // Код
  },

  weights: {
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },

  sizes: {
    // Масштаб: 1.25 (Major Third)
    xs:    '12px',   // 0.75rem  — подписи, мета
    sm:    '14px',   // 0.875rem — мобильные min
    base:  '16px',   // 1rem     — body
    md:    '18px',   // 1.125rem — подзаголовки
    lg:    '20px',   // 1.25rem  — акцентный body
    xl:    '24px',   // 1.5rem   — H3
    '2xl': '28px',   // 1.75rem  — H2 mobile
    '3xl': '32px',   // 2rem     — H2 desktop
    '4xl': '38px',   // 2.375rem — H1 mobile
    '5xl': '44px',   // 2.75rem  — H1 tablet
    '6xl': '52px',   // 3.25rem  — H1 desktop
  },

  lineHeights: {
    tight:   1.2,    // Заголовки
    snug:    1.35,   // Подзаголовки
    normal:  1.55,   // Body
    relaxed: 1.65,   // Длинные тексты
  },

  letterSpacing: {
    tight:   '-0.02em',  // Крупные заголовки
    normal:  '0',        // Body
    wide:    '0.02em',   // Кнопки
    wider:   '0.06em',   // Labels uppercase
    widest:  '0.08em',   // Мета uppercase
  },
} as const;
```

### Text Styles (Composite Tokens)

```typescript
// packages/tokens/src/typography/text-styles.ts

export const textStyles = {
  h1: {
    fontFamily:    'var(--font-heading)',
    fontWeight:    700,
    fontSize:      'clamp(38px, 5vw, 52px)',  // 4xl → 6xl
    lineHeight:    1.2,
    letterSpacing: '-0.02em',
    color:         'var(--color-text-primary)',
  },
  h2: {
    fontFamily:    'var(--font-body)',
    fontWeight:    600,
    fontSize:      'clamp(24px, 3.5vw, 32px)', // xl → 3xl
    lineHeight:    1.35,
    letterSpacing: '-0.01em',
    color:         'var(--color-text-primary)',
  },
  h3: {
    fontFamily:    'var(--font-body)',
    fontWeight:    600,
    fontSize:      'clamp(20px, 2.5vw, 24px)', // lg → xl
    lineHeight:    1.35,
    letterSpacing: '0',
    color:         'var(--color-text-primary)',
  },
  body: {
    fontFamily:    'var(--font-body)',
    fontWeight:    400,
    fontSize:      'clamp(15px, 1.5vw, 16px)',
    lineHeight:    1.55,
    letterSpacing: '0',
    color:         'var(--color-text-primary)',
  },
  bodySmall: {
    fontFamily:    'var(--font-body)',
    fontWeight:    400,
    fontSize:      '14px',
    lineHeight:    1.55,
    letterSpacing: '0',
    color:         'var(--color-text-secondary)',
  },
  button: {
    fontFamily:    'var(--font-body)',
    fontWeight:    600,
    fontSize:      '15px',
    lineHeight:    1.2,
    letterSpacing: '0.02em',
    textTransform: 'none',
  },
  label: {
    fontFamily:    'var(--font-body)',
    fontWeight:    500,
    fontSize:      '12px',
    lineHeight:    1.2,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color:         'var(--color-text-tertiary)',
  },
  caption: {
    fontFamily:    'var(--font-body)',
    fontWeight:    400,
    fontSize:      '12px',
    lineHeight:    1.4,
    letterSpacing: '0',
    color:         'var(--color-text-tertiary)',
  },
} as const;
```

## 3.4. Размеры и отступы

### Spacing Tokens

```typescript
// packages/tokens/src/spacing.ts

export const spacing = {
  // Базовый шаг: 4px
  px:   '1px',
  0:    '0',
  0.5:  '2px',
  1:    '4px',
  1.5:  '6px',
  2:    '8px',
  2.5:  '10px',
  3:    '12px',
  3.5:  '14px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  7:    '28px',
  8:    '32px',
  9:    '36px',
  10:   '40px',
  11:   '44px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  28:   '112px',
  32:   '128px',
} as const;
```

### Border Radius Tokens

```typescript
// packages/tokens/src/radii.ts

export const radii = {
  none: '0',
  sm:   '4px',      // Мелкие элементы (чипы, бейджи)
  md:   '8px',      // Кнопки, инпуты
  lg:   '12px',     // Карточки
  xl:   '16px',     // Большие карточки
  '2xl':'24px',     // Секции, модалки
  full: '9999px',   // Pill-кнопки, аватары
} as const;
```

### Breakpoint Tokens

```typescript
// packages/tokens/src/breakpoints.ts

export const breakpoints = {
  sm:  '640px',     // Мобильный горизонтальный
  md:  '768px',     // Планшет портрет
  lg:  '1024px',    // Планшет горизонтальный / ноутбук
  xl:  '1280px',    // Десктоп
  '2xl':'1536px',   // Широкий десктоп
} as const;

export const containers = {
  content: '920px',  // Основной контент
  wide:    '1200px', // Широкие секции
  full:    '100%',   // Полная ширина
} as const;
```

## 3.5. Эффекты

### Shadow Tokens

```typescript
// packages/tokens/src/shadows.ts

export const shadows = {
  none: 'none',
  sm:   '0 1px 2px rgba(0,0,0,0.15)',
  md:   '0 4px 8px rgba(0,0,0,0.2)',
  lg:   '0 8px 24px rgba(0,0,0,0.25)',
  xl:   '0 16px 48px rgba(0,0,0,0.3)',
  inner:'inset 0 2px 4px rgba(0,0,0,0.1)',

  // Glow-эффекты для карточек групп
  glowTeal:   '0 0 20px rgba(45,212,191,0.3)',
  glowPurple: '0 0 20px rgba(124,58,237,0.3)',
  glowOrange: '0 0 20px rgba(251,146,60,0.3)',
  glowNavy:   '0 0 20px rgba(30,58,95,0.3)',
} as const;
```

### Animation Tokens

```typescript
// packages/tokens/src/animations.ts

export const animations = {
  // Длительности
  duration: {
    instant:  '0ms',
    fast:     '150ms',
    normal:   '300ms',
    slow:     '500ms',
    slower:   '800ms',
  },

  // Функции сглаживания
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in:      'cubic-bezier(0.4, 0, 1, 1)',
    out:     'cubic-bezier(0, 0, 0.2, 1)',
    inOut:   'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce:  'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Предустановленные анимации
  presets: {
    fadeUp: {
      keyframes: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      duration: '400ms',
      easing: 'ease-out',
    },
    fadeDown: {
      keyframes: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      duration: '200ms',
      easing: 'ease-out',
    },
    float: {
      keyframes: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' }, '100%': { transform: 'translateY(0)' } },
      duration: '3s',
      easing: 'ease-in-out',
      iterationCount: 'infinite',
    },
    glow: {
      keyframes: { '0%': { filter: 'brightness(1)' }, '50%': { filter: 'brightness(1.2)' }, '100%': { filter: 'brightness(1)' } },
      duration: '2s',
      easing: 'ease-in-out',
      iterationCount: 'infinite',
    },
    sparkle: {
      keyframes: { '0%': { opacity: 0.3 }, '50%': { opacity: 1 }, '100%': { opacity: 0.3 } },
      duration: '1.5s',
      easing: 'ease-in-out',
      iterationCount: 'infinite',
    },
    slideDown: {
      keyframes: { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(0)' } },
      duration: '300ms',
      easing: 'ease-out',
    },
    scaleUp: {
      hover: { transform: 'scale(1.02)' },
      duration: '200ms',
      easing: 'ease-out',
    },
  },

  // Stagger delays (для каскадного появления)
  stagger: {
    hero: {
      h1:        '0ms',
      subtitle:  '150ms',
      buttons:   '300ms',
      character: '100ms',
      portals:   '450ms',
    },
    cards: {
      base:  '0ms',
      step:  '100ms',  // Каждая следующая карточка +100ms
    },
  },
} as const;
```

## 3.6. UI-компоненты — дизайн-спецификация

### Кнопки

```typescript
// packages/tokens/src/components/button.ts

export const buttonTokens = {
  primary: {
    background:   'linear-gradient(135deg, var(--color-teal-500), var(--color-orange-500))',
    color:        'var(--color-neutral-white)',
    borderRadius: 'var(--radius-md)',   // 8px
    padding:      '12px 24px',
    fontWeight:   600,
    fontSize:     '15px',
    letterSpacing:'0.02em',
    hover: {
      background:  'linear-gradient(135deg, var(--color-teal-400), var(--color-orange-400))',
      transform:   'scale(1.02)',
      boxShadow:   'var(--shadow-glow-teal)',
    },
    active: {
      transform: 'scale(0.98)',
    },
    disabled: {
      opacity: 0.5,
      cursor:  'not-allowed',
    },
  },
  secondary: {
    background:   'transparent',
    color:        'var(--color-text-primary)',
    border:       '1px solid var(--color-border-strong)',
    borderRadius: 'var(--radius-md)',
    padding:      '12px 24px',
    hover: {
      background:  'rgba(255,255,255,0.05)',
      borderColor: 'var(--color-text-primary)',
    },
  },
  ghost: {
    background: 'transparent',
    color:      'var(--color-text-link)',
    padding:    '8px 16px',
    hover: {
      background: 'rgba(45,212,191,0.08)',
    },
  },
  sizes: {
    sm: { padding: '8px 16px', fontSize: '13px' },
    md: { padding: '12px 24px', fontSize: '15px' },
    lg: { padding: '16px 32px', fontSize: '16px' },
  },
} as const;
```

### Карточки

```typescript
// packages/tokens/src/components/card.ts

export const cardTokens = {
  base: {
    background:   'var(--color-bg-surface)',
    borderRadius: 'var(--radius-lg)',   // 12px
    border:       '0.5px solid var(--color-border-default)',
    padding:      '24px',
    transition:   'all 200ms ease-out',
    hover: {
      borderColor: 'var(--color-border-strong)',
      transform:   'translateY(-2px)',
      boxShadow:   'var(--shadow-md)',
    },
  },
  portal: {
    // Карточка-портал для выбора группы
    borderRadius: 'var(--radius-xl)',   // 16px
    padding:      '32px',
    cursor:       'pointer',
    hover: {
      transform: 'translateY(-4px) scale(1.01)',
    },
    // Цвет определяется через groupColorMap
  },
  pricing: {
    borderRadius: 'var(--radius-xl)',
    padding:      '32px',
    recommended: {
      border:    '2px solid var(--color-accent-kadety)',
      boxShadow: 'var(--shadow-glow-teal)',
      scale:     1.05,
    },
  },
} as const;
```

### Бейджи

```typescript
// packages/tokens/src/components/badge.ts

export const badgeTokens = {
  base: {
    borderRadius: 'var(--radius-full)',   // Pill
    padding:      '4px 12px',
    fontSize:     '12px',
    fontWeight:   500,
    lineHeight:   1.2,
  },
  variants: {
    default: {
      background: 'rgba(255,255,255,0.1)',
      color:      'var(--color-text-secondary)',
      border:     '0.5px solid var(--color-border-default)',
    },
    teal: {
      background: 'rgba(45,212,191,0.15)',
      color:      'var(--color-teal-400)',
    },
    purple: {
      background: 'rgba(124,58,237,0.15)',
      color:      'var(--color-purple-400)',
    },
    orange: {
      background: 'rgba(251,146,60,0.15)',
      color:      'var(--color-orange-400)',
    },
    success: {
      background: 'rgba(34,197,94,0.15)',
      color:      'var(--color-green-400)',
    },
  },
} as const;
```

### Формы

```typescript
// packages/tokens/src/components/form.ts

export const formTokens = {
  input: {
    background:   'var(--color-bg-surface)',
    border:       '1px solid var(--color-border-default)',
    borderRadius: 'var(--radius-md)',
    padding:      '12px 16px',
    fontSize:     '15px',
    color:        'var(--color-text-primary)',
    placeholder:  'var(--color-text-tertiary)',
    focus: {
      borderColor: 'var(--color-border-focus)',
      boxShadow:   '0 0 0 3px rgba(45,212,191,0.15)',
      outline:     'none',
    },
    error: {
      borderColor: 'var(--color-border-error)',
      boxShadow:   '0 0 0 3px rgba(239,68,68,0.15)',
    },
  },
  select: {
    // Наследует от input
    padding: '12px 40px 12px 16px',
  },
  label: {
    fontSize:     '14px',
    fontWeight:    500,
    color:         'var(--color-text-primary)',
    marginBottom:  '6px',
  },
  helperText: {
    fontSize:  '12px',
    color:     'var(--color-text-tertiary)',
    marginTop: '4px',
  },
  errorText: {
    fontSize:  '12px',
    color:     'var(--color-state-error)',
    marginTop: '4px',
  },
} as const;
```

## 3.7. Z-Index Scale

```typescript
// packages/tokens/src/z-index.ts

export const zIndex = {
  hide:     -1,
  base:      0,
  dropdown:  10,
  sticky:    100,
  header:    1000,
  overlay:   1300,
  modal:     1400,
  popover:   1500,
  toast:     1600,
  tooltip:   1700,
} as const;
```

### Toast / Notification Tokens

```typescript
// packages/tokens/src/components/toast.ts

export const toastTokens = {
  position: 'bottom-right',               // Позиция на экране
  maxVisible: 3,                           // Макс. число одновременно видимых
  duration: {
    short: 3000,                           // Успех, подтверждение
    medium: 5000,                          // Предупреждение
    long: 8000,                            // Ошибка (нужно прочитать)
    persistent: 0,                         // Не скрывается (сетевая ошибка)
  },
  animation: {
    enter: 'slideUp 300ms ease-out',
    exit: 'fadeOut 200ms ease-in',
  },
  variants: {
    success: {
      background: 'var(--color-state-success-bg)',
      border: '1px solid var(--color-state-success)',
      icon: 'check-circle',
    },
    error: {
      background: 'var(--color-state-error-bg)',
      border: '1px solid var(--color-state-error)',
      icon: 'x-circle',
    },
    warning: {
      background: 'var(--color-state-warning-bg)',
      border: '1px solid var(--color-state-warning)',
      icon: 'alert-triangle',
    },
    info: {
      background: 'var(--color-state-info-bg)',
      border: '1px solid var(--color-state-info)',
      icon: 'info',
    },
  },
  mobile: {
    position: 'top-center',                // Мобайл: сверху по центру
    width: 'calc(100vw - 32px)',           // Почти во всю ширину
  },
} as const;
```

## 3.8. Responsive-поведение блоков

Правила адаптации ключевых секций при изменении ширины экрана:

| Блок | Desktop (≥1024px) | Tablet (768-1023px) | Mobile (<768px) |
|------|-------------------|--------------------|-----------------|
| Header | Полная навигация + CTA + телефон | Навигация + CTA | Логотип + CTA + бургер |
| Hero L1 | 60/40 сетка (текст / персонаж) | 55/45 сетка | Stack: персонаж сверху, текст ниже |
| Порталы | 3 колонки (grid) | 3 колонки (сжатые) | Stack: 1 колонка |
| Why Now | 4 тезиса в ряд | 2×2 сетка | Stack: 1 колонка |
| Gallery | 4 колонки карусель | 3 колонки | 2 колонки, swipe |
| Team | 4 карточки в ряд | 3 карточки | Карусель, 1 карточка |
| Pricing | 4 карточки в ряд | 2×2 сетка | Stack: 1 карточка |
| Quiz | Вопрос слева, варианты справа | Full-width | Full-width, крупные кнопки |
| FAQ | 2 колонки аккордеон | 2 колонки | 1 колонка |
| Footer | 4 колонки | 2×2 | Stack: 1 колонка |
| Lead Form | Inline в секции (50% ширины) | Full-width | Full-width |

## 3.9. Конвенция именования изображений

Все image-ассеты хранятся в `apps/web/public/images/` со следующей структурой:

```
images/
├── characters/
│   ├── leo-hero-front.webp        # Лео, Hero L1, вид спереди
│   ├── leo-hero-front@2x.webp     # Retina-версия
│   ├── leo-portal.webp            # Лео, карточка-портал
│   ├── auri-hero.webp             # Аури, Hero L2 Стажёры RU
│   ├── lina-hero.webp             # Лина, Hero L2 Стажёры KZ
│   ├── arlo-hero.webp             # Арло, Hero L2 Команда
│   ├── zara-gallery.webp          # Зара, галерея/инклюзивность
│   └── [name]-[context].webp      # Шаблон: персонаж-контекст
├── team/
│   ├── [name]-photo.webp          # Фото преподавателя
│   └── [name]-photo@2x.webp       # Retina
├── works/
│   ├── [group]-[direction]-[nn].webp  # Работа ученика
│   └── ...                        # kadety-neyrokreativ-01.webp
├── icons/
│   ├── [name].svg                 # Иконки (SVG, inline или sprite)
│   └── ...
├── og/
│   ├── og-default.jpg             # Open Graph: главная (1200×630)
│   ├── og-kadety.jpg              # OG: Кадеты
│   ├── og-stajery.jpg             # OG: Стажёры
│   └── og-komanda.jpg             # OG: Команда
└── misc/
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    └── starfield-sprite.webp      # Спрайт для звёздного неба
```

**Правила именования:**
- kebab-case: `leo-hero-front.webp`
- @2x суффикс для Retina: `leo-hero-front@2x.webp`
- Формат: WebP основной, PNG fallback только для favicon
- OG-изображения: всегда JPG, 1200×630px

---


# Часть 4 — Архитектура Monorepo

## 4.1. Обзор

Проект использует Turborepo для управления монорепозиторием.
Все пакеты разделены на `apps` (приложения) и `packages` (переиспользуемые модули).

### Принципы

1. **Единый репозиторий** — весь код (web, api, shared) в одном месте
2. **Пакетная изоляция** — каждый пакет имеет свой `package.json` и зону ответственности
3. **Общие зависимости** — версии библиотек синхронизированы через workspace
4. **Параллельная сборка** — Turborepo кэширует и параллелизирует задачи
5. **Строгие границы** — пакеты не могут импортировать друг друга в обход зависимостей

### Технологический стек

| Слой | Технология | Версия | Назначение |
|------|-----------|--------|------------|
| Monorepo | Turborepo | ^2.x | Оркестрация задач, кэширование |
| Package Manager | pnpm | ^9.x | Workspace-менеджер |
| Frontend Runtime | React | ^19.x | UI-библиотека |
| Frontend Bundler | Vite | ^6.x | Сборщик фронтенда |
| Language | TypeScript | ^5.6 | Строгая типизация |
| Backend Runtime | Node.js | ^22.x LTS | Серверная среда |
| Backend Framework | Fastify | ^5.x | HTTP-фреймворк |
| ORM | Drizzle ORM | ^0.35 | Type-safe ORM |
| Database | PostgreSQL | ^16.x | Основная БД |
| Cache | Redis | ^7.x | Кэширование, сессии |
| Validation | Zod | ^3.x | Схемы валидации (shared) |
| State (client) | Zustand | ^5.x | Стейт-менеджер |
| Data Fetching | TanStack Query | ^5.x | Серверный стейт |
| Router | React Router | ^7.x | Клиентский роутинг |
| CSS | Vanilla CSS + CSS Modules | — | Стилизация без фреймворков |
| Testing | Vitest | ^3.x | Юнит/интеграционные тесты |
| E2E Testing | Playwright | ^1.x | End-to-end тесты |
| Linting | ESLint | ^9.x | Линтинг (flat config) |
| Formatting | Prettier | ^3.x | Форматирование |
| CI/CD | GitHub Actions | — | Автоматизация |
| Error Tracking | Sentry | ^8.x | Отслеживание ошибок (web + api) |
| Hosting | Vercel / VPS | — | Деплой |

## 4.2. Структура Workspace

```
space-academy/                     # Корень монорепозитория
├── apps/                          # Приложения
│   ├── web/                       # Frontend — React + Vite
│   └── api/                       # Backend — Fastify
├── packages/                      # Переиспользуемые пакеты
│   ├── tokens/                    # Дизайн-токены (SSOT)
│   ├── ui/                        # UI-компоненты (shared)
│   ├── shared/                    # Общие утилиты, типы, константы
│   ├── contracts/                 # Zod-схемы API (SSOT для DTO)
│   ├── config-eslint/             # ESLint конфигурация
│   ├── config-typescript/         # TypeScript конфигурации
│   └── config-vite/               # Vite конфигурации
├── turbo.json                     # Turborepo pipeline
├── pnpm-workspace.yaml            # pnpm workspace
├── package.json                   # Корневой package.json
├── tsconfig.base.json             # Базовый TS конфиг
├── .prettierrc                    # Prettier конфиг
├── .gitignore                     # Git ignore
├── SPACE_MANIFEST.md              # Этот документ (SSOT)
└── README.md                      # Инструкции по запуску
```

## 4.3. Граф зависимостей

```
┌──────────────────────────────────────────────────┐
│                   apps/web                       │
│         (React + Vite + React Router)            │
│                                                  │
│  Зависит от:                                     │
│  ├── @space-academy/tokens                       │
│  ├── @space-academy/ui                           │
│  ├── @space-academy/shared                       │
│  └── @space-academy/contracts                    │
└──────┬───────────────────────────────────────────┘
       │ HTTP (REST API / fetch)
       ▼
┌──────────────────────────────────────────────────┐
│                   apps/api                       │
│            (Fastify + Drizzle ORM)               │
│                                                  │
│  Зависит от:                                     │
│  ├── @space-academy/shared                       │
│  └── @space-academy/contracts                    │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│              packages/contracts                  │
│         (Zod-схемы — SSOT для DTO)               │
│                                                  │
│  Зависит от:                                     │
│  └── @space-academy/shared (типы)                │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│                packages/ui                       │
│       (React-компоненты — Button, Card...)       │
│                                                  │
│  Зависит от:                                     │
│  ├── @space-academy/tokens                       │
│  └── @space-academy/shared                       │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│              packages/tokens                     │
│         (Дизайн-токены — SSOT)                   │
│                                                  │
│  Зависит от: ничего (leaf node)                  │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│              packages/shared                     │
│       (Утилиты, типы, константы)                 │
│                                                  │
│  Зависит от: ничего (leaf node)                  │
└──────────────────────────────────────────────────┘
```

## 4.4. Turbo Pipeline

```jsonc
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["tsconfig.base.json"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true,
      "dependsOn": ["^build"]
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    },
    "typecheck": {
      "dependsOn": ["^build"]
    }
  }
}
```

## 4.5. Пакеты — подробное описание

### packages/tokens

**Назначение:** Единый источник истины для всех визуальных значений.
Экспортирует CSS Custom Properties и TypeScript-объекты.

**Ответственность:**
- Primitive color palette
- Semantic color tokens (light/dark themes)
- Typography scale (font families, sizes, weights, line-heights)
- Spacing scale
- Border radii
- Shadows и glow-эффекты
- Animation presets (durations, easing, keyframes)
- Z-index scale
- Breakpoints
- Group color map (kadety/stajery/komanda)
- Component-level tokens (button, card, badge, form)

**Экспорт:**
- dist/tokens.css — CSS Custom Properties для runtime
- dist/index.js — TypeScript объекты для compile-time
- dist/index.d.ts — Типы

**Правило:** Этот пакет не имеет зависимостей. Он — leaf node графа.

---

### packages/shared

**Назначение:** Общие утилиты, типы и константы, используемые на фронте и бэке.

**Ответственность:**
- TypeScript типы бизнес-домена (AgeGroup, Direction, Market, CourseSlug и т.д.)
- Enum-like константы (GROUP_SLUGS, DIRECTION_SLUGS)
- Утилиты форматирования (цены, даты, телефоны)
- URL-билдеры (buildGroupUrl, buildCourseUrl)
- Валидаторы (isValidPhone, isValidEmail)
- i18n ключи и структуры
- Маппинг персонажей к группам

**Правило:** Этот пакет не импортирует React и не зависит от DOM API.

---

### packages/contracts

**Назначение:** Zod-схемы для всех API endpoints. SSOT для типов запросов и ответов.
Используется и на фронте (валидация форм), и на бэке (валидация входящих данных).

**Ответственность:**
- Zod-схемы для каждого API endpoint (request/response)
- Inferred TypeScript типы из Zod-схем
- Общие схемы (pagination, error response)
- Схемы форм (quiz, lead form, contact form)

**Правило:** Контракты — единственное место определения форм API. Фронт и бэк импортируют отсюда.

---

### packages/ui

**Назначение:** Библиотека переиспользуемых React-компонентов.
Все компоненты стилизованы через CSS Modules + дизайн-токены.

**Ответственность:**
- Атомарные компоненты: Button, Badge, Input, Select, Textarea
- Составные компоненты: Card, PricingCard, PortalCard, TestimonialCard
- Layout компоненты: Container, Grid, Stack, Section
- Навигация: Header, Footer, Breadcrumb, MobileMenu
- Обратная связь: Toast, Modal, Tooltip
- Данные: Accordion, Carousel, ProgressBar
- Маркетинг: QuizStep, LeadForm, CTABlock

**Правило:** Компоненты не содержат бизнес-логики. Они получают данные через props.
Стили определяются ТОЛЬКО через CSS Custom Properties из @space-academy/tokens.

---

# Часть 5 — Feature-Sliced Design (FSD)

## 5.1. Обзор FSD

Feature-Sliced Design — архитектурная методология для организации фронтенд-кода.
Код разбивается на слои (layers), которые имеют строгую иерархию импортов.

### Слои FSD (от верхнего к нижнему)

```
┌──────────────────────────────────────────────┐
│  app          Инициализация, провайдеры       │  Верхний слой
├──────────────────────────────────────────────┤
│  pages        Композиция страниц              │
├──────────────────────────────────────────────┤
│  widgets      Самостоятельные UI-блоки        │
├──────────────────────────────────────────────┤
│  features     Пользовательские сценарии       │
├──────────────────────────────────────────────┤
│  entities     Бизнес-сущности                 │
├──────────────────────────────────────────────┤
│  shared       Переиспользуемое ядро           │  Нижний слой
└──────────────────────────────────────────────┘
```

**Правило импортов:** Слой может импортировать ТОЛЬКО из слоёв ниже себя.
- widgets может импортировать из features, entities, shared
- features может импортировать из entities, shared
- entities может импортировать только из shared
- shared не импортирует из других слоёв

### Слайсы и сегменты

Каждый слой (кроме app и shared) содержит **слайсы** — модули по предметной области.
Каждый слайс содержит **сегменты** — файлы по техническому назначению.

```
layer/
  slice-name/
    ui/          # React-компоненты
    model/       # Стейт, хуки, логика
    api/         # Запросы к API
    lib/         # Вспомогательные утилиты
    config/      # Конфигурация слайса
    index.ts     # Public API (реэкспорт)
```

## 5.2. Маппинг бизнес-домена на FSD

### Entities (бизнес-сущности)

| Entity | Описание | Ключевые поля |
|--------|----------|---------------|
| group | Возрастная группа | slug, name, ageRange, role, color, character |
| course | Курс (группа x направление) | slug, groupSlug, directionSlug, title, description |
| direction | Направление обучения | slug, name (Нейрокреатив / Вайб-кодинг) |
| mission | Урок (миссия) в курсе | number, title, description, difficulty, pillars |
| pillar | Пиллар урока | type, title, duration, description |
| format | Формат обучения | slug, name, price, description, features |
| team-member | Член команды Академии | name, rank, role, photo, specialization, bio |
| testimonial | Отзыв | parentName, childAge, text, photo, groupSlug |
| work | Работа ученика | title, childAge, groupSlug, directionSlug, image |
| faq-item | Вопрос FAQ | question, answer, category, level, groupSlug |
| lead | Лид (контакт) | parentName, childName, phone, courseSlug, utmParams |
| quiz-result | Результат квиза | answers, recommendedCourse, recommendedGroup |
| market | Рынок (RU/KZ) | code, currency, locale, features |

### Features (пользовательские сценарии)

| Feature | Описание | Entities |
|---------|----------|----------|
| select-group | Выбор возрастной группы | group |
| select-direction | Выбор направления обучения | direction, course |
| quiz | Прохождение квиза | quiz-result, group, course |
| submit-lead | Отправка заявки (лид-форма) | lead, format |
| view-gallery | Просмотр галереи работ | work |
| view-pricing | Просмотр и сравнение тарифов | format |
| view-program | Просмотр программы курса (миссии) | mission, pillar |
| toggle-faq | Открытие/закрытие FAQ | faq-item |
| switch-market | Переключение рынка RU/KZ | market |
| switch-lang | Переключение языка (KZ) | market |
| play-video | Воспроизведение видео-приветствия | team-member |

### Widgets (самостоятельные UI-блоки)

| Widget | Описание | Features | Entities |
|--------|----------|----------|----------|
| header | Sticky-шапка | switch-market | group |
| hero-main | Hero-блок L1 | select-group | group |
| hero-group | Hero-блок L2 | select-direction | group, direction |
| hero-course | Hero-блок L3 | submit-lead | course |
| why-now | Блок «Почему сейчас» | — | — |
| utp-block | Блок УТП | select-direction | direction |
| three-paths | Три пути (порталы) | select-group | group |
| gallery | Галерея работ | view-gallery | work |
| team | Командование Академии | play-video | team-member |
| pricing-overview | Обзор тарифов (L1) | view-pricing | format |
| pricing-detail | Детальные тарифы (L2/L3) | view-pricing, submit-lead | format |
| quiz-widget | Виджет квиза | quiz | quiz-result, group, course |
| testimonials | Блок отзывов | — | testimonial |
| faq-block | Блок FAQ | toggle-faq | faq-item |
| cta-final | Финальный CTA | submit-lead | — |
| lead-form | Форма записи (L3) | submit-lead | lead, format |
| safety | Безопасность и контроль | — | — |
| course-program | Программа курса | view-program | mission, pillar |
| pillar-template | Шаблон урока | — | pillar |
| footer | Футер | — | group |
| group-portrait | Блок «Для кого группа» | — | group |
| course-result | Финальный продукт курса | — | course, work |
| teacher-card | Карточка преподавателя | play-video | team-member |
| thank-you-content | Контент страницы «Спасибо» | — | lead |
| legal-content | Юридический контент (политика, оферта) | — | — |
| error-content | Контент страницы 404 | — | — |

### Pages (страницы)

| Page | URL | Level | Ключевые Widgets |
|------|-----|-------|-----------------|
| home | / | L1 | header, hero-main, why-now, utp-block, three-paths, gallery, team, pricing-overview, quiz-widget, testimonials, faq-block, cta-final, footer |
| group | /kadety, /stajery, /komanda | L2 | header, hero-group, group-portrait, utp-block, gallery, teacher-card, pricing-detail, safety, testimonials, faq-block, footer |
| course | /kadety/neyrokreativ и т.д. | L3 | header, hero-course, course-result, course-program, pillar-template, teacher-card, pricing-detail, lead-form, safety, testimonials, faq-block, cta-final, footer |
| about | /about | — | header, team, footer |
| gallery-all | /gallery | — | header, gallery, footer |
| thank-you | /thank-you | — | header, thank-you-content, footer |
| privacy | /privacy | — | header, legal-content, footer |
| terms | /terms | — | header, legal-content, footer |
| not-found | /404 | — | header, error-content, footer |

---


# Часть 6 — Полное файловое дерево

## 6.1. Корень монорепозитория

```
space-academy/
│
├── .github/
│   └── workflows/
│       ├── ci.yml                          # CI pipeline (lint, test, typecheck, build)
│       ├── deploy-preview.yml              # Preview deploy на PR
│       └── deploy-production.yml           # Production deploy на merge в main
│
├── .husky/
│   ├── pre-commit                          # Lint-staged перед коммитом
│   └── commit-msg                          # Commitlint для conventional commits
│
├── apps/
│   ├── web/                                # Frontend приложение
│   └── api/                                # Backend приложение
│
├── packages/
│   ├── tokens/                             # Дизайн-токены
│   ├── ui/                                 # UI-компоненты
│   ├── shared/                             # Общие утилиты и типы
│   ├── contracts/                          # API-контракты (Zod)
│   ├── config-eslint/                      # ESLint конфиг
│   ├── config-typescript/                  # TS конфиги
│   └── config-vite/                        # Vite конфиг
│
├── turbo.json                              # Turborepo pipeline
├── pnpm-workspace.yaml                     # pnpm workspace definition
├── package.json                            # Корневой package.json (scripts, devDeps)
├── tsconfig.base.json                      # Базовый TypeScript конфиг
├── .prettierrc                             # Prettier конфигурация
├── .prettierignore                         # Prettier ignore
├── .eslintignore                           # ESLint ignore
├── .gitignore                              # Git ignore
├── .nvmrc                                  # Node.js version (22.x)
├── .env.example                            # Пример переменных окружения
├── commitlint.config.js                    # Conventional commits
├── lint-staged.config.js                   # Lint-staged конфиг
├── SPACE_MANIFEST.md                       # Этот документ
└── README.md                               # Инструкции по запуску
```

## 6.2. apps/web — Frontend приложение

```
apps/web/
├── public/
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image-ru.jpg                     # OpenGraph для RU
│   ├── og-image-kz.jpg                     # OpenGraph для KZ
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── characters/
│       │   ├── leo-hero-front.webp         # Лео — Hero L1 (front view)
│       │   ├── leo-hero-front@2x.webp      # Лео @2x
│       │   ├── leo-hero-front.png          # PNG fallback
│       │   ├── leo-portal.webp             # Лео — карточка-портал
│       │   ├── auri-hero.webp              # Аури — Hero L2 Стажёры (RU)
│       │   ├── auri-hero@2x.webp
│       │   ├── auri-portal.webp
│       │   ├── lina-hero.webp              # Лина — Hero L2 Стажёры (KZ)
│       │   ├── lina-hero@2x.webp
│       │   ├── lina-portal.webp
│       │   ├── arlo-hero.webp              # Арло — Hero L2 Команда
│       │   ├── arlo-hero@2x.webp
│       │   ├── arlo-portal.webp
│       │   ├── zara-gallery.webp           # Зара — галерея инклюзивности
│       │   └── zara-gallery@2x.webp
│       ├── icons/
│       │   ├── rocket.svg                  # Иконка ракеты (логотип)
│       │   ├── star.svg                    # Звезда
│       │   ├── shield.svg                  # Щит безопасности
│       │   ├── telegram.svg                # Telegram иконка
│       │   ├── whatsapp.svg                # WhatsApp иконка
│       │   ├── vk.svg                      # ВКонтакте иконка
│       │   ├── instagram.svg               # Instagram иконка (KZ)
│       │   ├── youtube.svg                 # YouTube иконка
│       │   ├── phone.svg                   # Телефон
│       │   ├── check.svg                   # Галочка
│       │   ├── chevron-down.svg            # Шеврон вниз
│       │   ├── chevron-right.svg           # Шеврон вправо
│       │   ├── burger.svg                  # Бургер-меню
│       │   ├── close.svg                   # Закрыть
│       │   ├── play.svg                    # Play (видео)
│       │   └── arrow-right.svg             # Стрелка
│       ├── works/                          # Примеры работ учеников
│       │   ├── kadety-fairytale-01.webp
│       │   ├── kadety-illustration-01.webp
│       │   ├── stajery-research-01.webp
│       │   ├── stajery-presentation-01.webp
│       │   ├── komanda-game-01.webp
│       │   ├── komanda-site-01.webp
│       │   └── ...
│       └── team/                           # Фото команды
│           ├── admiral.webp
│           ├── vice-admiral-kadety.webp
│           ├── vice-admiral-stajery.webp
│           ├── vice-admiral-komanda.webp
│           └── tsup-01.webp
│
├── src/
│   ├── app/                                # FSD: app layer
│   │   ├── App.tsx                         # Корневой компонент
│   │   ├── App.module.css                  # Глобальные стили
│   │   ├── providers/
│   │   │   ├── index.ts                    # Реэкспорт всех провайдеров
│   │   │   ├── QueryProvider.tsx           # TanStack Query provider
│   │   │   ├── MarketProvider.tsx          # Контекст рынка (RU/KZ)
│   │   │   ├── ErrorBoundary.tsx           # React Error Boundary (см. Часть 15)
│   │   │   └── ThemeProvider.tsx           # Тема (dark/light)
│   │   ├── router/
│   │   │   ├── index.ts
│   │   │   ├── routes.tsx                  # Определение маршрутов
│   │   │   ├── LazyPages.tsx               # Lazy-загрузка страниц
│   │   │   └── ScrollToTop.tsx             # Scroll restoration
│   │   ├── styles/
│   │   │   ├── globals.css                 # CSS reset + базовые стили
│   │   │   ├── tokens.css                  # Импорт CSS Custom Properties
│   │   │   └── animations.css              # CSS @keyframes
│   │   └── index.ts                        # Public API app layer
│   │
│   ├── pages/                              # FSD: pages layer
│   │   ├── home/
│   │   │   ├── ui/
│   │   │   │   ├── HomePage.tsx            # Страница L1
│   │   │   │   └── HomePage.module.css
│   │   │   └── index.ts
│   │   ├── group/
│   │   │   ├── ui/
│   │   │   │   ├── GroupPage.tsx            # Страница L2 (dynamic: slug)
│   │   │   │   └── GroupPage.module.css
│   │   │   ├── model/
│   │   │   │   └── useGroupPageData.ts     # Хук загрузки данных группы
│   │   │   └── index.ts
│   │   ├── course/
│   │   │   ├── ui/
│   │   │   │   ├── CoursePage.tsx           # Страница L3 (dynamic: group + direction)
│   │   │   │   └── CoursePage.module.css
│   │   │   ├── model/
│   │   │   │   └── useCoursePageData.ts
│   │   │   └── index.ts
│   │   ├── about/
│   │   │   ├── ui/
│   │   │   │   ├── AboutPage.tsx
│   │   │   │   └── AboutPage.module.css
│   │   │   └── index.ts
│   │   ├── gallery-all/
│   │   │   ├── ui/
│   │   │   │   ├── GalleryAllPage.tsx
│   │   │   │   └── GalleryAllPage.module.css
│   │   │   └── index.ts
│   │   ├── thank-you/
│   │   │   ├── ui/
│   │   │   │   ├── ThankYouPage.tsx
│   │   │   │   └── ThankYouPage.module.css
│   │   │   └── index.ts
│   │   ├── privacy/
│   │   │   ├── ui/
│   │   │   │   └── PrivacyPage.tsx
│   │   │   └── index.ts
│   │   ├── terms/
│   │   │   ├── ui/
│   │   │   │   └── TermsPage.tsx
│   │   │   └── index.ts
│   │   └── not-found/
│   │       ├── ui/
│   │       │   ├── NotFoundPage.tsx
│   │       │   └── NotFoundPage.module.css
│   │       └── index.ts
│   │
│   ├── widgets/                            # FSD: widgets layer
│   │   ├── header/
│   │   │   ├── ui/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   ├── DesktopNav.tsx
│   │   │   │   ├── DesktopNav.module.css
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── MobileMenu.module.css
│   │   │   │   ├── GroupDropdown.tsx
│   │   │   │   └── GroupDropdown.module.css
│   │   │   ├── model/
│   │   │   │   ├── useHeaderScroll.ts      # Логика sticky + border on scroll
│   │   │   │   └── useMenuState.ts         # Состояние мобильного меню
│   │   │   └── index.ts
│   │   ├── hero-main/
│   │   │   ├── ui/
│   │   │   │   ├── HeroMain.tsx            # Hero блок L1
│   │   │   │   ├── HeroMain.module.css
│   │   │   │   ├── HeroCharacter.tsx       # 3D-персонаж с float-анимацией
│   │   │   │   ├── HeroPortals.tsx         # 3 карточки-портала
│   │   │   │   ├── HeroPortals.module.css
│   │   │   │   ├── StarField.tsx           # Анимированные звёзды фона
│   │   │   │   ├── StarField.module.css
│   │   │   │   └── TrustBadges.tsx         # Бейджи доверия
│   │   │   ├── config/
│   │   │   │   └── hero-texts.ts           # A/B варианты текстов Hero
│   │   │   └── index.ts
│   │   ├── hero-group/
│   │   │   ├── ui/
│   │   │   │   ├── HeroGroup.tsx           # Hero блок L2
│   │   │   │   ├── HeroGroup.module.css
│   │   │   │   └── GroupCharacter.tsx       # Персонаж группы
│   │   │   ├── config/
│   │   │   │   └── group-hero-texts.ts     # Тексты Hero для каждой группы
│   │   │   └── index.ts
│   │   ├── hero-course/
│   │   │   ├── ui/
│   │   │   │   ├── HeroCourse.tsx          # Hero блок L3
│   │   │   │   ├── HeroCourse.module.css
│   │   │   │   └── CourseParams.tsx         # Параметры курса (формат, длительность)
│   │   │   └── index.ts
│   │   ├── why-now/
│   │   │   ├── ui/
│   │   │   │   ├── WhyNow.tsx
│   │   │   │   ├── WhyNow.module.css
│   │   │   │   └── ThesisCard.tsx
│   │   │   ├── config/
│   │   │   │   └── theses.ts               # 4 тезиса (RU / KZ варианты)
│   │   │   └── index.ts
│   │   ├── utp-block/
│   │   │   ├── ui/
│   │   │   │   ├── UtpBlock.tsx
│   │   │   │   ├── UtpBlock.module.css
│   │   │   │   ├── DirectionCard.tsx
│   │   │   │   └── DirectionCard.module.css
│   │   │   └── index.ts
│   │   ├── three-paths/
│   │   │   ├── ui/
│   │   │   │   ├── ThreePaths.tsx
│   │   │   │   ├── ThreePaths.module.css
│   │   │   │   ├── PortalCard.tsx
│   │   │   │   └── PortalCard.module.css
│   │   │   └── index.ts
│   │   ├── gallery/
│   │   │   ├── ui/
│   │   │   │   ├── Gallery.tsx
│   │   │   │   ├── Gallery.module.css
│   │   │   │   ├── WorkCard.tsx
│   │   │   │   └── WorkCard.module.css
│   │   │   ├── model/
│   │   │   │   └── useGalleryFilter.ts     # Фильтр по группе/направлению
│   │   │   └── index.ts
│   │   ├── team/
│   │   │   ├── ui/
│   │   │   │   ├── Team.tsx
│   │   │   │   ├── Team.module.css
│   │   │   │   ├── TeamMemberCard.tsx
│   │   │   │   └── TeamMemberCard.module.css
│   │   │   └── index.ts
│   │   ├── pricing-overview/
│   │   │   ├── ui/
│   │   │   │   ├── PricingOverview.tsx
│   │   │   │   ├── PricingOverview.module.css
│   │   │   │   ├── FormatCard.tsx
│   │   │   │   └── FormatCard.module.css
│   │   │   └── index.ts
│   │   ├── pricing-detail/
│   │   │   ├── ui/
│   │   │   │   ├── PricingDetail.tsx
│   │   │   │   ├── PricingDetail.module.css
│   │   │   │   ├── TariffCard.tsx
│   │   │   │   └── TariffCard.module.css
│   │   │   └── index.ts
│   │   ├── quiz-widget/
│   │   │   ├── ui/
│   │   │   │   ├── QuizWidget.tsx
│   │   │   │   ├── QuizWidget.module.css
│   │   │   │   ├── QuizStep.tsx
│   │   │   │   ├── QuizStep.module.css
│   │   │   │   ├── QuizProgress.tsx
│   │   │   │   ├── QuizResult.tsx
│   │   │   │   └── QuizResult.module.css
│   │   │   ├── model/
│   │   │   │   ├── useQuizState.ts          # Хук стейта квиза
│   │   │   │   └── quizMatrix.ts            # Матрица ответов -> рекомендация
│   │   │   ├── config/
│   │   │   │   └── quiz-questions.ts         # Вопросы квиза (RU / KZ)
│   │   │   └── index.ts
│   │   ├── testimonials/
│   │   │   ├── ui/
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── Testimonials.module.css
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   └── TestimonialCard.module.css
│   │   │   └── index.ts
│   │   ├── faq-block/
│   │   │   ├── ui/
│   │   │   │   ├── FaqBlock.tsx
│   │   │   │   ├── FaqBlock.module.css
│   │   │   │   ├── FaqItem.tsx
│   │   │   │   └── FaqItem.module.css
│   │   │   └── index.ts
│   │   ├── cta-final/
│   │   │   ├── ui/
│   │   │   │   ├── CtaFinal.tsx
│   │   │   │   └── CtaFinal.module.css
│   │   │   └── index.ts
│   │   ├── lead-form/
│   │   │   ├── ui/
│   │   │   │   ├── LeadForm.tsx
│   │   │   │   ├── LeadForm.module.css
│   │   │   │   └── ThankYouMessage.tsx
│   │   │   ├── model/
│   │   │   │   └── useLeadForm.ts           # Хук формы + валидация
│   │   │   └── index.ts
│   │   ├── safety/
│   │   │   ├── ui/
│   │   │   │   ├── Safety.tsx
│   │   │   │   └── Safety.module.css
│   │   │   └── index.ts
│   │   ├── course-program/
│   │   │   ├── ui/
│   │   │   │   ├── CourseProgram.tsx
│   │   │   │   ├── CourseProgram.module.css
│   │   │   │   ├── MissionItem.tsx
│   │   │   │   └── MissionItem.module.css
│   │   │   └── index.ts
│   │   ├── pillar-template/
│   │   │   ├── ui/
│   │   │   │   ├── PillarTemplate.tsx
│   │   │   │   ├── PillarTemplate.module.css
│   │   │   │   ├── PillarCard.tsx
│   │   │   │   └── PillarCard.module.css
│   │   │   └── index.ts
│   │   ├── course-result/
│   │   │   ├── ui/
│   │   │   │   ├── CourseResult.tsx
│   │   │   │   └── CourseResult.module.css
│   │   │   └── index.ts
│   │   ├── group-portrait/
│   │   │   ├── ui/
│   │   │   │   ├── GroupPortrait.tsx
│   │   │   │   └── GroupPortrait.module.css
│   │   │   └── index.ts
│   │   ├── teacher-card/
│   │   │   ├── ui/
│   │   │   │   ├── TeacherCard.tsx
│   │   │   │   └── TeacherCard.module.css
│   │   │   └── index.ts
│   │   ├── footer/
│   │   │   ├── ui/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.module.css
│   │   │   │   ├── FooterLinks.tsx
│   │   │   │   └── SocialLinks.tsx
│   │   │   └── index.ts
│   │   ├── thank-you-content/
│   │   │   ├── ui/
│   │   │   │   ├── ThankYouContent.tsx
│   │   │   │   └── ThankYouContent.module.css
│   │   │   └── index.ts
│   │   ├── legal-content/
│   │   │   ├── ui/
│   │   │   │   ├── LegalContent.tsx
│   │   │   │   └── LegalContent.module.css
│   │   │   └── index.ts
│   │   └── error-content/
│   │       ├── ui/
│   │       │   ├── ErrorContent.tsx
│   │       │   └── ErrorContent.module.css
│   │       └── index.ts
│   │
│   ├── features/                           # FSD: features layer
│   │   ├── select-group/
│   │   │   ├── ui/
│   │   │   │   └── GroupSelector.tsx
│   │   │   ├── model/
│   │   │   │   └── useGroupSelection.ts
│   │   │   └── index.ts
│   │   ├── select-direction/
│   │   │   ├── ui/
│   │   │   │   └── DirectionSelector.tsx
│   │   │   ├── model/
│   │   │   │   └── useDirectionSelection.ts
│   │   │   └── index.ts
│   │   ├── quiz/
│   │   │   ├── model/
│   │   │   │   ├── useQuiz.ts               # Бизнес-логика квиза
│   │   │   │   └── quizStore.ts             # Zustand store
│   │   │   ├── api/
│   │   │   │   └── submitQuiz.ts            # API вызов
│   │   │   └── index.ts
│   │   ├── submit-lead/
│   │   │   ├── model/
│   │   │   │   ├── useSubmitLead.ts          # Хук отправки лида
│   │   │   │   └── leadStore.ts             # Zustand store
│   │   │   ├── api/
│   │   │   │   └── createLead.ts            # POST /api/leads
│   │   │   └── index.ts
│   │   ├── view-gallery/
│   │   │   ├── model/
│   │   │   │   └── useGallery.ts
│   │   │   ├── api/
│   │   │   │   └── fetchWorks.ts
│   │   │   └── index.ts
│   │   ├── view-pricing/
│   │   │   ├── model/
│   │   │   │   └── usePricing.ts
│   │   │   └── index.ts
│   │   ├── view-program/
│   │   │   ├── model/
│   │   │   │   └── useProgram.ts
│   │   │   └── index.ts
│   │   ├── toggle-faq/
│   │   │   ├── model/
│   │   │   │   └── useFaqToggle.ts
│   │   │   └── index.ts
│   │   ├── switch-market/
│   │   │   ├── model/
│   │   │   │   ├── useMarket.ts
│   │   │   │   └── marketStore.ts
│   │   │   └── index.ts
│   │   ├── switch-lang/
│   │   │   ├── model/
│   │   │   │   └── useLangSwitch.ts        # Переключение KZ QAZ / RU РУС
│   │   │   └── index.ts
│   │   └── play-video/
│   │       ├── ui/
│   │       │   └── VideoPlayer.tsx
│   │       ├── model/
│   │       │   └── useVideoPlayer.ts
│   │       └── index.ts
│   │
│   ├── entities/                           # FSD: entities layer
│   │   ├── group/
│   │   │   ├── ui/
│   │   │   │   ├── GroupBadge.tsx
│   │   │   │   └── GroupBadge.module.css
│   │   │   ├── model/
│   │   │   │   ├── types.ts                 # AgeGroup, GroupSlug types
│   │   │   │   └── group.store.ts           # Данные групп (SSOT)
│   │   │   ├── api/
│   │   │   │   └── fetchGroups.ts
│   │   │   ├── lib/
│   │   │   │   └── mapGroupToColor.ts
│   │   │   └── index.ts
│   │   ├── course/
│   │   │   ├── model/
│   │   │   │   ├── types.ts
│   │   │   │   └── course.store.ts
│   │   │   ├── api/
│   │   │   │   └── fetchCourses.ts
│   │   │   └── index.ts
│   │   ├── direction/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── mission/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── pillar/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── format/
│   │   │   ├── model/
│   │   │   │   ├── types.ts
│   │   │   │   └── format.data.ts           # Статические данные форматов
│   │   │   └── index.ts
│   │   ├── team-member/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── testimonial/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── work/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── faq-item/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── lead/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   ├── quiz-result/
│   │   │   ├── model/
│   │   │   │   └── types.ts
│   │   │   └── index.ts
│   │   └── market/
│   │       ├── model/
│   │       │   ├── types.ts
│   │       │   └── market.data.ts           # RU/KZ конфигурации
│   │       └── index.ts
│   │
│   ├── shared/                             # FSD: shared layer
│   │   ├── api/
│   │   │   ├── apiClient.ts                # Базовый HTTP-клиент (fetch wrapper)
│   │   │   ├── apiConfig.ts                # BASE_URL, timeout и т.д.
│   │   │   ├── queryKeys.ts                # TanStack Query keys (см. Часть 18.2)
│   │   │   └── index.ts
│   │   ├── config/
│   │   │   ├── env.ts                      # Типизированный доступ к env
│   │   │   └── index.ts
│   │   ├── lib/
│   │   │   ├── cn.ts                       # classNames утилита
│   │   │   ├── formatPrice.ts              # Форматирование цен (RU/KZ)
│   │   │   ├── formatPhone.ts              # Маска телефона
│   │   │   ├── getUtmParams.ts             # Извлечение UTM из URL (реэкспорт из @space-academy/shared)
│   │   │   ├── scrollToAnchor.ts           # Скролл к якорю
│   │   │   ├── analytics.ts               # Отправка событий GA/YM
│   │   │   ├── jsonLd.ts                   # Schema.org JSON-LD генерация (см. 14.5)
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── useMediaQuery.ts            # Responsive hook
│   │   │   ├── useIntersectionObserver.ts   # Intersection observer для анимаций
│   │   │   ├── useScrollPosition.ts         # Позиция скролла
│   │   │   ├── useLocalStorage.ts
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── Container/
│   │       │   ├── Container.tsx
│   │       │   ├── Container.module.css
│   │       │   └── index.ts
│   │       ├── Section/
│   │       │   ├── Section.tsx
│   │       │   ├── Section.module.css
│   │       │   └── index.ts
│   │       ├── Stack/
│   │       │   ├── Stack.tsx
│   │       │   ├── Stack.module.css
│   │       │   └── index.ts
│   │       └── index.ts
│   │
│   ├── main.tsx                            # Entry point
│   └── vite-env.d.ts                       # Vite типы
│
├── index.html                              # HTML entry
├── vite.config.ts                          # Vite конфигурация
├── tsconfig.json                           # TS конфиг (extends base)
├── tsconfig.app.json                       # TS конфиг для app code
├── tsconfig.node.json                      # TS конфиг для vite.config
└── package.json                            # Dependencies
```

## 6.3. apps/api — Backend приложение

```
apps/api/
├── src/
│   ├── app.ts                              # Fastify инициализация, плагины
│   ├── server.ts                           # Entry point, порт, graceful shutdown
│   │
│   ├── config/
│   │   ├── env.ts                          # Типизированные env-переменные
│   │   ├── database.ts                     # Конфигурация PostgreSQL
│   │   ├── redis.ts                        # Конфигурация Redis
│   │   └── cors.ts                         # CORS настройки
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── client.ts                   # Drizzle ORM client
│   │   │   ├── schema/                     # Drizzle schema definitions
│   │   │   │   ├── leads.ts                # Таблица leads
│   │   │   │   ├── quiz-results.ts         # Таблица quiz_results
│   │   │   │   ├── testimonials.ts         # Таблица testimonials
│   │   │   │   ├── works.ts               # Таблица works
│   │   │   │   ├── team-members.ts         # Таблица team_members
│   │   │   │   ├── faq-items.ts            # Таблица faq_items
│   │   │   │   ├── courses.ts             # Таблица courses
│   │   │   │   ├── missions.ts            # Таблица missions
│   │   │   │   ├── groups.ts              # Таблица groups
│   │   │   │   ├── formats.ts             # Таблица formats
│   │   │   │   └── index.ts               # Реэкспорт всех схем
│   │   │   ├── migrations/                 # SQL миграции (Drizzle Kit)
│   │   │   │   └── ...
│   │   │   └── seed/                       # Seed данные
│   │   │       ├── seed.ts                 # Runner
│   │   │       ├── groups.seed.ts
│   │   │       ├── courses.seed.ts
│   │   │       ├── missions.seed.ts
│   │   │       ├── formats.seed.ts
│   │   │       ├── faq.seed.ts
│   │   │       └── team.seed.ts
│   │   ├── cache/
│   │   │   └── redis.client.ts             # Redis client wrapper
│   │   ├── crm/
│   │   │   ├── crm.adapter.ts             # Абстракция CRM-интеграции
│   │   │   ├── amocrm.adapter.ts          # AmoCRM реализация
│   │   │   └── bitrix24.adapter.ts        # Bitrix24 реализация
│   │   ├── notifications/
│   │   │   ├── telegram-bot.ts             # Telegram уведомления менеджеру
│   │   │   └── email.service.ts            # Email-отправка (подтверждение)
│   │   └── recaptcha/
│   │       └── recaptcha.service.ts        # reCAPTCHA v3 валидация
│   │
│   ├── domain/
│   │   ├── lead/
│   │   │   ├── lead.entity.ts              # Бизнес-сущность Lead
│   │   │   ├── lead.repository.ts          # Интерфейс репозитория
│   │   │   ├── lead.repository.impl.ts     # Drizzle-реализация
│   │   │   ├── create-lead.use-case.ts     # Use case: создание лида
│   │   │   └── lead.service.ts             # Сервис (оркестрация)
│   │   ├── quiz/
│   │   │   ├── quiz.entity.ts
│   │   │   ├── quiz.repository.ts
│   │   │   ├── quiz.repository.impl.ts
│   │   │   ├── submit-quiz.use-case.ts
│   │   │   └── quiz.service.ts
│   │   ├── content/
│   │   │   ├── content.repository.ts
│   │   │   ├── content.repository.impl.ts
│   │   │   └── content.service.ts          # Раздача контента (курсы, FAQ и т.д.)
│   │   └── analytics/
│   │       └── analytics.service.ts         # UTM-трекинг, события
│   │
│   ├── routes/
│   │   ├── index.ts                         # Регистрация всех маршрутов
│   │   ├── leads/
│   │   │   ├── leads.routes.ts              # POST /api/leads
│   │   │   ├── leads.handler.ts             # Обработчик
│   │   │   └── leads.schema.ts              # Fastify schema (из contracts)
│   │   ├── quiz/
│   │   │   ├── quiz.routes.ts               # POST /api/quiz
│   │   │   ├── quiz.handler.ts
│   │   │   └── quiz.schema.ts
│   │   ├── content/
│   │   │   ├── content.routes.ts            # GET /api/groups, /api/courses, etc.
│   │   │   └── content.handler.ts
│   │   └── health/
│   │       └── health.routes.ts             # GET /api/health
│   │
│   ├── middleware/
│   │   ├── error-handler.ts                 # Глобальный обработчик ошибок
│   │   ├── rate-limiter.ts                  # Rate limiting
│   │   ├── request-logger.ts                # Логирование запросов
│   │   └── recaptcha.middleware.ts           # reCAPTCHA проверка
│   │
│   └── shared/
│       ├── errors/
│       │   ├── AppError.ts                  # Базовый класс ошибок
│       │   ├── ValidationError.ts
│       │   └── NotFoundError.ts
│       └── utils/
│           ├── logger.ts                    # Pino logger
│           └── phone.utils.ts               # Нормализация телефонов
│
├── drizzle.config.ts                        # Drizzle Kit конфигурация
├── tsconfig.json
└── package.json
```

## 6.4. packages/tokens

```
packages/tokens/
├── src/
│   ├── colors/
│   │   ├── primitive.ts                    # Базовая палитра
│   │   ├── semantic.ts                     # Семантические токены
│   │   └── group-map.ts                    # Цвета по группам
│   ├── typography/
│   │   ├── fonts.ts                        # Семейства, веса, размеры
│   │   └── text-styles.ts                  # Композитные стили текста
│   ├── components/
│   │   ├── button.ts                       # Токены кнопок
│   │   ├── card.ts                         # Токены карточек
│   │   ├── badge.ts                        # Токены бейджей
│   │   └── form.ts                         # Токены форм
│   ├── spacing.ts                          # Шкала отступов
│   ├── radii.ts                            # Border radius
│   ├── shadows.ts                          # Тени и glow
│   ├── animations.ts                       # Анимации
│   ├── breakpoints.ts                      # Брейкпоинты
│   ├── z-index.ts                          # Z-index шкала
│   ├── build-css.ts                        # Скрипт генерации CSS Custom Properties
│   └── index.ts                            # Public API
├── dist/
│   ├── tokens.css                          # Сгенерированные CSS Custom Properties
│   ├── index.js                            # JS-экспорт
│   └── index.d.ts                          # Типы
├── tsconfig.json
└── package.json
```

## 6.5. packages/shared

```
packages/shared/
├── src/
│   ├── types/
│   │   ├── group.types.ts                  # AgeGroup, GroupSlug, GroupConfig
│   │   ├── direction.types.ts              # Direction, DirectionSlug
│   │   ├── course.types.ts                 # Course, CourseSlug
│   │   ├── market.types.ts                 # Market, MarketCode, Currency
│   │   ├── format.types.ts                 # Format, FormatSlug
│   │   ├── lead.types.ts                   # Lead, LeadStatus
│   │   ├── character.types.ts              # Character, CharacterName
│   │   └── index.ts
│   ├── constants/
│   │   ├── groups.ts                       # GROUP_SLUGS, GROUP_CONFIGS
│   │   ├── directions.ts                   # DIRECTION_SLUGS
│   │   ├── courses.ts                      # COURSE_MAP matrix
│   │   ├── markets.ts                      # MARKET_CONFIGS (RU, KZ)
│   │   ├── formats.ts                      # FORMAT_CONFIGS
│   │   ├── characters.ts                   # CHARACTER_MAP
│   │   └── index.ts
│   ├── utils/
│   │   ├── url-builder.ts                  # buildGroupUrl, buildCourseUrl
│   │   ├── price-formatter.ts              # formatPrice(amount, market)
│   │   ├── phone-formatter.ts              # formatPhone(phone, market)
│   │   ├── validators.ts                   # isValidPhone, isValidEmail
│   │   └── index.ts
│   ├── i18n/
│   │   ├── types.ts                        # I18nKey, Locale
│   │   ├── ru.ts                           # Русские строки
│   │   ├── kz.ts                           # Казахские строки
│   │   └── index.ts
│   └── index.ts                            # Public API
├── tsconfig.json
└── package.json
```

## 6.6. packages/contracts

```
packages/contracts/
├── src/
│   ├── lead/
│   │   ├── create-lead.contract.ts         # POST /api/leads
│   │   └── index.ts
│   ├── quiz/
│   │   ├── submit-quiz.contract.ts         # POST /api/quiz
│   │   └── index.ts
│   ├── content/
│   │   ├── get-groups.contract.ts          # GET /api/groups
│   │   ├── get-courses.contract.ts         # GET /api/courses
│   │   ├── get-formats.contract.ts         # GET /api/formats
│   │   ├── get-works.contract.ts           # GET /api/works
│   │   ├── get-testimonials.contract.ts    # GET /api/testimonials
│   │   ├── get-faq.contract.ts             # GET /api/faq
│   │   ├── get-team.contract.ts            # GET /api/team
│   │   └── index.ts
│   ├── common/
│   │   ├── pagination.schema.ts            # Общие схемы пагинации
│   │   ├── error-response.schema.ts        # Общая схема ошибок
│   │   └── index.ts
│   └── index.ts
├── tsconfig.json
└── package.json
```

## 6.7. packages/ui

```
packages/ui/
├── src/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Badge/
│   │   │   ├── Badge.tsx
│   │   │   ├── Badge.module.css
│   │   │   └── index.ts
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.module.css
│   │   │   └── index.ts
│   │   ├── Select/
│   │   │   ├── Select.tsx
│   │   │   ├── Select.module.css
│   │   │   └── index.ts
│   │   ├── Textarea/
│   │   │   ├── Textarea.tsx
│   │   │   ├── Textarea.module.css
│   │   │   └── index.ts
│   │   ├── Icon/
│   │   │   ├── Icon.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── molecules/
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.module.css
│   │   │   └── index.ts
│   │   ├── Accordion/
│   │   │   ├── Accordion.tsx
│   │   │   ├── AccordionItem.tsx
│   │   │   ├── Accordion.module.css
│   │   │   └── index.ts
│   │   ├── Carousel/
│   │   │   ├── Carousel.tsx
│   │   │   ├── Carousel.module.css
│   │   │   └── index.ts
│   │   ├── Breadcrumb/
│   │   │   ├── Breadcrumb.tsx
│   │   │   ├── Breadcrumb.module.css
│   │   │   └── index.ts
│   │   ├── ProgressBar/
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── ProgressBar.module.css
│   │   │   └── index.ts
│   │   ├── Modal/
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.module.css
│   │   │   └── index.ts
│   │   ├── Toast/
│   │   │   ├── Toast.tsx
│   │   │   ├── Toast.module.css
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts                            # Public API
├── tsconfig.json
└── package.json
```

---


# Часть 7 — Уровень 1: Главная страница

> URL: `/` | Аудитория: холодная / тёплая | 13 блоков | Цель: заинтересовать, направить к выбору группы

## 7.1. Блок 01 — Шапка (Header)

**Тип:** Ключевой | **Widget:** header | **Позиция:** Sticky, все страницы

### Назначение

Постоянная навигация, доступная с любой точки страницы. Обеспечивает мгновенный доступ
к главному CTA и контактам независимо от позиции скролла.

### Маркетинговое обоснование

Sticky-позиция удерживает кнопку «Бесплатный урок» в зоне видимости 100% времени.
Для холодного трафика из соцсетей наличие телефона/Telegram в шапке создаёт ощущение
реальной компании. Разделение на роли через меню снижает когнитивную нагрузку.

### Состав элементов

| # | Элемент | Описание | Действие |
|---|---------|----------|----------|
| 1 | Логотип | Текст «Космическая Академия» + иконка ракеты (24px, teal) | Ссылка на / |
| 2 | Навигация | Академия / Группы (dropdown) / Курсы / О нас / Цены | Scroll / переход |
| 3 | Dropdown «Группы» | Кадеты 7-9 / Стажёры 10-13 / Команда 14+ | Переход на L2 |
| 4 | Телефон | 8-800-XXX-XX-XX (бесплатный) | tel: ссылка |
| 5 | Мессенджеры | Telegram + WhatsApp иконки | Открытие в новой вкладке |
| 6 | CTA Primary | «Бесплатный урок» | Скролл к #quiz (L1) / #form (L3) |
| 7 | CTA Secondary | «Войти» | Переход в ЛК (будущее) |

### Визуальная спецификация

- Высота: 64-68px (десктоп), 56px (мобайл)
- Фон: #0e1118 с opacity 0.92 + backdrop-blur(12px)
- Логотип: Unbounded, 500, 15px, иконка ракеты var(--teal-500)
- Телефон: цвет #8b96b0 (text-secondary)
- CTA: border-radius 8px, gradient teal-to-orange, белый текст
- Мобайл менее 768px: логотип + CTA кнопка + бургер

### Технические требования

- position: sticky; top: 0; z-index: var(--z-header) = 1000
- Анимация появления: slideDown 0.3s при загрузке
- При скролле более 100px: добавляется border-bottom 0.5px
- Dropdown: hover (десктоп) / tap (мобайл), анимация fadeDown 0.2s
- Мобайл: бургер-меню, full-screen overlay
- Telegram/WhatsApp: target="_blank", deep link

### FSD-расположение

```
src/widgets/header/
  ui/Header.tsx            -- Основной компонент
  ui/DesktopNav.tsx        -- Десктоп навигация
  ui/MobileMenu.tsx        -- Мобильное меню (overlay)
  ui/GroupDropdown.tsx      -- Выпадающее меню групп
  model/useHeaderScroll.ts -- Логика sticky + border
  model/useMenuState.ts    -- Состояние бургер-меню
```

---

## 7.2. Блок 02 — Hero-блок

**Тип:** Критический | **Widget:** hero-main | **Позиция:** Первый экран, 100vh

### Назначение

Первый экран, который видят 100% посетителей. Задача — за 4-6 секунд ответить
на вопрос «что это и зачем мне?» и направить к выбору возрастной группы.

### Маркетинговое обоснование

У родителя 4-6 секунд. Заголовок бьёт в боль: не «курс по ИИ», а «Ваш ребёнок
научится управлять ИИ — а не зависеть от него». Космическая эстетика создаёт
ощущение будущего. Элемент выбора возраста прямо в Hero сокращает путь к L2.

### Структура

```
┌─────────────────────────────────────────────────┐
│  ┌───────────────────┐  ┌────────────────────┐  │
│  │ 60% ширины        │  │ 40% ширины         │  │
│  │                   │  │                    │  │
│  │  H1 заголовок     │  │  Персонаж Лео      │  │
│  │  Подзаголовок     │  │  (3D, float)       │  │
│  │                   │  │                    │  │
│  │  [CTA Primary]    │  │                    │  │
│  │  [CTA Secondary]  │  │                    │  │
│  │                   │  │                    │  │
│  │  Бейджи доверия   │  │                    │  │
│  └───────────────────┘  └────────────────────┘  │
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │ Кадеты  │  │ Стажёры │  │ Команда │         │
│  │  7-9    │  │  10-13  │  │   14+   │         │
│  └─────────┘  └─────────┘  └─────────┘         │
└─────────────────────────────────────────────────┘
```

### Тексты (A/B тест)

**Вариант A — «Тревожные» (основной):**

> H1: Ваш ребёнок научится управлять ИИ — а не зависеть от него
>
> Подзаголовок: Космическая Академия — онлайн-школа, где дети от 7 до 17 лет
> создают настоящие продукты с помощью ИИ: книги, игры, сайты, мультики.
> Не просто учатся — делают.
>
> CTA Primary: Выбрать курс для ребёнка
> CTA Secondary: Смотреть бесплатный урок

**Вариант B — «Прагматики»:**

> H1: ИИ-навык, который останется с ребёнком навсегда
>
> Подзаголовок: Мы не учим конкретным нейросетям — мы учим принципам.
> После курса ребёнок создаёт реальный продукт от идеи до результата.
> Для детей 7-17 лет.
>
> CTA: Узнать про курс

### Бейджи доверия

- 150+ учеников
- 4 формата обучения
- Первый урок бесплатно

### Карточки-порталы

| # | Группа | Текст | Цвет | Ссылка |
|---|--------|-------|------|--------|
| 1 | Кадеты 7-9 | Творцы — учатся оживлять идеи: пишут сказки, создают иллюстрации | teal.500 | /kadety |
| 2 | Стажёры 10-13 | Исследователи — используют ИИ для учёбы и хобби | purple.500 | /stajery |
| 3 | Команда 14+ | Архитекторы — разрабатывают реальные продукты: игры, сайты | navy.500 | /komanda |

### Визуальная спецификация

- Высота: min-height 100vh, padding-bottom 80px
- Фон: тёмный космос #1A1E35 + анимированные звёзды (CSS particles или tsParticles, менее 30KB gzip)
- Туманности: CSS radial-gradient фиолетово-голубые
- Персонаж Лео: PNG с прозрачным фоном, min 600x900px @2x. Анимация float translateY +/- 12px, 3s ease-in-out infinite
- Порталы: display grid 3 columns, gap 16px, на мобайле stack
- Stagger-анимация: H1 0ms, подзаголовок 150ms, кнопки 300ms, персонаж 100ms

### Технические требования

- Лео: lazyload, WebP + PNG fallback, srcset для @2x
- CTA «Выбрать курс»: scroll to #portals
- A/B тест: варианта A vs B, победитель через 2 недели по CTR на порталы
- LCP оптимизация: Hero-персонаж — priority load, preconnect шрифты

### FSD-расположение

```
src/widgets/hero-main/
  ui/HeroMain.tsx           -- Основной компонент
  ui/HeroCharacter.tsx      -- Персонаж Лео с float-анимацией
  ui/HeroPortals.tsx        -- 3 карточки-портала
  ui/StarField.tsx          -- Звёздный фон
  ui/TrustBadges.tsx        -- Бейджи доверия
  config/hero-texts.ts      -- A/B варианты текстов
```

---

## 7.3. Блок 03 — «Почему ИИ-образование нужно сейчас»

**Тип:** Ключевой | **Widget:** why-now | **Позиция:** После Hero

### Назначение

Актуализация проблемы: мир меняется, ИИ-грамотность — базовый навык. Без давления, через факты.

### Маркетинговое обоснование

Часть аудитории уже понимает необходимость — для них блок подтверждение. Часть сомневается —
для них создаёт urgency. 3-4 тезиса снимают первичный скептицизм быстро.

### Тезисы RU

| # | Тезис | Иконка | Описание |
|---|-------|--------|----------|
| 1 | ИИ уже везде | Мозг/чип | ИИ используется в 70%+ профессий. Не знать его — как не знать Excel в 2010-х |
| 2 | Школа не успевает | Часы | Школьная программа адаптируется медленно. Дети, начавшие раньше, получают преимущество |
| 3 | Принципы, а не инструменты | Ключ | Конкретные нейросети устареют. Принципы работы с ИИ — нет. Мы учим мыслить |
| 4 | Создатель vs потребитель | Ракета | Ребёнок может быть потребителем ИИ или создателем с ИИ. Мы выбираем второе |

### Визуальная спецификация

- Фон: нейтральный, отличный от Hero (чуть светлее или с текстурой)
- 3-4 карточки или иконки-тезисы в ряд (на мобайле — stack)
- Каждый тезис: иконка (40px) + заголовок (h3) + 1-2 строки описания
- Высота секции: 250-320px

### FSD-расположение

```
src/widgets/why-now/
  ui/WhyNow.tsx             -- Основной компонент
  ui/ThesisCard.tsx          -- Карточка тезиса
  config/theses.ts           -- Тезисы (RU / KZ варианты)
```

---

## 7.4. Блок 04 — «Что мы делаем иначе» — УТП

**Тип:** Ключевой | **Widget:** utp-block | **Позиция:** После «Почему сейчас»

### Назначение

Объяснение уникального подхода: не конкретные нейросети, а принципы.
Не чат, а создание продукта от идеи до реализации.

### Маркетинговое обоснование

Конкуренция в нише ИИ-обучения растёт. Родитель видел десятки «курсов по ChatGPT».
Блок отстраивает: «Мы не учим конкретным инструментам — мы учим мыслить как создатель».
Два направления с конкретными примерами результатов показывают реальный продукт.

### Контент — два направления

**Нейрокреатив:**
- Описание: Создание контента с помощью генеративного ИИ
- Примеры результатов: сказка с иллюстрациями, мультфильм, видео для соцсетей, презентация
- Визуал: иллюстрация книги с картинками, кисть, палитра

**Вайб-кодинг:**
- Описание: Разработка продуктов через ИИ-ассистированное программирование
- Примеры результатов: игра, сайт, приложение, бот
- Визуал: иллюстрация игры, экран с кодом, ракета

### Визуальная спецификация

- Две карточки side-by-side (контрастные цвета)
- Нейрокреатив: фиолетово-розовый градиент
- Вайб-кодинг: тёмно-синий-бирюзовый градиент
- Hover-анимация: подъём + glow
- На мобайле: stack вертикально

### FSD-расположение

```
src/widgets/utp-block/
  ui/UtpBlock.tsx
  ui/DirectionCard.tsx
```

---

## 7.5. Блок 05 — «Три пути» — выбор возрастной группы

**Тип:** Навигационный | **Widget:** three-paths | **ID:** #portals

### Назначение

Главный навигационный элемент L1. Три карточки-портала → переход на L2.

### Маркетинговое обоснование

Сегментация по возрасту мгновенно делает предложение релевантным. Три роли
(Творцы / Исследователи / Архитекторы) создают ощущение принадлежности.

### Карточки

| Группа | Заголовок | Роль | Описание | Персонаж | Цвет | CTA |
|--------|-----------|------|----------|----------|------|-----|
| Кадеты | Кадеты 7-9 лет | Творцы | Знакомятся с тем, что может делать ИИ | Лео | teal | Узнать больше |
| Стажёры | Стажёры 10-13 лет | Исследователи | Используют ИИ для учёбы и хобби | Аури (RU) / Лина (KZ) | purple | Узнать больше |
| Команда | Команда 14+ лет | Архитекторы | Разрабатывают реальные продукты | Арло | navy | Узнать больше |

### Технические требования

- Ссылки: /kadety, /stajery, /komanda
- Каждая карточка полностью кликабельна (cursor: pointer)
- На мобайле: stack вертикально, 100% ширины
- Персонажи: WebP + PNG fallback, lazyload кроме первой видимой
- Hover: карточка translateY(-4px) + scale(1.01) + glow соответствующего цвета

---

## 7.6. Блок 06 — «Что создадут ваши дети» — галерея

**Тип:** Ключевой | **Widget:** gallery

### Назначение

Примеры продуктов: сказки, мультики, игры, сайты. Образ желаемого результата.

### Маркетинговое обоснование

Родитель покупает не курс, а будущее ребёнка. «Смотри, что сделал 9-летний Миша» —
работает сильнее описания программы. На старте — демо-работы с пометкой «пример».

### Контент

Мозаика/карусель работ в 3 категориях:
- Кадеты: иллюстрированные сказки, открытки, анимации
- Стажёры: презентации, промпт-гайды, исследования
- Команда: игры, сайты, приложения

Каждая карточка: превью + подпись «[Имя], [возраст] лет, [название работы]»

Кнопка: «Смотреть все примеры» -> /gallery

### FSD-расположение

```
src/widgets/gallery/
  ui/Gallery.tsx
  ui/WorkCard.tsx
  model/useGalleryFilter.ts
```

---

## 7.7. Блок 07 — «Командование Академии»

**Тип:** Поддерживающий | **Widget:** team

### Назначение

Краткое представление команды. «Кто будет учить моего ребёнка?»

### Контент

Карусель 3-5 карточек:
- Адмирал: фото + имя + «Адмирал Академии» + 1 строка экспертизы
- Вице-адмирал Кадетов: фото + имя + специализация
- Вице-адмирал Стажёров: фото + имя + специализация
- Вице-адмирал Команды: фото + имя + специализация
- ЦУП (опционально): фото + имя + «Центр управления полётом»

Ссылка: «Познакомиться с командой подробнее» -> /about

### FSD-расположение

```
src/widgets/team/
  ui/Team.tsx
  ui/TeamMemberCard.tsx
```

---

## 7.8. Блок 08 — Форматы обучения и цены

**Тип:** Ключевой | **Widget:** pricing-overview

### Назначение

Обзор четырёх форматов обучения. Ценовые якоря без скрытых условий.

### Контент — 4 формата

| # | Формат | Цена (RU) | Описание | Акцент |
|---|--------|-----------|----------|--------|
| 1 | Бесплатный урок | 0 руб | Первое знакомство. Ребёнок попробует — и вы оба поймёте | Вход |
| 2 | Пробный урок | от 990 руб | Полноценное занятие. Стоимость зачитывается в курс | Зачёт |
| 3 | Запись + консультации | от 3 990 руб/мес | Основной формат. Записи + педагог + кабинет | Рекомендуемый |
| 4 | Персональный | от 7 990 руб/мес | 1-на-1 с педагогом. Максимальный результат | Премиум |

Кнопка: «Подробнее о форматах» -> переход к деталям на L2/L3

### Визуальная спецификация

- 4 карточки в ряд (на мобайле 2x2 или stack)
- Формат «Запись + консультации» акцентирован (border highlight, badge «Рекомендуемый»)
- Бесплатный урок — выделен цветом входа (зелёный бейдж)

---

## 7.9. Блок 09 — Квиз «Найди курс для ребёнка»

**Тип:** Лид-магнит | **Widget:** quiz-widget | **ID:** #quiz

### Назначение

Мягкий способ получить контакт (конверсия 25-40%). Персональная рекомендация курса.

### Вопросы квиза

| # | Вопрос | Варианты ответов | Тип |
|---|--------|------------------|-----|
| 1 | Сколько лет вашему ребёнку? | 7 / 8 / 9 / 10 / 11 / 12 / 13 / 14 / 15 / 16 / 17 | Single select |
| 2 | Что ребёнку интереснее? | Рисовать и придумывать / Разбираться в технологиях / И то, и другое | Single select |
| 3 | Есть ли у ребёнка опыт с нейросетями? | Да, пользовался / Слышал, но не пробовал / Нет | Single select |
| 4 | Что для вас важнее? | Развитие творчества / Практические IT-навыки / Безопасное знакомство с ИИ | Single select |
| 5 | Контактные данные | Имя родителя + телефон + email (опц.) | Form |

### Матрица рекомендаций

```
Возраст 7-9 + творчество              -> Кадеты / Нейрокреатив
Возраст 7-9 + технологии              -> Кадеты / Вайб-кодинг
Возраст 7-9 + и то, и другое          -> Кадеты / Нейрокреатив (default)
Возраст 10-13 + творчество            -> Стажёры / Нейрокреатив
Возраст 10-13 + технологии            -> Стажёры / Вайб-кодинг
Возраст 10-13 + и то, и другое        -> Стажёры / Нейрокреатив (default)
Возраст 14+ + творчество              -> Команда / Нейрокреатив
Возраст 14+ + технологии              -> Команда / Вайб-кодинг
Возраст 14+ + и то, и другое          -> Команда / Вайб-кодинг (default)
```

> **Примечание:** для ответа «И то, и другое» рекомендация зависит от возраста:
> Кадеты/Стажёры → Нейрокреатив (творчество приоритетнее для младших),
> Команда → Вайб-кодинг (практика приоритетнее для старших).
> Ответы на вопросы 3-4 могут корректировать рекомендацию как тай-брейкер.

### Технические требования

- Квиз — собственная JS-логика (не сторонний сервис для контроля данных)
- Прогресс-бар сверху (шаг X из 5)
- CRM: POST /api/quiz -> Bitrix24/AmoCRM + Telegram-бот менеджеру
- Email-автоответ с программой рекомендованного курса (PDF)
- #quiz — якорь для CTA из шапки и Hero
- Thank You показывается НА ТОМ ЖЕ экране (без редиректа)
- reCAPTCHA v3 (невидимая)

### FSD-расположение

```
src/widgets/quiz-widget/
  ui/QuizWidget.tsx
  ui/QuizStep.tsx
  ui/QuizProgress.tsx
  ui/QuizResult.tsx
  model/useQuizState.ts
  model/quizMatrix.ts
  config/quiz-questions.ts
```

---

## 7.10. Блок 10 — Отзывы

**Тип:** Поддерживающий | **Widget:** testimonials

### Назначение

Социальное доказательство. На старте — отзывы тестовой группы.

### Контент

Карусель 3-6 карточек:
- Фото/аватар родителя
- Имя + возраст ребёнка
- Текст 2-4 строки
- Звёздный рейтинг (4-5 звёзд)
- Пометка «участник тестовой группы» (на старте)

При наличии видео-отзывов — отдельный блок или встроенный плеер.

---

## 7.11. Блок 11 — FAQ

**Тип:** Ключевой | **Widget:** faq-block

### Назначение

Снятие последних барьеров. 7-10 вопросов сгруппированных по темам.

### Вопросы RU (L1)

**Про обучение:**
- Чем Академия отличается от обычных «курсов по ChatGPT»?
- Для какого возраста подходит обучение?
- Как проходят занятия — это просто видео?
- Что конкретно ребёнок создаст на курсе?

**Про безопасность:**
- Безопасно ли это для ребёнка?
- Как вы контролируете, что видит ребёнок?

**Про оплату:**
- Какие форматы обучения и сколько стоит?
- Можно ли вернуть деньги, если не понравится?
- Нужно ли покупать специальное оборудование?

### Визуальная спецификация

- Аккордеон: вопрос 14px полужирный, ответ 13px серый
- Два столбца на десктопе, один на мобайле
- Кнопка «Остались вопросы? Напишите нам» -> Telegram/WhatsApp

---

## 7.12. Блок 12 — Финальный CTA

**Тип:** Критический | **Widget:** cta-final

### Назначение

Последний шанс конверсии. Яркий блок для тех, кто дочитал до конца.

### Контент

> H2: Готовы начать путешествие?
>
> Подзаголовок: Первый урок — бесплатно. Без обязательств. Просто попробуйте.
>
> CTA Primary: Бесплатный урок
> CTA Secondary: Выбрать группу

### Визуальная спецификация

- Полноширинный блок, контрастный фон (тёмный космос или gradient)
- Крупный заголовок (h2)
- Две CTA-кнопки
- Иллюстрация: космический корабль или звёзды

---

## 7.13. Блок 13 — Футер

**Тип:** Ключевой | **Widget:** footer

### Назначение

Реквизиты, контакты, соцсети, юридическая информация, навигация.

### Контент — колонки

| Колонка | Содержимое |
|---------|-----------|
| О нас | Об Академии, О команде, Отзывы, Контакты |
| Группы | Кадеты 7-9, Стажёры 10-13, Команда 14+ |
| Курсы | Нейрокреатив, Вайб-кодинг, Все работы |
| Документы | Политика конфиденциальности, Оферта, 152-ФЗ |

### Дополнительно

- Логотип + краткий слоган
- Соцсети: ВКонтакте, Telegram (RU) / WhatsApp, Telegram, Instagram, YouTube (KZ)
- Реквизиты: ИНН, ОГРН, название юр. лица
- Копирайт: (c) 2026 Космическая Академия. Все права защищены.

---

# Часть 8 — Уровень 2: Страницы групп

> 3 страницы: /kadety, /stajery, /komanda
> Аудитория: тёплая | 11 блоков | Цель: убедить, направить к выбору направления
> Общий шаблон структуры, уникальный Hero, персонаж, цвет, тексты и работы

## 8.0. Принцип динамической темизации L2

Каждая из трёх страниц L2 использует единый шаблон GroupPage, но все визуальные
параметры определяются через groupColorMap (см. Часть 3.2):

```typescript
// src/pages/group/model/useGroupPageData.ts
// Определяет slug группы из URL и загружает:
// - Цветовую тему (accent, gradient, glow)
// - Персонажа (Leo / Auri-Lina / Arlo) с учётом рынка
// - Тексты Hero, описания, FAQ
// - Фильтрованные отзывы и работы
// - Форматы с ценами для группы
```

## 8.1. Блок 01 — Шапка (реиспользуемая)

Идентична L1. Добавляется Breadcrumb: «Академия / [Название группы]».
CTA в шапке ведёт на #directions (якорь выбора направления).

---

## 8.2. Блок 02 — Hero группы

**Тип:** Критический | **Widget:** hero-group

### Персонализация по группам

| Параметр | Кадеты 7-9 | Стажёры 10-13 | Команда 14+ |
|----------|-----------|--------------|------------|
| Персонаж | Лео | Аури (RU) / Лина (KZ) | Арло |
| Цвет акцента | teal.500 | purple.500 | navy.500 |
| Роль | Творцы | Исследователи | Архитекторы |
| H1 (RU) | Добро пожаловать, Кадет! Здесь рождаются творцы | Стажёр, твоя миссия начинается. ИИ — твой инструмент | Команда в сборе. Архитекторы строят будущее |
| Подзаголовок | Дети 7-9 лет учатся оживлять идеи с помощью ИИ | Подростки 10-13 лет используют ИИ для учёбы, хобби, творчества | С 14 лет — реальные продукты: игры, сайты, приложения от идеи до запуска |
| CTA Primary | Выбрать направление | Выбрать направление | Выбрать направление |
| CTA Secondary | Бесплатный урок | Бесплатный урок | Бесплатный урок |

### Визуальная спецификация

- Уникальная иллюстрация для каждой группы (разный корабль, цвет, персонаж)
- Фоновое свечение heroGlow из groupColorMap
- Персонаж: отличная от L1 поза (приветствие, жест «класс» и т.д.)
- Иконки параметров: возраст, длительность модуля, формат

---

## 8.3. Блок 03 — «Для кого эта группа»

**Тип:** Ключевой | **Widget:** group-portrait

### Назначение

Портрет типичного ребёнка. Родитель узнаёт своего ребёнка = клик.

### Контент по группам

**Кадеты 7-9 — «Тебе сюда, если ты...»:**
- Любишь рисовать и придумывать истории
- Смотришь мультики и думаешь «я тоже так хочу»
- Ещё не пробовал нейросети, но тебе интересно
- Хочешь создать свою первую книжку или мультик

**Стажёры 10-13 — «Тебе сюда, если ты...»:**
- Уже пробовал ChatGPT или другие нейросети
- Хочешь делать крутые презентации и проекты
- Любишь разбираться в новых технологиях
- Хочешь, чтобы ИИ помогал в учёбе

**Команда 14+ — «Тебе сюда, если ты...»:**
- Хочешь создать свою игру, сайт или приложение
- Интересуешься стартапами и IT
- Мечтаешь зарабатывать на своих проектах
- Готов к серьёзной работе и реальным результатам

---

## 8.4. Блок 04 — Два направления (детализированные)

**Тип:** Навигационный | **Widget:** utp-block (расширенный режим)

### Назначение

Подробные карточки Нейрокреатив vs Вайб-кодинг с примерами для ЭТОЙ группы.
Каждая карточка ведёт на L3.

### Контент по группам

**Кадеты:**

| Направление | Результат курса | Примеры | Ссылка |
|-------------|----------------|---------|--------|
| Нейрокреатив | Иллюстрированная сказка из 20 страниц | Сказка, открытка, обложка | /kadety/neyrokreativ |
| Вайб-кодинг | Интерактивная мини-игра или анимированная история | Quiz-game, animation | /kadety/vayb-koding |

**Стажёры:**

| Направление | Результат курса | Примеры | Ссылка |
|-------------|----------------|---------|--------|
| Нейрокреатив | Мультимедийная презентация-исследование | Видео, презентация, гайд | /stajery/neyrokreativ |
| Вайб-кодинг | Мини-приложение или бот для Telegram | Бот, сайт, калькулятор | /stajery/vayb-koding |

**Команда:**

| Направление | Результат курса | Примеры | Ссылка |
|-------------|----------------|---------|--------|
| Нейрокреатив | Полноценный контент-продукт с монетизацией | Видео-серия, канал, подкаст | /komanda/neyrokreativ |
| Вайб-кодинг | Работающий сайт или игра, развёрнутые на хостинге | SPA, игра, SaaS | /komanda/vayb-koding |

---

## 8.5. Блок 05 — «Что умеет ребёнок после курса»

**Тип:** Ключевой | **Widget:** group-portrait (расширенный режим — секция «Навыки»)

### Навыки по группам (6-8 пунктов каждая)

**Кадеты:**
- Формулирует простые промпты для генерации изображений
- Создаёт иллюстрированные истории с помощью ИИ
- Понимает, что ИИ — инструмент, а не магия
- Знает базовые правила цифровой безопасности
- Умеет проверять результат ИИ на корректность
- Создал первый законченный творческий продукт

**Стажёры:**
- Различает типы нейросетей и подбирает нужный инструмент
- Строит сложные промпты с контекстом и условиями
- Применяет ИИ к школьным заданиям осмысленно
- Создаёт мультимедийные проекты (текст + изображение + видео)
- Критически оценивает ответы ИИ
- Знает этику использования ИИ в учёбе

**Команда:**
- Строит продукт от идеи до MVP
- Применяет вайб-кодинг для быстрого прототипирования
- Понимает принципы UI/UX и пользовательского опыта
- Умеет деплоить проект на хостинг
- Презентует свой продукт аудитории
- Понимает основы монетизации и стартап-мышления

---

## 8.6. Блок 06 — Работы учеников группы

**Тип:** Ключевой | **Widget:** gallery (с фильтром по группе)

### Назначение

Только релевантные работы для данного возраста. «Вот что создаёт 8-летний ребёнок».

> На старте: работы пилотной группы с пометкой «ученик тестового запуска».
> Подпись: «[Имя], [возраст] лет, Тестовая группа Академии».

---

## 8.7. Блок 07 — Вице-адмирал группы

**Тип:** Критический | **Widget:** teacher-card

### Назначение

Детальная карточка преподавателя группы. Личность преподавателя для RU-аудитории —
критический фактор доверия.

### Контент карточки

- Профессиональное фото (крупное)
- Имя + звание в Академии (напр. «Вице-адмирал Кадетов»)
- Реальная специализация и опыт
- Список регалий (3-5 пунктов)
- Цитата от преподавателя
- Видео-приветствие 30-60 секунд (опционально)

---

## 8.8. Блок 08 — Форматы и стоимость (подробно)

**Тип:** Критический | **Widget:** pricing-detail

Те же 4 формата, но с конкретными ценами для группы. Содержит:
- Конкретные цены (не «от Х»)
- Что входит в каждый формат (списком)
- Выделен основной формат
- Пометка о рассрочке 0%
- Сравнение «дешевле домашнего репетитора»
- Кнопка «Записаться» под каждым форматом

---

## 8.9. Блок 09 — Безопасность и родительский контроль

**Тип:** Поддерживающий | **Widget:** safety

### Контент

- Без рекламы — платформа полностью без рекламных вставок
- Родительский кабинет — прогресс и домашки ребёнка видны родителю
- 152-ФЗ — обработка данных в соответствии с законом
- Контент проверен — никакого неподходящего содержимого
- Без внешних ссылок — ребёнок не уйдёт на сторонние ресурсы

### Визуал

- Иконки щита, замка
- Mockup родительского кабинета (дашборд с прогрессом)
- Зелёные галочки у каждого пункта

---

## 8.10. Блок 10 — Отзывы родителей данной группы

**Тип:** Поддерживающий | **Widget:** testimonials (с фильтром)

> Принципиально важно: отзывы на странице Кадетов — ТОЛЬКО о детях 7-9 лет.
> Отзыв «мой 14-летний в восторге» на странице Кадетов СНИЖАЕТ конверсию.
> Для каждой группы собирать отдельную базу.

---

## 8.11. Блок 11 — CTA: выбор направления + FAQ группы

**Тип:** Навигационный + Ключевой

### CTA

Две кнопки: Нейрокреатив / Вайб-кодинг с иллюстрациями.
Подпись: «Не знаешь что выбрать? Пройди квиз» -> ссылка на #quiz (L1).

### FAQ группы (6-8 вопросов)

Вопросы, специфичные для возраста. Примеры:

**Кадеты:**
- С какого возраста подходит курс?
- Не слишком ли рано для ИИ в этом возрасте?
- Как проходят занятия для маленьких?

**Стажёры:**
- Сочетается ли с обычной школой?
- Нужен ли планшет или хватит телефона?
- Чем отличается от школьных курсов информатики?

**Команда:**
- Нужно ли знать программирование?
- Какие реальные проекты создают выпускники?
- Есть ли сертификат?

---


# Часть 9 — Уровень 3: Страницы курсов

> 6 страниц: (3 группы x 2 направления)
> Аудитория: горячая | 11 блоков | Цель: закрыть возражения, оплата/заявка
> URL: /kadety/neyrokreativ, /kadety/vayb-koding, /stajery/neyrokreativ,
>      /stajery/vayb-koding, /komanda/neyrokreativ, /komanda/vayb-koding

## 9.0. Принцип двойной динамической темизации L3

Каждая из 6 страниц L3 определяется двумя параметрами:
- groupSlug (kadety | stajery | komanda) -> цветовая тема от группы
- directionSlug (neyrokreativ | vayb-koding) -> контент и визуал направления

```typescript
// src/pages/course/model/useCoursePageData.ts
// Inputs: groupSlug + directionSlug из URL params
// Outputs: тема группы + контент курса + миссии + тарифы + отзывы + FAQ
```

## 9.1. Блок 01 — Шапка + Breadcrumb

Та же sticky шапка. Breadcrumb 3 уровня: «Академия / Кадеты / Нейрокреатив».
CTA «Записаться» в шапке -> якорь #form (форма записи).

---

## 9.2. Блок 02 — Hero курса

**Тип:** Критический | **Widget:** hero-course

### Персонализация по 6 вариантам

| Группа | Направление | H1 | Финальный продукт | Параметры |
|--------|------------|-----|-------------------|-----------|
| Кадеты | Нейрокреатив | Мастер сказок: оживи свои истории с ИИ | Иллюстрированная сказка 20 стр. | 8 миссий, 45 мин/урок, запись |
| Кадеты | Вайб-кодинг | Создатель игр: собери свою первую игру с ИИ | Интерактивная мини-игра | 8 миссий, 45 мин/урок, запись |
| Стажёры | Нейрокреатив | ИИ-студия: создай мультимедийный проект | Презентация-исследование + видео | 10 миссий, 60 мин/урок, запись |
| Стажёры | Вайб-кодинг | Лаборатория кода: построй приложение с ИИ | Работающее приложение / бот | 10 миссий, 60 мин/урок, запись |
| Команда | Нейрокреатив | Контент-продюсер: запусти свой медиа-продукт | Контент-серия с монетизацией | 12 миссий, 75 мин/урок, запись |
| Команда | Вайб-кодинг | Архитектор продуктов: от идеи до деплоя | Работающий сайт/игра на хостинге | 12 миссий, 75 мин/урок, запись |

### Визуальная спецификация

- Тёмный космический фон, уникальный для группы + направления
- H1 = название курса
- Подзаголовок = финальный продукт (конкретный)
- Иконки: длительность, количество миссий, формат, возраст
- Два CTA: «Записаться» (#form) + «Бесплатный урок»

---

## 9.3. Блок 03 — «Что создаст ребёнок» — финальный продукт

**Тип:** Критический | **Widget:** course-result

### Назначение

Самый конверсионный блок L3. Конкретный результат, за который родитель платит.

### Контент

Для каждого из 6 курсов:
- Детальное описание финального проекта (4-6 предложений)
- Список шагов к результату (пошагово)
- Mockup/изображение финального продукта (600x400px min, WebP)
- Пример реальной работы ученика (или демо на старте)

**Пример (Кадеты / Нейрокреатив):**

> К концу курса ваш ребёнок создаст иллюстрированную сказку из 20 страниц
> с AI-картинками. Он сам придумает сюжет, опишет персонажей, сгенерирует
> уникальные иллюстрации к каждой главе и запишет озвученную версию.
> Готовую книгу можно распечатать или поделиться ссылкой с бабушками.

---

## 9.4. Блок 04 — Программа курса — список миссий

**Тип:** Ключевой | **Widget:** course-program

### Назначение

Детальный roadmap курса. Аккордеон, первая миссия раскрыта.

### Структура миссии

Каждая миссия содержит:
- Номер (Миссия 1, 2, 3...)
- Название (тематическое, космическое)
- Краткое описание (1-2 строки в закрытом виде)
- Развёрнутое описание (при раскрытии): что узнает, что сделает, что получит
- Индикатор сложности (легкая / средняя / сложная)
- Связь с предыдущей миссией (прогресс)

### Количество миссий по курсам

| Курс | Миссий |
|------|--------|
| Кадеты Нейрокреатив | 8 |
| Кадеты Вайб-кодинг | 8 |
| Стажёры Нейрокреатив | 10 |
| Стажёры Вайб-кодинг | 10 |
| Команда Нейрокреатив | 12 |
| Команда Вайб-кодинг | 12 |

---

## 9.5. Блок 05 — Шаблон урока — 6 пилларов

**Тип:** Ключевой | **Widget:** pillar-template

### Назначение

Визуализация уникальной методики. Конкурентное преимущество.

### Контент — 6 пилларов (подробно)

| # | Иконка | Название | Время | Описание | Для кого |
|---|--------|----------|-------|----------|----------|
| 0 | fire | Warm-up | 3-5 мин | Что будет на занятии. Специально для родителей — что ребёнок узнает | Родители |
| 1 | robot | AI Awakening | 5 мин | Мини-видео с новой идеей о возможностях ИИ. Каждый раз — новый угол | Дети |
| 2 | shield | Safety Shield | 7 мин | 1-2 правила цифровой безопасности + задание «Проверь промпт» | Дети |
| 3 | book | Новая тема | 8 мин | Объяснение + воркшоп. Ребёнок не смотрит — он делает | Дети |
| 4 | graduation | Study Supercharge | 8 мин | Применение к школьному примеру. ИИ помогает — не заменяет | Дети |
| 5 | rocket | Creative Mode | 8 мин | Творческий или футуристичный твист: идея карьеры, изобретение | Дети |
| 6 | medal | AI Habit Builder | 5-7 мин | Встраивание навыка + рефлексия + трекер. ДЗ: покажи родителю | Семья |

### Визуал

- 6 карточек в ряд (2 ряда по 3 на мобайле)
- Каждая карточка: уникальный цвет из фирменной палитры
- Warm-up выделен как «для родителей» (отдельный визуал)
- Хронометраж: прогресс-бар или таймлайн

---

## 9.6. Блок 06 — Преподаватель курса (расширенный)

**Тип:** Поддерживающий | **Widget:** teacher-card (extended mode)

Расширенная версия карточки преподавателя с L2:
- Большая секция с фото
- Расширенная биография
- Видео-приветствие 60-90 секунд (play without sound by default)
- Кейсы: «Что создали мои ученики» (3-4 карточки работ)
- Цитата от преподавателя

---

## 9.7. Блок 07 — Тарифы (конкретные цены)

**Тип:** Критический | **Widget:** pricing-detail

### 3 карточки тарифов

| # | Тариф | Цена (RU) | Акцент |
|---|-------|-----------|--------|
| 1 | Пробный | 990 руб | Зачитывается при покупке |
| 2 | Запись + консультации | 3 990 руб/мес | ОСНОВНОЙ (highlighted) |
| 3 | Персональный | 7 990 руб/мес | Премиум |

Каждая карточка:
- Название + цена
- Список включённого (5-7 пунктов с галочками)
- Кнопка «Купить» / «Записаться»
- Рассрочка 0% (для основного и персонального)
- При промо: зачёркнутая цена + промо-код + таймер

---

## 9.8. Блок 08 — Форма записи (Lead-форма)

**Тип:** Критический (Лид-магнит) | **Widget:** lead-form | **ID:** #form

### Назначение

Главная конверсионная цель L3.

### Поля формы

| # | Поле | Тип | Обязательное | Валидация |
|---|------|-----|-------------|-----------|
| 1 | Имя родителя | text | Да | min 2, max 100 |
| 2 | Имя ребёнка | text | Да | min 2, max 100 |
| 3 | Возраст ребёнка | number | Да | 5-18 |
| 4 | Телефон | tel | Да | +7(XXX)XXX-XX-XX, маска |
| 5 | Email | email | Нет | Стандартная email валидация |
| 6 | Формат | select | Нет | free / trial / record / personal |

### Технические требования

- Форма встроена 3 раза: Hero (#form ссылка), после тарифов (отдельный блок), финальный CTA
- POST /api/leads -> CRM + Telegram-бот + email подтверждение
- Телефон: маска +7 (XXX) XXX-XX-XX, валидация 11 цифр
- Кнопка disabled до заполнения обязательных полей
- After submit: форма скрывается, Thank You message в том же контейнере
- UTM-параметры: из URL передаются в CRM
- reCAPTCHA v3 (невидимая)

---

## 9.9. Блок 09 — Гарантии и безопасность (расширенный)

**Тип:** Поддерживающий | **Widget:** safety (extended mode)

Расширенная версия блока безопасности с L2:
- Гарантия возврата денег после пробного урока
- Пересдача миссий (без доплаты)
- Родительский кабинет с прогрессом
- Без рекламы, без внешних ссылок
- 152-ФЗ (RU) / Закон РК о персональных данных (KZ)
- Иконки щита, замка, звёзды гарантии

---

## 9.10. Блок 10 — Отзывы о данном курсе

**Тип:** Поддерживающий | **Widget:** testimonials (курсовой фильтр)

> Ключевой элемент: рядом с отзывом — скриншот финального проекта ребёнка.
> Соединение слов родителя с конкретным результатом = самый мощный документ-довод на L3.

3-4 карточки:
- Фото родителя + имя
- Возраст ребёнка + направление
- Текст отзыва
- Рядом: скриншот/превью финальной работы ребёнка

---

## 9.11. Блок 11 — FAQ курса + Финальный CTA

**Тип:** Ключевой + Критический

### FAQ курса (6-8 вопросов)

Специфика конкретного курса:
- Когда ближайший старт?
- Сколько времени нужно в неделю?
- Группы или индивидуально?
- Нужен планшет, компьютер или телефон?
- Домашние задания обязательны?
- Выдаётся ли сертификат?
- Что если ребёнок пропустит урок?

Кнопка: «Задать свой вопрос» -> Telegram

### Финальный CTA

- Крупный заголовок: «Начни свою миссию»
- Счётчик мест: «Осталось X мест» (urgency)
- Таймер: «Ближайший старт: [дата]»
- Дубль формы записи (или кнопка-якорь к #form)
- Мессенджеры: Telegram + WhatsApp

---

# Часть 10 — Backend API

## 10.1. Архитектура

### Слои

```
┌──────────────────────────────────────┐
│            Routes Layer               │  HTTP endpoints, Fastify
├──────────────────────────────────────┤
│           Handlers Layer              │  Request/Response обработка
├──────────────────────────────────────┤
│         Domain / Use Cases            │  Бизнес-логика
├──────────────────────────────────────┤
│           Repository Layer            │  Доступ к данным (Drizzle)
├──────────────────────────────────────┤
│       Infrastructure Layer            │  DB, CRM, Email, Telegram
└──────────────────────────────────────┘
```

### Принципы

1. **Dependency Inversion** — Use Cases зависят от интерфейсов Repository, не от реализации
2. **Single Responsibility** — один Use Case = одна бизнес-операция
3. **Validation at Edge** — входящие данные валидируются на уровне Route через Zod-схемы из contracts
4. **Error Boundaries** — глобальный error handler, типизированные ошибки (AppError)
5. **Stateless** — сервер не хранит состояние в памяти, сессии в Redis

## 10.2. API Endpoints

### Leads

| Method | URL | Описание | Тело | Ответ |
|--------|-----|----------|------|-------|
| POST | /api/leads | Создание лида | CreateLeadRequest | CreateLeadResponse |

**Поток создания лида:**
1. Валидация тела запроса (Zod-схема из contracts)
2. reCAPTCHA v3 проверка (middleware)
3. Нормализация телефона (+7XXXXXXXXXX)
4. Проверка дубликатов (по телефону за последние 24ч)
5. Сохранение в PostgreSQL
6. Отправка в CRM (AmoCRM / Bitrix24) — async
7. Telegram-уведомление менеджеру — async
8. Email-подтверждение родителю — async
9. Response: { id, status: 'created' | 'duplicate', message }

### Quiz

| Method | URL | Описание | Тело | Ответ |
|--------|-----|----------|------|-------|
| POST | /api/quiz | Отправка результатов квиза | SubmitQuizRequest | SubmitQuizResponse |

**Поток:**
1. Валидация ответов квиза
2. Вычисление рекомендации по матрице
3. Сохранение результата + контакта
4. CRM + Telegram + Email с рекомендацией (PDF)
5. Response: { recommendedGroup, recommendedDirection, courseUrl }

### Content (публичные, кэшируемые)

| Method | URL | Описание | Кэш |
|--------|-----|----------|------|
| GET | /api/groups | Список групп | 1 час |
| GET | /api/courses | Список курсов | 1 час |
| GET | /api/courses/:slug/missions | Миссии курса | 1 час |
| GET | /api/works | Работы учеников (+фильтры) | 30 мин |
| GET | /api/testimonials | Отзывы (+фильтры) | 30 мин |
| GET | /api/faq | FAQ (+фильтры по level, group) | 1 час |
| GET | /api/team | Команда | 1 час |
| GET | /api/formats | Форматы обучения | 1 час |

### Health

| Method | URL | Описание |
|--------|-----|----------|
| GET | /api/health | Проверка работоспособности |

## 10.3. Схема базы данных

### Таблицы

```
leads
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
  parent_name VARCHAR(100) NOT NULL
  child_name  VARCHAR(100) NOT NULL
  child_age   INTEGER NOT NULL CHECK (child_age >= 5 AND child_age <= 18)
  phone       VARCHAR(20) NOT NULL
  email       VARCHAR(255)
  course_slug VARCHAR(50)
  format_slug VARCHAR(20)
  utm_source  VARCHAR(100)
  utm_medium  VARCHAR(100)
  utm_campaign VARCHAR(100)
  utm_content VARCHAR(100)
  utm_term    VARCHAR(100)
  market      VARCHAR(2) DEFAULT 'ru'  -- 'ru' | 'kz'
  status      VARCHAR(20) DEFAULT 'new' -- new, contacted, signed, rejected
  crm_id      VARCHAR(100)
  created_at  TIMESTAMPTZ DEFAULT NOW()
  updated_at  TIMESTAMPTZ DEFAULT NOW()

quiz_results
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid()
  lead_id        UUID REFERENCES leads(id)
  answers        JSONB NOT NULL
  recommended_group     VARCHAR(20)
  recommended_direction VARCHAR(20)
  created_at     TIMESTAMPTZ DEFAULT NOW()

testimonials
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
  parent_name VARCHAR(100)
  child_age   INTEGER
  text        TEXT NOT NULL
  photo_url   VARCHAR(500)
  video_url   VARCHAR(500)
  rating      INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5)
  group_slug  VARCHAR(20)
  direction_slug VARCHAR(20)
  course_slug VARCHAR(50)
  is_pilot    BOOLEAN DEFAULT false
  market      VARCHAR(2) DEFAULT 'ru'
  is_published BOOLEAN DEFAULT true
  created_at  TIMESTAMPTZ DEFAULT NOW()

works
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid()
  title          VARCHAR(200) NOT NULL
  description    TEXT
  child_name     VARCHAR(100)
  child_age      INTEGER
  group_slug     VARCHAR(20) NOT NULL
  direction_slug VARCHAR(20) NOT NULL
  image_url      VARCHAR(500)
  is_pilot       BOOLEAN DEFAULT false
  is_published   BOOLEAN DEFAULT true
  sort_order     INTEGER DEFAULT 0
  created_at     TIMESTAMPTZ DEFAULT NOW()

team_members
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
  name            VARCHAR(100) NOT NULL
  rank            VARCHAR(50)   -- Адмирал, Вице-адмирал, ЦУП
  role            VARCHAR(100)
  specialization  VARCHAR(200)
  bio             TEXT
  photo_url       VARCHAR(500)
  video_url       VARCHAR(500)
  group_slug      VARCHAR(20)  -- Привязка к группе (для Вице-адмиралов)
  sort_order      INTEGER DEFAULT 0
  is_published    BOOLEAN DEFAULT true
  created_at      TIMESTAMPTZ DEFAULT NOW()

faq_items
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
  question    TEXT NOT NULL
  answer      TEXT NOT NULL
  category    VARCHAR(50)  -- education, safety, payment, tech
  level       VARCHAR(5)   -- l1, l2, l3
  group_slug  VARCHAR(20)  -- NULL = общий
  course_slug VARCHAR(50)  -- NULL = не привязан к курсу
  sort_order  INTEGER DEFAULT 0
  is_published BOOLEAN DEFAULT true
  created_at  TIMESTAMPTZ DEFAULT NOW()

courses
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
  slug            VARCHAR(50) UNIQUE NOT NULL
  group_slug      VARCHAR(20) NOT NULL
  direction_slug  VARCHAR(20) NOT NULL
  title           VARCHAR(200) NOT NULL
  description     TEXT
  result_title    VARCHAR(200)
  result_description TEXT
  missions_count  INTEGER DEFAULT 0
  lesson_duration VARCHAR(20)  -- '45 мин', '60 мин', '75 мин'
  is_published    BOOLEAN DEFAULT true
  created_at      TIMESTAMPTZ DEFAULT NOW()

missions
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
  course_id   UUID REFERENCES courses(id)
  number      INTEGER NOT NULL
  title       VARCHAR(200) NOT NULL
  description TEXT
  difficulty  VARCHAR(10) DEFAULT 'easy' -- easy, medium, hard
  sort_order  INTEGER
  created_at  TIMESTAMPTZ DEFAULT NOW()
  UNIQUE(course_id, number)

groups
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
  slug            VARCHAR(20) UNIQUE NOT NULL  -- kadety, stajery, komanda
  name            VARCHAR(100) NOT NULL
  role            VARCHAR(50)   -- Творцы, Исследователи, Архитекторы
  age_range       VARCHAR(20)   -- '7-9', '10-13', '14+'
  description     TEXT
  accent_color    VARCHAR(20)   -- teal, purple, navy
  character_ru    VARCHAR(20)   -- leo, auri, arlo
  character_kz    VARCHAR(20)   -- leo, lina, arlo
  sort_order      INTEGER DEFAULT 0
  is_published    BOOLEAN DEFAULT true
  created_at      TIMESTAMPTZ DEFAULT NOW()

formats
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
  slug            VARCHAR(20) UNIQUE NOT NULL  -- free, trial, record, personal
  name_ru         VARCHAR(100) NOT NULL
  name_kz         VARCHAR(100)
  description_ru  TEXT
  description_kz  TEXT
  price_ru        INTEGER       -- в копейках (99000 = 990 руб)
  price_kz        INTEGER       -- в тиынах (450000 = 4500 тг)
  price_label_ru  VARCHAR(50)   -- 'от 990 ₽', '0 ₽'
  price_label_kz  VARCHAR(50)   -- 'от 4 500 ₸', '0 ₸'
  is_recommended  BOOLEAN DEFAULT false
  is_premium      BOOLEAN DEFAULT false
  includes        JSONB         -- массив строк «что входит»
  sort_order      INTEGER DEFAULT 0
  is_published    BOOLEAN DEFAULT true
  created_at      TIMESTAMPTZ DEFAULT NOW()

integration_failures (Dead Letter Queue)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid()
  lead_id         UUID REFERENCES leads(id)
  integration     VARCHAR(50) NOT NULL  -- 'crm', 'email', 'telegram'
  payload         JSONB NOT NULL
  error_message   TEXT
  attempts        INTEGER DEFAULT 0
  max_attempts    INTEGER DEFAULT 3
  status          VARCHAR(20) DEFAULT 'pending'  -- pending, retrying, failed, resolved
  next_retry_at   TIMESTAMPTZ
  created_at      TIMESTAMPTZ DEFAULT NOW()
  resolved_at     TIMESTAMPTZ
```

## 10.4. Интеграции

### CRM (AmoCRM / Bitrix24)

```typescript
// apps/api/src/infrastructure/crm/crm.adapter.ts
interface CrmAdapter {
  createContact(lead: Lead): Promise<string>; // Returns CRM ID
  createDeal(lead: Lead, crmContactId: string): Promise<string>;
  addNote(crmContactId: string, note: string): Promise<void>;
}
```

Реализация через adapter pattern. Переключение CRM через env-переменную.

### Telegram Bot

```typescript
// apps/api/src/infrastructure/notifications/telegram-bot.ts
// Отправляет уведомление в Telegram-канал менеджерам при:
// - Новом лиде (имя, телефон, курс, UTM)
// - Результате квиза (рекомендация, контакт)
// Format: Markdown, включает кнопку "Позвонить" с tel: ссылкой
```

### Email

```typescript
// apps/api/src/infrastructure/notifications/email.service.ts
// Отправляет:
// - Подтверждение заявки родителю (HTML шаблон)
// - Программу рекомендованного курса (PDF вложение) после квиза
// Provider: Resend / SendGrid (env-зависимый)
```

### Стратегия повторных попыток (Retry + Circuit Breaker)

Все async-интеграции (CRM, Email, Telegram) используют единую стратегию:

```typescript
// apps/api/src/infrastructure/shared/retry.ts

interface RetryConfig {
  maxAttempts: 3;                     // Максимум попыток
  baseDelayMs: 1000;                  // 1с, 2с, 4с (exponential)
  maxDelayMs: 10000;                  // Потолок задержки
  retryableStatuses: [429, 500, 502, 503, 504];
}

// Circuit Breaker:
// - CLOSED (норма): все запросы проходят
// - OPEN (авария): 5+ подряд ошибок → все запросы сразу в DLQ, лог error
// - HALF-OPEN: через 30с пропускает 1 запрос для проверки
//
// При исчерпании попыток → запись в integration_failures (см. DLQ, Часть 10.3)
// Cron-задача проверяет DLQ каждые 5 мин и повторяет отправку
```

---

# Часть 11 — Персонажи и визуальная система

## 11.1. Персонажи — подробное описание

### Лео (Leo)

- **Роль:** Главный маскот Академии, герой Hero L1
- **Внешность:** Мальчик ~8 лет, рыжие кудрявые волосы, веснушки
- **Костюм:** Бирюзовый скафандр с оранжевыми деталями и акцентами
- **Элементы:** Светящийся наручный коммуникатор, значок полумесяца на плече
- **Личность:** Любознательный, энергичный, вдохновитель
- **Группа:** Кадеты (7-9)
- **Использование RU:** Hero L1, карточка-портал Кадетов, Hero L2 Кадетов
- **Использование KZ:** Аналогично RU
- **Файлы:** leo-hero-front.webp, leo-portal.webp, leo-hero-front@2x.webp
- **Анимация:** float (translateY +/- 12px, 3s ease-in-out infinite)
- **Цвета костюма:** teal.500 основной, orange.500 акцент

### Аури (Auri) — только RU

- **Роль:** Маскот Стажёров для российского рынка
- **Внешность:** Девочка ~11 лет, русые волосы с косичками, зелёные глаза
- **Костюм:** Фиолетовый скафандр с зелёными неоновыми деталями
- **Элементы:** Голографический проектор в руке (фиолетовый), рюкзак с экраном
- **Личность:** Вдумчивая, исследовательская, креативная
- **Группа:** Стажёры (10-13)
- **Файлы:** auri-hero.webp, auri-portal.webp
- **Цвета костюма:** purple.500 основной, neon.500 акцент

### Лина (Lina) — только KZ

- **Роль:** Маскот Стажёров для казахстанского рынка
- **Внешность:** Девочка ~11 лет, азиатская внешность, тёмные волосы с цветными прядями
- **Костюм:** Фиолетовый скафандр с зелёными неоновыми деталями (аналогично Аури)
- **Элементы:** Голографический проектор, рюкзак
- **Личность:** Аналогично Аури
- **Группа:** Стажёры (10-13)
- **Файлы:** lina-hero.webp, lina-portal.webp

### Арло (Arlo)

- **Роль:** Маскот Команды (14+)
- **Внешность:** Мальчик ~15 лет, тёмные волосы с бирюзовыми прядями, уверенный взгляд
- **Костюм:** Тёмно-синий скафандр с оранжевыми и бирюзовыми деталями, знак «Astra Command»
- **Элементы:** Датапад (планшет) в руке, дрон-паук на плече, голограммы-экраны
- **Личность:** Серьёзный, технически продвинутый, лидер
- **Группа:** Команда (14+)
- **Файлы:** arlo-hero.webp, arlo-portal.webp
- **Цвета костюма:** navy.500 основной, orange.500 + teal.500 акценты

### Зара (Zara)

- **Роль:** Инклюзивный персонаж, присутствует в галерее обоих рынков
- **Внешность:** Тёмнокожая девочка ~12 лет, косички-брейды собранные в пучок
- **Костюм:** Фиолетовый скафандр с зелёными акцентами
- **Элементы:** Голографический проектор, улыбчивое выражение лица
- **Личность:** Радостная, открытая, командная
- **Использование:** Галерея работ, блок инклюзивности, KZ-специфика
- **Файлы:** zara-gallery.webp
- **Цвета костюма:** purple.500 основной, neon.500 акцент

## 11.2. Правила использования персонажей

1. **Единый стиль:** Все персонажи выполнены в одном 3D Cartoon-стиле (Pixar/Big Hero)
2. **Пропорции:** единые пропорции тела для одного визуального языка
3. **Фон:** Нейтральный серый для character sheets, космический для scene renders
4. **Формат файлов:** WebP (основной) + PNG (fallback), @1x и @2x
5. **Минимальный размер:** Hero-персонаж — 600x900px @1x
6. **Анимация:** CSS-only (not GIF) для производительности
7. **Рынок:** Аури используется ТОЛЬКО на RU, Лина ТОЛЬКО на KZ

## 11.3. Декоративные элементы

| Элемент | CSS/технология | Описание |
|---------|---------------|----------|
| Звёзды | CSS particles или tsParticles | Анимированное звёздное небо (менее 30KB gzip) |
| Туманности | CSS radial-gradient | Фиолетово-голубые декоративные пятна |
| Голограммы | CSS filter + glow | Светящиеся UI-элементы |
| Float-анимация | CSS @keyframes | Левитация персонажей |
| Sparkle | CSS @keyframes | Мерцание звёзд и декора |
| Parallax | CSS transform + scroll | Многослойный фон при скролле |

---

# Часть 12 — Казахстанский рынок

## 12.1. Общие принципы

KZ-версия — ОТДЕЛЬНЫЕ страницы (поддомен kz. или отдельный домен).
Структура ИДЕНТИЧНА RU: 16 страниц (L1 + 3×L2 + 6×L3 + about + gallery + thank-you + privacy + terms + 404).
Ниже — все отличия от RU-версии.

## 12.2. Полный список отличий

### Персонажи

| Позиция | RU | KZ |
|---------|----|----|
| Hero L1 | Лео | Лео |
| Стажёры | Аури | Лина (азиатская внешность) |
| Команда | Арло | Арло |
| Галерея | Зара (инклюзивность) | Зара (инклюзивность) |

### Тексты Hero L1

**KZ Вариант A:**
> Казахстан строит цифровое будущее — ваш ребёнок будет среди создателей

**KZ Вариант B (апелляция к госкурсу):**
> Школа вводит ИИ. Академия даёт то, чего в школе нет — результат.
> С 2025 года ИИ в казахстанских школах — это теория. Академия — практика.

### Блок «Почему сейчас» — KZ

**Тезис 1 (замена «ИИ уже везде»):**
> Президент Токаев поставил цель: Казахстан — в топ-30 по ИИ к 2029.
> ИИ-грамотность стала государственным приоритетом. Школы вводят предметы.
> Но школьная программа даёт теорию. Академия — практику.

### Блок доверия

| RU | KZ |
|----|----|
| COPPA, 152-ФЗ, лицензия Рособрнадзора | «Программа соответствует AI Kazakhstan 2025-2029» |
| Работаем на русском | Работаем на двух языках: казахский и русский |

### Цены

Цены в тенге (KZT). Эквивалент по курсу x 1.1.

| Формат | RU | KZ |
|--------|----|----|
| Бесплатный | 0 руб | 0 тг |
| Пробный | от 990 руб | от 4 500 тг |
| Запись + консультации | от 3 990 руб/мес | от 18 900 тг/мес |
| Персональный | от 7 990 руб/мес | от 37 900 тг/мес |

Обязательно упомянуть: **Kaspi рассрочка 0%** (казахстанский стандарт).

### Контакты и мессенджеры

| Элемент | RU | KZ |
|---------|----|----|
| Основной мессенджер | Telegram | WhatsApp (значительно популярнее в KZ) |
| Соцсети | ВКонтакте, Telegram | WhatsApp, Telegram, Instagram, YouTube |
| Телефон | 8-800 (бесплатный) | Прямой номер +7-XXX |
| Нет | — | ВКонтакте (не используется в KZ) |

### Языковая политика

- Кнопка переключения в шапке: KZ QAZ / RU РУС
- Основная версия: русский
- Казахскоязычная версия (v2): L1 + 3 Hero L2 + FAQ
- Telegram поддержка: двуязычный менеджер

### Футер KZ

- Юр. лицо: [Название юр. лица в РК], БИН [XXX]
- Нет 152-ФЗ -> «Закон РК О персональных данных и их защите»
- Соцсети: WhatsApp, Telegram, Instagram, YouTube (без VK)

### FAQ KZ

Дополнительные вопросы:
- Это связано с тем, что вводят в казахстанских школах? -> Да, направления совпадают
- Есть ли занятия на казахском языке? -> Обучение на русском, поддержка на казахском
- Принимается ли Kaspi рассрочка? -> Да, 0% на N месяцев

---

# Часть 13 — SSOT-контракты и валидация

## 13.1. Принцип SSOT

**Single Source of Truth** — каждая единица данных определяется РОВНО в одном месте.
Все остальные части системы ссылаются на источник, а не дублируют значение.

### Карта SSOT

| Данные | Источник истины | Потребители |
|--------|----------------|-------------|
| Цвета, шрифты, отступы | packages/tokens | packages/ui, apps/web |
| TypeScript типы домена | packages/shared/types | apps/web, apps/api, packages/contracts |
| Константы (группы, направления) | packages/shared/constants | apps/web, apps/api |
| API-схемы (request/response) | packages/contracts | apps/web (валидация форм), apps/api (валидация endpoint) |
| Маппинг group -> color | packages/tokens/colors/group-map | apps/web (темизация L2/L3) |
| Маппинг group -> character | packages/shared/constants/characters | apps/web (Hero персонажи) |
| URL-структура | packages/shared/utils/url-builder | apps/web (роутинг), apps/api (ссылки) |
| Цены по рынкам | packages/shared/constants/formats | apps/web, apps/api |
| Тексты UI | apps/web (FSD config файлы) | Только apps/web |
| Схема БД | apps/api/infrastructure/database/schema | Только apps/api |

## 13.2. Правила SSOT

1. **Никогда не хардкодить** цвет, размер, цену — только через токен или константу
2. **Никогда не дублировать** Zod-схему — импортировать из packages/contracts
3. **Никогда не дублировать** тип — импортировать из packages/shared/types
4. **URL строятся** через buildGroupUrl / buildCourseUrl — не хардкодятся строками
5. **Цены** определяются в FORMAT_CONFIGS с привязкой к market — не хардкодятся на странице
6. **Персонажи** определяются через CHARACTER_MAP с учётом рынка — не через if/else

## 13.3. Проверочный чеклист

При каждом PR разработчик проверяет:

- [ ] Нет хардкод-цветов (только CSS Custom Properties)
- [ ] Нет хардкод-строк URL (только url-builder)
- [ ] Нет дублирования Zod-схем
- [ ] Нет хардкод-цен (только FORMAT_CONFIGS)
- [ ] Нет монолитных файлов более 300 строк
- [ ] Импорты соблюдают FSD-иерархию
- [ ] Новые компоненты используют CSS Modules
- [ ] Типы импортируются из shared, не определяются локально

---

# Часть 14 — Правила разработки

## 14.1. Абсолютные запреты

| Запрет | Почему | Что делать вместо |
|--------|--------|-------------------|
| Быстрый фикс | Создаёт технический долг | Написать правильное решение |
| Хардкод значений | Нарушает SSOT | Использовать токены и константы |
| Файлы-монолиты (300+ строк) | Нечитаемо, невозможно тестировать | Декомпозировать на более мелкие модули |
| Стили inline | Нарушает дизайн-систему | CSS Modules + CSS Custom Properties |
| any в TypeScript | Убивает типобезопасность | Определить правильный тип |
| Логика в компонентах | Нарушает FSD | Вынести в model/ или lib/ |
| Прямые запросы к API | Нарушает слоёную архитектуру | Использовать api/ сегмент |
| Импорт вверх по FSD | Нарушает иерархию | Переместить код в правильный слой |

## 14.2. Стандарты кода

### Именование файлов

| Тип | Формат | Пример |
|-----|--------|--------|
| React компонент | PascalCase.tsx | HeroMain.tsx |
| CSS Module | PascalCase.module.css | HeroMain.module.css |
| Хук | camelCase (use prefix) | useQuizState.ts |
| Утилита | camelCase | formatPrice.ts |
| Тип/интерфейс | camelCase.types.ts | group.types.ts |
| Константы | camelCase | groups.ts |
| Store | camelCase.store.ts | market.store.ts |
| API-функция | camelCase | createLead.ts |
| Тест | *.test.ts(x) | Button.test.tsx |
| Контракт | kebab-case.contract.ts | create-lead.contract.ts |

### Именование переменных и функций

| Элемент | Стиль | Пример |
|---------|-------|--------|
| Компонент | PascalCase | HeroMain, PortalCard |
| Функция | camelCase | formatPrice, buildGroupUrl |
| Хук | camelCase + use | useMarket, useQuizState |
| Константа | UPPER_SNAKE_CASE | GROUP_SLUGS, FORMAT_CONFIGS |
| Тип/Interface | PascalCase | AgeGroup, CreateLeadRequest |
| Enum value | PascalCase | GroupSlug.Kadety |
| CSS class | camelCase (в module) | .heroContainer, .portalCard |
| CSS variable | kebab-case | --color-bg-page, --font-heading |
| Env variable | UPPER_SNAKE_CASE | DATABASE_URL, TELEGRAM_BOT_TOKEN |

### Структура React компонента

```typescript
// 1. Импорты (в порядке: react, сторонние, internal)
// 2. Types/Interfaces
// 3. Константы
// 4. Компонент (именованный экспорт)
// 5. Вспомогательные компоненты (если есть)
```

## 14.3. Git и CI/CD

### Ветвление

- main — продакшн, деплоится автоматически
- develop — стейджинг, preview deploy
- feature/* — фичи (от develop)
- fix/* — баг-фиксы (от develop)
- hotfix/* — хотфиксы (от main)

### Conventional Commits

```
feat(web): add hero block for L1 main page
fix(api): correct phone validation regex
style(tokens): update teal color scale
refactor(ui): extract Card component from PricingOverview
docs: update SPACE_MANIFEST with L3 block specs
test(api): add lead creation integration test
chore: update dependencies
```

### CI Pipeline

1. Lint (ESLint) - параллельно
2. Format check (Prettier) - параллельно
3. Type check (tsc --noEmit) - параллельно
4. Unit tests (Vitest) - после lint
5. Build (turbo build) - после typecheck
6. E2E tests (Playwright) - после build
7. Deploy preview (на PR)
8. Deploy production (на merge в main)

## 14.4. Производительность

### Frontend

| Метрика | Цель | Как достичь |
|---------|------|-------------|
| LCP | менее 2.5s | Priority load Hero-изображение, preconnect шрифты |
| FID | менее 100ms | Code splitting, lazy loading |
| CLS | менее 0.1 | Фиксированные размеры для изображений |
| Bundle size | менее 200KB (initial) | Tree shaking, dynamic imports |
| Изображения | WebP + fallback | srcset, lazyload, @2x для Retina |
| Шрифты | Preload критичные | font-display: swap |
| Анимации | 60fps | CSS-only, GPU-accelerated transforms |

### Backend

| Метрика | Цель | Как достичь |
|---------|------|-------------|
| Response time | менее 200ms (p95) | Redis кэш для контента |
| Rate limiting | 100 req/min per IP | Fastify rate-limit plugin |
| DB connections | Pool max 20 | Drizzle connection pool |
| Error rate | менее 0.1% | Validation, error boundaries |

## 14.5. SEO

Каждая страница обязательно содержит:

| Элемент | Правило |
|---------|---------|
| title | Уникальный, 50-60 символов |
| meta description | Уникальный, 150-160 символов |
| h1 | Один на страницу |
| Semantic HTML | section, article, nav, header, footer, main |
| alt для изображений | Описательный текст на русском |
| Canonical URL | Для каждой страницы |
| Open Graph | og:title, og:description, og:image |
| Schema.org | EducationalOrganization, Course, FAQPage |
| sitemap.xml | Все публичные страницы |
| robots.txt | Разрешение индексации |

### SEO шаблоны по страницам

| Страница | `<title>` шаблон | `<meta description>` шаблон |
|----------|-----------------|----------------------------|
| L1 Главная | Космическая Академия — ИИ-обучение для детей 7-17 лет | Онлайн-платформа для обучения детей работе с ИИ. Нейрокреатив и вайб-кодинг. Бесплатный пробный урок. |
| L2 Группа | {{groupName}} {{ageRange}} — Космическая Академия | Курсы ИИ для детей {{ageRange}} лет. {{role}}. Два направления: нейрокреатив и вайб-кодинг. |
| L3 Курс | {{courseTitle}} для детей {{ageRange}} — Космическая Академия | {{courseDescription}}. {{missionsCount}} миссий. Результат: {{resultTitle}}. |
| About | О нас — Космическая Академия | Команда Космической Академии: преподаватели, разработчики курсов и методисты. |
| Gallery | Работы учеников — Космическая Академия | Галерея проектов учеников: сказки, игры, сайты и боты, созданные с помощью ИИ. |
| Thank You | Спасибо за заявку — Космическая Академия | Ваша заявка принята. Мы свяжемся с вами в течение рабочего дня. |
| Privacy | Политика конфиденциальности — Космическая Академия | Политика обработки персональных данных Space Academy. |
| Terms | Оферта — Космическая Академия | Публичная оферта на оказание образовательных услуг Space Academy. |

### Content Security Policy (CSP)

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com https://mc.yandex.ru https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://browser.sentry-cdn.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://api.spaceacademy.ru https://*.google-analytics.com https://mc.yandex.ru https://*.sentry.io;
  frame-src https://www.google.com/recaptcha/ https://www.youtube.com;
  media-src 'self' https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
```

### Schema.org JSON-LD шаблоны

**EducationalOrganization (Главная):**

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Космическая Академия",
  "alternateName": "Space Academy",
  "url": "https://spaceacademy.ru",
  "logo": "https://spaceacademy.ru/favicon-32x32.png",
  "description": "Онлайн-платформа для обучения детей 7-17 лет работе с ИИ",
  "foundingDate": "2026",
  "areaServed": ["RU", "KZ"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+7-800-XXX-XX-XX",
    "contactType": "customer service",
    "availableLanguage": ["Russian"]
  },
  "sameAs": [
    "https://t.me/spaceacademy",
    "https://vk.com/spaceacademy"
  ]
}
```

**Course (страницы L3):**

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "{{courseTitle}}",
  "description": "{{courseDescription}}",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Космическая Академия",
    "url": "https://spaceacademy.ru"
  },
  "educationalLevel": "{{ageRange}}",
  "teaches": "{{courseSkills}}",
  "numberOfCredits": "{{missionsCount}} миссий",
  "timeRequired": "{{lessonDuration}}",
  "offers": {
    "@type": "Offer",
    "price": "{{priceMin}}",
    "priceCurrency": "{{currency}}",
    "availability": "https://schema.org/InStock"
  }
}
```

**FAQPage (секции FAQ):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{question}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{answer}}"
      }
    }
  ]
}
```

### Реализация Schema.org

```typescript
// apps/web/src/shared/lib/jsonLd.ts
//
// generateOrganizationSchema(market: MarketCode): object
// generateCourseSchema(course: Course, market: MarketCode): object
// generateFaqSchema(items: FaqItem[]): object
//
// Вставляется через <script type="application/ld+json"> в <head>
// через React Helmet или вручную в useEffect
```

---

# Часть 15 — Обработка ошибок и логирование

## 15.1. Backend — типизированные ошибки

### Иерархия AppError

```typescript
// apps/api/src/shared/errors/app-error.ts

// Базовый класс ошибки приложения.
// Все бизнес-ошибки наследуются от AppError.
// Содержит: statusCode, code (строковый идентификатор), message, details (опц.)
//
// class AppError extends Error {
//   statusCode: number;
//   code: string;
//   details?: Record<string, unknown>;
// }
```

### Каталог ошибок

| Код (code) | HTTP Status | Описание | Когда возникает |
|------------|-------------|----------|-----------------|
| VALIDATION_ERROR | 400 | Невалидные входные данные | Zod-валидация не прошла |
| INVALID_PHONE | 400 | Неверный формат телефона | Телефон не проходит regex |
| INVALID_AGE | 400 | Возраст вне диапазона 5-18 | child_age < 5 или > 18 |
| DUPLICATE_LEAD | 409 | Дубликат заявки за 24 часа | Тот же телефон за 24ч |
| RECAPTCHA_FAILED | 403 | reCAPTCHA не пройдена | Score < RECAPTCHA_MIN_SCORE |
| RATE_LIMIT_EXCEEDED | 429 | Превышен лимит запросов | > RATE_LIMIT_MAX за окно |
| NOT_FOUND | 404 | Ресурс не найден | GET несуществующего курса |
| CRM_INTEGRATION_ERROR | 502 | Ошибка CRM | AmoCRM/Bitrix24 недоступна |
| EMAIL_SEND_ERROR | 502 | Ошибка отправки email | Resend/SendGrid недоступна |
| TELEGRAM_SEND_ERROR | 502 | Ошибка Telegram-бота | Telegram API недоступна |
| DATABASE_ERROR | 500 | Ошибка базы данных | PostgreSQL connection fail |
| INTERNAL_ERROR | 500 | Внутренняя ошибка сервера | Непредвиденная ошибка |

### Глобальный Error Handler

```typescript
// apps/api/src/shared/errors/error-handler.ts

// Fastify setErrorHandler:
// 1. Если ошибка instanceof AppError — вернуть { error: code, message, details }
// 2. Если ZodError — преобразовать в VALIDATION_ERROR с полями
// 3. Иначе — залогировать полный stack trace и вернуть INTERNAL_ERROR
//
// Все 5xx ошибки логируются с полным контекстом (request ID, URL, body).
// 4xx ошибки логируются на уровне warn.
// Никогда не экспозировать stack trace клиенту в production.
```

### Формат ответа ошибки

```typescript
// Все ошибки возвращают единый формат:
interface ErrorResponse {
  error: string;        // Код ошибки (VALIDATION_ERROR, NOT_FOUND, ...)
  message: string;      // Человекочитаемое сообщение
  details?: Record<string, unknown>; // Детали (напр. поля с ошибками)
  requestId: string;    // UUID запроса для поддержки
}
```

### Async Error Handling для интеграций

```typescript
// CRM, Email, Telegram — async и не блокирующие основной ответ.
// Ошибки интеграций обрабатываются через:
//
// 1. try/catch с логированием в Pino (error level)
// 2. Retry с экспоненциальной задержкой (3 попытки, 1s → 2s → 4s)
// 3. Dead Letter Queue (DLQ) — при исчерпании попыток запись в отдельную таблицу
// 4. Telegram alert в канал мониторинга — при 5+ неудачных интеграциях за 10 мин
//
// Основной ответ клиенту НЕ зависит от результата интеграции.
// Клиент получает { status: 'created' } даже если CRM недоступна.
```

## 15.2. Frontend — Error Boundaries

### React Error Boundary

```typescript
// apps/web/src/app/providers/ErrorBoundary.tsx

// Оборачивает всё приложение. При необработанной ошибке рендерит:
// - Космический фон (тот же, что и 404)
// - Сообщение «Что-то пошло не так»
// - Кнопка «Обновить страницу» (window.location.reload)
// - Кнопка «На главную» (navigate('/'))
// - Bug ID (requestId или timestamp) для поддержки
//
// Отправляет событие в Sentry (если подключен).
// В DEV-режиме показывает stack trace.
```

### Обработка ошибок API на фронтенде

```typescript
// apps/web/src/shared/api/api-client.ts

// Все API-вызовы обёрнуты в единую функцию:
// apiClient.get<T>(url) / apiClient.post<T>(url, body)
//
// Обработка:
// 1. Сетевая ошибка (нет интернета) → toast «Проверьте подключение»
// 2. 400 VALIDATION_ERROR → подсветка полей формы с ошибками
// 3. 409 DUPLICATE_LEAD → toast «Заявка уже создана, мы свяжемся с вами»
// 4. 429 RATE_LIMIT → toast «Слишком много попыток, подождите»
// 5. 500+ → toast «Произошла ошибка, попробуйте позже»
//
// Все ошибки: sendEvent('api_error', { status, code, url })
```

### TanStack Query Error Handling

```typescript
// Глобальная конфигурация QueryClient:
// - retry: 3 (для GET), 0 (для POST)
// - retryDelay: exponential (1s, 2s, 4s)
// - onError: глобальный обработчик для toast-уведомлений
// - staleTime: из STALE_TIMES конфигурации
```

## 15.3. Логирование — Pino

### Конфигурация

```typescript
// apps/api/src/shared/utils/logger.ts

// Библиотека: Pino (самый быстрый JSON-логгер для Node.js)
// Транспорт: stdout → сборщик логов (Grafana Loki / CloudWatch)
// Формат: Structured JSON
//
// В dev: pino-pretty (человекочитаемый формат, цвета)
// В production: чистый JSON (для парсинга)
//
// Каждый запрос получает уникальный requestId (UUID v4).
// requestId прокидывается через Fastify request context.
```

### Уровни логирования

| Уровень | Когда использовать | Пример |
|---------|-------------------|--------|
| fatal | Сервер не может продолжить работу | Нет подключения к БД при старте |
| error | Ошибка, требующая внимания | CRM интеграция упала 3 раза подряд |
| warn | Подозрительное, но не критичное | Дубликат лида, reCAPTCHA low score |
| info | Значимые бизнес-события | Лид создан, квиз завершён, deploy |
| debug | Детали для отладки | Входящие параметры, SQL-запросы |
| trace | Максимальная детализация | Каждый шаг middleware цепочки |

### Стандарт лог-записи

```typescript
// Каждая лог-запись содержит:
// {
//   level: 'info',
//   time: 1732000000000,
//   requestId: 'uuid-v4',
//   msg: 'Lead created',
//   service: 'api',
//   env: 'production',
//   // Бизнес-контекст:
//   leadId: 'uuid',
//   courseSlug: 'kadety-neyrokreativ',
//   market: 'ru',
//   utm_source: 'telegram'
// }
```

### Что логируем (обязательно)

| Событие | Уровень | Данные |
|---------|---------|--------|
| Сервер запущен | info | port, env, node version |
| Запрос получен | debug | method, url, user-agent, IP |
| Лид создан | info | leadId, courseSlug, market, utm* |
| Квиз завершён | info | recommendation, leadId |
| CRM-запрос | info / error | crmProvider, success/fail, responseTime |
| Email отправлен | info / error | provider, to, template, success/fail |
| Telegram отправлен | info / error | chatId, success/fail |
| Rate limit hit | warn | IP, endpoint, count |
| Validation error | warn | endpoint, fields, values |
| DB query slow (> 500ms) | warn | query, duration |
| Unhandled error | error | stack, requestId, url, body |

### env-конфигурация

```
LOG_LEVEL=info     # production: info, staging: debug, dev: debug
```

## 15.4. Итоговая сводка проекта

### Статистика

| Метрика | Значение |
|---------|----------|
| Рынков | 2 (RU, KZ) |
| Уровней воронки | 3 |
| Страниц (на рынок) | 16 |
| Страниц (итого) | ~27 |
| Блоков L1 | 13 |
| Блоков L2 | 11 (x3 группы) |
| Блоков L3 | 11 (x6 курсов) |
| Возрастных групп | 3 |
| Направлений | 2 |
| Курсов | 6 |
| Форматов обучения | 4 |
| Персонажей | 5 |
| Пилларов в уроке | 6 |
| API endpoints | ~12 |
| DB таблиц | 10 |
| FSD entities | 13 |
| FSD features | 11 |
| FSD widgets | 25 |
| FSD pages | 9 |

### Контрольные точки валидации

1. Каждый цвет в UI определён через CSS Custom Property из tokens
2. Каждый URL строится через url-builder из shared
3. Каждая Zod-схема определена в contracts
4. Каждая цена извлекается из FORMAT_CONFIGS с учётом рынка
5. Каждый персонаж выбирается из CHARACTER_MAP с учётом рынка
6. FSD-иерархия соблюдается: нет импортов вверх по слоям
7. Нет файлов более 300 строк
8. Нет хардкод-строк, нет any, нет inline-стилей
9. Все компоненты используют CSS Modules
10. Все API-ответы валидируются через Zod на бэке

---

> **Документ является живым SSOT проекта Space Academy.**
> Обновляется параллельно с разработкой.
> Любые противоречия между кодом и документом — баг.
>
> Версия: 1.2 | Дата: Март 2026

---


# Часть 16 — Стратегия интернационализации (i18n)

## 16.1. Архитектура i18n

### Подход: Static Config Files + Runtime Context

Для проекта выбран подход статических конфигурационных файлов вместо полноценной
i18n-библиотеки (react-i18next). Причины:

1. **Два рынка, не десятки** — RU и KZ, не мультиязычный SaaS
2. **Минимальный overhead** — не нужен runtime-парсинг ICU-сообщений
3. **Type-safe** — TypeScript-объекты вместо JSON с ключами-строками
4. **Простота** — маппинг market -> тексты через контекст

### Файловая структура

```
packages/shared/src/i18n/
  types.ts          # Locale, MarketCode, I18nStrings interface
  ru.ts             # Все строки для RU рынка
  kz.ts             # Все строки для KZ рынка (переопределения)
  index.ts          # getStrings(market: MarketCode): I18nStrings
```

### Принцип работы

```typescript
// packages/shared/src/i18n/types.ts
export type MarketCode = 'ru' | 'kz';
export type Locale = 'ru-RU' | 'kk-KZ';  // ISO 639-1: kk = казахский язык

export interface I18nStrings {
  common: {
    siteName: string;
    siteSlogan: string;
    freeLesson: string;
    chooseCourse: string;
    signUp: string;
    learnMore: string;
    phone: string;
    copyright: string;
  };
  hero: {
    titleVariantA: string;
    titleVariantB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  groups: {
    kadety: {
      name: string;
      role: string;
      ageRange: string;
      heroTitle: string;
      heroSubtitle: string;
      description: string;
      portrait: string[];
    };
    stajery: {
      name: string;
      role: string;
      ageRange: string;
      heroTitle: string;
      heroSubtitle: string;
      description: string;
      portrait: string[];
    };
    komanda: {
      name: string;
      role: string;
      ageRange: string;
      heroTitle: string;
      heroSubtitle: string;
      description: string;
      portrait: string[];
    };
  };
  pricing: {
    free: { name: string; description: string; price: string };
    trial: { name: string; description: string; price: string };
    record: { name: string; description: string; price: string };
    personal: { name: string; description: string; price: string };
  };
  quiz: {
    title: string;
    questions: Array<{
      text: string;
      options: string[];
    }>;
    submitButton: string;
    resultTitle: string;
  };
  faq: {
    l1: Array<{ question: string; answer: string; category: string }>;
    l2: Record<string, Array<{ question: string; answer: string }>>;
    l3: Record<string, Array<{ question: string; answer: string }>>;
  };
  footer: {
    columns: Record<string, Array<{ label: string; url: string }>>;
    legal: string;
    requisites: string;
  };
}
```

### Казахскоязычная версия (Phase 2)

На первом этапе KZ-рынок работает на русском языке с адаптированным контентом
(цены, контакты, персонажи, юридическая информация).

На втором этапе добавляется переключатель KZ QAZ / RU РУС:
- Переводится: H1 заголовки, Hero подзаголовки, CTA-кнопки, FAQ, Footer
- НЕ переводится: программа курса, описание миссий (остаётся на русском)

Реализация: отдельный kz-native.ts файл с частичным переводом,
merge с базовым kz.ts через deepMerge.

### Сообщения об ошибках (i18n)

Все пользовательские сообщения об ошибках локализованы:

| Ключ | RU | KZ (фаза 2) |
|------|-----|------|
| errors.validation.required | Обязательное поле | Міндетті орын |
| errors.validation.phone | Неверный формат телефона | Телефон пішімі дұрыс емес |
| errors.validation.email | Неверный email | Email дұрыс емес |
| errors.validation.name | Имя слишком короткое | Аты тым қысқа |
| errors.network.offline | Нет подключения к интернету | Интернет қосылымы жоқ |
| errors.network.timeout | Сервер не отвечает, попробуйте позже | Сервер жауап бермейді |
| errors.api.rateLimit | Слишком много попыток, подождите | Тым көп әрекет, күтіңіз |
| errors.api.server | Произошла ошибка, попробуйте позже | Қате орын алды, кейінірек әрекет етіңіз |
| errors.form.duplicate | Вы уже оставляли заявку, мы скоро свяжемся | Өтініш қабылданды, біз байланысамыз |

## 16.2. Market Context Provider

```typescript
// apps/web/src/app/providers/MarketProvider.tsx

// MarketProvider определяет текущий рынок по:
// 1. Поддомену (kz.spaceacademy.com -> 'kz')
// 2. localStorage (если пользователь переключил вручную)
// 3. Fallback: 'ru'
//
// Предоставляет через React Context:
// - market: MarketCode
// - locale: Locale
// - strings: I18nStrings
// - currency: '₽' | '₸'
// - setMarket: (market: MarketCode) => void
// - formatPrice: (amount: number) => string
// - getCharacter: (groupSlug: string) => CharacterName
```

## 16.3. Формат цен

```typescript
// packages/shared/src/utils/price-formatter.ts

// formatPrice(amount: number, market: MarketCode): string
// RU: "3 990 ₽/мес" (неразрывный пробел, символ после числа)
// KZ: "18 900 ₸/ай" (неразрывный пробел, символ после числа)
//
// formatPriceRange(min: number, max: number, market: MarketCode): string
// RU: "от 990 до 7 990 ₽"
// KZ: "4 500-ден 37 900 ₸-ге дейін"
```

## 16.4. Формат телефонов

```typescript
// packages/shared/src/utils/phone-formatter.ts

// formatPhone(phone: string, market: MarketCode): string
// RU: "+7 (XXX) XXX-XX-XX"
// KZ: "+7 (XXX) XXX-XX-XX" (формат идентичен, но номера разные)
//
// getPhoneMask(market: MarketCode): string
// Returns: "+7 (000) 000-00-00"
//
// normalizePhone(phone: string): string
// Strips all non-digits, ensures +7 prefix
// Returns: "+7XXXXXXXXXX"
```

---

# Часть 17 — Аналитика и UTM-трекинг

## 17.1. Событийная модель

### Принцип

Каждое значимое действие пользователя отправляется в аналитику.
Аналитика не встроена в компоненты — используется общий хук useAnalytics.

### Ключевые события

| Событие | Когда | Данные | Приоритет |
|---------|-------|---------|-----------|
| page_view | Смена маршрута | url, title, level, groupSlug | Критический |
| hero_cta_click | Клик CTA в Hero | buttonType (primary/secondary), level | Критический |
| portal_click | Клик по карточке-порталу | groupSlug (kadety/stajery/komanda) | Критический |
| direction_click | Выбор направления | groupSlug, directionSlug | Критический |
| quiz_start | Начало квиза | — | Высокий |
| quiz_step_complete | Ответ на вопрос квиза | stepNumber, answer | Высокий |
| quiz_complete | Завершение квиза | recommendedGroup, recommendedDirection | Критический |
| lead_form_start | Начало заполнения формы | source (quiz/hero/cta/pricing) | Высокий |
| lead_form_submit | Отправка формы | courseSlug, formatSlug | Критический |
| lead_form_error | Ошибка валидации формы | fieldName, errorType | Средний |
| pricing_view | Просмотр тарифов | level (l1/l2/l3), groupSlug | Высокий |
| pricing_click | Клик на тариф | formatSlug, price | Критический |
| faq_toggle | Открытие/закрытие FAQ | questionIndex, action (open/close) | Низкий |
| gallery_view | Просмотр работы | workId, groupSlug | Средний |
| video_play | Воспроизведение видео | videoType (teacher/greeting), memberId | Средний |
| phone_click | Клик на телефон | source (header/footer) | Высокий |
| messenger_click | Клик на мессенджер | type (telegram/whatsapp), source | Высокий |
| scroll_depth | Глубина скролла | percentage (25/50/75/100), blockId | Средний |
| market_switch | Переключение рынка | from, to | Средний |

### FSD-расположение

```
apps/web/src/shared/lib/analytics.ts

// sendEvent(name: string, params: Record<string, unknown>): void
// Отправляет событие в Google Analytics 4 и Яндекс.Метрику
//
// Реализация:
// - GA4: gtag('event', name, params)
// - YM: ym(COUNTER_ID, 'reachGoal', name, params)
//
// Условная отправка: только если window.gtag / window.ym существуют
// Предотвращение в dev/test: проверка NODE_ENV
```

## 17.2. UTM-параметры

### Извлечение

```typescript
// packages/shared/src/utils/getUtmParams.ts

// getUtmParams(): UtmParams
// Извлекает из URL:
// - utm_source
// - utm_medium
// - utm_campaign
// - utm_content
// - utm_term
//
// Сохраняет в sessionStorage при первом визите
// Передаёт в каждый POST /api/leads и POST /api/quiz
```

### UTM-маппинг для CRM

| Параметр | Пример | Назначение |
|----------|--------|------------|
| utm_source | vk, telegram, google, yandex | Источник трафика |
| utm_medium | cpc, social, organic, email | Тип канала |
| utm_campaign | kadety_launch_q2, summer_promo | Кампания |
| utm_content | hero_cta, quiz_result, pricing | Элемент, откуда клик |
| utm_term | ии обучение детей, ai kids course | Ключевое слово |

## 17.3. Воронка конверсии — метрики

### L1 -> L2

| Метрика | Описание | Целевое значение |
|---------|----------|------------------|
| Portal CTR | % кликов на порталы от всех посетителей L1 | 15-25% |
| Quiz Start Rate | % начавших квиз от посетителей L1 | 10-15% |
| Quiz Complete Rate | % завершивших квиз от начавших | 60-70% |
| Scroll Depth 75% | % дочитавших до FAQ | 30-40% |
| Bounce Rate | % ушедших без действия | менее 50% |

### L2 -> L3

| Метрика | Описание | Целевое значение |
|---------|----------|------------------|
| Direction CTR | % кликов на направление | 20-35% |
| Teacher Video Play | % посмотревших видео преподавателя | 15-20% |
| Pricing View Rate | % дошедших до тарифов | 40-50% |

### L3 -> Lead

| Метрика | Описание | Целевое значение |
|---------|----------|------------------|
| Form Start Rate | % начавших заполнять форму | 10-15% |
| Form Submit Rate | % отправивших форму от начавших | 70-80% |
| Overall L3 CR | % лидов от всех посетителей L3 | 5-10% |

---

# Часть 18 — Управление состоянием

## 18.1. Стратегия

### Три типа состояния

| Тип | Хранилище | Примеры |
|-----|-----------|---------|
| Server State | TanStack Query | Группы, курсы, отзывы, работы, FAQ, команда |
| Client State | Zustand | Текущий рынок, состояние квиза, мобильное меню |
| URL State | React Router | Текущая страница, groupSlug, directionSlug |

### Принцип разделения

- **Server State** — данные, которые живут на сервере. Кэшируются TanStack Query.
  Не дублируются в Zustand.
- **Client State** — данные, которые существуют только на клиенте (UI-состояние).
  Хранятся в Zustand stores.
- **URL State** — данные, закодированные в URL. Восстанавливаются при refresh.
  Являются source of truth для текущей страницы.

## 18.2. Server State — TanStack Query

### Query Keys Convention

```typescript
// Все query keys определяются в одном месте
const queryKeys = {
  groups: {
    all:    ['groups'] as const,
    detail: (slug: string) => ['groups', slug] as const,
  },
  courses: {
    all:    ['courses'] as const,
    byGroup: (groupSlug: string) => ['courses', { group: groupSlug }] as const,
    detail:  (slug: string) => ['courses', slug] as const,
  },
  missions: {
    byCourse: (courseSlug: string) => ['missions', { course: courseSlug }] as const,
  },
  works: {
    all:     ['works'] as const,
    byGroup: (groupSlug: string) => ['works', { group: groupSlug }] as const,
  },
  testimonials: {
    all:      ['testimonials'] as const,
    byGroup:  (groupSlug: string) => ['testimonials', { group: groupSlug }] as const,
    byCourse: (courseSlug: string) => ['testimonials', { course: courseSlug }] as const,
  },
  faq: {
    byLevel: (level: string) => ['faq', { level }] as const,
    byGroup: (groupSlug: string) => ['faq', { group: groupSlug }] as const,
  },
  team: {
    all: ['team'] as const,
  },
  formats: {
    all: ['formats'] as const,
  },
} as const;
```

### Stale Time Configuration

```typescript
// Контент обновляется редко — кэшируем агрессивно
const STALE_TIMES = {
  groups:       Infinity,        // Группы не меняются в runtime
  courses:      Infinity,        // Курсы не меняются в runtime
  missions:     60 * 60 * 1000,  // 1 час
  works:        30 * 60 * 1000,  // 30 минут
  testimonials: 30 * 60 * 1000,  // 30 минут
  faq:          60 * 60 * 1000,  // 1 час
  team:         60 * 60 * 1000,  // 1 час
  formats:      Infinity,        // Форматы не меняются в runtime
} as const;
```

## 18.3. Client State — Zustand Stores

### Market Store

```typescript
// apps/web/src/features/switch-market/model/marketStore.ts

interface MarketState {
  market: MarketCode;       // 'ru' | 'kz'
  locale: Locale;           // 'ru-RU' | 'kz-KZ'
  currency: string;         // '₽' | '₸'
  strings: I18nStrings;     // Строки для текущего рынка
  setMarket: (market: MarketCode) => void;
}

// Persist: localStorage (ключ 'space-academy-market')
// Default: определяется из поддомена при инициализации
```

### Quiz Store

```typescript
// apps/web/src/features/quiz/model/quizStore.ts

interface QuizState {
  currentStep: number;      // 0-4 (5 шагов)
  answers: Record<number, string | number>;
  isCompleted: boolean;
  recommendation: {
    groupSlug: string;
    directionSlug: string;
    courseUrl: string;
  } | null;
  contactInfo: {
    parentName: string;
    phone: string;
    email?: string;
  } | null;
  
  setAnswer: (step: number, answer: string | number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setContactInfo: (info: ContactInfo) => void;
  completeQuiz: (recommendation: Recommendation) => void;
  resetQuiz: () => void;
}

// No persist — квиз сбрасывается при новом визите
```

### Lead Form Store

```typescript
// apps/web/src/features/submit-lead/model/leadStore.ts

interface LeadFormState {
  formData: Partial<CreateLeadRequest>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  
  setField: (field: string, value: unknown) => void;
  submit: () => Promise<void>;
  reset: () => void;
}
```

## 18.4. URL State — React Router

```typescript
// apps/web/src/app/router/routes.tsx

// Маршруты:
// /                          -> HomePage
// /kadety                    -> GroupPage (groupSlug = 'kadety')
// /stajery                   -> GroupPage (groupSlug = 'stajery')
// /komanda                   -> GroupPage (groupSlug = 'komanda')
// /kadety/neyrokreativ       -> CoursePage   (groupSlug + directionSlug)
// /kadety/vayb-koding        -> CoursePage
// /stajery/neyrokreativ      -> CoursePage
// /stajery/vayb-koding       -> CoursePage
// /komanda/neyrokreativ      -> CoursePage
// /komanda/vayb-koding       -> CoursePage
// /about                     -> AboutPage
// /gallery                   -> GalleryAllPage
// /thank-you                 -> ThankYouPage
// /privacy                   -> PrivacyPage
// /terms                     -> TermsPage
// *                          -> NotFoundPage
//
// Параметры извлекаются через useParams():
// - groupSlug:     kadety | stajery | komanda
// - directionSlug: neyrokreativ | vayb-koding
//
// Валидация: если slug невалидный -> redirect на 404
```

---

# Часть 19 — Доступность (Accessibility)

## 19.1. Стандарт

WCAG 2.1 Level AA — минимальный стандарт для образовательных платформ.

## 19.2. Требования

### Контраст

| Элемент | Минимальный контраст | Текущее значение |
|---------|---------------------|------------------|
| Body текст на тёмном фоне | 4.5:1 | #FFFFFF на #1A1E35 = 12.6:1 (OK) |
| Secondary текст | 4.5:1 | #8b96b0 на #1A1E35 = 4.8:1 (OK) |
| Tertiary текст | 3:1 (для large text) | #5A6080 на #1A1E35 = 3.2:1 (OK для large) |
| CTA на gradient | 4.5:1 | #FFFFFF на teal/orange = 5.1:1+ (OK) |

### Клавиатура

- Все интерактивные элементы доступны через Tab
- Видимый focus ring (outline 2px solid var(--teal-500), offset 2px)
- Escape закрывает модалки и дропдауны
- Enter/Space активирует кнопки и ссылки
- Arrow keys для навигации в выпадающих меню
- Квиз доступен полностью с клавиатуры

### Скринридеры

- Все изображения имеют alt-тексты на русском
- Персонажи: alt="Лео — персонаж Космической Академии, мальчик в бирюзовом скафандре"
- Иконки: aria-hidden="true" для декоративных, aria-label для функциональных
- Формы: label привязаны к input через htmlFor
- Ошибки валидации: aria-live="polite" + aria-describedby
- Навигация: nav aria-label="Главная навигация"
- Аккордеон FAQ: aria-expanded, aria-controls
- Модалки: role="dialog", aria-modal="true", focus trap

### Анимации

- prefers-reduced-motion: reduce — отключает float, sparkle, glow анимации
- Оставляет: fade-in/fade-out (мгновенные)
- Карусели: кнопки паузы/переключения видимы

### Формы

- Каждый input имеет визуально связанный label
- Placeholder НЕ заменяет label
- Ошибки валидации: красная рамка + текст ошибки ниже + aria-invalid
- Автозаполнение: autocomplete="name", autocomplete="tel", autocomplete="email"
- Маска телефона не блокирует paste (нормализация после paste)

## 19.3. Семантическая структура страницы

```html
<!-- L1 Main Page semantic structure -->
<header role="banner">
  <nav aria-label="Главная навигация">...</nav>
</header>

<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">...</h1>
  </section>
  
  <section aria-labelledby="why-heading">
    <h2 id="why-heading">Почему ИИ-образование нужно сейчас</h2>
  </section>
  
  <section aria-labelledby="utp-heading">
    <h2 id="utp-heading">Что мы делаем иначе</h2>
  </section>
  
  <section aria-labelledby="paths-heading" id="portals">
    <h2 id="paths-heading">Выберите возрастную группу</h2>
  </section>
  
  <section aria-labelledby="gallery-heading">
    <h2 id="gallery-heading">Что создадут ваши дети</h2>
  </section>
  
  <section aria-labelledby="team-heading">
    <h2 id="team-heading">Командование Академии</h2>
  </section>
  
  <section aria-labelledby="pricing-heading">
    <h2 id="pricing-heading">Форматы обучения</h2>
  </section>
  
  <section aria-labelledby="quiz-heading" id="quiz">
    <h2 id="quiz-heading">Найди курс для ребёнка</h2>
  </section>
  
  <section aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading">Отзывы</h2>
  </section>
  
  <section aria-labelledby="faq-heading">
    <h2 id="faq-heading">Частые вопросы</h2>
  </section>
  
  <section aria-labelledby="cta-heading">
    <h2 id="cta-heading">Готовы начать?</h2>
  </section>
</main>

<footer role="contentinfo">...</footer>
```

---

# Часть 20 — Переменные окружения

## 20.1. Frontend (apps/web)

```bash
# .env.example (apps/web)

# === App ===
VITE_APP_URL=https://spaceacademy.ru
VITE_APP_NAME=Космическая Академия

# === API ===
VITE_API_URL=https://api.spaceacademy.ru
VITE_API_TIMEOUT=10000

# === Market ===
VITE_DEFAULT_MARKET=ru

# === Analytics ===
VITE_GA4_ID=G-XXXXXXXXXX
VITE_YM_ID=XXXXXXXX

# === reCAPTCHA ===
VITE_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXXXXX

# === Feature Flags ===
VITE_ENABLE_KZ_NATIVE_LANG=false
VITE_ENABLE_AB_TEST_HERO=true
VITE_ENABLE_VIDEO_TESTIMONIALS=false

# === Sentry ===
VITE_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

## 20.2. Backend (apps/api)

```bash
# .env.example (apps/api)

# === Server ===
PORT=3001
HOST=0.0.0.0
NODE_ENV=production
LOG_LEVEL=info

# === Database ===
DATABASE_URL=postgresql://user:pass@localhost:5432/spaceacademy
DATABASE_POOL_MAX=20
DATABASE_POOL_MIN=2

# === Redis ===
REDIS_URL=redis://localhost:6379
REDIS_TTL_DEFAULT=3600

# === CORS ===
CORS_ORIGIN=https://spaceacademy.ru,https://kz.spaceacademy.ru

# === CRM ===
CRM_PROVIDER=amocrm
AMOCRM_DOMAIN=spaceacademy.amocrm.ru
AMOCRM_ACCESS_TOKEN=XXXXX
AMOCRM_PIPELINE_ID=XXXXX
BITRIX24_WEBHOOK_URL=https://xxx.bitrix24.ru/rest/xxx/

# === Telegram Bot ===
TELEGRAM_BOT_TOKEN=XXXX:XXXXX
TELEGRAM_CHAT_ID=-100XXXX
TELEGRAM_NOTIFY_ENABLED=true

# === Email ===
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_XXXXX
EMAIL_FROM=noreply@spaceacademy.ru
EMAIL_REPLY_TO=hello@spaceacademy.ru

# === reCAPTCHA ===
RECAPTCHA_SECRET_KEY=6LeXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_MIN_SCORE=0.5

# === Rate Limiting ===
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=60000

# === Sentry ===
SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx

# === Security ===
JWT_SECRET=XXXXX
COOKIE_SECRET=XXXXX
```

## 20.3. Типизация Env

```typescript
// apps/web/src/shared/config/env.ts

interface WebEnv {
  APP_URL: string;
  APP_NAME: string;
  API_URL: string;
  API_TIMEOUT: number;
  DEFAULT_MARKET: MarketCode;
  GA4_ID: string;
  YM_ID: string;
  RECAPTCHA_SITE_KEY: string;
  SENTRY_DSN: string;
  ENABLE_KZ_NATIVE_LANG: boolean;
  ENABLE_AB_TEST_HERO: boolean;
  ENABLE_VIDEO_TESTIMONIALS: boolean;
}

// Все значения валидируются при старте приложения через Zod
// Если значение отсутствует и нет default — ошибка при инициализации
```

```typescript
// apps/api/src/config/env.ts

interface ApiEnv {
  PORT: number;
  HOST: string;
  NODE_ENV: 'development' | 'production' | 'test';
  LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
  DATABASE_URL: string;
  DATABASE_POOL_MIN: number;
  DATABASE_POOL_MAX: number;
  REDIS_URL: string;
  CORS_ORIGIN: string[];
  CRM_PROVIDER: 'amocrm' | 'bitrix24';
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  TELEGRAM_NOTIFY_ENABLED: boolean;
  EMAIL_PROVIDER: 'resend' | 'sendgrid';
  RECAPTCHA_SECRET_KEY: string;
  RECAPTCHA_MIN_SCORE: number;
  RATE_LIMIT_MAX: number;
  RATE_LIMIT_WINDOW_MS: number;
  SENTRY_DSN: string;
  JWT_SECRET: string;
  COOKIE_SECRET: string;
}

// Валидация через Zod при старте сервера
// Fallback-значения для development
```

## 20.3. Loading States и Skeleton Screens

| Компонент | Loading-состояние | Skeleton |
|-----------|-------------------|----------|
| Hero | Статичный фон + fadeIn персонажа | Нет (SSG) |
| Gallery | Skeleton-карточки (shimmer-анимация) | 4 плейсхолдера |
| Team | Skeleton-аватары + линии | 3-4 плейсхолдера |
| Testimonials | Skeleton-карточки | 3 плейсхолдера |
| FAQ | Аккордеон-lines (shimmer) | 6 линий |
| Pricing | Skeleton-карточки | 3 плейсхолдера |
| Course Program | Skeleton-миссии | 8 линий |
| Lead Form | Disabled submit + spinner | Нет |
| Quiz | Disabled buttons + spinner | Нет |

**Skeleton CSS-спецификация:**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-surface) 25%,
    var(--color-bg-surface-hover) 50%,
    var(--color-bg-surface) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

# Часть 21 — Тестирование

## 21.1. Стратегия тестирования

### Пирамида тестов

```
         ┌─────────┐
         │  E2E    │  5-10 тестов (Playwright)
         │         │  Критические пути
        ┌┴─────────┴┐
        │ Integration│  20-30 тестов (Vitest)
        │            │  API endpoints, DB queries
       ┌┴────────────┴┐
       │   Unit Tests  │  50-100+ тестов (Vitest)
       │               │  Утилиты, хуки, stores
       └───────────────┘
```

### Unit тесты (Vitest)

**Что тестируется:**
- Утилиты: formatPrice, formatPhone, normalizePhone, buildGroupUrl
- Валидаторы: isValidPhone, isValidEmail
- Zod-схемы: createLeadRequestSchema — valid/invalid data
- Zustand stores: marketStore, quizStore — transitions
- Хуки: useQuizState — step navigation, answers, recommendation
- Quiz matrix: quizMatrix — правильность рекомендаций для всех комбинаций
- URL builder: все возможные slug-комбинации

**Что НЕ тестируется unit-тестами:**
- React-компоненты (CSS-зависимые) — покрываются E2E
- API-обработчики — покрываются integration

### Integration тесты (Vitest + Supertest)

**Что тестируется:**
- POST /api/leads — создание лида (валидация, дубликаты, ответы)
- POST /api/quiz — отправка квиза (рекомендация)
- GET /api/groups — список групп
- GET /api/courses — список курсов
- GET /api/faq?level=l1 — FAQ с фильтрами
- Rate limiting — проверка ограничений
- Error handling — невалидные данные, 404, 500

### E2E тесты (Playwright)

**Критические пути (5-10 сценариев):**

| # | Сценарий | Описание |
|---|----------|----------|
| 1 | Полный путь L1 -> Quiz | Открыть главную, скроллить, пройти квиз, получить рекомендацию |
| 2 | Путь L1 -> L2 -> L3 | Кликнуть портал Кадетов -> выбрать Нейрокреатив -> увидеть программу |
| 3 | Заполнение формы L3 | Открыть курс, заполнить форму, отправить, увидеть thank you |
| 4 | Мобильная навигация | Открыть бургер, перейти по ссылке, закрыть |
| 5 | FAQ | Открыть вопрос, увидеть ответ, закрыть |
| 6 | Переключение рынка | Переключить на KZ, проверить цены в тенге |
| 7 | 404 | Перейти на несуществующий URL, увидеть 404 страницу |
| 8 | SEO-метатеги | Проверить title, description, og:image на каждой странице |

## 21.2. Конвенции тестирования

### Именование файлов

```
*.test.ts     — unit тесты
*.test.tsx    — компонентные тесты
*.spec.ts     — integration тесты (API)
*.e2e.ts      — E2E тесты (Playwright)
```

### Структура теста

```typescript
// Arrange → Act → Assert
describe('formatPrice', () => {
  it('formats RU price with rouble symbol', () => {
    // Arrange
    const amount = 3990;
    const market: MarketCode = 'ru';
    
    // Act
    const result = formatPrice(amount, market);
    
    // Assert
    expect(result).toBe('3 990 ₽');
  });
  
  it('formats KZ price with tenge symbol', () => {
    const result = formatPrice(18900, 'kz');
    expect(result).toBe('18 900 ₸');
  });
});
```

---

# Часть 22 — Деплой и инфраструктура

## 22.1. Среды

| Среда | URL | Назначение | Деплой |
|-------|-----|------------|--------|
| Local | localhost:5173 (web), localhost:3001 (api) | Разработка | pnpm dev |
| Preview | pr-XXX.spaceacademy.vercel.app | Превью PR | Автоматический на PR |
| Staging | staging.spaceacademy.ru | Тестирование | Автоматический на develop |
| Production | spaceacademy.ru | Продакшн | Автоматический на main |
| KZ Production | kz.spaceacademy.ru | Продакшн KZ | Автоматический на main |

## 22.2. Frontend Deploy (Vercel)

```
Build Command:  pnpm turbo run build --filter=web
Output Dir:     apps/web/dist
Install:        pnpm install --frozen-lockfile
Node Version:   22.x
```

### Vercel Edge Config

- Domain: spaceacademy.ru, kz.spaceacademy.ru
- Redirects: /index.html -> /
- Headers: Cache-Control для статики (1 year), CSP

## 22.3. Backend Deploy (VPS / Railway)

```
Build Command:  pnpm turbo run build --filter=api
Start Command:  node apps/api/dist/server.js
Health Check:   GET /api/health
```

### Инфраструктура

- Database: Managed PostgreSQL (Supabase / Neon / VPS)
- Redis: Managed Redis (Upstash / VPS)
- SSL: Let's Encrypt (auto-renew)
- Reverse proxy: Nginx / Caddy
- Process manager: PM2 (VPS) или Docker container

## 22.4. Backup и мониторинг

- Database backup: daily (pg_dump), 30 дней хранения
- Мониторинг uptime: UptimeRobot / Better Stack
- Error tracking: Sentry (web + api)
- Logs: Pino -> stdout -> Grafana Loki (или CloudWatch)
- Alerts: Telegram-канал для алертов (downtime, error spike)

---

# Часть 23 — Roadmap и Phase Plan

## Phase 1 — MVP (4-6 недель)

### Цели
- Работающий L1 (Главная) + 3 страницы L2 + 6 страниц L3
- Квиз + лид-форма -> CRM + Telegram
- Адаптив (мобайл + десктоп)
- RU-рынок

### Scope

| Блок | Статус |
|------|--------|
| Header (sticky) | MVP |
| Hero L1 (Лео) | MVP |
| Why Now (4 тезиса) | MVP |
| UTP (2 направления) | MVP |
| Three Paths (3 портала) | MVP |
| Gallery (демо-работы) | MVP |
| Team (3-5 карточек) | MVP |
| Pricing Overview (4 карточки) | MVP |
| Quiz (5 шагов) | MVP |
| Testimonials (3-4 отзыва) | MVP |
| FAQ (8-10 вопросов) | MVP |
| CTA Final | MVP |
| Footer | MVP |
| L2 Hero + все блоки | MVP |
| L3 Hero + все блоки | MVP |
| Lead Form -> CRM + Telegram | MVP |
| Backend API (leads, quiz, content) | MVP |

### Не входит в MVP
- KZ-рынок (Phase 2)
- Казахскоязычная версия (Phase 3)
- Видео-приветствия преподавателей (Phase 2)
- A/B тестирование Hero (Phase 2)
- Родительский кабинет (Phase 4)
- Online-оплата (Phase 3)

## Phase 2 — KZ + Улучшения (2-3 недели)

- KZ-рынок: kz.spaceacademy.ru
- Замена Аури -> Лина
- Тенге + Kaspi рассрочка
- WhatsApp приоритет
- Видео-приветствия преподавателей
- A/B test Hero текстов
- Видео-отзывы

## Phase 3 — Монетизация (3-4 недели)

- Online-оплата (ЮKassa RU, Kaspi KZ)
- Промо-коды (скидки, акции)
- Реферальная программа
- Казахскоязычные тексты (частичный перевод)
- Email-цепочки nurturing
- Интеграция с LMS (учебной платформой)

## Phase 4 — Платформа (6-8 недель)

- Родительский кабинет (прогресс, домашки, расписание)
- Ученический кабинет (миссии, бейджи, трекер)
- Авторизация и регистрация
- Push-уведомления
- Система бейджей и достижений

---

> **Конец документа SPACE MANIFEST v1.2**
>
> Линий: 5640+
> Частей: 23
> Приложений: 3
> DB таблиц: 10
> FSD widgets: 25 | features: 11 | entities: 13 | pages: 9
> Обновлять при каждом значимом изменении проекта.
>
> (c) 2026 Space Academy Team



# Приложение A — Детальные навыки по 6 курсам

## A.1. Кадеты (7-9) / Нейрокреатив — «Мастер сказок»

### Пререквизиты
- Умение читать и писать на базовом уровне
- Компьютер или планшет с доступом в интернет
- Родитель рядом на первых 2-3 занятиях

### Результат: Иллюстрированная сказка из 20 страниц

### Навыки после курса (детальные)
1. **Промпт-инжиниринг (базовый)**
   - Умеет описать словами то, что хочет получить от ИИ
   - Понимает разницу между «нарисуй кота» и «нарисуй пушистого рыжего кота на подоконнике»
   - Знает 3-4 структуры промпта для генерации изображений
   - Может корректировать промпт по результату

2. **Сторителлинг**
   - Умеет придумать историю с началом, серединой и концом
   - Знает, что такое персонаж, конфликт и развязка
   - Может описать сцену так, чтобы ИИ сгенерировал нужную иллюстрацию

3. **Визуальная грамотность**
   - Понимает, что такое стиль изображения (мультяшный, реалистичный)
   - Умеет выбрать подходящую иллюстрацию из нескольких вариантов
   - Знает, как попросить ИИ изменить конкретный элемент

4. **Цифровая безопасность**
   - Знает 5-6 правил безопасности при работе с ИИ
   - Понимает, что нельзя загружать чужие фото без разрешения
   - Умеет распознать неправильный/странный контент ИИ

5. **Критическое мышление**
   - Проверяет результат ИИ — «это правильно?»
   - Понимает, что ИИ может ошибаться
   - Умеет объяснить, почему выбрал именно этот вариант

6. **Презентация**
   - Может показать и рассказать о своей сказке родителям
   - Умеет объяснить, как создавал проект

## A.2. Кадеты (7-9) / Вайб-кодинг — «Создатель игр»

### Результат: Интерактивная мини-игра

### Навыки после курса (детальные)
1. **Алгоритмическое мышление (базовое)**
   - Понимает последовательность действий (если нажать кнопку — что произойдёт?)
   - Может описать логику простой игры словами
   - Знает, что такое «условие» (если..., то...)

2. **Работа с ИИ-ассистентом кода**
   - Умеет описать, что хочет получить, чтобы ИИ сгенерировал код
   - Понимает, что код — это инструкции для компьютера
   - Может попросить ИИ изменить цвет, размер, поведение элемента

3. **Визуальный дизайн**
   - Может подобрать цвета для своей игры
   - Понимает, что такое кнопка, текст, изображение в интерфейсе

4. **Тестирование**
   - Проверяет, работает ли игра как задумано
   - Находит ошибки и описывает их ИИ для исправления

## A.3. Стажёры (10-13) / Нейрокреатив — «ИИ-студия»

### Результат: Мультимедийная презентация-исследование

### Навыки после курса (детальные)
1. **Промпт-инжиниринг (продвинутый)**
   - Строит промпты с контекстом, ролью и ограничениями
   - Использует few-shot примеры для улучшения результата
   - Знает 3-5 типов нейросетей и их специализацию
   - Комбинирует текстовые и визуальные промпты

2. **Мультимедийное творчество**
   - Создаёт презентации с AI-текстом и AI-иллюстрациями
   - Генерирует видео-контент (базовый уровень)
   - Редактирует и комбинирует AI-контент
   - Подбирает стиль оформления под задачу

3. **Исследовательская работа**
   - Умеет ставить исследовательский вопрос
   - Использует ИИ для сбора и анализа информации
   - Критически оценивает источники и факты от ИИ
   - Формулирует выводы на основе работы

4. **Этика ИИ**
   - Знает, когда использование ИИ в учёбе допустимо
   - Понимает проблему авторских прав на AI-контент
   - Умеет указывать, что контент создан с помощью ИИ

## A.4. Стажёры (10-13) / Вайб-кодинг — «Лаборатория кода»

### Результат: Работающее мини-приложение или Telegram-бот

### Навыки после курса (детальные)
1. **Программная логика**
   - Понимает переменные, условия, циклы на концептуальном уровне
   - Умеет описать логику приложения на «человеческом языке»
   - Может декомпозировать задачу на шаги

2. **Работа с AI-ассистентом разработки**
   - Формулирует задачи для AI-кодера чётко и однозначно
   - Итерирует: просит исправления и улучшения
   - Понимает, когда AI-код работает, а когда нужна доработка
   - Копирует и адаптирует паттерны из одного проекта в другой

3. **UI/UX мышление (базовое)**
   - Понимает, что пользователю должно быть удобно
   - Выбирает подходящие элементы интерфейса
   - Тестирует на друзьях/родителях — собирает обратную связь

4. **Деплой (базовый)**
   - Публикует проект на бесплатном хостинге
   - Делится ссылкой на рабочий проект

## A.5. Команда (14+) / Нейрокреатив — «Контент-продюсер»

### Результат: Контент-серия с потенциалом монетизации

### Навыки после курса (детальные)
1. **Контент-стратегия**
   - Определяет целевую аудиторию контента
   - Планирует серию публикаций/выпусков
   - Анализирует метрики вовлечённости

2. **Продвинутая мультимодальная генерация**
   - Создаёт длинные тексты в едином стиле с помощью ИИ
   - Генерирует визуальный контент в консистентном стиле
   - Создаёт видео-контент с AI-нарратором
   - Комбинирует разные типы AI-контента в единый продукт

3. **Основы монетизации**
   - Понимает модели монетизации контента
   - Знает, как продвигать контент в соцсетях
   - Может оценить потенциал идеи

## A.6. Команда (14+) / Вайб-кодинг — «Архитектор продуктов»

### Результат: Работающий сайт или игра, развёрнутые на хостинге

### Навыки после курса (детальные)
1. **Продуктовое мышление**
   - Формулирует проблему, которую решает продукт
   - Определяет MVP — минимально жизнеспособный продукт
   - Приоритезирует фичи (MoSCoW)
   - Презентует продукт аудитории (pitch)

2. **Архитектурное мышление**
   - Понимает клиент-серверную архитектуру
   - Проектирует структуру данных (базовый уровень)
   - Декомпозирует приложение на компоненты

3. **Full-stack с AI-ассистентом**
   - Создаёт фронтенд с AI-помощью (HTML/CSS/JS)
   - Настраивает простой бэкенд (API)
   - Подключает базу данных (через AI)
   - Деплоит на хостинг (Vercel, Netlify)

4. **Итерационная разработка**
   - Работает в цикле: описание -> генерация -> тестирование -> улучшение
   - Понимает принципы CI/CD на концептуальном уровне
   - Собирает обратную связь и итерирует продукт

---

# Приложение B — Глоссарий терминов UI-компонентов

| Компонент | Описание | Где используется |
|-----------|----------|------------------|
| Button (Primary) | Основная CTA-кнопка, gradient teal-orange | Hero, Quiz, Lead Form, CTA, Pricing |
| Button (Secondary) | Вторичная кнопка, transparent + border | Hero, CTA, навигация |
| Button (Ghost) | Текстовая кнопка-ссылка | FAQ «Задать вопрос», навигация |
| Card (Base) | Базовая карточка, bg-surface, border, radius-lg | FAQ, навыки, тезисы |
| Card (Portal) | Активная карточка-портал с hover, glow | Three Paths, выбор направления |
| Card (Pricing) | Карточка тарифа, recommended-highlight | Pricing Overview, Pricing Detail |
| Card (Testimonial) | Карточка отзыва, фото + текст + звёзды | Testimonials |
| Card (Work) | Карточка работы ученика, превью + подпись | Gallery |
| Card (Team) | Карточка члена команды, фото + имя + звание | Team |
| Card (Mission) | Карточка миссии курса, аккордеон | Course Program |
| Card (Pillar) | Карточка пиллара урока, иконка + описание | Pillar Template |
| Card (Thesis) | Карточка тезиса «Почему сейчас» | Why Now |
| Card (Direction) | Карточка направления Нейрокреатив / Вайб-кодинг | UTP Block |
| Badge | Pill-элемент с текстом | Trust badges, возраст, категория |
| Input | Текстовое поле ввода, border, focus ring | Lead Form, Quiz |
| Select | Выпадающий список | Lead Form (формат) |
| Textarea | Многострочное поле ввода | (будущее: обратная связь) |
| Accordion | Раскрывающийся элемент | FAQ Block |
| Carousel | Горизонтальная карусель | Testimonials, Gallery, Team |
| ProgressBar | Индикатор прогресса | Quiz (шаги) |
| Modal | Модальное окно, overlay | (будущее: промо, видео) |
| Toast | Уведомление-тост | Успешная отправка формы |
| Breadcrumb | Навигация хлебных крошек | L2, L3 страницы |
| Container | Обёртка с max-width 920/1200px | Все секции |
| Section | Секция страницы, вертикальные отступы | Все блоки |
| Stack | Вертикальная/горизонтальная группировка | Внутри секций |
| StarField | Анимированное звёздное небо | Hero L1 фон |
| TrustBadges | Группа бейджей доверия | Hero L1 |

---

# Приложение C — Чеклист запуска (Launch Checklist)

## До запуска — контент

- [ ] Все тексты Hero (L1, L2, L3) написаны и проверены
- [ ] Все тексты FAQ написаны (L1 общий, L2 по группам, L3 по курсам)
- [ ] Все описания миссий написаны (60 миссий: 2×8 кадеты + 2×10 стажёры + 2×12 команда)
- [ ] Фото команды отсняты и обработаны
- [ ] Видео-приветствия записаны (опционально для MVP)
- [ ] Примеры работ учеников подготовлены (или демо-работы)
- [ ] Отзывы собраны (пилотная группа или согласованные)
- [ ] Цены утверждены (RU + KZ)
- [ ] Юридические документы подготовлены (оферта, политика конфиденциальности)

## До запуска — технически

- [ ] Все страницы адаптивны (мобайл, планшет, десктоп)
- [ ] Все формы работают (квиз, лид-форма)
- [ ] CRM-интеграция настроена и протестирована
- [ ] Telegram-бот настроен и уведомляет
- [ ] Email-подтверждения отправляются
- [ ] reCAPTCHA v3 подключена
- [ ] Google Analytics + Яндекс.Метрика подключены
- [ ] SEO-метатеги заполнены на всех страницах
- [ ] sitemap.xml и robots.txt настроены
- [ ] SSL-сертификат установлен
- [ ] Favicon и Open Graph изображения
- [ ] 404 страница настроена
- [ ] Производительность: LCP менее 2.5s (PageSpeed >= 90)
- [ ] Accessibility: минимум WCAG 2.1 AA
- [ ] Кроссбраузерное тестирование (Chrome, Safari, Firefox, Edge)
- [ ] E2E тесты проходят (5-10 критических путей)

## До запуска — бизнес

- [ ] CRM-воронка настроена (статусы, автодействия)
- [ ] Менеджер обучен и готов обрабатывать лиды
- [ ] Ответы на типичные вопросы подготовлены
- [ ] UTM-разметка для рекламных каналов
- [ ] Рекламные креативы подготовлены
- [ ] Landing-page проверен командой (внутреннее тестирование)

---
