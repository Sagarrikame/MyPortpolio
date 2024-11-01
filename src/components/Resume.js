import React from 'react';
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>
      <p>Download my resume for a comprehensive overview of my work experience, skills, and projects.</p>
      <a href="./New CV.pdf" download className="resume-download-button">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
