import React from 'react';
import {assets} from '../assets/assets'


const Footer = () => {
  return (
    <div className='w-full max-w-full flex flex-col md:flex-row items-start justify-between bg-secondary text-white px-4 md:px-8 lg:px-16 py-6 gap-6'>
      
      {/* Left Section with More Width */}
      <div className='md:w-1/5 flex flex-col items-start lg:w-screen'>
        <img src={assets.logo2} alt="Alexa Physiotherapy and Rehabilitation Clinic" className='w-28 mb-3' />
        <p className='text-xs md:text-sm leading-snug text-white opacity-75'>
          Alexa Physiotherapy and Rehabilitation Clinic offers a unique experience. We provide personalized care through advanced techniques in a tranquil environment, with highly qualified staff dedicated to your well-being and speedy recovery.
        </p>
        <span className='mt-2 text-xs opacity-75'>&copy; 2024 Alexa Physio Rehab</span>
      </div>
      
      {/* Quick Links */}
      <div className='md:w-2/6 flex flex-col mt-10'>
        <h3 className='font-semibold text-sm mb-2 opacity-90'>Quick Links</h3>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Home</p>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Login</p>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Contact Us</p>
      </div>
      
      {/* Services */}
      <div className='md:w-1/6 flex flex-col mt-10'>
        <h3 className='font-semibold text-sm mb-2 opacity-90'>Services</h3>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Appointments</p>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Services</p>
        <p className='hover:text-primary cursor-pointer text-xs opacity-75'>Products</p>
      </div>
      
      {/* Address Section */}
      <div className='md:w-3/4 flex flex-col mt-10'>
        <h3 className='font-semibold text-sm mb-2 opacity-90'>Address</h3>
        <div className='flex items-start gap-2'>
          <img src={assets.location_icon} alt="Location Icon" className='w-4 h-4' />
          <p className='text-xs md:text-sm leading-snug opacity-75'>Akure: No. 3 Ado Street, Ijapo Estate, Akure, Ondo State</p>
        </div>
        <div className='flex items-start gap-2 mt-2'>
          <img src={assets.location_icon} alt="Location Icon" className='w-4 h-4' />
          <p className='text-xs md:text-sm leading-snug opacity-75'>Lagos: 44 Community Road, Off Bamishile Street, Off Allen Avenue, Ikeja, Lagos</p>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
