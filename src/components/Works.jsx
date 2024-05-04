// components/Works.js
import React, { useState } from 'react';
import './Works.css';

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState('Drones');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderImages = () => {
    // Define images for each category
    const imagesByCategory = {
      Drones: ['https://saksham.biz/wp-content/uploads/2023/10/001-4-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/002-3-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/003-3-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/004-2.jpg'],
      CCTV: ['https://saksham.biz/wp-content/uploads/2023/10/001-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/002-1-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/003-1-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/004-4-2-scaled.jpg'],
      'Rental Home': ['https://saksham.biz/wp-content/uploads/2023/10/001-2-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/002-2-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/003-2-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/004-2-1-scaled.jpg'],
      Training: ['https://saksham.biz/wp-content/uploads/2023/10/001-1-1-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/002-2-1-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/003-1-1-scaled.jpg', 'https://saksham.biz/wp-content/uploads/2023/10/004-scaled.jpg'],
    };

    // Render images based on selected category
    return imagesByCategory[selectedCategory].map((image, index) => (
      <div key={index} className="col-lg-3 col-md-6 mb-4 position-relative">
        <img src={image} alt={`Image ${index + 1}`} className="img-fluid rounded shadow" />
        <div className="image-overlay">
          <div className="image-description">Description for Image {index + 1}</div>
        </div>
      </div>
    ));
  };

  return (
    <section id="works" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Some of Our Works</h2>
        <ul className="nav nav-pills justify-content-center mb-4 rounded-pill" style={{ border: 'none' }}>
          <li className="nav-item">
            <button className={`nav-link ${selectedCategory === 'Drones' ? 'active' : ''}`} onClick={() => handleCategoryChange('Drones')}>Drones</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${selectedCategory === 'CCTV' ? 'active' : ''}`} onClick={() => handleCategoryChange('CCTV')}>CCTV</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${selectedCategory === 'Rental Home' ? 'active' : ''}`} onClick={() => handleCategoryChange('Rental Home')}>Rental Home</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${selectedCategory === 'Training' ? 'active' : ''}`} onClick={() => handleCategoryChange('Training')}>Training</button>
          </li>
        </ul>
        <div className="row">
          {renderImages()}
        </div>
      </div>
    </section>
  );
}

export default Works;

