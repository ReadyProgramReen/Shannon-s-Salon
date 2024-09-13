import React from 'react'
import { stylist } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';
const TopStylist = () => {

    const navigate = useNavigate() ;
    return (
      <div className='flex flex-col items-center gap-4 my-16 text-green-900 md:mx-10'>
        <h1 className='text-4xl font-bold'>Top Stylist</h1>
        <p className='sm:w-1/3 text-[#a28364] text-center text-sm'>
          Simply browse through our extensive list of licensed stylists
        </p>
        
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 mt-10 sm:px-0'>
          {stylist.slice(0, 10).map((item, index) => (
            <div
            onClick={()=>{navigate(`/my-appointments/${item._id}`)}}
              className='border border-green-500 rounded-xl bg-[#ecc3ad] h-[320px] overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
              key={index}
            >
              <img className='bg-[#b9aa9a] w-full h-48 object-cover' src={item.image} alt={item.name} />
              <div className='p-4 '>
                <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-gray-600'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className='mt-6 px-10 py-3 bg-green-500 text-yellow-400 font-medium rounded-full hover:bg-green-600 transition-all'>
          More
        </button>
      </div>
    );
  };
  
  export default TopStylist;
  