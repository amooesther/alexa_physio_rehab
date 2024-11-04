import React from 'react'
import { assets } from '../assets/assets'
import{useNavigate} from 'react-router-dom'

const Choose = () => {
  const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center  rounded-lg px-6 md:px-10 lg:px-20 py-16 gap-8'>
      <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 w-full'>
        <div className='md:w-1/2 flex flex-col items-center md:items-start gap-4'>
          <p className='text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary'>
            Reasons to choose our Physiotherapy care
          </p>
          <img className='w-3/4 md:w-auto h-auto rounded-lg' src={assets.doctor} alt="Doctor" />
        </div>
        <div className='md:w-1/2'>
          <ul className='list-disc list-outside text-secondary text-sm md:text-base lg:text-lg font-light leading-relaxed space-y-2 md:space-y-4'>
            <li>Personalized Care: Tailored treatment plans to suit your unique needs and goals.</li>
            <li>Expert Team: Highly skilled physiotherapists dedicated to your well-being and recovery.</li>
            <li>Advanced Techniques: Utilizing cutting-edge methods for effective and efficient rehabilitation.</li>
            <li>Compassionate Approach: Empathetic support throughout your healing journey.</li>
            <li>Proven Results: Trusted by our satisfied patients for delivering successful outcomes.</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col items-center text-center gap-4 w-full px-6 md:px-10 lg:px-20 py-10 bg-secondary rounded-lg'>
  <img className='w-full md:w-3/4 lg:w-1/2 rounded-lg' src={assets.ready_img} alt="Ready to start" />
  <p className='text-2xl md:text-3xl font-semibold text-primary'>Ready to start your journey to better health?</p>
  <p className='text-base md:text-lg lg:text-xl text-white font-light'>
    Schedule your consultation today!
  </p>
  <a onClick={()=>navigate('/appointment')} className='flex items-center gap-2 bg-primary text-secondary px-8 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300' href="">
    Book Appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
  </a>
</div>


    </div>
  )
}

export default Choose
