import React from 'react';
import { assets } from '../assets/assets';
import{Link} from 'react-router-dom'

const Service = () => {
 
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800 space-y-10 lg:space-y-20"> 
  
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-secondary rounded-lg px-6 py-10 md:px-10 lg:p-20 text-white space-y-6 md:space-y-0 md:space-x-8">
        
        {/* Text Content */}
        <div className="lg:max-w-md space-y-3">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            We are not your usual physiotherapy clinic
          </p>
          <p className="text-base md:text-lg lg:text-xl font-light">
            We are the best at what we do
          </p>
        <Link to='/appointment'><a className='flex w-48 items-center gap-2 bg-primary text-secondary px-4 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300' href="">Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a></Link>  
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <img 
            src={assets.service_img} 
            alt="Service Introduction" 
            className="w-full md:w-72 lg:w-80 h-auto rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="serviceRight grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        
        {/* Service Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.stroke} alt="Stroke Rehabilitation" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Stroke Rehabilitation</h3>
          <p className="text-gray-700">
            Helping patients rebuild strength, mobility, and confidence post-stroke through specialized neuro-rehabilitation techniques.
          </p>
        </div>

        {/* Other Service Cards */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.back_pain} alt="Back, Neck, and Spine Pain" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Back, Neck, and Spine Pain</h3>
          <p className="text-gray-700">
            Treating chronic pain conditions such as herniated discs, sciatica, and degenerative disc disease.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.sport_injury} alt="Sports Injuries" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Sports Injuries</h3>
          <p className="text-gray-700">
            Supporting athletes in recovery from injuries like ligament tears, muscle strains, and joint injuries, with a focus on injury prevention.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.surgical_rehab} alt="Post-Surgical Rehabilitation" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Post-Surgical Rehabilitation</h3>
          <p className="text-gray-700">
            Guiding patients after orthopedic surgeries to ensure safe and effective recovery.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.arth} alt="Arthritis Management" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Arthritis Management</h3>
          <p className="text-gray-700">
            Helping individuals manage osteoarthritis, rheumatoid arthritis, and other conditions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.neurology} alt="Neurological Conditions" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Neurological Conditions</h3>
          <p className="text-gray-700">
            Treating conditions such as multiple sclerosis, Parkinson’s disease, and spinal cord injuries.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <img src={assets.pain} alt="Chronic Pain Management" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Chronic Pain Management</h3>
          <p className="text-gray-700">
            Providing relief and functional improvement for chronic pain conditions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Service;
