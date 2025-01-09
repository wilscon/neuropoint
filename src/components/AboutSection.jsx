import React from "react";
import Button from './Button'; 
import dryNeedlingPic from '../assets/images/DryNeedlingDiagram.jpeg';


const AboutSection = () => {
    return (
      <section id="about" className="bg-gray-50 py-12">
        <div className="container mx-auto px-8">
          {/* Flex Container for Headings */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            {/* "About" heading - Stays on top for small screens */}
            <h1 className="text-3xl font-bold text-customTeal mb-4 md:mb-0 md:mr-8">
              About
            </h1>
  
            {/* Main Heading - Centers horizontally */}
            <h1 className="text-3xl font-bold text-gray-800 text-center md:text-left">
              What is NeuroPoint Precision Therapeutics?
            </h1>
          </div>
  
          {/* Paragraphs */}
          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Neuropoint Precision Therapeutics specializes in{' '}
            <a
              className="underline text-customTeal hover:text-teal-700"
              href="https://my.clevelandclinic.org/health/treatments/16542-dry-needling"
              target="_blank"
            >
              Dry Needling
            </a>, delivering easy access to the Skagit County community and surrounding areas. No need
            to leave your home, We bring quality care right to your doorstep.
          </p>
          <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Also no wait time, no middle man and no insurance denials - this cash
            pay practice is designed to provide you and your loved ones with
            immediate results.
          </p>
  
          {/* Subheading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">
            What is Dry Needling?
          </h1>
  
          {/* Flex Container for Image and Text */}
          <div className="flex flex-col md:flex-row items-center mt-8 gap-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              When your body isn’t functioning properly, the central nervous
              system (CNS) creates hypersensitized muscle spindles that create
              focal muscle contractions - known as “trigger points”. When these
              spindled muscle fibers are held in a shortened position for
              prolonged time, they don’t receive adequate blood supply. This
              prevents appropriate oxygenation and other nutrients that would
              normally allow your muscle to go back to its normal resting state.
              When this happens, the tissue near your trigger point becomes more
              acidic. Your nerves are then sensitized, which makes the area sore
              and painful. Dry Needling with use of E-STIM helps to restore the
              functionality of the muscles - improving the ability of the muscle
              to contract AND relax! This improves the health of the tissue,
              therefore decreasing pain!
            </p>
  
            <img
              src={dryNeedlingPic}
              alt="dryNeedlingDiagram"
              className="w-full max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
  
          {/* Subheading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">
            What Conditions does Dry Needling treat?
          </h1>
  
          {/* Unordered List */}
          <ul className="grid grid-cols-1 md:grid-cols-2 list-disc list-inside text-lg text-gray-600 mt-4 gap-x-8 gap-y-2 max-w-3xl mx-auto">
            <li>Joint issues</li>
            <li>Disk issues</li>
            <li>Tendonitis</li>
            <li>Migraine and tension-type headaches</li>
            <li>
              Jaw and mouth problems, such as temporomandibular joint (TMJ)
              disorders
            </li>
            <li>Whiplash</li>
            <li>Repetitive motion disorders, such as carpal tunnel syndrome</li>
            <li>Spinal issues</li>
            <li>Pelvic pain</li>
            <li>Night cramps</li>
            <li>Phantom limb pain</li>
            <li>Postherpetic neuralgia, a complication of shingles</li>
          </ul>
  
          {/* Button */}
          <div className="mt-16 text-center">
            <Button text="Schedule Appointment" onClick="#contact" />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;