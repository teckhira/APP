// src/components/Team.js
import React from 'react';
import './style/About.css';

const Team = () => {
  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <p>
        Behind every great solution is a great team. Our experts are passionate about technology 
        and dedicated to delivering exceptional results. With diverse backgrounds in software development, 
        project management, and customer service, our team brings a wealth of knowledge and experience 
        to every project.
      </p>
      <div className="team-grid">
        <div className="team-member">
          <img src="path_to_image" alt="John Doe" />
          <h4>John Doe</h4>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="team-member">
          <img src="path_to_image" alt="Jane Smith" />
          <h4>Jane Smith</h4>
          <p>CTO & Co-Founder</p>
        </div>
        <div className="team-member">
          <img src="path_to_image" alt="Michael Lee" />
          <h4>Michael Lee</h4>
          <p>Lead Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
