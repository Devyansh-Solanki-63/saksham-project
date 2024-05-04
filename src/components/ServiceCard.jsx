// components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ServiceCard = ({ id, image, title, description }) => {
  return (
    <div className="service-card card border-0 rounded-3 shadow p-4">
      <div className="card-body text-center">
        {/* <i className={`fas fa-${icon} fa-3x mb-4`} style={{ color: '#007bff' }}></i> */}
        <img className='card-image' src={image} alt="" />
        <h6 className="card-title mb-3">{title}</h6>
        <p className="description card-text mb-4">{description}</p>
        {/* Link to Discover page for each service */}
        <Link to={`/services/${id}`} className="btn">Discover more</Link>
      </div>
    </div>
  );
}

export default ServiceCard;
