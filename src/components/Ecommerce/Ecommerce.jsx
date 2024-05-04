import React from 'react';
import HeroSection from '../HeroSection';
import Card from './Card';
import './Ecommerce.css'; // Import the CSS file for styling

const Ecommerce = () => {
  return (
    <div className="ecommerce-page">
      <HeroSection backgroundImages={['https://drones.saksham.biz/wp-content/uploads/2023/10/005-1-scaled.jpg', 'https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7194-scaled.jpg']} texts={['Ecommerce Hero Text']} heroText="Ecommerce" />
      
      <div className="container">
      <div className="text-center intro" >
      <h2 className='mb-4'>Your ONE-STOP destination for cutting-edge technology solutions.</h2>
      <p> Explore our diverse range of products, featuring state-of-the-art drones and CCTV systems designed to elevate your surveillance and aerial imaging experience. From high-performance quadcopters to sophisticated surveillance cameras, we offer innovative solutions tailored to meet your specific needs. Discover the latest advancements in aerial photography, videography, and security surveillance, all at your fingertips. Shop with confidence and unlock the potential of modern technology with our curated selection of products.</p>
      </div>
      </div>


      <div className="container">
        <h2 className="text-center">Featured Drone Products</h2>
        <div className="row mx-0 mt-5">
          <Card
            imageSrc="https://drones.saksham.biz/wp-content/uploads/2023/05/carousel-2.jpg"
            title="VTOL"
            description="Versatile Vertical Takeoff and Landing UAV offering seamless transition between hover and fixed-wing flight. Ideal for urban environments and efficient aerial data collection."
            buttonText="Buy Now"
          />
          <Card
            imageSrc="https://drones.saksham.biz/wp-content/uploads/2023/10/005-1-scaled.jpg"
            title="HF450"
            description="Embrace superior aerial performance with the HF450, boasting an H-frame design for unparalleled durability, stability, and extended flight times, ensuring exceptional image capture capabilities "
            buttonText="Buy Now"
          />
          <Card
            imageSrc="https://drones.saksham.biz/wp-content/uploads/2023/07/DSC_7194-scaled.jpg"
            title="Survey Pro 500"
            description="Compact drone tailored for surveying and mapping. High-precision imaging, extended flight endurance, and intelligent flight planning for efficient data collection"
            buttonText="Buy Now"
          />
          {/* Add similar Card components for other featured products */}
        </div>
      </div>

      <div className="popular-cctv container mb-5">
        <h2 className="text-center mt-5">Popular CCTV Products</h2>
        <div className="row mx-0 mt-5">
          <Card
            imageSrc="https://5.imimg.com/data5/SELLER/Default/2023/4/301458527/QT/VJ/DC/14701532/indoor-camera-500x500.jpg"
            title="Indoor Cameras"
            description="These indoor CCTV cameras feature high-resolution image sensors that provide clear video footage, even in low-light conditions. With infrared night vision capability, wide-angle lenses, and motion detection, they ensure enhanced security. "
            buttonText="Buy Now"
          />
          <Card
            imageSrc="https://5.imimg.com/data5/LK/LO/AU/SELLER-15401797/outdoor-security-cctv-camera.jpg"
            title="Outdoor CCTV Cameras"
            description="Outdoor CCTV cameras are designed for durability with weatherproof and vandal-resistant housing. They offer high-definition video resolution and night vision with infrared LEDs for 24/7 monitoring."
            buttonText="Buy Now"
          />
          <Card
            imageSrc="https://5.imimg.com/data5/SELLER/Default/2022/4/HW/QL/EB/13489967/dahua-nvr-16-channel.png"
            title="Network Video Recorders (NVR)"
            description="NVR systems support IP cameras for high-quality video recording and offer multiple channels for simultaneous camera connections. "
            buttonText="Buy Now"
          />
          
          {/* Add similar Card components for other popular products */}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
