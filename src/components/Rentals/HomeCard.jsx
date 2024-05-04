import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homecard.css';

const HomeCard = ({ images, title, details, specifications }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <div className="home-card">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{objectFit: 'cover', height: '200px'}}>
            <img src={image} alt={title} className="home-card-image" />
          </div>
        ))}
      </Slider>
      <div className="home-card-content">
        <h5 className="home-card-title">{title}</h5>
        <p className="home-card-details">{details}</p>
        <ul className="home-card-specifications">
          {specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeCard;
