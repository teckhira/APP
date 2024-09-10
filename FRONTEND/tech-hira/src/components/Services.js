import React from 'react';
import './style/Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <div className="service-icon">
            {/* Replace with appropriate icons */}
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>We create responsive, scalable, and dynamic websites tailored to your needs.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <h3>App Development</h3>
          <p>Our team designs and develops web apps that offer seamless user experiences.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <h3>Cloud Solutions</h3>
          <p>Implementing scalable cloud infrastructure and services.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
