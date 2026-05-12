import React from 'react';
import Image from 'next/image';
import { careerData } from '@/data/careerData';

export default function CareerPage() {
  const { hero, content } = careerData;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Top Hero Section */}
      <div className="bg-[#838ab3] py-28 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide text-center">
          {hero.title}
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col items-center">
        
        {/* Team Image */}
        <div className="w-full relative aspect-[4/3] md:aspect-[16/9] mb-12 shadow-sm">
          {/* Note: If using a static import in careerData.js, remove layout/fill and use standard Next.js image props, or keep fill and object-cover */}
          <Image 
            src={content.image} 
            alt={content.imageAlt}
            fill
            className="object-cover object-center"
            unoptimized // Remove this if using an actual imported static image
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[19px] md:text-[21px] text-[#2d307b] leading-relaxed">
            {content.description}
          </p>
          
          <p className="text-[19px] md:text-[21px] text-[#2d307b]">
            {content.applyText}
            <a 
              href={`mailto:${content.email}`} 
              className="font-bold underline decoration-2 underline-offset-4 hover:text-[#f59e0b] transition-colors"
            >
              {content.email}
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}