import React from 'react';

const Review = ({ user, rating, comment }) => {
  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg shadow-md p-6 my-4">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-700 font-bold">{user.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold">{user}</h3>
          <p className="text-sm text-gray-500">{`${rating} Stars`}</p>
        </div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;