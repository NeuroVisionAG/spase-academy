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
        question: 'Мой ребёнок ничего не знает об ИИ. Это не помешает?',
        answer: 'Нет — это и есть наша аудитория. Мы начинаем с нуля. Кадеты (7–9 лет) знакомятся с ИИ впервые, и это нормально.',
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

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['1'])); // Open first item by default

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

  // Split into left and right columns for masonry-like grid
  const columnLeft = [faqData[0]]; // ПРО ОБУЧЕНИЕ (3 вопроса)
  const columnRight = [faqData[1], faqData[2]]; // ПРО БЕЗОПАСНОСТЬ (2 вопроса), ПРО ОПЛАТУ (2 вопроса)

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
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Частые вопросы</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            {columnLeft.map(renderGroup)}
          </div>
          <div className={styles.column}>
            {columnRight.map(renderGroup)}
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
