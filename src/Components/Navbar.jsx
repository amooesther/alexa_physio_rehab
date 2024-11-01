import React, { useState } from 'react'
import { assets } from '../assets/assets'
import{NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary'>
        <img className='cursor-pointer' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to="/">
            <li className='py-1 text-secondary'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>  
          <NavLink to="/about">
            <li className='py-1 text-secondary'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/services'>
            <li className='py-1 text-secondary'>Services</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1 text-secondary'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
          </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ?
                <div className='flex items-center cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-12 text-base font-medium text-secondary z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-green-50 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/profile')} className='hover:text-blue-600 cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointment')} className='hover:text-blue-600 cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-blue-600 cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
                :
                <button onClick={()=>navigate('/login')} className='bg-primary text-secondary px-8 py-2 rounded-full font-bold hidden md:block'>Sign in</button>
            }
           
        </div>
    </div>
  )
}

export default Navbar