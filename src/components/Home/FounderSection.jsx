"use client";
import React from 'react';
import Image from 'next/image';
import founderImg from '@/assets/home/Legacy-Img.png'

const FounderSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="" style={{minHeight: '300px'}}>
          <Image 
            src={founderImg}
            alt="Dr. Pinaki Ranjan Ray Legacy"
            width={1200}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderSection;