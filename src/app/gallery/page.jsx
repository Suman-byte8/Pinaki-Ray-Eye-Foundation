import React from 'react';

import { galleryData } from '@/data/galleryData';
import GallerySection from '@/components/Gallery/GallerySection';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Header */}
      <div className="bg-[#2d307b] text-white py-20 px-4 shadow-md">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#ff8a00] font-bold text-sm uppercase tracking-widest mb-3">
            Glimpses of Excellence
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore moments from our awards, community outreach camps, and our state-of-the-art hospital facilities.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {galleryData.map((section) => (
          <GallerySection 
            key={section.id} 
            category={section.category} 
            images={section.images} 
          />
        ))}
      </div>
      
    </div>
  );
}