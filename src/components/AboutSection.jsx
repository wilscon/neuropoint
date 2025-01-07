import React from 'react';
import ProfilePicture from './ProfilePicture'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center px-8 relative mb-16"
    >
      {/* About Title in Top Left */}
      <h1 className="absolute top-1 left-6 text-3xl font-bold text-gray-800">
        About
      </h1>

      {/* Parent Container with Top Margin */}
      <div className="flex items-center mt-16"> {/* Added mt-16 for top margin */}
        {/* Profile Picture */}
        <ProfilePicture />

        {/* Text Section to the Right */}
        <div className="ml-8 flex flex-col">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Dr. Zack Bowman
          </h1>

          {/* List of Credentials */}
          <ul className="text-lg text-gray-700 space-y-2 list-disc list-inside">
            <li>Doctor of Physical Therapy (DPT)</li>
            <li>Certified Dry Needling Specialist (CDNS)</li>
            <li>Certified Strength and Conditioning Specialist (CSCS)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;