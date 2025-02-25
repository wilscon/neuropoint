import React from 'react';
import Review from './Review';


const ReviewSection = () => {
  return (
        <section id="reviews" className="bg-gray-50 pt-6 pb-12 scroll-mt-16">
          <h1 className="text-3xl font-bold text-center text-customTeal mb-8"> Reviews </h1>
          <div className="container mx-auto px-8">
              <Review
                user="Alex Kim"
                rating={5}
                comment="A year ago I experienced a skiing incident that led to a scheduled shoulder surgery.


                A month prior to surgery, I had my eval with Dr. Bowman where he provided insight as to why my shoulder symptoms hadn’t gotten better since the incident and he found that my neck was also a contributing factor in my shoulder pain presentation.


                Follow several dry needling treatment sessions and by following his rehab guidance, I saw improvements that allowed me to cancel the surgery, and was able to pursue my seasonal career activities as a fly fishing / rock climbing guide. I’m amazed at the help he provided and would recommend a consult with Neuropoint to anyone who’s experiencing pain. Thanks Dr. Bowman!"
              />
              <Review
                user="Annalea & Josh"
                rating={5}
                comment="My husband Josh and I have both been dealing with some ongoing discomfort, as we have not had the time to schedule PT visits due to our busy schedules.
                Our initial consult with Zack was seamless and he was able to swing by our house THAT day. What a relief!
                He provided us each with an abundance of information and helped alleviate my low back pain immediately which had been ongoing for several months. Now we schedule follow up visits as needed to help us maintain our active lifestyle’s!"
              />
              <Review
                user="Jordan Powers"
                rating={5}
                comment="I've been having ongoing headaches for the past several months - and after 2 treatment sessions with Zack, they went from twice weekly to once monthly."
              />
          </div>
        </section>  
  );
};


export default ReviewSection;
