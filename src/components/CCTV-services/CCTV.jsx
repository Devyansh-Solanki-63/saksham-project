import React from 'react';
import HeroSection from '../HeroSection';
import './CCTV.css';
import ServiceCard from '../ServiceCard';

const CCTV = () => {
  return (
    <div className="cctv-page">
      <HeroSection backgroundImages={['https://5.imimg.com/data5/SELLER/Default/2021/2/RK/BJ/EZ/12672892/pan-tilt-zoom-camera.jpg','https://5.imimg.com/data5/SELLER/Default/2023/4/301458527/QT/VJ/DC/14701532/indoor-camera-500x500.jpg','https://lntsufin.com/storage/mediafiles/catalog/live/15861-42/original/15861-42_image_0.jpg']} texts={['CCTV Solutions','NVR','Bullet Cameras']} heroText="CCTV Solutions" />
      
      <div className="cctv-heading pt-5 mt-5">
        <h2>Explore our CCTV Services</h2>
      </div>

      <div className="cctv-cards container my-5">
        {/* Indoor CCTV Cameras */}
        <ServiceCard
          title="Indoor CCTV Cameras"
          description={
            <ul>
              <li>High-resolution image sensors for clear video footage</li>
              <li>Infrared night vision capability for low-light conditions</li>
              <li>Wide-angle lens for expansive coverage</li>
              <li>Motion detection and alerts for enhanced security</li>
              <li>Weatherproof design for indoor use</li>
              <li>Easy installation and setup</li>
            </ul>
          }
          image="https://5.imimg.com/data5/SELLER/Default/2023/4/301458527/QT/VJ/DC/14701532/indoor-camera-500x500.jpg"
        />

        {/* Outdoor CCTV Cameras */}
        <ServiceCard
          title="Outdoor CCTV Cameras"
          description={
            <ul>
              <li>Weatherproof and vandal-resistant housing for outdoor durability</li>
              <li>High-definition video resolution for clear images</li>
              <li>Night vision with infrared LEDs for 24/7 monitoring</li>
              <li>Wide dynamic range (WDR) for enhanced image quality in varying light conditions</li>
              <li>Motion detection and customizable alerts</li>
              <li>Remote access and mobile viewing through smartphone apps</li>
            </ul>
          }
          image="https://5.imimg.com/data5/LK/LO/AU/SELLER-15401797/outdoor-security-cctv-camera.jpg"
        />

        {/* Network Video Recorders (NVR) */}
        <ServiceCard
          title="Network Video Recorders (NVR)"
          description={
            <ul>
              <li>Support for IP cameras for high-quality video recording</li>
              <li>Multiple channels for simultaneous camera connections</li>
              <li>High storage capacity for long-term video retention</li>
              <li>Easy search and playback functionality</li>
              <li>Remote access and monitoring via web browsers or mobile apps</li>
              <li>User-friendly interface for configuration and management</li>
            </ul>
          }
          image="https://5.imimg.com/data5/SELLER/Default/2022/4/HW/QL/EB/13489967/dahua-nvr-16-channel.png"
        />

        {/* Dome CCTV Cameras */}
        <ServiceCard
          title="Dome CCTV Cameras"
          description={
            <ul>
              <li>Discreet and unobtrusive design for indoor surveillance</li>
              <li>360-degree pan, tilt, and zoom functionality for flexible coverage</li>
              <li>High-resolution imaging for detailed video capture</li>
              <li>Day/night functionality for 24/7 monitoring</li>
              <li>Power over Ethernet (PoE) support for easy installation</li>
              <li>Tamper detection and alarm notifications</li>
            </ul>
          }
          image="https://lntsufin.com/storage/mediafiles/catalog/live/15861-42/original/15861-42_image_0.jpg"
        />

        {/* Bullet CCTV Cameras */}
        <ServiceCard
          title="Bullet CCTV Cameras"
          description={
            <ul>
              <li>Robust and weatherproof construction for outdoor use</li>
              <li>Long-range infrared LEDs for night vision</li>
              <li>Adjustable varifocal lens for precise field of view</li>
              <li>Wide dynamic range (WDR) technology for clear images in challenging lighting conditions</li>
              <li>Motion detection and intrusion detection capabilities</li>
              <li>Remote access and monitoring via smartphone apps</li>
            </ul>
          }
          image="https://5.imimg.com/data5/CJ/QW/MY-58395007/bullet-camera.jpg"
        />

        {/* PTZ (Pan-Tilt-Zoom) CCTV Cameras */}
        <ServiceCard
          title="PTZ (Pan-Tilt-Zoom) CCTV Cameras"
          description={
            <ul>
              <li>Motorized pan, tilt, and zoom functionality for flexible surveillance coverage</li>
              <li>High-definition video resolution for detailed image capture</li>
              <li>Preset tours and patterns for automated monitoring</li>
              <li>Auto-tracking feature to follow moving objects</li>
              <li>Two-way audio communication for remote interaction</li>
              <li>Advanced analytics for intelligent event detection</li>
            </ul>
          }
          image="https://5.imimg.com/data5/SELLER/Default/2021/2/RK/BJ/EZ/12672892/pan-tilt-zoom-camera.jpg"
        />
      </div>
    </div>
  );
};

export default CCTV;
