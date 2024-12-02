import React from 'react'
import  {  useState } from 'react'
function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
      
        return (
          <>
            <button
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-16 right-0 bg-blue-600 text-white p-4 space-y-4 w-48">
                <a href="#services" className="block">Services</a>
                <a href="#portfolio" className="block">Portfolio</a>
                <a href="#contact" className="block">Contact</a>
              </div>
            )}
          </>
        );
}

export default HamburgerMenu

