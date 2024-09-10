// src/components/AboutInteractive.js
import React from 'react';
import './style/AboutInteractive.css';

const AboutInteractive = () => {
  return (
    <section className="interactive-section">
      <h2>Key Statistics</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <h3>10+</h3>
          <p>Years in Business</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h3>20+</h3>
          <p>Tech Experts</p>
        </div>
      </div>
    </section>
  );
};

export default AboutInteractive;
