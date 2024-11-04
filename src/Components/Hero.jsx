import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-secondary rounded-lg px-6 py-10 md:px-10 lg:p-20 text-white space-y-6 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="lg:max-w-md space-y-3">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
          Alexa Physiotherapy and Rehabilitation Clinic
        </p>
        <p className="text-base md:text-lg lg:text-xl font-light">
          A conservative way of treatment, guiding you towards optimal health and well-being.
        </p>
        <Link to="/appointment">
          <p className="flex w-48 mt-5 items-center gap-2 bg-primary text-secondary px-4 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300">
            Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
          </p>
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 mt-6 md:mt-0">
        <img 
          src={assets.about_image} 
          alt="Service Introduction" 
          className="w-full md:w-72 lg:w-80 h-auto rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;
