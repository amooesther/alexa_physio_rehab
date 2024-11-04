import React from 'react'
import { assets } from '../assets/assets'
import{useNavigate} from 'react-router-dom'

const HeroTwo = () => {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col md:flex-row items-center bg-green-50 rounded-lg px-6 md:px-10 lg:px-20 py-16 gap-8 mt-5'>
      <div className='w-full md:w-1/2'>
        <img className='w-full h-auto rounded-lg' src={assets.headerTwo_img} alt="" />
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4'>
        <p className='text-2xl md:text-3xl lg:text-4xl text-secondary font-semibold'>
          Your Partner In Health and Wellness
        </p>
        <p className='text-base md:text-lg lg:text-xl  font-light leading-relaxed max-w-full md:max-w-[80%]'>
          We are dedicated to delivering outstanding physiotherapy treatment in a warm and supportive environment. Our approach focuses on treating the whole person, not just addressing the symptoms.
        </p>
        <a onClick={()=>navigate('/services')}
          className='flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300' 
          href=""
        >
          Learn More 
          <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default HeroTwo
