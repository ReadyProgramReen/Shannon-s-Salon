import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-4 mb-5 border-b border-b-gra'>
        <h1>Shannon's Salon</h1>
        <NavLink>
            <li>HOME</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>ALL STYLIST</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>ABOUT</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>Contact</li>
            <hr />
        </NavLink>

        <div>
            <button>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar