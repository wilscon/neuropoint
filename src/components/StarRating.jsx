import React from 'react';

const StarRating = ({ rating, readOnly }) => {
    return (
      <div className='flex space-x-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => {
              if (readOnly) {
                return;
              }
             
            }}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-400'
            } ${readOnly ? 'cursor-default' : 'cursor-pointer'} 
            `}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  export default StarRating;