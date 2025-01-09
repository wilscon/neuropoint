import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-8 text-center">
        {/* Section Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Phone Number */}
          <p className="text-lg text-gray-600">
            📞 <a href="tel:3608536806" className="hover:underline">360-853-6806</a>
          </p>

          {/* Email Address */}
          <p className="text-lg text-gray-600">
            ✉️ <a href="mailto:bowman.dpt@gmail.com" className="hover:underline">bowman.dpt@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};


export default ContactSection;