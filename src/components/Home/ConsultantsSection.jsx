"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { consultantsData } from '../../data/homeData';

const ConsultantsSection = () => {
  const sectionRef = useRef(null);

  // GSAP Scroll Entry Animation
  useEffect(() => {
    // Register plugin (safe for Next.js SSR)
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.doc-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)', // Gives a subtle bouncy entrance
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f317b]">Know Your Consultants</h2>
          <div className="w-24 h-[3px] bg-[#ff8a00] mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {consultantsData.map((doc) => (
            <div 
              key={doc.id} 
              className="doc-card group relative bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(47,49,123,0.12)]"
            >
              
              {/* Doctor Image Container */}
              <div className="relative w-full h-[320px] bg-gray-50 p-3 pb-0 rounded-t-xl z-10">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200">
                   {/* Subtle overlay that darkens slightly on hover */}
                   <div className="absolute inset-0 bg-[#2f317b]/0 group-hover:bg-[#2f317b]/10 transition-colors duration-500 z-10"></div>
                   
                   {/* Image zooms in smoothly on hover */}
                   <Image 
                     src={doc.image} 
                     alt={doc.name} 
                     fill 
                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                   />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 text-center flex flex-col items-center relative z-10 bg-white rounded-b-xl">
                
                {/* Animated Name Underline */}
                <div className="relative inline-block mb-2">
                  <h3 className="text-xl font-bold text-[#2f317b] transition-colors duration-300 group-hover:text-[#ff8a00]">
                    {doc.name}
                  </h3>
                  {/* Expanding underline effect */}
                  <span className="absolute -bottom-1 left-1/2 w-8 h-[2px] bg-[#2f317b] -translate-x-1/2 transition-all duration-300 group-hover:w-full group-hover:bg-[#ff8a00]"></span>
                </div>

                <p className="text-[#2f317b] text-sm mt-3 mb-1 font-medium">{doc.role}</p>
                <p className="text-gray-500 text-sm mb-6">{doc.specialization}</p>
                
                {/* Social Icons - Staggered lift on hover */}
                <div className="flex gap-3 justify-center mt-auto">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#ff8a00] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#2f317b] transform group-hover:-translate-y-1 group-hover:shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-full bg-[#ff8a00] flex items-center justify-center text-white transition-all duration-300 hover:bg-[#2f317b] transform group-hover:-translate-y-1 group-hover:shadow-md delay-75"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>

              {/* Creative Flourish: Expanding Orange Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#ff8a00] w-0 transition-all duration-500 ease-out group-hover:w-full rounded-b-xl"></div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConsultantsSection;