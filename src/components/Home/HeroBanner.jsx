"use client";
import React from "react";
import Image from "next/image";

import foundationImage from "../../assets/home/Pinaki Ray Eye Foundation.jpg";

export default function HeroBanner() {
  const handleBannerClick = () => {
    window.location.href = "https://pinakiray.elihealthsupport.com/";
  };

  return (
    <button
      onClick={handleBannerClick}
      className="relative w-full overflow-hidden cursor-pointer border-none p-0"
      style={{ aspectRatio: "16/9" }}
      aria-label="Book an appointment"
    >
      <Image
        src={foundationImage}
        alt="Pinaki Ray Eye Foundation"
        fill
        priority
        className="object-cover hover:opacity-95 transition-opacity"
      />
    </button>
  );
}