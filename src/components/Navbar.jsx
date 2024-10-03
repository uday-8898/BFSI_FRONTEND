import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import '../styles/Navbar.css'; // If needed for additional styles
import img1 from '../assets/companyLogo.png';

const Navbar = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
    
    <div className='navbarr'>
      <nav className="bg-white shadow shadow-gray-300 w-full px-8 md:px-auto">
        <div className="md:h-20 h-32 mx-auto md:px-4 container flex items-center justify-between">

          {/* Logo */}
          <div className="text-indigo-500 md:order-1">
            <img src={img1} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="text-gray-500 w-full md:w-auto order-2 flex justify-center mx-auto">
  <ul className="flex font-semibold space-x-4">
    {/* Use NavLink instead of anchor tag for routing */}
    <li className="md:px-4 md:py-2 relative group">
      <NavLink to="/" className="hover:text-indigo-500 relative">
        Home
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </NavLink>
    </li>
    <li className="md:px-4 md:py-2 relative group">
      <NavLink to="/dashboard" className="hover:text-indigo-500 relative">
        Dashboard
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </NavLink>
    </li>
    <li className="md:px-4 md:py-2 relative group">
      <NavLink to="/about" className="hover:text-indigo-500 relative">
        About
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </NavLink>
    </li>
    <li className="md:px-4 md:py-2 relative group">
      <NavLink to="/form-details" className="hover:text-indigo-500 relative">
        Register
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </NavLink>
    </li>
  </ul>
</div>


          {/* Login Button */}
          {/* <div className="md:ml-auto order-3">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Login</span>
            </button>
          </div> */}
        </div>
      </nav>
    </div>
    </div>
    
  );
})

export default Navbar;
