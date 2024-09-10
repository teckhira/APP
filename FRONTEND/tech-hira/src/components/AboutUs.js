import React from 'react';
import './style/AboutUs.css';

const AboutUs = () => {
    return (
      <section className="about-us" id="about">
        <div className="about-container">
          <h2>About Tech - Hira</h2>
          <p>
            At Tech - Hira, we create innovative software solutions that drive
            success. Our team of experts is dedicated to delivering high-quality,
            cutting-edge technology tailored to meet your unique needs.
          </p>
          <a href="/about" className="read-more-btn">Read More</a>
        </div>
      </section>
    );
};

export default AboutUs;
