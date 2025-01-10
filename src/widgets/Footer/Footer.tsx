import cn from 'classnames';
import Button from '@components/Button/Button';
import { FooterProps } from './Footer.props';
import './index.css';

function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer className={cn('footer', className)} {...rest}>
      <div className="footer__content">
        <address itemScope itemType="http://schema.org/Organization">
          <div
            className="footer__info-address"
            itemProp="address"
            itemScope
            itemType="http://schema.org/PostalAddress"
          >
            Г. САНКТ-ПЕТЕРБУРГ ТОРФЯНАЯ ДОРОГА, Д. 7, ЛИТ. Ф, ЧАСТЬ ПОМЕЩЕНИЯ №
            13-Н, ЧАСТЬ КАБИНЕТА № 21, ОФИС 721
          </div>
          <div className="footer__info-contact">
            <a
              className="footer__info-contact-telephone"
              href="tel:+78124559924"
              itemProp="telephone"
            >
              8 (812) 455-99-24
            </a>
            <a
              className="footer__info-contact-mail"
              href="mailto:help@bf-pomosch.ru"
              itemProp="email"
            >
              help@bf-pomosch.ru
            </a>
          </div>
        </address>
        <div className="footer__button_group">
          <Button className="footer__button" location="footer">
            ПОМОЧЬ СЕЙЧАС
          </Button>
          <Button
            className="footer__button"
            location="footer"
            state="secondary"
          >
            НУЖНА ПОМОЩЬ
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
