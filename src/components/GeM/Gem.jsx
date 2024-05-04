// Gem.jsx
import React from 'react';
import Header from '../Header';
import HeroSection from '../HeroSection';
import './Gem.css'; // Import the CSS file for styling

const Gem = () => {
  // Inline GemCard component
  const GemCard = ({ image, description, heading }) => (
    <div className="gem-card">
      <img src={image} alt="Gem Image" />
      <h3>{heading}</h3> {/* Add the heading element */}
      <p>{description}</p>
    </div>
  );

  return (
    <div className="gem-page">
      

      <HeroSection 
        backgroundImages={['https://www.gemtenderconsultant.in/assets/images/about.png','https://5.imimg.com/data5/SELLER/Default/2023/8/339283351/MO/HX/YK/11063296/e-marketplace-solution-500x500.jpg']} // Provide appropriate background images
        texts={['Discover GeM services','Saksham']} // Add appropriate texts
        heroText="GeM Consulting" // Use appropriate hero text
      />

      <div className="container">
      <div className="gem-content">
        <h2 className="text-center mt-5 pt-5">Explore GeM Services</h2>
        
        <div className="gem-cards mt-5">
          {/* Render 6 GemCard components */}
          <GemCard 
            image="https://www.gemconsultancy.in/assets/img/services/1.svg" // Provide image URL for each gem
            heading="GeM Training" 
            description="Complete Training from Professionals covering all the aspects of GeM (Government e-Marketplace)." // Add description for Gem 1
          />
          <GemCard 
            image="https://www.gemconsultancy.in/assets/img/services/2.svg" // Provide image URL for each gem
            heading="GeM Registration" 
            description="Registration will be done of your organisation and will create users as per your requirement ." // Add description for Gem 1
          />
          <GemCard 
          image="https://www.gemconsultancy.in/assets/img/services/3.svg" // Provide image URL for each gem
          heading="Order Processing" 
          description="From Accepting of New orders and step to step guidelines to process the order completely." // Add description for Gem 1
        />
        <GemCard 
            image="https://www.gemconsultancy.in/assets/img/services/4.svg" // Provide image URL for each gem
            heading="Bidding & RA" 
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form" // Add description for Gem 1
          />
          <GemCard 
            image="https://www.gemconsultancy.in/assets/img/services/5.svg" // Provide image URL for each gem
            heading="Incident & Rating" 
            description="Incidents & Ratings will definately impact your performance and direct orders. So its better to how to deal with it." // Add description for Gem 1
          />
          <GemCard 
            image="https://www.gemconsultancy.in/assets/img/services/6.svg" // Provide image URL for each gem
            heading="Payment Processing" 
            description="We will guide you, how to followup for payments after the completion of the Order." // Add description for Gem 1
          />
          {/* Repeat this for the remaining GemCards */}
        </div>

        <div className="gem-footer my-5">
          <h3 className="gem-footer-heading mb-5">About Us</h3>
          <div className="gem-footer-content">
            <p className="gem-footer-paragraph">The Aim of Saksham Technolutions is to provide low cost, high quality, inventive and quick tender’s bidding support, so that you have enough time to manage your business. We have an experienced Tech Army who has already bid tenders from most of the departments and portals in pan India networks. Our tender expert army always gets ready to provide online bidding support which is unique and available on request.
Saksham Technolutions Provides step to step Tender Bid Assistance Services to its members who Don’t have a dedicated Bid Manager. We provide end to end solutions for e-Tendering and e-Procurement. covering the entire procurement process such as Tender evaluation, Bid Management, Vendor Registration and Licensing.</p>
            <img src="https://www.gemtenderconsultant.in/assets/images/about.png" alt="Gem" className="gem-footer-image" />
          </div>
     
        </div>
      </div>
      </div>
    </div>
  );
}

export default Gem;
