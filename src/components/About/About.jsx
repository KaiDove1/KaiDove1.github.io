import React from 'react';
import './About.css';

// import image1 from 'path_to_image_1';
// import image2 from 'path_to_image_2';
import uva_campus from '../../resources/sunset_grounds_ss_18.jpg';

const About = () => {
  return (
    <div className="about-content">
      <div className="header">
        <h1>Kai Dove</h1>
        <h2>海 / カイ (Kai)</h2>
      </div>
      
      <div className="bio-section">
        <div className="bio-images">
          <div className="image-box">
            <img alt="My craft began here" />
            <p className="caption">My craft began here</p>
          </div>
          <div className="image-box">
            <img alt="Description 2" />
            <p className="caption">Description 2</p>
          </div>
        </div>
        <div className="bio-text">
          <p>
            I am a dedicated computer science student at the University of Virginia with a strong GPA of 3.92. My passion for solving complex problems has driven me to excel in coursework such as Data Structures, Algorithms, and Advanced Software Development. I’ve led and contributed to projects including a secure infrastructure whistleblower platform and a dynamic personal portfolio website. My practical experience includes a Software Engineer Internship at EOR.us, where I engineered a resume parser application, and a research assistant role where I implemented creative problem-solving exercises. As President of the Science Honor Society, I pioneered methodologies in image registration and statistical shape analysis. These experiences have equipped me with a robust skill set in programming and technical tools, preparing me for a promising career in the tech industry.
          </p>
        </div>
      </div>

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

      <div className="things-i-like">
        <h2>Things I Like to Do</h2>
        <div className="things-section">
          <div className="things-images">
            <div className="image-box">
              <img alt="Hiking in the mountains" />
              <p className="caption">Hiking in the mountains</p>
            </div>
            <div className="image-box">
              <img alt="Playing the guitar" />
              <p className="caption">Playing the guitar</p>
            </div>
          </div>
          <div className="things-text">
            <p>
              In my free time, I love engaging in a variety of activities that enrich my life and keep me balanced. One of my favorite pastimes is hiking in the mountains, where I can connect with nature and enjoy the serene beauty of the outdoors. I also enjoy playing the guitar, which allows me to express my creativity through music. These hobbies not only provide relaxation but also inspire me in my academic and professional pursuits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
