import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Button } from '@space-academy/ui';
import './Header.css';

const AstraLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 20h4.5l5.5-10 5.5 10H22L12 2z"/>
    <path d="M12 12.5L8.5 19h7L12 12.5z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const VkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 2.125-2.741 2.718-4.747 2.553-5.456-.208-.891-.739-.874-1.206-.874h-3.621c-.714 0-.897.306-1.056.749-.741 2.072-2.261 4.549-3.093 4.549-.364 0-.462-.314-.462-.977V5.594c0-.705-.205-.989-.915-.989h-4.37c-.328 0-.441.135-.558.261-.269.296-.245.524.089.65.617.234.869.654.84 2.15l-.042 3.864c-.035.793-.578 1.051-.77 1.051-.624 0-1.616-.838-3.033-2.915-.555-.811-.902-1.928-.902-1.928-.152-.395-.417-.611-.84-.611H.416c-.663 0-.85.344-.85.669 0 .591.954 3.75 4.394 8.272 2.744 3.606 5.8 4.928 9.202 4.928Z" />
  </svg>
);

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGroupsHovered, setIsGroupsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`widget-header ${isScrolled ? 'widget-header--scrolled' : ''}`}>
      <div className="widget-header__container">
        
        <Link to="/" className="widget-header__logo">
          <span className="widget-header__logo-icon" style={{ color: 'var(--color-primary, #0d9488)', display: 'flex', alignItems: 'center' }}>
            <AstraLogo />
          </span>
          <span className="widget-header__logo-text">Космическая Академия</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="widget-header__nav-desktop">
          <Link to="/about">Академия</Link>
          <div 
            className="widget-header__dropdown-wrapper"
            onMouseEnter={() => setIsGroupsHovered(true)}
            onMouseLeave={() => setIsGroupsHovered(false)}
          >
            <span className="widget-header__dropdown-trigger">Возраст ▾</span>
            {isGroupsHovered && (
              <div className="widget-header__dropdown-menu">
                <Link to="/kadety">Кадеты 7–9 лет</Link>
                <Link to="/stajery">Стажёры 10–13 лет</Link>
                <Link to="/komanda">Команда 14+</Link>
              </div>
            )}
          </div>
          <Link to="/courses">Направления</Link>
          <Link to="/komanda">Команда</Link>
          <Link to="/about-us">О нас</Link>
          <Link to="/pricing">Цены</Link>
        </nav>

        {/* Desktop Actions & Contacts */}
        <div className="widget-header__actions-desktop">
          <div className="widget-header__contacts">
            <a href="tel:88001234567" className="widget-header__phone">8-800-XXX-XX-XX</a>
            <div className="widget-header__social-icons">
               <a href="mailto:hello@spaceacademy.ru" className="header-icon email-icon" title="Написать на E-mail"><EmailIcon /></a>
               <a href="#" className="header-icon vk-icon" title="Группа ВКонтакте"><VkIcon /></a>
               <a href="#" className="header-icon wa-icon" title="Написать в WhatsApp"><WaIcon /></a>
            </div>
          </div>
          
          <Button variant="ghost" className="btn-login">Войти</Button>
          <a href="#quiz">
            <Button variant="primary" className="btn-free-lesson">Бесплатный урок</Button>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="widget-header__mobile-controls">
          <a href="#quiz">
             <Button variant="primary" className="btn-free-lesson-mobile">Урок</Button>
          </a>
          <button 
             className="widget-header__burger"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="widget-header__mobile-menu">
          <nav className="mobile-nav">
             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Академия</Link>
             <div className="mobile-nav-group">
                <span className="mobile-nav-title">Возраст</span>
                <Link to="/kadety" onClick={() => setIsMobileMenuOpen(false)}>Кадеты 7–9 лет</Link>
                <Link to="/stajery" onClick={() => setIsMobileMenuOpen(false)}>Стажёры 10–13 лет</Link>
                <Link to="/komanda" onClick={() => setIsMobileMenuOpen(false)}>Команда 14+</Link>
             </div>
             <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Направления</Link>
             <Link to="/komanda" onClick={() => setIsMobileMenuOpen(false)}>Команда</Link>
             <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>О нас</Link>
             <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Цены</Link>
          </nav>
          
          <div className="mobile-contacts">
             <a href="tel:88001234567" className="mobile-phone">8-800-XXX-XX-XX</a>
             <div className="mobile-socials">
                <a href="mailto:hello@spaceacademy.ru">E-mail</a>
                <a href="#">ВКонтакте</a>
                <a href="#">WhatsApp</a>
             </div>
             <Button variant="ghost" className="mobile-login" onClick={() => setIsMobileMenuOpen(false)}>Войти</Button>
          </div>
        </div>
      )}
    </header>
  );
};
