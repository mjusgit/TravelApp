import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-500 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">

          <div className="text-white flex">
            {/* Font Awesome user icon */}
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-white" />
            <h1 className='ms-2 font-bold italic'>MYtinerary</h1>
          </div>
        </div>
        {/* Hamburger menu icon for mobile */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 inset-x-0 bg-red-500 p-4 z-10 text-center">
          <Link
            to='/'
            className="block mt-4 text-white hover:underline hover:text-red-800 active:bg-red-900"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/cities"
            className="block mt-4 text-white hover:underline hover:text-red-800 active:bg-red-900"
            onClick={toggleMenu}
          >
            Destinations
          </Link>
          <Link
           to='/account'
            className="block mt-4 mb-6 text-white hover:underline hover:text-red-800 active:bg-red-900"
            onClick={toggleMenu}
          >
            Account
          </Link>
        </div>
      )}
    </nav>
  );
};

