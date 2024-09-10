import React from 'react';
import './style/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Tech-Hira transformed our business with their cutting-edge solutions. Highly recommend!"</p>
            <h4>- John Doe, CEO of Company X</h4>
          </div>
          <div className="testimonial-card">
            <p>"Their team is incredibly professional and delivered beyond our expectations."</p>
            <h4>- Jane Smith, CTO of Company Y</h4>
          </div>
          <div className="testimonial-card">
            <p>"We saw a significant increase in our efficiency after implementing their software."</p>
            <h4>- Robert Brown, Manager at Company Z</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
