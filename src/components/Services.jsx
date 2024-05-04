// components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import imgOne from '../assets/drone-2.png'
import imgTwo from '../assets/cctv.png'
import imgThree from '../assets/robot-1.png'
import imgFour from '../assets/home.png'
import imgFive from '../assets/amazon.png'
import imgSix from '../assets/light-bulb.png'

const Services = () => {
  const servicesData = [
    {
      id: 'drones',
      image: imgOne,
      title: 'Drones',
      description: 'Explore the world from a new perspective with our cutting-edge drone technology for stunning aerial photography and videography.'
    },
    {
      id: 'cctv-services',
      image: imgTwo,
      title: 'CCTV Services',
      description: 'Secure your property and stay connected 24/7 with our advanced CCTV systems for comprehensive video surveillance and monitoring.'
    },
    {
      id: 'drone-training',
      image: imgThree,
      title: 'Drone Training',
      description: 'Unlock your potential in robotics with our expert-led training programs designed to equip you with the latest skills and knowledge in the field.'
    },
    {
      id: 'homes',
      image: imgFour,
      title: 'Rental Homes',
      description: 'Find your perfect home with our wide range of rental properties that cater to all your needs and preferences.'
    },
    {
      id: 'ecommerce',
      image: imgFive,
      title: 'Amazon.in Store',
      description: 'Discover Unique products and enjoy fast, convenient shopping with our trusted Amazon store.'
    },
    {
      id: 'gem',
      image: imgSix,
      title: 'GeM Consultancy',
      description: 'Win lucrative government tenders with our expert consultancy services, providing comprehensive guidance and support throughout the bidding process.'
    }
    // Add more services as needed
  ];

  return (
    <section id="our-services" className="py-5 container">
      <div className="">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
