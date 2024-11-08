import React from 'react';
import { useAppointments } from '../Contexts/AppointmentContext';
import { Link } from 'react-router-dom';
const MyAppointments = () => {
  const { appointments } = useAppointments();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center text-primary mb-6'>
          My Appointments
        </h2>
        {appointments.length === 0 ? (
          <p className='text-gray-700 text-center'>No appointments booked yet.</p>
        ) : (
          <ul className='space-y-4'>
            {appointments.map((appointment, index) => (
              <li key={index} className='p-4 border-b border-gray-200'>
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Phone:</strong> {appointment.phone}</p>
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Payment Button */}
        {appointments.length > 0 && (
          <div className="mt-5">
          <Link to='/payment'> <button className="w-full bg-secondary text-white px-4 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300">
              Proceed to Payment
            </button></Link> 
          </div>
        )}
      </div>

     
    </div>
  );
};

export default MyAppointments;
