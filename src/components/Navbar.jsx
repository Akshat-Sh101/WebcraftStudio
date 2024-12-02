import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'animate.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 fixed w-full z-100 top-0 shadow-md backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Webcraft Studios
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="lg:flex space-x-8 hidden">
          {['services', 'portfolio', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 text-lg font-medium transition-transform transform hover:scale-105"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center text-white space-y-1"
          onClick={toggleMenu}
        >
          <div
            className={`h-1 w-6 bg-white rounded transition-all ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-white rounded ${
              isOpen ? 'opacity-0' : ''
            } transition-opacity`}
          ></div>
          <div
            className={`h-1 w-6 bg-white rounded transition-all ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
        >
          ✕
        </button>
        {['services', 'portfolio', 'contact'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="block px-6 py-4 text-lg font-medium hover:bg-purple-600 transition-colors"
            onClick={toggleMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

