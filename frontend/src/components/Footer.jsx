import React from 'react';

const Footer = () => {
  return (
    <div className="flex items-center justify-around h-[60px] bg-gray-800 text-white px-4">
      <h3 className="text-300 font-bold">©2024 Shannon's Salon</h3>
      <div className="flex gap-10 text-xs">
        <h4 className='font-bold'>New York Phone: 718-NYC-TEST</h4>
        <h4 className='font-bold'>Atlanta Phone: 718-ATL-TEST</h4>
        <h4 className='font-bold'>Dallas TX Phone: 718-DAL-TEST</h4>
      </div>
    </div>
  );
};

export default Footer;
