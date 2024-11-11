import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Contexts/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Track authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Logout function
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/login');
    setIsDropdownOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.dropdown-trigger')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-primary'>
      <img className='cursor-pointer' src={assets.logo} alt="Logo" />

      
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <Link to="/" onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Home</li>
        </Link>
        <Link to="/about" onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>About</li>
        </Link>
        <Link to='/services' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Services</li>
        </Link>
        <Link to='/contact' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Contact</li>
        </Link>
        <Link to='/my-appointment' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>My Appointments</li>
        </Link>
      </ul>

      <div className='flex items-center gap-4'>
        {user ? (
          <div onClick={toggleDropdown} className='flex items-center cursor-pointer relative dropdown-trigger'>
            <p className="text-base md:text-lg font-semibold text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
              {user.displayName || user.email || "User"}
            </p>
            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
            {isDropdownOpen && (
              <div className='absolute top-full right-0 pt-2 text-base font-medium text-secondary z-20'>
                <div className='min-w-48 bg-green-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => { navigate('/profile'); setIsDropdownOpen(false); }} className='hover:text-blue-600 cursor-pointer'>My Profile</p>
                  <p onClick={() => { navigate('/my-appointment'); setIsDropdownOpen(false); }} className='hover:text-blue-600 cursor-pointer'>My Appointments</p>
                  <p onClick={handleLogout} className='hover:text-blue-600 cursor-pointer'>Logout</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className='bg-primary text-secondary px-8 py-2 rounded-full font-bold hidden md:block'>Sign In</button>
        )}

        {/* Hamburger menu button only visible on small screens */}
        <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <img src={assets.menu_icon} alt="Menu" className='w-6 cursor-pointer' />
        </div>
      </div>

      {/* Navbar links for smaller screens */}
      <ul className={`flex-col md:hidden items-start gap-5 font-medium absolute ${showMenu ? 'flex' : 'hidden'} top-16 left-0 w-full bg-white p-4`}>
        <Link to="/" onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Home</li>
        </Link>
        <Link to="/about" onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>About</li>
        </Link>
        <Link to='/services' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Services</li>
        </Link>
        <Link to='/contact' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>Contact</li>
        </Link>
        <Link to='/my-appointment' onClick={() => setShowMenu(false)}>
          <li className='py-1 text-secondary'>My Appointments</li>
        </Link>
        {user ? (
          <>
            <Link to='/profile' onClick={() => setShowMenu(false)}>
              <li className='py-1 text-secondary'>My Profile</li>
            </Link>
            <p onClick={() => { handleLogout(); setShowMenu(false); }} className='py-1 text-secondary cursor-pointer'>Logout</p>
          </>
        ) : (
          <Link to='/login' onClick={() => setShowMenu(false)}>
            <li className='py-1 text-secondary'>Sign in</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
