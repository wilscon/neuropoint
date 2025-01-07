import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <a
      href={onClick}
      className="px-6 py-3 mt-8 bg-customTeal text-white font-semibold rounded-lg shadow-md 
             hover:bg-white hover:text-customTeal border-2 border-customTeal 
             transition duration-300"
    >
      {text}
    </a>
  );
};

export default Button;