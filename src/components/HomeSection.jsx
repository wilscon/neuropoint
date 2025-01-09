import React from 'react';
import Button from './Button'; 
import LogoNoText from '../assets/images/logoNoText.jpg';

const HomeSection = () => { 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 sm:px-6">
      <div className="flex items-center justify-center bg-gray-100 mb-4">
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 mb-4">
          <img
            src={LogoNoText}
            alt="Profile"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:text-left">
        <div className="text-center sm:ml-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Neuropoint Precision Therapeutics
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-2">
            Bringing Precision Care to your Doorstep!
          </p>
        </div>
      </div>
      <div className="mt-6 sm:mt-8">
        <Button text="Learn More!" onClick="#about" />
      </div>
    </div>
  );
};


export default HomeSection;