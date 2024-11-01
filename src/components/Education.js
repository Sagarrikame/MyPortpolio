import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationData = [
    { degree: 'Bachelor of Science in Information Technology', institution: 'Pillai Collage of Arts, commerce, and Science', year: '2024' },
    { degree: 'JAVA', institution: 'Pillai Collage of Arts, commerce, and Science', year: '2023' },
    { degree: 'C#', institution: 'Pillai Collage of Arts, commerce, and Science', year: '2023' },
    { degree: 'MERN', institution: 'Dr. Angela Yu, Developer and Lead Instructor', year: 'Pursuing' } 
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">Education & Certifications</h2>
      <ul className="education-list">
        {educationData.map((edu, index) => (
          <li key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p>{edu.institution} - {edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
