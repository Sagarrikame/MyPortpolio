
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './styles/App.css';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
