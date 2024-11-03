import React, { useState } from 'react';
import h from './Header.module.scss';
import headerLogo from '../../images/icon.png';
import headerBurgerLogo from '../../images/burger.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
    console.log(isMenuOpen);
  };

  return (
    <header className={h.header}>
      <div className={h.container}>
        <nav className={h.nav}>
          <img src={headerLogo} alt="Logo" className={h.nav__img} />
         
          {/* Menyu ro'yxati */}
          <ul className={`${h.header__list} ${isMenuOpen ? h.active : ''}`}>
            <li className={h.header__listItem}>
              <a href="#about" className={h.header__link}>About</a>
            </li>
            <li className={h.header__listItem}>
              <a href="#skills" className={h.header__link}>Skills</a>
            </li>
            <li className={h.header__listItem}>
              <a href="#interesting" className={h.header__link}>Interesting</a>
            </li>
            <li className={h.header__listItem}>
              <a href="#portfolio" className={h.header__link}>Portfolio</a>
            </li>
            <li className={h.header__listItem}>
              <a href="#contact" className={h.header__link}>Contact</a>
            </li>
          </ul>
          <img
            className={h.header__logoBurger}
            src={headerBurgerLogo}
            alt="Menu"
            onClick={toggleMenu} 
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
