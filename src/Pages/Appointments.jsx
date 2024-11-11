import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useAppointments } from '../Contexts/AppointmentContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Appointments = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state

  const appointmentForm = useRef();
  const { addAppointment } = useAppointments();
  const navigate = useNavigate();

  // Track authentication state using Firebase's onAuthStateChanged
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state when authentication state changes
      setLoading(false); // Once the auth state is loaded, set loading to false
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return; // Prevent sending email while loading

    if (!user) {
      alert('You must be logged in to book an appointment');
      navigate('/login');
      return;
    }

    emailjs.sendForm(
      'service_c2117lt',
      'template_3nmvd25',
      appointmentForm.current,
      'fJjis2aAbJDSXIylL'
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text);
        
        const appointment = { name, email, phone, date, time };

        addAppointment(appointment);

        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');

        alert('Appointment booked successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to book appointment, please try again.');
      }
    );
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center text-secondary mb-6'>
          Book Your Appointment
        </h2>

        {/* Show a loading message while auth state is being checked */}
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <form ref={appointmentForm} onSubmit={sendEmail}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name="phone_number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>
                Appointment Date
              </label>
              <input
                type='date'
                id='date'
                name="appointment_date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='time'>
                Appointment Time
              </label>
              <input
                type='time'
                id='time'
                name="appointment_time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-primary text-secondary font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'
            >
              Book Appointment
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-red-500 mb-4">You must be logged in to book an appointment.</p>
            <button
              onClick={() => navigate('/login')}
              className='py-2 px-4 bg-primary text-secondary font-bold rounded hover:scale-105 transition-all duration-300'
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
