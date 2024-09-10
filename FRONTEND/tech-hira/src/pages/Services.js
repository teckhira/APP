// src/pages/Services.js
import React from 'react';
import CloudSolutions from '../components/CloudSolutions';
import Footer from '../components/Footer';
import FullStack from '../components/FullStack';
import Header from '../components/Header';
import MobileApps from '../components/MobileApps';
import ServiceContact from '../components/ServiceContact';
import ServiceOverview from '../components/ServiceOverview';
import WebApps from '../components/WebApps';
import Websites from '../components/Websites';

const Services = () => {
  return (
    <div>
        <Header/>
        <ServiceOverview />
        <WebApps />
        <Websites />
        <CloudSolutions />
        <MobileApps />
        <FullStack />
        <ServiceContact />
        <Footer/>
    </div>
  );
};

export default Services;
