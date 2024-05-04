import React from 'react';
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import OurClients from './components/OurClients';
import ContactUs from './components/ContactUs'
import './App.css';
// import Cctv from './components/Cctv'
// import Discover1 from './components/Discover1'

function App() {

  const backgroundImages = [
    'https://saksham.biz/wp-content/uploads/2023/10/002-3-scaled.jpg',
    'https://saksham.biz/wp-content/uploads/2023/10/004-2.jpg',
    'https://saksham.biz/wp-content/uploads/2023/10/002-1-scaled.jpg'
  ];
  const texts = ['Quality Services', 'Customer Satisfaction', 'Innovative Solutions'];
  const heroText= 'Welcome to Saksham Group';

  const customClientImages = [
    {src: 'clientImages/AIR_Logo.jpg'},
        {src: 'clientImages/bisag.jpg'},
        {src: 'clientImages/Crystal-Ball.png'},
        {src: 'clientImages/DroneLab.png'},
        {src: 'clientImages/GFRC.jpg'},
        {src: 'clientImages/hudco.jpg'},
        {src: 'clientImages/Kaushalya-University.jpeg'},
        {src: 'clientImages/Kaushalya-University.jpg'},
        {src: 'clientImages/LJ-Universiry.jpg'},
        {src: 'clientImages/NFSU.png'},
        {src: 'clientImages/SILVER-OAK-FINAL.jpg'}
  ];

  return (
      <>
        <HeroSection backgroundImages={backgroundImages} texts={texts} heroText={heroText}/>
        <AboutUs/>
        <Services/>
        <Works/>
        <Testimonials/>
        <OurClients
        sectionId="custom-our-clients" // Custom section ID
        heading="Our Clients" // Custom heading
        clientImages={customClientImages} // Custom client images
        />
        <ContactUs/>

        {/*
            <Cctv />
            <Discover1 />
        */}
        {/* Pending stuff */}
      </>
  );
}

export default App;
