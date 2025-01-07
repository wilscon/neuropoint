import React from 'react';
import Review from './Review';

const TestimonialsSection = () => {
  return (
    <div>
        <section id="testimonials" className="h-screen bg-gray-100 flex items-center justify-center relative px-8">
          <h1 className="absolute top-20 left-4 text-3xl font-bold text-gray-800"> Reviews </h1>
          <div className="flex flex-col space-y-6">
            <Review
              user="John Doe"
              rating={5}
              comment="Neuropoint Precision Therapeutics has been amazing! Their innovative solutions have truly made a difference."
            />
            <Review
              user="Jane Smith"
              rating={4}
              comment="Great service and friendly staff. I appreciate their attention to detail and commitment to quality."
            />
            <Review
              user="Emily Johnson"
              rating={5}
              comment="Neuropoint Precision Therapeutics exceeded my expectations! Their team was professional, knowledgeable, and truly committed to delivering high-quality solutions. I highly recommend their services."
            />
          </div>
        </section>    
    </div>
  );
};

export default TestimonialsSection;