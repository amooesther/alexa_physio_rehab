import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home.jsx';
import About from '../src/Pages/About.jsx';
import Contact from '../src/Pages/Contact.jsx';
import Login from '../src/Pages/Login.jsx';
import Appointments from '../src/Pages/Appointments.jsx';
import Profile from '../src/Pages/Profile.jsx';
import Service from '../src/Pages/Service.jsx';
import MyAppointments from './Pages/MyAppointments.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { AppointmentProvider } from './Contexts/AppointmentContext.jsx';
import Payment from './Pages/Payment.jsx';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <AppointmentProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/services' element={<Service />} />
          <Route path='/appointment' element={<Appointments />} />
          <Route path='/my-appointment' element={<MyAppointments />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </AppointmentProvider>
      <Footer />
    </div>
  );
}

export default App;
