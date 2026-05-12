import React from 'react';
import Image from 'next/image';
import { communityData } from '@/data/communityData';

// Reusable Custom Checkmark Icon
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
    <circle cx="12" cy="12" r="11" stroke="#f59e0b" strokeWidth="2" fill="white" />
    <path d="M7 12L10.5 15.5L17 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CommunityOutreachPage() {
  const { hero, activities, gallery } = communityData;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-[#838ab3] py-28 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide text-center">
          {hero.title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Activities Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d307b] max-w-4xl mx-auto leading-snug">
              {activities.title}
            </h2>
            {/* Centered Orange Underline */}
            <div className="h-1 w-24 bg-[#f59e0b] mx-auto mt-6"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Left Column */}
            <div className="md:w-1/2 flex flex-col gap-6">
              {activities.leftColumn.map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="md:w-1/2 flex flex-col gap-6">
              {activities.rightColumn.map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckIcon />
                  <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2d307b]">
              {gallery.title}
            </h2>
            {/* Centered Orange Underline */}
            <div className="h-1 w-28 bg-[#f59e0b] mx-auto mt-6"></div>
          </div>

          {/* 3-Column Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((img) => (
              <div 
                key={img.id} 
                className="w-full relative aspect-[4/3] rounded-sm overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                  placeholder="blur" 
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}