// Dronetraining.jsx
import React from 'react';
import HeroSection from '../HeroSection';
import './Dronetraining.css';
import ServiceCard from '../ServiceCard'; // Import the ServiceCard component

const Dronetraining = () => {
  return (
    <div className="dronetraining-page">
      <HeroSection backgroundImages={['https://training.saksham.biz/wp-content/uploads/2023/10/008-1-scaled.jpg', 'https://training.saksham.biz/wp-content/uploads/2023/10/005-1-scaled.jpg']} texts={['Drone Training']} heroText="Drone Training" />

      <div className="container">
        <h2 className="text-center mt-5 pt-5">Our Services</h2>
        <div className="dronetraining row align-items-center justify-content-center mt-5 mx-0">
          <div className="dronetraining col-md-6">
            <img src="https://training.saksham.biz/wp-content/uploads/2023/10/009-2-1536x1024.jpg" alt="Left Image" className="drones-image" /> {/* Renamed from discover-image */}
          </div>
          <div className="col-md-6">
            <p className="dronetraining-text"> {/* Renamed from discover-text */}
              <ul>
                <li>Embark on a journey of discovery and expertise with our drone training programs.</li>
                <li>Whether you’re a beginner or an experienced enthusiast, our expert-led training will equip you with the skills and knowledge needed to navigate the skies confidently.</li>
                <li>From hands-on flight experience to in-depth understanding of drone applications across various industries, our comprehensive programs cover it all. Plus, upon successful completion, you’ll earn a recognized certification, opening doors to exciting opportunities in the ever-evolving world of drones.</li>
                <li>Join us and become a certified drone pilot, ready to explore new horizons.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="training-cards mt-5 pt-5 mb-5">
          {/* Reuse the ServiceCard component */}
          <div className="row">
            <div className="col-4 mb-5">
              <ServiceCard
                title="
          Introduction to Drone and UAVs"
                description="This workshop offers an engaging platform to explore the fundamentals of drones and UAVs, providing an essential foundation for your journey into this evolving field."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="Designing and simulating of multirotor drone (Software Base)"
                description="This workshop is meticulously crafted to guide participants through the process of designing and simulating multirotor drones, unveiling the fusion of creativity and technology that drives modern UAV innovation."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="Multirotor drone complete Assembly and Setup (Electronic Components)"
                description="This workshop dedicated to the complete assembly and setup of multirotor drones. Designed to empower participants with practical skills, this workshop unveils the intricate process of building and configuring electronic components to bring a multirotor drone to life."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="
          Simulator Training"
                description="Explore the virtual skies and elevate your drone piloting skills with our immersive workshop focused on drone simulator training. This hands-on session is designed to empower participants with the tools to enhance their flying proficiency through simulated flight environments."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="RC aircraft designing and building (Fixed wing)"
                description="This workshop focused on RC Aircraft Design and Building for fixed-wing models. This hands-on experience is tailored to guide participants through the intricate process of crafting and engineering their very own fixed-wing aircraft."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="Advance mission planner (On Agriculture)"
                description="Embark on a journey into precision agriculture with our specialized workshop on Mission Planner Setup. This hands-on session is tailored to guide participants through the intricacies of configuring Mission Planner for agricultural drone applications, enabling efficient data collection and analysis."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="Advance mission planner (For Surveying and mapping)"
                description="Unlock the power of precision in aerial surveying and mapping with our dedicated Mission Planner Setup workshop. This session is tailored to guide participants through the intricacies of configuring Mission Planner software for seamless and accurate surveying and mapping missions."
              />
            </div>
            <div className="col-4 mb-5">
              <ServiceCard
                title="Advance mission planner (For Autonomous long-distance flying) "
                description="This hands-on session is designed to equip participants with the skills to plan, configure, and execute autonomous missions for extended distances using Mission Planner software."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dronetraining;
