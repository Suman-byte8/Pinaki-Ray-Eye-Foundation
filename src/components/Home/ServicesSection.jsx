"use client";
import React from 'react';
import Image from 'next/image';
import { servicesData } from '../../data/homeData';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f317b]">Services We Provide</h2>
          <div className="w-24 h-[3px] bg-[#ff8a00] mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-[#ff8a00] rounded p-2 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Top Image */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden rounded-t-sm">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              
              {/* Bottom Text */}
              <div className="flex-1 flex items-center justify-center p-6">
                <h3 className="text-[#2f317b] font-bold text-[17px] text-center underline underline-offset-4 decoration-2 decoration-[#2f317b]">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;