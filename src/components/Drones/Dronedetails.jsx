import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import HeroSection from '../HeroSection';
import './Dronedetails.css';

// Dummy data for demonstration
const droneDetails = {
  's650': {
    id: 's650',
    title: 'S650',
    description: `Robust Hexacopter Design: The S650 features a robust hexacopter configuration with six powerful motors, providing enhanced stability, maneuverability, and redundancy for reliable and safe flights.
      Extended Flight Time: Equipped with high-capacity batteries, the S650 offers an extended flight time, allowing for longer missions and increased operational efficiency.
      Heavy Payload Capacity: With its strong frame and efficient motor system, the S650 can carry a substantial payload, enabling the integration of advanced camera systems, sensors, or other equipment for various applications.`,
    specifications: [
      'Dimensions : 80cm x 80cm x 20cm',
      'Weight : 3.5 kg (Without payload)',
      'Payload Capacity : 2 kg',
      'Flight Time : more than 35 mins',
      'Camera : FPV 2.0 MP',
      'Range : 15km',
      'Propulsion System : Electric battery powered',
      'Maximum speed : 50 km/h',
      'Control System : Ardupilot Based',
      'GPS Navigation : yes',
      'Charging Time : 2 hours',
      'Construction Materials : Carbon Fibre',
      'Battery Type : Lithium Polymer (LiPo)',  
    ],
    images: [
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7317-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/05/DSC_7364-scaled-e1690454711238.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7322-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7389-scaled.jpg',
    ]
  },
  'f450': {
    id: 'f450',
    title: 'F450',
    description: `Versatile Quadcopter Design: The F450 features a versatile quadcopter design, equipped with four powerful motors, providing stability, agility, and ease of maneuverability.
    Agile and Responsive Flight Performance: With its lightweight construction and efficient motor system, the F450 delivers agile and responsive flight performance, allowing for precise control and smooth maneuvering.
    Beginner-Friendly: The F450 is an excellent choice for beginners due to its user-friendly controls and stable flight characteristics, making it easier to learn and operate.  
    Payload Capability: The F450 has a payload capacity that enables the integration of various accessories, such as cameras, sensors, or additional equipment, for a wide range of applications. 
    Customization Options: The F450 offers flexibility for customization, allowing users to modify and tailor the drone to their specific needs, such as adding landing gear, gimbal systems, or upgraded components.
    Durability and Reliability: Built with durable materials, the F450 is designed to withstand impact and resist damage, ensuring long-lasting performance in various environmental conditions.
    Wide Range of Applications: The F450 is suitable for a variety of applications, including aerial photography, videography, recreational flying, educational purposes, and more. 
    Affordable and Accessible: The F450 is known for its affordability and accessibility, making it a popular choice among hobbyists, enthusiasts, and educational institutions.
    These points highlight the key features and advantages of the F450 drone, showcasing its versatility, ease of use, and adaptability for various applications.`,
    specifications: [
      'Dimensions : 50cm x 50cm x 50cm',
      'Weight : 1.9 kg',
      'Flight Time : more than 20 mins',
      'Maximum speed : 40 km/h',
      'Camera : optional',
      'Range : 1.5km',
      'Propulsion System : Electric battery powered',
      'Control System : Ardupilot Based',
      'GPS Navigation : yes',
      'Battery Type : Lithium-ion',
      'Charging Time : 1.5 hours',
      'Construction Materials : FRP',  
    ],
    images: ['https://drones.saksham.biz/wp-content/uploads/2023/05/DSC_0080-scaled-e1690454600982.jpg',
              'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_0030-scaled.jpg',
              'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_0050-scaled.jpg',
              'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_0051-scaled.jpg',
              'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_0053-1-scaled.jpg',
  ]
  },
  
  'hf500': {
    id: 'hf500',
    title: 'HF500',
    description: `H-Frame Design: The HF500 features an H-frame configuration, providing enhanced stability and structural integrity for longer flight durations.
    Carbon Fiber Body: With a carbon fiber body, the HF500 offers excellent strength-to-weight ratio, ensuring durability and reliable performance.
    Extended Flight Time: The HF500’s design and lightweight materials enable extended flight times, allowing for longer missions and increased operational efficiency.
    Aerial Photography and Videography: The HF500 is optimized for aerial photography and videography, capturing high-quality imagery from unique perspectives.
    Versatility in Applications: Suitable for various applications, the HF500 is an ideal choice for aerial inspections, mapping, surveillance, and other specialized tasks.
    Enhanced Stability: The H-frame design and flight control systems ensure stable flight performance, even in challenging weather conditions.
    Customization Options: The HF500 offers flexibility for customization, allowing users to integrate various cameras, sensors, or other equipment based on project requirements.
    User-Friendly Operation: With intuitive controls and ease of handling, the HF500 is accessible to both experienced pilots and newcomers to drone operations.`,
   
    specifications: [
      'Dimensions : 555mm x 501mm x 200mm',
      'Weight : 2.5kg',
      'Payload Capacity : 950g',
      'Flight Endurance : 120 minutes',
      'Range : 15km',
      'Maximum Speed : 50 km/h',
      'Propulsion System : Electric battery powered',
      'Control System : Arduoilot based sustem',
      'Navigation : GPS/GNSS',
      'Imaging Systems : 24MP',
      'Autonomous Flight : Yes',
      'Construction Materials : Carbon Fibre and Aluminium',
],
    images: [
      'https://drones.saksham.biz/wp-content/uploads/2023/07/IMG_20230702_00200964.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/IMG-20230604-WA0011.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/IMG_20230702_00203941.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/IMG-20230604-WA0008-1.jpg',
    ]
  },
  'survey-pro-550': {
    id: 'survey-pro-550',
    title: 'SURVEY PRO 550',
    description: `Tailored for Surveying: The Survey Pro 550 is specifically designed for surveying and mapping applications, providing efficient and accurate data collection capabilities.
    Compact and Agile: With its compact size and agile flight performance, the Survey Pro 550 is well-suited for maneuvering in tight spaces and capturing precise survey data in challenging environments.  
    High-Precision Imaging: Equipped with advanced imaging sensors, the Survey Pro 550 captures high-resolution aerial images, enabling detailed mapping, orthomosaic generation, and 3D modeling.  
    Extended Flight Endurance: The Survey Pro 550 boasts an extended flight endurance, allowing for longer missions and increased coverage of survey areas in a single flight.
    Intelligent Flight Planning: Utilize intelligent flight planning software to optimize survey routes, ensuring efficient coverage and minimizing overlapping for streamlined data collection.
    Real-Time Data Transmission: The Survey Pro 550 supports real-time data transmission, allowing surveyors to monitor and analyze survey data on-site, enabling quick decision-making and adjustments if necessary.
    Customizable Payload Options: The drone offers customizable payload options, enabling the integration of various surveying sensors or cameras based on project requirements, such as multispectral or LiDAR sensors. 
    User-Friendly Operation: The Survey Pro 550 is designed for ease of use, with intuitive controls and automated flight modes, making it accessible to both experienced surveyors and those new to drone-based surveying.`,
    specifications: [
      'Dimensions : 60cm x 60cm x 25cm',
      'Weight : 3.6kg',
      'Payload Capacity : 950g',
      'Flight Endurance : 40+ minutes',
      'Range : 15km',
      'Maximum Speed : 50 km/h',
      'Propulsion System : Electric battery powered',
      'Control System : Arduoilot based sustem',
      'Navigation : GPS/GNSS',
      'Imaging Systems : 20 MP mirrorless',
      'Autonomous Flight : Yes',
      'Construction Materials : Carbon Fibre',   
    ],
    images: [
      'https://drones.saksham.biz/wp-content/uploads/2023/05/DSC_7165-scaled-e1690454658647.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7162-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7100-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7141-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7116-scaled.jpg',
    ]
  },
  'hf450': {
    id: 'hf450',
    title: 'HF450',
    description: `H-Frame Design: The HF450 features an H-frame configuration, providing enhanced stability and structural integrity for longer flight durations.
    Carbon Fiber Body: With a carbon fiber body, the HF450 offers excellent strength-to-weight ratio, ensuring durability and reliable performance.   
    Extended Flight Time: The HF450’s design and lightweight materials enable extended flight times, allowing for longer missions and increased operational efficiency.
    Aerial Photography and Videography: The HF450 is optimized for aerial photography and videography, capturing high-quality imagery from unique perspectives.
    Versatility in Applications: Suitable for various applications, the HF450 is an ideal choice for aerial inspections, mapping, surveillance, and other specialized tasks.
    Enhanced Stability: The H-frame design and flight control systems ensure stable flight performance, even in challenging weather conditions.
    Customization Options: The HF450 offers flexibility for customization, allowing users to integrate various cameras, sensors, or other equipment based on project requirements.
    User-Friendly Operation: With intuitive controls and ease of handling, the HF450 is accessible to both experienced pilots and newcomers to drone operations.`,
    specifications: [
      'Dimensions : 470mm x 470mm x 170mm',
      'Weight : 2kg',
      'Payload Capacity : 1kg',
      'Flight Endurance : 25 minutes',
      'Range : 5km',
      'Maximum Speed : 50 km/h',
      'Propulsion System : Electric battery powered',
      'Control System : Arduoilot based System',
      'Navigation : GPS/GNSS',
      'Imaging Systems : 24MP',
      'Autonomous Flight : Yes',
      'Construction Materials : Carbon Fibre and Aluminium',  
    ],
    images: [
      'https://drones.saksham.biz/wp-content/uploads/2023/10/001-1-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/10/002-1-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/10/003-1-scaled.jpg',
      'https://drones.saksham.biz/wp-content/uploads/2023/10/004-1-scaled.jpg',
    ]
  },
  'vtol': {
    id: 'vtol',
    title: 'VTOL',
    description: `Versatile VTOL Design: The VTOL UAV combines the capabilities of vertical takeoff and landing with fixed-wing flight, providing versatility for various applications.
    Seamless Transition: The VTOL seamlessly transitions between hover and forward flight, offering agility and efficiency in confined spaces and urban environments. 
    Aerial Data Collection: Ideal for aerial data collection, the VTOL is equipped to capture high-resolution imagery, perform mapping, and conduct aerial surveys with precision.
    Long-Range Missions: With its fixed-wing capabilities, the VTOL excels in long-range missions, covering larger areas and extending flight time for extended operations.
    Customizable Payload Integration: The VTOL allows for flexible payload integration, accommodating various cameras, sensors, or other equipment to meet specific project requirements.
    Rapid Deployment: The VTOL’s vertical takeoff and landing capability enables quick deployment, reducing the need for large runways or launch sites.
    Suitable for Challenging Environments: The VTOL’s unique design and flight capabilities make it well-suited for operations in challenging terrains and remote locations.
    Advanced Flight Control Systems: Equipped with advanced flight control systems, the VTOL ensures stable flight performance and precise navigation. `,
    specifications: [
      'Wingspan : 2000 mm',
      'Length : 1800 mm',
      'Weight : 6.8kg',
      'Maximum Takeoff Weight : 7.5kg',
      'Payload Capacity : 950g',
      'Flight Endurance : 100 minutes',
      'Range : 15km',
      'Maximum Speed : 22 m/s',
      'Propulsion System : Electric battery powered',
      'Control System : Arduoilot based sustem',
      'Navigation : GPS/GNSS',
      'Imaging Systems : 24MP',
      'Autonomous Flight : Yes',
      'Construction Materials : Carbon Fibre and Aluminium',
      'Safety Features : Payload protection using Airbag and parachute',
      'Compatible Software : Arduoilot/mission planner/betaFPV',  
    ],
    images: [
    'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_3197-scaled.jpg',
    'https://drones.saksham.biz/wp-content/uploads/2023/07/wp7285561-uav-pilot-wallpapers.jpg',
    'https://drones.saksham.biz/wp-content/uploads/2023/05/carousel-2.jpg',
    'https://drones.saksham.biz/wp-content/uploads/2023/07/wp11902483-vtol-wallpapers.jpg',
    'https://drones.saksham.biz/wp-content/uploads/2023/05/carousel4.jpg',
    ]
  },
  // Add more drone models as needed
};

