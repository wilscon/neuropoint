import React from 'react';
import StarRating from './StarRating';

import { CheckCircleIcon } from "@heroicons/react/solid"; // Example with Heroicons

const Review = ({ user, rating, comment }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white border rounded-lg shadow-md p-6 my-4">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-700 font-bold">{user.charAt(0)}</span>
        </div>
        <div className="ml-3 flex items-center">
          <h3 className="text-lg font-semibold">{user}</h3>
          <CheckCircleIcon className="h-5 w-5 text-blue-500 ml-2" title="Verified" />
        </div>
      </div>
      <StarRating rating={rating} readOnly />
      <p className="text-gray-700 mt-2">{comment}</p>
    </div>
  );
};

export default Review;
