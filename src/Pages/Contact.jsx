import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j7im2hd', // Replace with your EmailJS Service ID
        'template_atpdnyi', // Replace with your EmailJS Template ID
        form.current,
        'fJjis2aAbJDSXIylL' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4 md:p-10 lg:p-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">Leave us a message</h2>
      
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 800 000 0000"
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="user_message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type in your message"
              required
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
