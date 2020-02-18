import React, { useState } from 'react';
import './App.css';
import 'flexboxgrid2';
import Hero from './sections/Hero';
import About from './sections/About';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme(!theme);
  };

  const themeColor = theme ? '#fff' : '#000';
  const themeBackgroundColor = theme ? '#3b3b3b' : '#fff';


  return (
    <div className="App" style={{color: themeColor, backgroundColor: themeBackgroundColor}}>
      <Hero handleChange={handleChange} theme={theme} />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
