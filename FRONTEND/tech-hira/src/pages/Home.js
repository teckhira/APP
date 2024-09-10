// src/pages/Home.js
import React from 'react';
import AboutUs from '../components/AboutUs';
import CallToAction from '../components/CallToAction';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Resources from '../components/Resources';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs/>
      <Services/>
      <CallToAction/>
      <Resources />
      <FeaturedProjects/>
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
