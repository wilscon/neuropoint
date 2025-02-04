import React from 'react';

const Button = ({ text, location, page}) => {

  const handleClick = (e) => {
    e.preventDefault(); 
    const section = document.querySelector(location);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={page}
      onClick={location ? handleClick : undefined} 
      className="px-6 py-3 mt-8 bg-customTeal text-white font-semibold rounded-lg shadow-md 
             hover:bg-white hover:text-customTeal border-2 border-customTeal 
             transition duration-300 cursor-pointer"
    >
      {text}
    </a>
  );
};

export default Button;