import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (event, id) => {
    event.preventDefault(); 
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close the menu after scrolling
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-customTeal text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">NeuroPoint</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-300">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-gray-300">
              About
            </a>
            <a href="#team" onClick={(e) => scrollToSection(e, '#team')} className="hover:text-gray-300">
              Team
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-gray-300">
              Services
            </a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-gray-300">
              Reviews
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-2 mb-4">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-gray-300">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-gray-300">
              About
            </a>
            <a href="#team" onClick={(e) => scrollToSection(e, '#team')} className="hover:text-gray-300">
              Team
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-gray-300">
              Services
            </a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-gray-300">
              Reviews
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-gray-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;