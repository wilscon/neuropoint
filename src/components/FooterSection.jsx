import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customTeal text-white py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Neuropoint Precision Therapeutics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;