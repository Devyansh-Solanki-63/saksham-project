import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css'


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider({clientImages}) {

  return (
    <>
      <Swiper 
      slidesPerView={3}
      spaceBetween={15}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      >
        {clientImages.map((image, index) => (
            <SwiperSlide>
                <img
                key={index}
                src={image.src}
                />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
