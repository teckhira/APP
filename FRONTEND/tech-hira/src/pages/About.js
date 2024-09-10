// src/pages/About.js
import React from 'react';
import CompanyHistory from '../components/CompanyHistory';
import CoreValues from '../components/CoreValues';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OurApproach from '../components/OurApproach';
import OurStory from '../components/OurStory';
import Sustainability from '../components/Sustainability';
import '../components/style/About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <section className="about-hero">
        <h1>About Tech - Hira</h1>
        <p>Innovating the Future with Cutting-Edge Technology</p>
      </section>
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At Tech - Hira, our mission is to empower businesses through innovative and reliable software solutions. 
            We strive to bring your ideas to life by leveraging the latest in technology to create products that 
            not only meet but exceed your expectations. Our commitment to quality and client satisfaction 
            drives everything we do.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology is seamlessly integrated into every aspect of life, 
            making it easier, more productive, and more fulfilling. Our goal is to be at the forefront 
            of this transformation, setting the standard for excellence in software development 
            and digital innovation.
          </p>
        </div>
      </section>
      <CompanyHistory />
      <CoreValues />
      <OurStory />
      <OurApproach />
      <Sustainability />
      <Footer />





    </div>
  );
};

export default About;

