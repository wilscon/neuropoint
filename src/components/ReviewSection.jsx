import React from 'react';
import Review from './Review';

const ReviewSection = () => { 
  return (
    <div>
        <section id="testimonials" className="min-h-screen bg-gray-100 flex flex-col items-start justify-start relative px-8 py-12">
          <h1 className="text-3xl font-bold text-customTeal mb-8"> Reviews </h1>
          <div className="flex flex-col space-y-6 w-full">
            <Review
              user="Jordan Powers"
              rating={5}
              comment="I've been having ongoing headaches for the past several months - and after 2 treatment sessions with Zack, they went from twice weekly to once monthly."
            />
            <Review
              user="Alex Kim"
              rating={5}
              comment="A year ago I experienced a skiing incident that led to a scheduled shoulder surgery. 

              A month prior to surgery, I had my eval with Dr. Bowman where he provided insight as to why my shoulder symptoms hadn’t gotten better since the incident and he found that my neck was also a contributing factor in my shoulder pain presentation. 

              Follow several dry needling treatment sessions and by following his rehab guidance, I saw improvements that allowed me to cancel the surgery, and was able to pursue my seasonal career activities as a fly fishing / rock climbing guide. I’m amazed at the help he provided and would recommend a consult with Neuropoint to anyone who’s experiencing pain. Thanks Dr. Bowman!"
            />
          </div>
        </section>  
    </div>
  );
};

export default ReviewSection;