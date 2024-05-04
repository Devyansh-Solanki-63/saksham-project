import React from 'react';
import HeroSection from '../HeroSection';
import HomeCard from './HomeCard';

const Home = () => {
  const rentals = [
    { 
      images: ['https://interiorlover.in/wp-content/uploads/2021/02/PicsArt_02-24-01.56.09.jpg' , 'https://interiorlover.in/wp-content/uploads/2021/02/PicsArt_02-24-01.56.09.jpg'], 
      title: 'Luxurious Villa in Ahmedabad', 
      details: `Escape to luxury living in this exquisite villa located in the heart of Ahmedabad. 
      This spacious villa offers a serene oasis amidst the bustling city life. 
      Perfectly suited for families or individuals seeking comfort and elegance.`,
      specifications: [
        'Number of Rooms: 4 Bedrooms, 3 Bathrooms',
        'Facilities: Swimming Pool, Gym, Garden',
        'Total Sqft Area: 3500 sqft',
        'Location: Prime location in Ahmedabad'
      ]
    },
    { 
      images: ['https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment.jpg', 'https://www.decorpot.com/images/apartment/8Living-Dinning-Bommanahalli.jpg','https://www.panchaminteriors.com/images/project/bedroom-interior-designers-in-bangalore.jpg'], 
      title: 'Cozy Apartment near SG Highway', 
      details: `Discover the charm of urban living in this cozy apartment situated near SG Highway. 
      Ideal for small families or professionals, this apartment offers modern amenities 
      and convenient access to nearby shopping centers and restaurants.`,
      specifications: [
        'Number of Rooms: 2 Bedrooms, 2 Bathrooms',
        'Facilities: Parking Space, Security, Elevator',
        'Total Sqft Area: 1200 sqft',
        'Location: Near SG Highway, Ahmedabad'
      ]
    },
    { 
      images: ['https://teja12.kuikr.com/is/a/c/1200x500/gallery_images/original/cf5cdbe8b19929f.gif', 'https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/cf5e8b0b13d2a8a.gif'], 
      title: 'Charming Bungalow in Satellite', 
      details: `Indulge in the elegance of this charming bungalow nestled in the upscale Satellite area of Ahmedabad. 
      With spacious interiors, lush green surroundings, and serene ambiance, 
      this bungalow offers a tranquil retreat from the hustle and bustle of city life.`,
      specifications: [
        'Number of Rooms: 3 Bedrooms, 2 Bathrooms',
        'Facilities: Private Garden, Terrace',
        'Total Sqft Area: 2500 sqft',
        'Location: Satellite, Ahmedabad'
      ]
    },
    // Add more rentals as needed
  ];

  return (
    <div className="home-page">
      <HeroSection backgroundImages={['https://etimg.etb2bimg.com/photo/79503618.cms','https://www.regnews.in/wp-content/uploads/2022/08/short-term-rental.jpg']} texts={['Homes', 'Pgs']} heroText="Rentals" />
      
      <div className="container my-5 pt-5">
        {/* <div className="row row-cols-1 row-cols-md-2 g-4">
          {rentals.map((rental, index) => (
            <div key={index} className="col">
              <HomeCard
                images={rental.images}
                title={rental.title}
                details={rental.details}
                specifications={rental.specifications}
              />
            </div>
          ))}
        </div> */}
        <div className="row mx-0">
          {rentals.map((rental, index) => (
            <div key={index} className="col-4">
              <HomeCard
                images={rental.images}
                title={rental.title}
                details={rental.details}
                specifications={rental.specifications}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
