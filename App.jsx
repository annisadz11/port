import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';  
import Project from './Components/Project/Project';
import Organization from './Components/Organization/Organization';
import Work from './Components/Work/Work';
import Certification from './Components/Certification/Certification';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Project />
      <Organization />
      <Work />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
