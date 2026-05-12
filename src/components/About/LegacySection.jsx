"use client";
import React from "react";

const LegacySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2f317b] mb-4">
          Our Legacy
        </h2>

        <p className="text-gray-600 mb-10">
          Fondly remembering our founder, eminent and notable Ophthalmologist of India Late Dr. Pinaki Ranjan Ray.
        </p>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/O01iSoluUp4"
            title="Remembering our founder"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default LegacySection;