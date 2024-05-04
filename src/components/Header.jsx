// // components/Header.js
// import './Header.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="header-section">
//       <Navbar expand="lg" bg="light" variant="light">
//         <div className="container">
//           <Navbar.Brand as={Link} to="/" smooth={'true'} duration={500}>
//             <img className='header-logo' src="https://saksham.biz/wp-content/uploads/2023/05/logo-300x110.png" alt="Your Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarSupportedContent" />
//           <Navbar.Collapse id="navbarSupportedContent">
//             <Nav className="ml-auto">
//               <Nav.Link className='navbar-link' as={Link} to="/" smooth={'true'} duration={500}>Home</Nav.Link>
//               <Nav.Link className='navbar-link' as={ScrollLink} to="about-us" smooth={'true'} duration={500}>About Us</Nav.Link>
//               <Nav.Link className='navbar-link' as={Link} to="our-services" smooth={'true'} duration={500}>Services</Nav.Link>
//               <Nav.Link className='navbar-link' as={Link} to="our-work" smooth={'true'} duration={500}>Products</Nav.Link>
//               <Nav.Link className='navbar-link' as={Link} to="testimonials" smooth={'true'} duration={500}>Testimonials</Nav.Link>
//               <Nav.Link className='navbar-link' as={Link} to="contact-us" smooth={'true'} duration={500}>Contact Us</Nav.Link>
//               <Nav.Link className='navbar-link' as={Link} to="" smooth={'true'} duration={500}>Price Calculator</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;














import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-section">
      <Navbar expand="lg" bg="light" variant="light">
        <div className="container">
          <Navbar.Brand as={NavLink} to="/" exact>
            <img className='header-logo' src="https://saksham.biz/wp-content/uploads/2023/05/logo-300x110.png" alt="Your Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ml-auto">
              {location.pathname === '/' ? (
                <>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="" smooth={true} duration={500} onClick={() => scrollToSection('home')}>Home</Nav.Link>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="about-us" smooth={true} duration={500} onClick={() => scrollToSection('about-us')}>About Us</Nav.Link>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="our-services" smooth={true} duration={500} onClick={() => scrollToSection('our-services')}>Services</Nav.Link>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="our-clients" smooth={true} duration={500} onClick={() => scrollToSection('works')}>Products</Nav.Link>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="testimonials" smooth={true} duration={500} onClick={() => scrollToSection('testimonials')}>Testimonials</Nav.Link>
                  <Nav.Link className='navbar-link' as={ScrollLink} to="contact-us" smooth={true} duration={500} onClick={() => scrollToSection('contact-us')}>Contact Us</Nav.Link>
                  <Nav.Link className='navbar-link' as={NavLink} to="/calculator" activeClassName="active">Calculator</Nav.Link> {/* Change to NavLink and add activeClassName */}
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/">About Us</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Services</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Products</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Testimonials</Nav.Link>
                  <Nav.Link as={NavLink} to="/">Contact Us</Nav.Link>
                  <Nav.Link as={NavLink} to="/calculator">Calculator</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;

