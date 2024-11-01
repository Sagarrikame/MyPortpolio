import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { title: 'Newsapp', description: 'Newsapp' },
    { title: 'Text Converter', description: 'Description of project 2' },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src="#" alt="Project" className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
