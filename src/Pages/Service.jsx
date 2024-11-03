import React from 'react';
import { assets } from '../assets/assets';

const Service = () => {
  return (
    <section className="serviceContainer flex flex-col items-center px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800 space-y-10 lg:space-y-0 lg:space-x-12">
      
      {/* Introduction Section */}
      <div className="serviceLeft max-w-xl text-center lg:text-left space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">
          We are not your usual physiotherapy clinic
        </h2>
        <p className="text-lg text-gray-600">We are the best at what we do</p>
      </div>

      {/* Service Cards Section */}
      <div className="serviceRight grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        
        {/* Service Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Stroke Rehabilitation</h3>
          <img src={assets.stroke} alt="Stroke Rehabilitation" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Helping patients rebuild strength, mobility, and confidence post-stroke through specialized neuro-rehabilitation techniques.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Back, Neck, and Spine Pain</h3>
          <img src={assets.back_pain} alt="Back Neck and Spine Pain" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Treating chronic pain conditions such as herniated discs, sciatica, and degenerative disc disease.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Sports Injuries</h3>
          <img src={assets.sport_injury} alt="Sports Injuries" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Supporting athletes in recovery from injuries like ligament tears, muscle strains, and joint injuries, with a focus on injury prevention.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Post-Surgical Rehabilitation</h3>
          <img src={assets.surgical_rehab} alt="Post-Surgical Rehabilitation" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Guiding patients after orthopedic surgeries to ensure safe and effective recovery.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Arthritis Management</h3>
          <img src={assets.arth} alt="Arthritis Management" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Helping individuals manage osteoarthritis, rheumatoid arthritis, and other conditions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Neurological Conditions</h3>
          <img src={assets.neurology} alt="Neurological Conditions" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Treating conditions such as multiple sclerosis, Parkinson’s disease, and spinal cord injuries.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-secondary mb-2">Chronic Pain Management</h3>
          <img src={assets.pain} alt="Chronic Pain Management" className="w-full h-48 object-cover rounded-t-lg" />
          <p className="text-gray-700 mt-2">
            Providing relief and functional improvement for chronic pain conditions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Service;
