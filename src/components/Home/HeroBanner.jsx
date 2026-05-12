"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

import heroImageDesktop from "../../assets/home/Home-Carousel-Img.jpg";
import heroImageMobile from "../../assets/home/hero-banner-mobile.jpg";

const slides = [
  {
    title: "Pinaki Ray Eye Foundation",
    subtitle: "A National Award winning eye hospital",
    buttonLabel: "Book An Appointment"
  },
  {
    title: "Run and Managed by",
    subtitle: "Sri Sri Thakur Sitaramdas Omkarnath Charitable Trust",
    buttonLabel: "NABH Certified Hospital"
  },
  {
    title: "Patient Care",
    subtitle: "at the heart of all our activities",
    buttonLabel: "Give a Gift of Sight"
  }
];

const REDIRECT_URL = "https://pinakiray.elihealthsupport.com/";

export default function HeroBanner() {
  const bannerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { title, subtitle, buttonLabel } = slides[activeSlide];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    }, bannerRef);

    return () => ctx.revert();
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[60vh] md:h-[65vh] lg:h-[75vh] overflow-hidden bg-[#2f317b]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop Image */}
        <Image
          src={heroImageDesktop}
          alt="Hero Desktop"
          fill
          priority
          className="object-cover object-left hidden md:block"
        />
        {/* Mobile Image */}
        <Image
          src={heroImageMobile}
          alt="Hero Mobile"
          fill
          priority
          className="object-cover object-left md:hidden"
        />
      </div>

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto h-full px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-center md:justify-end">
        <div className="hero-content text-white max-w-full whitespace-nowrap text-center md:text-right">

          {/* Title */}
          <h1 className="text-[6.5vw] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide">
            {title}
          </h1>

          {/* Subtitle with Underline */}
          <p className="mt-4 text-[3.5vw] sm:text-2xl md:text-3xl font-medium underline underline-offset-4 decoration-white/70">
            {subtitle}
          </p>

          {/* Button (White Button like screenshot) */}
          <button
            onClick={() => (window.location.href = REDIRECT_URL)}
            className="mt-6 md:mt-8 bg-white text-[#2f317b] px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg lg:text-xl font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            {buttonLabel}
          </button>

        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setActiveSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setActiveSlide((prev) => (prev + 1) % slides.length)
        }
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}