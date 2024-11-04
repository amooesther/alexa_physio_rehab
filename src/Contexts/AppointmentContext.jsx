// AppointmentContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Load appointments from local storage when the component mounts
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => {
      const updatedAppointments = [...prevAppointments, appointment];
      // Save to local storage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      return updatedAppointments;
    });
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
