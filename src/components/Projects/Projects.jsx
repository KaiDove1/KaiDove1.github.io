import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: "Project Alpha", date: "04/28/2024" },
    { name: "Project Beta", date: "04/21/2024" },
    { name: "Project Gamma", date: "03/16/2024" },
    { name: "Project Delta", date: "03/03/2024" },
    { name: "Project Epsilon", date: "02/26/2024" }
  ];

  return (
    <div className="projects">
      <h2>Speculative</h2>
      <h1>Ideas about interfaces</h1>
      <p>Some ideas about interfaces that I've thought of and decided to build for fun. If you have any thoughts about these, let me know!</p>
      <hr />
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-name">{project.name}</div>
            <div className="project-date">{project.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
