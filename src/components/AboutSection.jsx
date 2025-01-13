import React from "react";
import Button from './Button'; 
import dryNeedlingPic from '../assets/images/DryNeedlingDiagram.jpeg';


const AboutSection = () => {
    return (
      <section id="about" className="bg-gray-50 pt-6 pb-12 scroll-mt-16">
        <div className="container mx-auto px-8">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-customTeal mb-8 md:mb-0">
                    About
                </h1>
                <h1 className="text-3xl font-bold text-gray-800 text-center">
                    What is NeuroPoint Precision Therapeutics?
                </h1>
            </div>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
                Neuropoint Precision Therapeutics specializes in{' '}
                <a className="underline text-customTeal hover:text-teal-700"
                    href="https://my.clevelandclinic.org/health/treatments/16542-dry-needling"
                    target="_blank">   
                Dry Needling
                </a>
                , delivering easy access to the Skagit County community and surrounding areas. No need
                to leave your home, We bring quality care right to your doorstep.
            </p>
            <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto">
                Also no wait time, no middle man and no insurance denials - this cash
                pay practice is designed to provide you and your loved ones with
                immediate results.
            </p>
             <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">
                What is Dry Needling?
            </h1>
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
  
            <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">
                What Conditions does Dry Needling treat?
            </h1>
  
            <ul className="grid grid-cols-1 list-disc list-inside text-lg text-gray-600 mt-4 gap-y-2 max-w-3xl mx-auto">
                <li>Joint Irritation/Management of Arthritis</li>
                <li>Headaches (Migraine and Tension Type)</li>
                <li>Muscular Trigger Points</li>
                <li>Low Back Pain - Disk Issues</li>
                <li>Tendon related problems (Tendinopathy) </li>
                <li>Nerve Irritation (Numbness, Tingling, Burning)</li>
                <li>Jaw and mouth dysfunction such as temporomandibular join (TMJ) disorders</li>
            </ul>
            <h1 className="text-3xl font-bold text-gray-800 text-center mt-8">
                What to expect during an appointment? 
            </h1>
            <p className="text-lg text-gray-600 text-gray-600 max-w-3xl mx-auto mt-8">
                Once you’ve successfully scheduled a 60 minute treatment session and received confirmation from Dr. Bowman - he will arrive at your specified location with a treatment table and all the required supplies to evaluate and treat your condition.
            </p>
            <p className="text-lg text-gray-600 text-gray-600 max-w-3xl mx-auto mt-8">
            During your session, Dr.Bowman will explain the process, identify specific areas for treatment, and ensure your comfort throughout.For your convenience, wear loose, comfortable clothing that allows easy access to the treatment areas. For example, shorts are ideal for treating the legs, while a tank top works well for the shoulders or arms. If you’re unsure, feel free to ask your therapist for guidance beforehand.
            </p>
            <h1 className="text-xl font-bold text-gray-800 text-center mt-8">Schedule a free 15 min consultation today!</h1>
            <div className="mt-8 text-center">
                <Button text="Schedule Appointment" onClick="#contact" />
            </div>
        </div>
      </section>
    );
};
  
export default AboutSection;