import React from 'react';
import './style/Expertise.css';

const Expertise = () => {
  return (
    <section className="expertise" id="services">
      <h3>Our Expertise</h3>
      <div className="service-box">
        <h4>Web Development</h4>
        <p>Building responsive, high-performance websites and web applications.</p>
      </div>
      <div className="service-box">
        <h4>Mobile App Development</h4>
        <p>Creating user-friendly mobile apps for iOS and Android platforms.</p>
      </div>
      <div className="service-box">
        <h4>Cloud Solutions</h4>
        <p>Implementing scalable cloud infrastructure and services.</p>
      </div>
    </section>
  );
};

export default Expertise;
