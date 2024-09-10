import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Tech-Hira. All rights reserved.</p>
        <p>Contact us: <a href="mailto:techhiracontact@gmail.com">techhiracontact@gmail.com</a> | +254 750 032 572</p>
        <div className="social-media">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
