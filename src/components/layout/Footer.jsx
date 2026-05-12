"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  Phone, 
  Mail, 
  ChevronUp 
} from 'lucide-react';

// IMPORT YOUR IMAGES HERE
import footerLogo from '../../assets/header-logo.png'; 
import sbmLogo from '../../assets/white_sbm_logo.webp';
import footerBg from '../../assets/footer-bg.jpg';

const footerQuickLinks1 = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Insurance & Cashless Facilities', href: '/insurance' },
  { label: 'Community Outreach', href: '/community-outreach' },
  { label: 'Partner / Donate', href: '/partner' },
];

const footerQuickLinks2 = [
  { label: 'Pinaki Ray Eye Connect', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cancellation & Refund Policy', href: '/cancellation-refund-policy' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Career', href: '/contact' },
];

// Register ScrollTrigger for Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);

  // GSAP Scroll Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%', 
          toggleActions: 'play none none reverse'
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Smooth Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      ref={footerRef}
      className="relative w-full text-white mt-auto overflow-hidden bg-[#2f317b]"
    >
      {/* SMOOTH BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBg}
          alt="Footer background"
          fill
          className="object-cover object-center opacity-25 grayscale mix-blend-luminosity"
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 bg-slate-950/65" />
      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-col flex flex-col items-start">
            <div className="relative w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center p-2">
              <Image 
                src={footerLogo}
                alt="Pinaki Ray Eye Foundation"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 font-medium">
              Pinaki Ray Eye Foundation is a National Award Winning state of art eye hospital in Malda, West Bengal.
            </p>
            
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1HTfSFqeA9/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center text-white hover:bg-white hover:text-[#f97316] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/pinakirayeyefoundation?igsh=d2hiajA4MnZkZ3N0" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center text-white hover:bg-white hover:text-[#f97316] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/pinaki-ray-eye-foundation/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#f97316] flex items-center justify-center text-white hover:bg-white hover:text-[#f97316] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links 1 */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#f97316] inline-block pr-8">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks1.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-100 font-medium text-sm hover:text-[#f97316] hover:translate-x-2 transition-transform duration-300 block w-max">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links 2 */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#f97316] inline-block pr-8">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks2.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-100 font-medium text-sm hover:text-[#f97316] hover:translate-x-2 transition-transform duration-300 block w-max">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-[#f97316] inline-block pr-8">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              
              <li className="flex items-start gap-3 group cursor-pointer">
                <Building2 size={20} className="text-[#f97316] mt-1 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-gray-100 font-medium text-sm leading-relaxed group-hover:text-white transition-colors">
                  NH-34, Sarbamangalapally,<br/>
                  Accross Hotel Kalinga,<br/>
                  Malda. Pin: 732101
                </span>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <Phone size={20} className="text-[#f97316] group-hover:scale-110 transition-transform shrink-0" />
                <a href="tel:+918001192095" className="text-gray-100 font-medium text-sm group-hover:text-white transition-colors">+91-8001192095</a>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f97316] group-hover:scale-110 transition-transform shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                <a href="https://wa.me/918001192095" className="text-gray-100 font-medium text-sm group-hover:text-white transition-colors">+91-8001192095</a>
              </li>

              <li className="flex items-center gap-3 group cursor-pointer">
                <Mail size={20} className="text-[#f97316] group-hover:scale-110 transition-transform shrink-0" />
                <a href="mailto:pinakieyefoundation@gmail.com" className="text-gray-100 font-medium text-sm group-hover:text-white transition-colors">pinakieyefoundation@gmail.com</a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="relative z-10 w-full bg-[#27296d] py-4 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-center">
          
          <div className="text-gray-300 text-xs sm:text-sm text-center flex items-center gap-2 flex-wrap justify-center">
            <p>© 2026 Pinaki Ray Eye Foundation. All Rights Reserved. | Designed by</p>
            <a href="https://www.socialbuzzmedia.in" target="_blank" rel="noreferrer" className="font-bold text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="relative w-18 h-18 sm:w-18 sm:h-18">
                <Image src={sbmLogo} alt="Social Buzz Media" fill className="object-contain" />
              </span>
            </a>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-[#0ea5e9] hover:bg-[#f97316] text-white flex items-center justify-center rounded-full shadow-lg transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;