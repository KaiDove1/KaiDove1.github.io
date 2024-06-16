import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.css';

import image from '../../resources/kai-kanji.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      <nav>
        <div className="main-links">
          <ul>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="ideas" smooth={true} duration={500}>Ideas</Link></li>
            <li><Link to="cv" smooth={true} duration={500}>CV</Link></li>
          </ul>
        </div>
      </nav>
      <div className="interfaces">
        <h3>Epsilon</h3>
        <ul>
          <li>Text</li>
          <li>Text</li>
        </ul>
        <h3>Text</h3>
        <ul>
          <li>Text</li>
          <li>Text</li>
          <li>Text</li>
        </ul>
      </div>
      <div className="contact">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="mailto:ybr8ff@virginia.edu">Mail</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/kai-dove-5b02b2243/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://read.cv" target="_blank" rel="noopener noreferrer">read.cv</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
