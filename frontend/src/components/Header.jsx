import React from 'react'
import arrow_icon from '../assets/assets_frontend/arrow_icon.svg'
import header_icon from '../assets/assets_frontend/header_img1.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* left side  */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-5 py-10 m-auto md:py-[10vw] md:mb-[-30px]' >
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-500 leading-tight md:leading-tight lg:leading-tight' >Book Appointments With Our Trusted Stylist </p>
            <p className='text-[#3a4a3b] font-medium mb-5'>Simply Browse through our extensive list of trusted stylist <br /> Schedule your appointments hassle-free</p>
            <a href="" className='flex items-center gap-2 bg-[#eec4ae]  px-6 py-3 rounded-full text-yellow-500 text-,d font-medium md:m-0 hover:scale-105 hover:font-semibold transition-all duration-300'>Book Appointment <img className='mt-1' src={arrow_icon} alt="" /></a>
        
        </div>




        {/* Right side */}
        <div>
            <img  src={header_icon} alt="" />
        </div>
    </div>
  )
}

export default Header