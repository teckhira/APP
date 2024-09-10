// src/components/CoreValues.js
import React from 'react';
import './style/CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values">
      <h2>Our Core Values</h2>
      <div className="values-grid">
        <div className="value-item">
          <h3>Integrity</h3>
          <p>We uphold the highest standards of integrity in all our actions.</p>
        </div>
        <div className="value-item">
          <h3>Innovation</h3>
          <p>We foster a culture of creativity and innovation to drive success.</p>
        </div>
        <div className="value-item">
          <h3>Excellence</h3>
          <p>We strive for excellence in every aspect of our business.</p>
        </div>
        <div className="value-item">
          <h3>Customer Focus</h3>
          <p>We prioritize our clients' needs and deliver tailored solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
