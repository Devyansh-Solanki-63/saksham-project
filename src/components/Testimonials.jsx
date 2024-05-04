// components/Testimonials.js
import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Import CSS file
import hudcoImage from '../assets/hudco.png'
import carbonImage from '../assets/carbon.jpg'
import epfImage from '../assets/EPF.png'
import ljImage from '../assets/LJ.jpg'
import silverOakImage from '../assets/silver.jpg'

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Define testimonials data
  const testimonials = [
    {
      client: 'Vimal Sharma',
      company: 'HUDCO',
      logo: hudcoImage, // Path to the logo image
      message: "SAKSHAM Technolution impresses with innovative, versatile, and high-quality CCTV solutions, making a notable impact across various industries. While their customer service is commendable, continued improvement in proactive engagement and support would elevate their offerings even further."
    },
    {
      client: 'Sagar Soni',
      company: 'Carbon Matrix',
      logo: carbonImage, // Path to the logo image
      message: "A perfect place for Customised UAV development, designing and Manufacturing solutions. As well as They Provide CCTV installation services for Corporates and industries."
    },
    {
      client: 'Rajesh Mohanan',
      company: 'EPF (Vatva Branch)',
      logo: epfImage, // Path to the logo image
      message: "Very prompt response and services i would definitely recommend."
    },
    {
      client: 'Dipesh Panchal',
      company: 'LJ University',
      logo: ljImage, // Path to the logo image
      message: "Saksham Technolution is a leading provider of drones and CCTV solutions in India. They are known for their high-quality products, innovative solutions, and excellent customer service. I highly recommend them to anyone looking for these products or services."
    },
    {
      client: 'Yash Zalavadiya',
      company: 'SilverOak University',
      logo: silverOakImage, // Path to the logo image
      message: "The service provided by them is absolutely good & convenient. I found this reliable and easily accessible for the people."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change the interval as needed (e.g., 5000 milliseconds = 5 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, [currentTestimonialIndex, testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container-fluid">
        <div className="row justify-content-center mx-0">
          <div className="col-md-10">
            <div className="card text-center w-100 testimonial-card">
              <div className="card-body">
                <h2 className="card-title mb-4">Happy Customers</h2>
                <h5 className="card-text mb-4">"{testimonials[currentTestimonialIndex].message}"</h5>
                <div className="mb-4 d-flex justify-content-center">
                  <img className="mx-2 img-fluid" src={testimonials[currentTestimonialIndex].logo} alt="Company Logo" />
                  <div className='mx-2 d-flex flex-column align-items-start justify-content-center'>
                    <p className='mb-0 client'>{testimonials[currentTestimonialIndex].client}</p>
                    <p className='mb-0 company'>{testimonials[currentTestimonialIndex].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
