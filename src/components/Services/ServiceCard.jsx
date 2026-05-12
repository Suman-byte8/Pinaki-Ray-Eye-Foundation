"use client";
import React from "react";
import Image from "next/image";

const ServiceCard = ({ service, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 md:p-10 mb-12 transition hover:shadow-xl">

      <div
        className={`flex flex-col md:flex-row items-center gap-8 ${
          isReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-[260px] md:h-[320px] rounded-lg overflow-hidden shadow-md group">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2f317b] mb-3">
            {service.title}
          </h3>

          <div className="w-16 h-[3px] bg-[#ff8a00] mb-5"></div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;