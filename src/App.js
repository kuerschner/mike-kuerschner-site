import React from 'react';
import './App.css';
import 'flexboxgrid2';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
