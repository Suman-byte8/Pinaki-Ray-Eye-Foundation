"use client";
import React from 'react';
import Image from 'next/image';
import buildingImage from '../../assets/pinaki-ray-building-pic.webp';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f317b] leading-tight mb-4">
            About Pinaki Ray Eye Foundation
          </h2>
          
          <div className="w-24 h-[3px] bg-[#ff8a00] mb-8"></div>
          
          <p className="text-gray-900 text-lg mb-6 leading-relaxed">
            Pinaki Ray Eye Foundation is a National Award Winning state of art eye hospital in Malda, West Bengal. It has provided comprehensive Ophthalmology care for patients since 1992.
          </p>
          <p className="text-gray-900 text-lg mb-10 leading-relaxed">
            Late Dr. Pinaki Ranjan Ray started the hospital. He was a world renowned Ophthalmologist and philanthropist. His contribution to community eye care is well known. He himself had done more than one lakh fifty thousand eye surgeries single handedly in various eye camps in and around Malda, Bihar, Jharkhand, North East and Assam.
          </p>
          
          <button className="bg-[#ff8a00] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#2f317b] transition-colors shadow-md">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden shadow-xl">
          <Image 
            src={buildingImage}
            alt="Hospital Building"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;