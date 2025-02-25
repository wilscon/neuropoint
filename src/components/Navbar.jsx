import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../lib/useAuth";
import { signInWithGoogle, signOutFromGoogle } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = ({navItems}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,loading} = useAuth();
  const navigate = useNavigate();

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
            <h1 onClick={() => navigate("/")}className="text-2xl font-bold cursor-pointer">NEUROPOINT</h1>
          </div>
        
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a href= {item.path ? "" : "#" + item.name} onClick={(e) => item.path ? navigate(item.path) :  scrollToSection(e, "#" + item.name )} className="hover:text-gray-300">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </a>
              ))}
            </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-2 mb-4">
            {navItems.map((item, index) => (
                  <a href= {item.path ? "" : "#" + item.name} onClick={(e) => item.path ? navigate(item.path) :  scrollToSection(e, "#" + item.name )} className="hover:text-gray-300">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </a>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;