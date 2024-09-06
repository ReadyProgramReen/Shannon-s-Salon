import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import profile_pic from "../assets/assets_frontend/profile_pic.png"
import dropdown_icon from "../assets/assets_frontend/dropdown_icon.svg"


const Navbar = () => {
    const navigate = useNavigate()

    const [showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true)

  return (
    <div className='flex item-center justify-between items-center  py-4 mb-5 border-b border-b-gray-400'>
        <h1 className='text-green-900 text-3xl font-bold py-2 px-6 italic cursor-pointer' >Shannon's Salon</h1>

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
                <div>
                    <img src={profile_pic} alt="" />
                    <img src={dropdown_icon} alt="" />
                </div>
                  :
                 <button onClick={()=>navigate('/login')} className='bg-green-900 text-primary px-3 py-2 rounded-full font-bold hover:bg-green-700 hover:text-white mr-14 hidden md:block ' >Create Account</button>

            }
        </div>
    </div>
  )
}

export default Navbar