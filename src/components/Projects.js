import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { title: 'Newsapp', description: 'In this Application, we can check daily updated News by providing all selective categories like entertainment, sports, science, etc. With some attractive and User-friendly Designed' },
    { title: 'Text Converter', description: 'This Text-Converter helps you easily convert text in any form like Upper Case, Lower Case, capitalize, Remove Extra Spaces, Word Count, total Estimation time, and many more features this app provides.' },
    { title: 'Keep Data Safe', description: 'Data Entry Web App Using ASP.NET Core MVC' },
    { title: 'File Clerk', description: 'This Project is usefull when go for photo copy using JAVA' }
  ];

  return (
    <section className="projects-section mb-5">
      <h2 className="section-title ">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src="./project_images.jpeg" alt="Project" className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
