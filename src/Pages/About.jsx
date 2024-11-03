import React from 'react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center px-6 py-12 lg:px-20 lg:py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800 space-y-16">
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center lg:text-left space-y-6 px-4">
        <img src={assets.about_image} alt="About Us" className="rounded-lg shadow-lg w-full max-w-2xl" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
          Alexa Physiotherapy and Rehabilitation Clinic
        </h1>
        <p className="font-thin sm:text-lg md:text-xl  text-gray-600 max-w-2xl mx-auto">
          We Restore, Maintain, and Enhance Our Patients' Mobility, Function, and Well-being.
        </p>
      </div>

      {/* CEO Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 lg:flex lg:items-center lg:space-x-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="lg:w-1/3">
          <div className="relative overflow-hidden rounded-lg shadow-md group">
            <img
              src={assets.CEO_Alexa}
              alt="CEO"
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 p-4 rounded-md text-center shadow-md backdrop-blur-sm">
              <p className="text-secondary font-semibold">PT. Bamidele Samuel Alade</p>
              <span className="text-sm text-gray-600">CEO, Alexa Physiotherapy and Rehabilitation Clinic</span>
            </div>
          </div>
        </div>   

        <div className="lg:w-2/3 text-center lg:text-left space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            PT. Bamidele Samuel Alade is an accomplished senior physiotherapist renowned for his extensive expertise and wealth of experience in the field. With a career spanning various regions of Nigeria and beyond, he has garnered invaluable insights and skills, particularly during his tenure in the UK. Drawing from this wealth of experience, PT Bamidele Samuel Alade founded Alexa Physio Rehab with a vision to establish a premier center for physiotherapy and rehabilitation services.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-5xl bg-green-50 rounded-lg shadow-lg p-10 space-y-6 text-center lg:text-left transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-secondary">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          At Alexa Physiotherapy and Rehabilitation Center, our mission is to empower every individual to achieve optimal functionality and well-being. Since 2017, we have been providing exceptional treatment in Akure and Lagos. Our team of highly qualified consultants and physiotherapists, licensed by the Medical Rehabilitation Therapists Board (MRTB), is dedicated to delivering top-notch, compassionate care within a nurturing and healing environment. We create personalized treatment plans to address each patient’s unique needs, promoting recovery, rehabilitation, and a return to a healthy, active lifestyle.
        </p>
      </div>

      {/* Additional Information Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-10 space-y-6 text-center lg:text-left transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <p className="text-gray-700 leading-relaxed text-lg">
          Founded in Akure in 2018, Alexa Physiotherapy and Rehabilitation has rapidly grown to become a trusted name in physiotherapy and rehabilitation, expanding to Lagos to reach even more individuals in need. Our experienced team of physiotherapists addresses a wide range of conditions.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our dedicated approach involves using evidence-based therapies to create customized rehabilitation plans tailored to individual goals and challenges. At Alexa Physiotherapy and Rehabilitation, our mission is to empower patients to regain their independence, reduce pain, and achieve a higher quality of life through expert care and compassionate support.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
