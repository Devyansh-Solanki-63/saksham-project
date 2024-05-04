import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type validation
import './OurClients.css'; // Import CSS file
import Slider from './Slider'

const OurClients = ({ sectionId, heading, clientImages }) => {
  
  return (
    <section id={sectionId} className="our-clients-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">{heading}</h2>
        <Slider clientImages={clientImages}></Slider>
      </div>
    </section>
  );
};

// Define prop types for type validation
OurClients.propTypes = {
  sectionId: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  clientImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OurClients;
