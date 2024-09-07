import React from 'react'
import arrow_icon from '../assets/assets_frontend/arrow_icon.svg'
import header_icon from '../assets/assets_frontend/header_img1.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-green-100 rounded-lg px-6 md:px-10 lg:px-20'>
        {/* left side  */}
        <div >
            <p>Book Appointments with Our <br /> Trusted Stylist </p>
            <p>Simply Browse through our extensive list of trusted stylist <br /> Schedule your appointments hassle-free</p>
        </div>

        <a href="">Book appointments <img src={arrow_icon} alt="" /></a>



        {/* Right side */}
        <div>
            <img src={header_icon} alt="" />
        </div>
    </div>
  )
}

export default Header