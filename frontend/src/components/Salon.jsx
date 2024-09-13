import React from 'react';
import salon_bg from '../assets/assets_frontend/salon.png';

const Salon = () => {
  return (
    <>
    <h1 className="text-[#af8e6d] text-center text-5xl font-bold my-9"> Our Locations</h1>
    <hr className="mx-auto w-24 border-t-2 border-primary mb-16" />

    <div
      className="w-full mb-10 h-[250px] bg-cover bg-repeat flex items-center justify-around"
      style={{
        backgroundImage: `url(${salon_bg})`,
        opacity: 0.7, // Set opacity on the background image
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat', // Ensure background repeats
        backgroundPosition: 'center',
        overflow: 'hidden', // Prevent horizontal scroll
      }}
    >
      {/* Salon Location 1 */}
      <div className="text-[#af8e6d] text-center p-6 bg-black bg-opacity-50 rounded-lg cursor-pointer">
        <h2 className="text-4xl font-bold mb-4">New York</h2>
        <p className="text-sm">
          124 Test Street <br /> Brooklyn, NY, 11243
        </p>
        <p className="text-sm mt-2">718-293-TEST</p>
      </div>

      {/* Salon Location 2 */}
      <div className="text-[#af8e6d] text-center p-6 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Atlanta</h2>
        <p className="text-sm">
          2616 Brickell TEST <br /> Atlanta, GA, 30341
        </p>
        <p className="text-sm mt-2">718-293-TEST</p>
      </div>

      {/* Salon Location 3 */}
      <div className="text-[#af8e6d] text-center p-6 bg-black bg-opacity-50 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">Dallas</h2>
        <p className="text-sm">
          1201 N Bowser Test <br /> Richardson, TX, 75081
        </p>
        <p className="text-sm mt-2">718-293-TEST</p>
      </div>
    </div>
    </>
  );
};

export default Salon;
