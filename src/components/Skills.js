import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'Problem Solving', level: 'Intermediate' },
  ];

  return (
    <div className='back'>
    <section className="skills-section">

      <div className="skills-list">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span>{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
}

export default Skills;
