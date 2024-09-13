import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from "../assets/assets_frontend/profile_pic.png"
import dropdown_icon from "../assets/assets_frontend/dropdown_icon.svg"
import header_icon from '../assets/assets_frontend/header_img1.png'



const Navbar = () => {
    const navigate = useNavigate()

    const [showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true)

  return (
    <div className='flex item-center justify-between items-center  py-4 mb-5 border-b border-b-gray-400'>
         <div onClick={()=>{navigate('/')}} className="relative flex items-center ml-4">
      {/* Image positioned behind the text */}
      <img className="absolute w-12 left-4 top--5 -translate-x-6" src={header_icon} alt="Header Icon" />
      {/* Text content */}
      <h1 className="text-green-900 text-3xl font-bold px-6 italic cursor-pointer relative z-10">
        Shannon's Salon
      </h1>
    </div>


    <ul className='hidden md:flex items-start gap-16  py-2 font-semibold ' >
        <NavLink to={'/'}>
            <li>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto  hidden' />
        </NavLink>
        <NavLink to={'/stylist'}>
            <li>OUR STYLIST</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/about'}>
            <li>ABOUT</li>
            <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/contact'}>
            <li>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
    </ul>

        <div>
            {
             token ? 
                <div className='flex items-center gap-3 cursor-pointer mr-10 group relative' >
                    <img className='w-8 rounded-full' src={profile_pic} alt="" />
                    <img className='w-2.5' src={dropdown_icon} alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                            <p onClick={()=>navigate(setToken(false))} className='hover:text-black cursor-pointer'>Log out</p>
                        </div>
                    </div>
                </div>
                  :
                 <button onClick={()=>navigate('/login')} className='bg-green-900 text-primary px-3 py-2 rounded-full font-bold hover:bg-green-700 hover:text-white mr-14 hidden md:block ' >Create Account</button>

            }
        </div>
    </div>
  )
}

export default Navbar