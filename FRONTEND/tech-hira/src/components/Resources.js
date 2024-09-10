import React from 'react';
import './style/Resources.css';

const Resources = () => {
  return (
    <section className="resources" id="resources">
      <div className="resources-container">
        <h3>Resources & Insights</h3>
        <p>Stay informed with the latest trends and insights in technology, curated by our experts.</p>
        <ul>
          <li><a href="https://www.globalmediainsight.com/blog/web-development-trends/">Latest Trends in Web Development</a></li>
          <li><a href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing">Understanding Cloud Computing</a></li>
          <li><a href="https://www.uxdesigninstitute.com/blog/ultimate-guide-to-mobile-app-design/">Mobile App Best Practices</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Resources;
