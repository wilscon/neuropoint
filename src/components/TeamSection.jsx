import React from 'react';
import ProfilePicture from './ProfilePicture'

const TeamSection = () => {
  return (
    <section
      id="team" className="bg-gray-100 flex flex-col items-center justify-center px-8 pt-6 pb-12 scroll-mt-16">      
        <h1 className="text-3xl font-bold text-customTeal text-center mb-8">
          Team
        </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <ProfilePicture className="w-48 h-48 object-cover rounded-full shadow-lg" />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Dr. Zack Bowman
          </h1>
          <ul className="text-lg text-gray-700 space-y-2 list-disc list-inside">
            <li>Doctor of Physical Therapy (DPT)</li>
            <li>Certified Dry Needling Specialist (CDNS)</li>
            <li>Certified Strength and Conditioning Specialist (CSCS)</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-lg text-gray-600 max-w-3xl text-center md:text-left">
        Zack graduated with his Doctor of Physical Therapy degree from the
        University of Montana. Early on he realized the benefits of dry
        needling as an adjunct to his treatment style for its numerous
        implications and massive benefits in decreasing pain, enhancing muscle
        recruitment, and improving neurological function.
      </p>
    </section>
  );
};

export default TeamSection;