const DroneDetails = () => {
  // Get the id parameter from the URL
  const { id } = useParams();
  const selectedDrone = droneDetails[id];

  // Check if the selected drone exists
  if (!selectedDrone) {
    return <div>No drone found for ID: {id}</div>;
  }

  // Slider settings for the image carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="drone-details-page">
      <HeroSection 
        backgroundImages={[      'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7317-scaled.jpg',
        'https://drones.saksham.biz/wp-content/uploads/2023/05/DSC_7364-scaled-e1690454711238.jpg',
        'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7322-scaled.jpg',
        'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7389-scaled.jpg',]} // Provide appropriate background images
        texts={['Drone Details']} // Add appropriate texts
        heroText={selectedDrone.title} // Use the drone title as hero text
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
          <div className="mt-5">
              <h2 className="text-center">Images</h2>
              <Slider {...sliderSettings}>
                {selectedDrone.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} className="img-fluid" />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="text-center mt-5">
              <ul className="text-justify">
                {selectedDrone.description.split('\n').map((paragraph, index) => (
                  <li key={index}>{paragraph}</li>
                ))}
              </ul>
            </div>
            <div className="text-center my-5">
              <h2>Specifications</h2>
              <div className="card p-3 mt-3">
                {selectedDrone.specifications.map((specification, index) => (
                  <div key={index} className="specification">
                    <p className="mb-0">{specification}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneDetails;
