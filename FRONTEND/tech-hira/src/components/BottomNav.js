import React from 'react';
import about from './media/about.png';
import contact from './media/contact.png';
import Home from './media/home.png';
import services from './media/service.png';

import './style/BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li>
          <a href="/">
          <img src={Home} alt="Home" />
          </a>
        </li>
        <li>
          <a href="about">
          <img src={about} alt="about" />
          </a>
        </li>
        <li>
          <a href="services">
          <img src={services} alt="services" />
          </a>
        </li>
        <li>
          <a href="contact">
            <img src={contact} alt="contact" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
