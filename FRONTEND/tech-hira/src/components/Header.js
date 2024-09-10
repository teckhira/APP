import React, { useState } from 'react';
import Bottomnav from '../components/BottomNav';
import Logo from './media/logo.png';
import './style/Header.css';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className={`header ${isMenuOpen ? 'header-open' : ''}`}>
      <span className='logospan'>
        <img src={Logo} alt="Logo" />
        <div className="logo">Tech - Hira</div>
      </span>
      <nav className="decnav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </nav>
        <Bottomnav/>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
      </nav>
      <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <>&times;</> : (
            <>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
            </>
          )}
        </button>
    </header>
    
  );
};

export default Header;
