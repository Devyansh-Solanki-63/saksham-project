// components/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import CSS file
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons library

const ContactUs = () => {
  return (
    <section id="contact-us" className="contact-us-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Your Mob No:</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="contact-btn btn px-4">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="office-info">
              <h2>Our Office</h2>
              <p>
204, Banker House, Opp Sardar Patel Stadium, Nr Golden Traingle, Beside Kandoi Sweets Navrangpura, Ahmedabad</p>
              <p>City, Country - 123456</p>
            </div>
            <div className="google-map">
              {/* Google Maps Embed */}
              <iframe
                title="Google Maps"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=123%20Street%20Name+(Our%20Office)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-icons text-center">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin className="social-icon" /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-link"><FaInstagram className="social-icon" /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon-link"><FaFacebook className="social-icon" /></a>
        <a href="https://api.whatsapp.com/send?phone=<YourPhoneNumber>" target="_blank" rel="noopener noreferrer" className="icon-link"><FaWhatsapp className="social-icon" /></a>
      </div>
    </section>
  );
}

export default ContactUs;
