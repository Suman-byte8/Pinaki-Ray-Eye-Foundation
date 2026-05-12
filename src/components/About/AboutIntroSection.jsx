"use client";
import React from "react";
import Image from "next/image";
import hospitalImg from "../../assets/about/pinaki-ray-building-pic.webp";
const AboutIntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f317b] mb-4">
            About Pinaki Ray Eye Foundation
          </h2>
          <div className="w-20 h-[3px] bg-[#ff8a00] mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Pinaki Ray Eye Foundation is a National Award-Winning state-of-the-art eye hospital in Malda, West Bengal. It has provided comprehensive Ophthalmology care since 1992.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Late Dr. Pinaki Ranjan Ray started the hospital. He was a world-renowned Ophthalmologist and philanthropist. His contribution to community eye care is well known.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Today, the hospital provides quality eye care to people in and around Malda with a dedicated team of doctors and skilled staff.
          </p>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={hospitalImg}
            alt="Hospital Building"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;