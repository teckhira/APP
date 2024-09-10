import React from 'react';
import First from './media/im.jpeg';
import Three from './media/three.jpeg';
import Two from './media/two.jpeg';

import './style/FeaturedProjects.css';
const FeaturedProjects = () => {
  return (
    <section className="featured-projects" id="projects">
      <h3>Featured Projects</h3>
      <div className="project-grid">
        <div className="project-card">
          <img src={First} alt="Project 1" />
          <h4>Project 1: E-commerce Platform</h4>
          <p>An advanced e-commerce platform with real-time analytics.</p>
        </div>
        <div className="project-card">
          <img src={Two} alt="Project 2" />
          <h4>Project 2: Mobile Banking App</h4>
          <p>A secure and user-friendly mobile banking application.</p>
        </div>
        <div className="project-card">
          <img src={Three} alt="Project 3" />
          <h4>Project 3: Cloud Management System</h4>
          <p>Scalable cloud management solutions for enterprises.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
