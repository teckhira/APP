// src/components/ServiceContact.js
import React from 'react';
import './style/ServiceContact.css';

const ServiceContact = () => {
  return (
    <section className="service-contact">
      <h3>Ready to Elevate Your Business?</h3>
      <p>
        Let's discuss how Tech - Hira can help you achieve your business goals. 
        Contact us today for a free consultation and quote.
      </p>
      <a href="/contact" className="cta-btn">Contact Us</a>
    </section>
  );
};

export default ServiceContact;
