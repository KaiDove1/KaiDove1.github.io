import React from 'react';
import './Education.css';

import uva_campus from '../../resources/sunset_grounds_ss_18.jpg';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-text">
          <h3>University of Virginia</h3>
          <h4>College of Engineering</h4>
          <p className='education-degree'>Bachelors of Science in Computer Science</p>
          <p className="education-dates">2022 - 2026</p>
        </div>
        <div className="education-image">
          <img src={uva_campus} alt="uva campus" />
        </div>
      </div>
    </div>
  );
};

export default Education;
