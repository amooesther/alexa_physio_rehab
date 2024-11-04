import React from 'react'
import { assets } from '../assets/assets'
import{Link} from 'react-router-dom'


const Hero = () => {

  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg px-6 md:px-10 lg:p-20 '>
    <div className='flex flex-col md:flex-row flex-wrap bg-secondary rounded-lg px-6 md:px-10 lg:px-20 '>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[-30px] '>
            <p className='text-3xl md:text-4xl lg:text5xl text-primary font-semibold leading-tight md:leading-tight lg:leading-tight'>ALEXA PHYSIOTHERAPY AND REHABILITATION CLINIC</p>
            <p className='flex items-center text-white font-light w-full md:w-1/2 text-sm'>A conservative way of treatment, guiding you towards optimal health and well-being</p>
          <Link to='/appointment'>  <p  className='flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300' href="">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></p></Link>
        </div>
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg mb-4 md:mb-0' src={assets.about_image} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hero