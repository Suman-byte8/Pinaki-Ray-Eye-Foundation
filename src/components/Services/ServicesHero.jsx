"use client";
import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[45vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2f317b] via-[#3b4fa3] to-[#2f317b]">
      
      <div className="absolute w-72 h-72 bg-white/5 rotate-45 top-10 left-10 rounded-lg blur-xl"></div>
      <div className="absolute w-72 h-72 bg-white/5 rotate-12 bottom-10 right-10 rounded-lg blur-xl"></div>

      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Services
        </h1>
        <div className="w-20 h-[3px] bg-[#ff8a00] mx-auto mt-4 rounded-full"></div>
      </div>
    </section>
  );
};

export default ServicesHero;