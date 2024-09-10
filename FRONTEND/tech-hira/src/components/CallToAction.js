import React from 'react';
import './style/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta">
      <h3>Ready to Start Your Next Project?</h3>
      <p>Contact us today to discuss your requirements and discover how we can help you achieve your goals.</p>
      <a href="contact" className="cta-btn">Get in Touch</a>
    </section>
  );
};

export default CallToAction;
