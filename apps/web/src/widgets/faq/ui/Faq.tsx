import React, { useState, useRef, useEffect } from 'react';
import styles from './Faq.module.css';

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

interface FaqGroupData {
  id: string;
  title: string;
  items: FaqItemData[];
}

const faqData: FaqGroupData[] = [
  {
    id: 'g1',
    title: 'ПРО ОБУЧЕНИЕ',
    items: [
      {
        id: '1',
        question: 'Не станет ли ребёнок ленивым из-за ИИ?',
        answer: 'Нет. Мы не учим просить ответы у нейросети — мы учим ребёнка быть постановщиком задачи. Каждый урок требует думать, формулировать, создавать. Это сложнее, чем просто делать домашнее задание.',
      },
      {
        id: '2',
        question: 'Что если ребенок ничего не знает ни об ИИ, ни о программировании?',
        answer: 'Это наша основная аудитория! Мы начинаем с нуля. ИИ в данном случае выступает не как замена знаний, а как мудрый наставник. Он помогает преодолеть страх перед сложным кодом и «белым листом», переводя идеи ребенка в работающий продукт.',
      },
      {
        id: '3',
        question: 'Сколько времени в неделю занимает обучение?',
        answer: '45–75 минут в неделю в основном формате. Занятие можно разбить на 3–5 дней по 15 минут каждый.',
      },
    ],
  },
  {
    id: 'g2',
    title: 'ПРО БЕЗОПАСНОСТЬ',
    items: [
      {
        id: '4',
        question: 'Безопасна ли платформа для детей?',
        answer: 'Да. Закрытая платформа без рекламы и внешних ссылок. Каждый урок ведёт живой педагог. Pillar «Safety Shield» в каждом занятии — отдельный блок о безопасности в интернете.',
      },
      {
        id: '5',
        question: 'Как я вижу, что происходит на занятиях?',
        answer: 'В родительском кабинете доступны: прогресс по миссиям, выполненные задания, время занятий. Получаете уведомления в удобный мессенджер.',
      },
    ],
  },
  {
    id: 'g3',
    title: 'ПРО ОПЛАТУ',
    items: [
      {
        id: '6',
        question: 'Можно ли вернуть деньги, если не понравится?',
        answer: 'Да. Первый урок бесплатный. Пробный урок — платный, стоимость зачитывается в курс. Если решите не продолжать — никаких скрытых списаний.',
      },
      {
        id: '7',
        question: 'Что нужно для занятий?',
        answer: 'Компьютер, ноутбук или планшет с браузером и интернетом. Отдельного ПО устанавливать не нужно.',
      },
    ],
  },
];

const AccordionItem: React.FC<{ item: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.questionBtn} onClick={onClick} aria-expanded={isOpen}>
        <span className={styles.questionText}>{item.question}</span>
        <div className={styles.iconWrapper}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div 
        className={styles.answerWrapper} 
        style={{ height: height === undefined ? 'auto' : `${height}px` }}
      >
        <div className={styles.answerContent} ref={contentRef}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

interface FaqProps {
  groupId?: string;
}

const groupQuestions: Record<string, FaqItemData[]> = {
  kadety: [
    {
      id: 'k1',
      question: 'Не рано ли в 7 лет начинать работать с ИИ?',
      answer: 'Напротив, это идеальный возраст. Дети в 7–9 лет воспринимают ИИ как естественный инструмент творчества. Мы используем максимально понятные интерфейсы и игровые механики.',
    },
    {
      id: 'k2',
      question: 'Нужно ли родителю сидеть рядом во время занятия?',
      answer: 'Мы рекомендуем помочь с подключением на первых 1-2 занятиях. Далее программа выстроена так, что Кадеты справляются самостоятельно, а вы только оцениваете результат.',
    },
    {
      id: 'k3',
      question: 'Как долго сохраняется доступ к урокам?',
      answer: 'Доступ к материалам курса и записям занятий остается у вас навсегда. Ребенок сможет вернуться к любимым темам и повторить уроки в любой момент.',
    }
  ],
  stajery: [
    {
      id: 's1',
      question: 'Поможет ли это обучение ребёнку в обычной школе?',
      answer: 'Да! Мы учим быстро искать информацию, структурировать её и создавать потрясающие презентации. Навыки работы с ИИ сэкономят время на рутине и поднимут качество школьных проектов.',
    },
    {
      id: 's2',
      question: 'Нужен ли мощный игровой компьютер для занятий?',
      answer: 'Нет. Все вычисления нейросетей происходят в облаке. Достаточно обычного ноутбука или планшета со стабильным интернетом и современным браузером.',
    },
    {
      id: 's3',
      question: 'Можно ли менять график занятий под секции или кружки?',
      answer: 'Конечно. Обучение в «Стажёрах» гибкое. Вы сами выбираете время для уроков. Мы рекомендуем заниматься 2 раза в неделю, но темп всегда остается за вами.',
    }
  ],
  komanda: [
    {
      id: 'kom1',
      question: 'Это полноценное программирование или просто «общение» с чатом?',
      answer: 'Вайб-кодинг — это следующий уровень. Мы учим архитектурному мышлению и логике. ИИ берет на себя рутинный синтаксис, а ученик фокусируется на структуре продукта и решении задач.',
    },
    {
      id: 'kom2',
      question: 'Даёт ли курс преимущество при поступлении в ВУЗ или колледж?',
      answer: 'Безусловно. Главное преимущество — не сертификат, а портфолио из реальных проектов (ботов, сайтов, приложений), которые можно показать приемной комиссии или будущему работодателю.',
    },
    {
      id: 'kom3',
      question: 'Какой продукт будет в итоге этого обучения?',
      answer: 'Результатом станет полноценный IT-продукт, готовый к запуску. Это может быть бот с ИИ-логикой, веб-приложение или сервис, которым можно реально пользоваться.',
    }
  ]
};

export const Faq: React.FC<FaqProps> = ({ groupId }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['1']));

  const toggleItem = (id: string) => {
    setOpenIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const eduGroup = faqData.find(g => g.id === 'g1')!;
  const safetyGroup = faqData.find(g => g.id === 'g2')!;
  const paymentGroup = faqData.find(g => g.id === 'g3')!;

  let columns: FaqGroupData[][] = [[], []];

  if (groupId && groupQuestions[groupId]) {
    const specGroup = {
      id: 'group-spec',
      title: 'ВОПРОСЫ ПО ГРУППЕ',
      items: groupQuestions[groupId]
    };
    columns[0] = [specGroup, safetyGroup];
    columns[1] = [eduGroup, paymentGroup];
  } else {
    columns[0] = [eduGroup];
    columns[1] = [safetyGroup, paymentGroup];
  }

  const renderGroup = (group: FaqGroupData) => (
    <div key={group.id} className={styles.group}>
      <h3 className={styles.groupTitle}>{group.title}</h3>
      <div className={styles.groupItems}>
        {group.items.map(item => (
          <AccordionItem 
            key={item.id} 
            item={item} 
            isOpen={openIds.has(item.id)} 
            onClick={() => toggleItem(item.id)} 
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="faq" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{groupId ? 'Ответы на ваши вопросы' : 'Частые вопросы'}</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            {columns[0].map(renderGroup)}
          </div>
          <div className={styles.column}>
            {columns[1].map(renderGroup)}
          </div>
        </div>
        <div className={styles.footer}>
          Не нашли ответ? 
          <a href="#" className={styles.contactLink}>
             <span className={styles.arrow}>→</span> Напишите нам — ответим в течение часа.
          </a>
        </div>
      </div>
    </section>
  );
};
