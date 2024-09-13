import React, { useContext } from 'react';
import salon_bg from '../assets/assets_frontend/salon.png';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Salon = () => {
  const navigate = useNavigate();
  const {stylist} = useContext(AppContext)


  // Get unique locations from the stylist data
  const locations = [...new Set(stylist.map(stylist => stylist.location))];

  return (
    < >
      <h1 className="text-[#af8e6d] text-center text-5xl font-bold my-9">Our Locations</h1>
      <hr className="mx-auto w-24 border-t-2 border-primary mb-16" />

      <div
        className="w-full mb-10 h-[250px] bg-cover bg-repeat flex items-center justify-around"
        style={{
          backgroundImage: `url(${salon_bg})`,
          opacity: 0.7,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Dynamically render salon locations */}
        {locations.map((location) => (
          <div
            key={location}
            onClick={() => navigate(`/stylist/${location}`)}
            className="text-[#af8e6d] text-center p-6 bg-black bg-opacity-50 w-[250px] rounded-lg cursor-pointer hover:text-yellow-500 hover:scale-105 transform transition-all duration-300"
          >
            <h2 className="text-4xl font-bold mb-4">{location}</h2>
            {/* Add your location-specific address here */}
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Salon;
