import React from 'react';
import '../styles/Headers.css';

function Header() {
  return (
    <>
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <p className="header-subtitle">Showcasing My Projects & Skills</p>
    </header>
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 mar align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-5 pb-lg-5">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Hello, I'm [Sagar Rikame]</h1>
      <p className="lead">I am a [Web Developer] specializing in [React JS, ASP.NET CORE MVC, JAVA].</p>
      <div className="contact-info">
          <p>Email: sagarrikame3@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/sagar-rikame-ba9376231/" target="_blank" rel="noopener noreferrer">your-profile</a></p>
          <p>GitHub: <a href="https://github.com/Sagarrikame" target="_blank" rel="noopener noreferrer">your-profile</a></p>
        </div>

          
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img className="rounded-lg-3" src="./file.png" alt="Profile_Image" width="720"/>
    </div>
  </div>
  </>
  );
}

export default Header;

