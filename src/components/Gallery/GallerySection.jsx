import React from "react";
import MasonryGallery from "./MasonryGallery";

export default function GallerySection({ category, images }) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-[#2d307b]">
          {category}
        </h2>
        {/* Decorative line using your brand orange */}
        <div className="flex-grow h-px bg-gray-200 relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-[#ff8a00]"></div>
        </div>
      </div>
      
      <MasonryGallery images={images} />
    </section>
  );
}