import React, { useState, useEffect } from 'react';
import './HeroSection.css'


const HeroSection = ({ backgroundImages, texts , heroText}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='hero-container'>
      <section id="hero" className="hero-img d-flex align-items-center" style={{ backgroundImage: `url(${backgroundImages[index]})` }}>
      </section>
      <div className="hero-content container text-center">
        <h1>{heroText}</h1>
        <p>{texts[index]}</p>
      </div>
    </div>
  );
}

export default HeroSection;
