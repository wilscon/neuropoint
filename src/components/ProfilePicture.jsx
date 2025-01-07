import React from 'react';
import profilePic from '../assets/images/profile.jpeg';

const ProfilePicture = () => {
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative w-60 h-60 rounded-full border-4 border-customTeal shadow-lg overflow-hidden">
          <img
            src={profilePic}
            alt="Profile"
            className="absolute bottom-[-50px] left-0 w-full h-auto object-cover"
          />
        </div>
      </div>
    );
  };

export default ProfilePicture;