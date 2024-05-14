import React from 'react';
import { Link } from 'react-scroll';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="path_to_logo" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        </ul>
      </nav>
      <div className="dropdown">
        <h3>Projects</h3>
        <ul className="dropdown-content">
          <li>View All</li>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </div>
      <div className="contact">
        <h3>CONTACT</h3>
        <ul>
          <li><a href="mailto:ybr8ff@virginia.edu">Mail</a></li>
          <li><a href="https://www.linkedin.com/in/kai-dove-5b02b2243/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
