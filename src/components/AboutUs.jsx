// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="text-center mb-3">We are SAKSHAM Technolution</h5>
            <p className="text-center">We are a diverse group of companies dedicated to providing innovative solutions and exceptional services across multiple industries.</p>
            {/* Add more content as needed */}
          </div>
          <div className="col-md-6 text-center">
            <img src="https://saksham.biz/wp-content/uploads/2023/05/Home-Team-Jim-Fahad-Digital.jpg" alt="About Us" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
