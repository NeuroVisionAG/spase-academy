import React from 'react';
import { Link } from 'react-router';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="widget-footer">
      <div className="widget-footer__container">
        
        {/* Основной макет: Левая часть (Ссылки + под ними инфа) и Правая (Форма) */}
        <div className="footer-main-row">
          
          <div className="footer-left-column">
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <h4>Академия</h4>
                <Link to="/about">О нас</Link>
                <Link to="/method">Наша методика</Link>
                <Link to="/team">Команда</Link>
                <Link to="/contacts">Контакты</Link>
              </div>
              <div className="footer-nav-col">
                <h4>Возрастные группы</h4>
                <Link to="/kadety">Кадеты 7–9</Link>
                <Link to="/stajery">Стажёры 10–13</Link>
                <Link to="/komanda">Команда 14+</Link>
              </div>
              <div className="footer-nav-col">
                <h4>Направления</h4>
                <Link to="/courses/neurocreative">Нейрокреатив</Link>
                <Link to="/courses/vibecoding">Вайб-кодинг</Link>
              </div>
              <div className="footer-nav-col">
                <h4>Контакты</h4>
                <Link to="/faq">FAQ</Link>
                <a href="#vk">ВКонтакте</a>
                <a href="mailto:hello@spaceacademy.ru">E-mail</a>
              </div>
            </div>

            {/* Юридический блок вынесен прямо под ссылки */}
            <div className="footer-legal-block">
              <div className="footer-legal-text">
                <p>ООО «Космическая Академия», ИНН 1234567890, ОГРН 1234567890123</p>
                <p>Лицензия на образовательную деятельность: № Л035-01298-77/00181569</p>
                <p>&copy; 2026 Космическая Академия. Все права защищены.</p>
              </div>
              <div className="footer-legal-links">
                <Link to="/privacy">Политика конфиденциальности</Link>
                <Link to="/personal-data">Обработка персональных данных (152-ФЗ)</Link>
                <Link to="/oferta">Оферта</Link>
              </div>
            </div>
          </div>

          <div className="footer-right-column">
            <div className="footer-form-col">
              <h4>Остались вопросы?</h4>
              <p>Напишите нам, и мы с удовольствием ответим.</p>
              <form className="footer-contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Ваше имя" className="footer-input" />
                <input type="email" placeholder="Ваш E-mail" className="footer-input" />
                <textarea placeholder="Ваш вопрос..." className="footer-textarea" rows={3}></textarea>
                <button type="submit" className="footer-submit-btn">Отправить</button>
              </form>
            </div>
          </div>
        </div>

        {/* Секция 3: Соцсети */}
        <div className="footer-section footer-socials-block">
          <div className="footer-social-links">
            <a href="#vk">ВКонтакте</a>
            <a href="#dzen">Дзен-канал</a>
            <a href="#rutube">RuTube</a>
            <a href="#pinterest">Pinterest</a>
          </div>
          {/* Убрали звёздочку про запрещенную организацию, так как Pinterest не запрещён */}
        </div>

      </div>
    </footer>
  );
};
