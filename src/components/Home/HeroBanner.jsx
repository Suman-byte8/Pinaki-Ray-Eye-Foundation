"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

import heroImage from "../../assets/Home-Carousel-Img.jpg";

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
      className="relative w-full h-[42vh] lg:h-[48vh] overflow-hidden bg-[#2f317b]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero"
          fill
          priority
          className="object-cover object-left"
        />
      </div>

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full px-8 lg:px-16 flex items-center justify-end">
        <div className="hero-content text-white max-w-xl text-right">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
            {title}
          </h1>

          {/* Subtitle with Underline */}
          <p className="mt-3 text-base md:text-lg font-medium underline underline-offset-4 decoration-white/70">
            {subtitle}
          </p>

          {/* Button (White Button like screenshot) */}
          <button
            onClick={() => (window.location.href = REDIRECT_URL)}
            className="mt-6 bg-white text-[#2f317b] px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setActiveSlide((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}