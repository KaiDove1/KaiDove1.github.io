import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-text">
          <h3>University of Virginia</h3>
          <h4>College of Engineering</h4>
          <p>Bachelors of Science in Computer Science</p>
          <p>2022 - 2026</p>
        </div>
        <div className="education-image">
          <img src="path_to_your_image.jpg" alt="Berkeley campus during the spring" />
          <p>UVA campus during the Fall</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
