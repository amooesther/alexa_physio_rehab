import React, { useState, useEffect } from 'react';
import { useAppointments } from '../Contexts/AppointmentContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const MyAppointments = () => {
  const { appointments } = useAppointments();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle loading state
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

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking auth state
  }

  if (!user) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
          <h2 className='text-2xl font-semibold text-center text-primary mb-6'>
            My Appointments
          </h2>
          <p className='text-center text-red-500'>
            You must be logged in to view your appointments.
          </p>
          <Link to='/login'>
            <button className='w-full bg-primary text-secondary font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300'>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Filter appointments for the current user
  const userAppointments = appointments.filter(appointment => appointment.email === user.email);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-center text-primary mb-6'>
          My Appointments
        </h2>

        {/* Show user info only if they have appointments */}
        {userAppointments.length > 0 ? (
          <>
          
            <ul className='space-y-4'>
              {userAppointments.map((appointment, index) => (
                <li key={index} className='p-4 border-b border-gray-200'>
                  <p><strong>Name:</strong> {appointment.name}</p>
                  <p><strong>Email:</strong> {appointment.email}</p>
                  <p><strong>Phone:</strong> {appointment.phone}</p>
                  <p><strong>Date:</strong> {appointment.date}</p>
                  <p><strong>Time:</strong> {appointment.time}</p>
                </li>
              ))}
            </ul>

            {/* Payment Button */}
            <div className="mt-5">
              <Link to='/payment'>
                <button className="w-full bg-secondary text-white px-4 py-3 rounded-full text-sm hover:scale-105 transition-all duration-300">
                  Proceed to Payment
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className='text-gray-700 text-center'>No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
