import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../lib/useAuth";
import { signInWithGoogle, signOutFromGoogle } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const NavbarState = (navItems) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, loading } = useAuth();
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
      {/* Outer flex container */}
      <div className="flex flex-col sm:flex-row justify-between h-auto items-start sm:items-center space-y-4 sm:space-y-0">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-bold cursor-pointer"
          >
            NEUROPOINT
          </h1>
        </div>

        {/* User info and button */}
        <div
          className={`flex items-center space-x-8 ${user ? "" : "hidden"}`}
        >
          {user ? user.email : ""}
          {user && !loading && (
            <button
              onClick={user ? signOutFromGoogle : signInWithGoogle}
              className="px-6 py-2 bg-white text-customTeal font-semibold rounded-lg shadow-md 
                hover:bg-customTeal hover:text-white border-2 border-customTeal 
                transition duration-300 cursor-pointer ml-2"
            >
              Log {user ? <>out</> : <>in</>}
            </button>
          )}
        </div>
      </div>
    </div>
  </nav>
);
  };
  
  export default NavbarState;