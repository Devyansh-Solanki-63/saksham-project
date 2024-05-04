import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import ServiceCard from '../ServiceCard';
import OurClients from '../OurClients';
import DroneDetails from './Dronedetails';
import './Drones.css';


const Drones = () => { // Renamed from Discover1
  const location = useLocation();

  const backgroundImages = ['https://drones.saksham.biz/wp-content/uploads/2023/10/003-768x512.jpg', 'https://drones.saksham.biz/wp-content/uploads/2023/10/004-768x512.jpg', 'https://drones.saksham.biz/wp-content/uploads/2023/10/005-768x512.jpg', 'https://drones.saksham.biz/wp-content/uploads/2023/10/007-768x512.jpg'];
  const texts = ['Different Text 1', 'Different Text 2', 'Different Text 3'];
  const heroText = "Drones";

  const customClientImages = [
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/007-768x512.jpg', alt: 'Custom Client 1' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/008--768x512.jpg', alt: 'Custom Client 2' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/009-768x512.jpg', alt: 'Custom Client 3' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/001-768x512.jpg', alt: 'Custom Client 4' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/004-768x512.jpg', alt: 'Custom Client 5' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/009-768x512.jpg', alt: 'Custom Client 3' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/001-768x512.jpg', alt: 'Custom Client 4' },
    { src: 'https://drones.saksham.biz/wp-content/uploads/2023/10/004-768x512.jpg', alt: 'Custom Client 5' },
    // Add more client images as needed
  ];

  const services = [
    { id: 'drones/s650', title: 'S650', description: 'Robust hexacopter drone with extended flight time, heavy payload capacity, and versatile applications. Explore new heights with precision and efficiency.' },
    { id: 'drones/f450', title: 'F450', description: 'Agile quadcopter drone with versatile applications and beginner-friendly controls. Unleash creativity with stability and customizable features.' },
    { id: 'drones/hf500', title: 'HF500', description: 'H-frame drone designed for longer flight time. Durable construction, perfect for capturing aerial imagery and meeting specialized demands.' },
    { id: 'drones/survey-pro-550', title: 'Survey Pro 550', description: 'Compact drone tailored for surveying and mapping. High-precision imaging, extended flight endurance, and intelligent flight planning for efficient data collection.' },
    { id: 'drones/hf450', title: 'HF450', description: 'Embrace superior aerial performance with the HF450, boasting an H-frame design for unparalleled durability, stability, and extended flight times, ensuring exceptional image capture capabilities' },
    { id: 'drones/vtol', title: 'VTOL', description: 'Versatile Vertical Takeoff and Landing UAV offering seamless transition between hover and fixed-wing flight. Ideal for urban environments and efficient aerial data collection' },
    // Add more services and descriptions as needed
  ];



  return (
    <div className="drones-page"> {/* Renamed from discover1-page */}
      {location.pathname === "/services/drones" && (
        <div className="drones-content"> {/* Renamed from discover1-content */}
          <Header />
          <HeroSection backgroundImages={backgroundImages} texts={texts} heroText={heroText} />
          <div className="drones-container"> {/* Renamed from discover1-container */}
            <div className="container">
              <div className="row align-items-center justify-content-center mx-0 pt-5 mt-5">
                <div className="col-md-6">
                  <img src="https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_0024-1536x1020.jpg" alt="Left Image" className="drones-image" /> {/* Renamed from discover-image */}
                </div>
                <div className="col-md-6">
                  <p className="drones-text"> {/* Renamed from discover-text */}
                    <ul>
                      <li>Drone Technology: Offering state-of-the-art drones equipped with advanced features and capabilities to capture stunning aerial imagery and perform a wide range of applications.</li>
                      <li>Customized Solutions: Providing tailored solutions to meet the unique needs of clients from various industries, ensuring the delivery of precise and efficient results.</li>
                      <li>Drone Services: Offering professional drone services such as aerial photography, videography, mapping, surveying, inspections, and more, utilizing the latest technology and expertise.</li>
                      <li>Training and Consultancy: Providing comprehensive training programs and expert consultancy services to equip individuals and organizations with the knowledge and skills necessary to operate drones safely and effectively.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="row align-items-center justify-content-center mx-0">
                <div className="col-md-6">
                  <p className="drones-text"> {/* Renamed from discover-text */}
                    <ul>
                      <li>Integration and Customization: Assisting clients in integrating drone technology into their existing workflows and systems, as well as offering customization options to meet specific requirements.</li>
                      <li>Industry Expertise: Leveraging deep industry knowledge and experience to understand the unique challenges and requirements of various sectors, delivering tailored solutions that drive success.</li>
                      <li>Exceptional Customer Support: Ensuring exceptional customer service and support throughout the entire engagement, from initial consultation to after-sales assistance.</li>
                      <li>Continuous Innovation: Staying at the forefront of technological advancements and industry trends, constantly exploring new possibilities and solutions to provide cutting-edge services.</li>
                    </ul>
                  </p>
                </div>
                <div className="col-md-6">
                  <img src="https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7171-scaled-e1690453446634-1536x1301.jpg" alt="Right Image" className="drones-image" /> {/* Renamed from discover-image */}
                </div>
              </div>

              <h1 className='pt-5 mt-5 text-center'>Drone Variants</h1>
              <div className="row mx-0 py-5 mb-5">
                {services.map((service, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <ServiceCard id={service.id} title={service.title} description={service.description} />
                  </div>
                ))}
              </div>
            </div>
            <OurClients
              sectionId="custom-our-clients" // Custom section ID
              heading="Our Drones" // Custom heading
              clientImages={customClientImages} // Custom client images
            />
          </div>
          {/*           
          <Footer /> */}
        </div>
      )}
    </div>
  );
}

export default Drones; // Renamed from Discover1
