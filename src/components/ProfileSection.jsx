import React from 'react';
import Button from './Button'; 
import LogoNoText from '../assets/images/logoNoText.jpg';

const ProfileSection = () => { 
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
            <div className="flex items-center justify-center bg-gray-100">
                <div className="relative w-60 h-60 shadow-lg overflow-hidden">
                  <img
                      src={LogoNoText}
                      alt="Profile"
                      className="absolute left-0 w-full h-auto object-cover"
                  />
                </div>
            </div>
          <div className="flex items-center">
            <div className="ml-8 text-center">
              <h1 className="text-4xl font-bold text-gray-800">
                Neuropoint Precision Therapeutics
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Bringing Precision Care to your Doorstep!
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button text="Learn More!" onClick="#about"/>
          </div>
        </div>
      );
};

export default ProfileSection;