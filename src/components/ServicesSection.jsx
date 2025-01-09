import React from 'react';
import profilePic from '../assets/images/Strength.jpg';
import dryNeedlingPic from '../assets/images/DryNeedling.jpeg';
import physicalTherapyPic from '../assets/images/PhysicalTherapy.jpg';

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center relative justify-center px-8 mb-8"
    >
      {/* Section Header */}
      <h2 className="absolute top-6 left-6 text-3xl font-bold text-customTeal">
        Services
      </h2>

      {/* Columns Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-6xl">
        

        {/* Column 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Dry Needling</h3>
          <p className="text-gray-600 min-h-[64px]">
            Specialized dry needling techniques to relieve muscle pain and improve performance.
          </p>
          <img
            src={dryNeedlingPic}
            alt="dryNeedling"
            className="w-48 h-48 object-cover rounded-lg shadow-lg mt-4"
          />
        </div>
        {/* Column 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Physical Therapy</h3>
          <p className="text-gray-600 min-h-[64px]">
            Comprehensive physical therapy services to help restore function and mobility.
          </p>
          <img
            src={physicalTherapyPic}
            alt="physicalTherapy"
            className="w-48 h-48 object-cover rounded-lg shadow-lg mt-4"
          />
        </div>

        {/* Column 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg shadow-gray-300 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Strength Training</h3>
          <p className="text-gray-600 min-h-[64px]">
            Personalized strength and conditioning programs to boost physical fitness.
          </p>
          <img
            src={profilePic}
            alt="StrengthTraining"
            className="w-48 h-48 object-cover rounded-lg shadow-lg mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;