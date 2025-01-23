import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customTeal text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center text-center sm:text-left space-y-2 sm:space-y-0">
        <p>&copy; {new Date().getFullYear()} Neuropoint Precision Therapeutics. All rights reserved.</p>
        <p>
          Made by{' '}
          <a 
            href="https://connorwilson.azurewebsites.net/?company=neuropoint" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-300"
          >
            Connor Wilson
          </a>
        </p>
      </div>
    </footer>
  );
};


export default Footer;