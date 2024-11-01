import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonials = [
    { id: 1, name: 'Ebenezer Tope', text: 'A very wonderful and high-rated Physiotherapy in Akure, Ondo State.' },
    { id: 2, name: 'Oluwapelumi Omoleke', text: 'They have one of the best hands. Highly recommend for impressive results!' },
    { id: 3, name: 'Ambrose Kolurejo', text: 'Service was okay.' },
    { id: 4, name: 'Ebenezer Tope', text: 'A very wonderful and high-rated Physiotherapy in Akure, Ondo State.' },
    { id: 5, name: 'Oluwapelumi Omoleke', text: 'They have one of the best hands. Highly recommend for impressive results!' },
    { id: 6, name: 'Ambrose Kolurejo', text: 'Service was okay.' },
    { id: 7, name: 'Ebenezer Tope', text: 'A very wonderful and high-rated Physiotherapy in Akure, Ondo State.' },
    { id: 8, name: 'Oluwapelumi Omoleke', text: 'They have one of the best hands. Highly recommend for impressive results!' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  const handleNext = () => setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const handlePrev = () => setStartIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));

  return (
    <div className='flex flex-col items-center  px-6 md:px-10 lg:px-20 py-10 gap-8 rounded-lg'>
      <h3 className='text-2xl md:text-3xl font-semibold text-secondary mb-6 text-center md:text-left '>See what some of our patients have to say</h3>

      <div className='flex justify-center items-center gap-4 mb-4'>
        <button onClick={handlePrev} className='p-2 bg-primary text-white rounded-full hover:bg-primary-dark'>
          ◀
        </button>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl'>
          {testimonials.slice(startIndex, startIndex + 3).map((testimonial) => (
            <div key={testimonial.id} className='flex flex-col bg-green-50 p-6 rounded-lg shadow-md text-center'>
              <p className='text-gray-700 italic mb-4'>" {testimonial.text} "</p>
              <p className='text-gray-900 font-semibold'>- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className='p-2 bg-primary text-white rounded-full hover:bg-primary-dark'>
          ▶
        </button>
      </div>

      <iframe
        className='w-full h-64 rounded-lg border-0'
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=4,%20Ado%20street%20Ijapo%20estate%20Akure%20ondo%20state+(Alexa%20Physiotherapy%20and%20Rehabilitation%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
        title="Clinic Location"
      ></iframe>
    </div>
  );
}

export default Testimonial;
