import Button from '@components/Button/Button';

import Dobro from '@assets/svg/dobro.svg?react';
import Help from '@assets/svg/help.svg?react';

import './index.css';

function Header() {
  return (
    <header className="header">
      <Button className="header__button">Поддержать</Button>
      <div className="header__logo-group">
        <Help className="header__logo--help" />
        <Dobro className="header__logo--dobro" />
        <img
          src="./img/sunrises.png"
          alt="Рассветы"
          className="header__logo--sunrises"
        />
      </div>
    </header>
  );
}

export default Header;
