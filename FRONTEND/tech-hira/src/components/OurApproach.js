// src/components/OurApproach.js
import React from 'react';
import './style/OurApproach.css';

const OurApproach = () => {
  return (
    <section className="our-approach">
      <h2>Our Approach</h2>
      <div className="approach-steps">
        <div className="step">
          <div className="step-icon">1</div>
          <div className="step-content">
            <h3>Understand Your Needs</h3>
            <p>We start by gaining a deep understanding of your business requirements and goals.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">2</div>
          <div className="step-content">
            <h3>Design & Development</h3>
            <p>Our team crafts innovative solutions that are tailored to meet your specific needs.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">3</div>
          <div className="step-content">
            <h3>Testing & Refinement</h3>
            <p>We rigorously test and refine our solutions to ensure they exceed your expectations.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">4</div>
          <div className="step-content">
            <h3>Deployment & Support</h3>
            <p>Once ready, we deploy the solution and provide ongoing support to ensure success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
