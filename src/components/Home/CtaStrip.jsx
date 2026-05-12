"use client";
import React from 'react';

const CtaStrip = () => {
  return (
    <section className="mx-4 my-4 bg-[#ff8a00] py-8 px-6 shadow-inner rounded-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        
        {/* Left Text */}
        <h2 className="text-white text-2xl md:text-3xl font-semibold text-center tracking-wide">
          Schedule a Consultation Today
        </h2>
        
        {/* Right Redirect Button */}
        <a 
          href="https://pinakiray.elihealthsupport.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2f317b] text-white border-[3px] border-white rounded-full px-8 py-3 text-lg font-semibold underline underline-offset-4 decoration-2 hover:bg-white hover:text-[#2f317b] hover:decoration-[#2f317b] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book An Appointment
        </a>
        
      </div>
    </section>
  );
};

export default CtaStrip;