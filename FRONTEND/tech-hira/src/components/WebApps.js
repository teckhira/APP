// src/components/WebApps.js
import React from 'react';
import './style/WebApps.css';

const WebApps = () => {
  return (
    <section className="service-web-apps">
      <div className="service-content">
        <h3>Web Applications</h3>
        <p>
          Our web applications are designed to deliver unmatched performance and exceptional user experiences. 
          From comprehensive business solutions to engaging consumer apps, we harness modern technologies to 
          build web applications that drive measurable results.
        </p>
        <ul>
          <li><strong>Custom-built:</strong> Tailored solutions for your specific business goals</li>
          <li><strong>Responsive Design:</strong> Seamless across all devices for optimal user experience</li>
          <li><strong>System Integration:</strong> Smooth integration with existing infrastructure and services</li>
          <li><strong>High Performance:</strong> Optimized for speed, security, and scalability</li>
          <li><strong>Continuous Support:</strong> Ongoing maintenance and updates to keep your app running smoothly</li>
        </ul>
      </div>
    </section>
  );
};

export default WebApps;
