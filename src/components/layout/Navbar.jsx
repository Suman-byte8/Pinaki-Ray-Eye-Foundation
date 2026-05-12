"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { gsap } from 'gsap';
import { 
  PhoneCall, 
  Clock, 
  Mail, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

import headerLogo from '../../assets/header-logo.png'; 
import { doctorsData } from '../../data/doctorsData';

// =========================================================
// SINGLE CONFIGURATION OBJECT FOR ALL LINKS & DATA
// =========================================================
const navConfig = {
  // 1. Social Media Links (Top Left)
  socials: [
    {
      id: 'facebook',
      href: 'https://www.facebook.com/share/1HTfSFqeA9/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      )
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/pinakirayeyefoundation?igsh=d2hiajA4MnZkZ3N0',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      )
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/company/pinaki-ray-eye-foundation/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      )
    }
  ],

  // 2. Top Header Links (Top Right)
  topLinks: [
    { name: 'Reviews & Feedback', href: 'https://www.google.com/maps/place/Pinaki+Ray+Eye+Foundation/@25.0074105,88.1351845,17z/data=!4m8!3m7!1s0x39fafdc89254f3eb:0xb5965c0e73b9d777!8m2!3d25.0074105!4d88.1377594!9m1!1b1!16s%2Fg%2F11d_8l5h7y?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Community Outreach', href: '/community-outreach' },
    { name: 'Partner / Donate', href: '/partner' },
    { name: 'Career', href: '/career' },
  ],

  // 3. Contact Information (Middle Right)
  contactInfo: [
    { id: 'phone', Icon: PhoneCall, title: 'Phone Line', text: '+91-8001192095', href: 'tel:+918001192095', iconSize: 28 },
    { id: 'time', Icon: Clock, title: 'Working Time', text: 'Mon - Sat : 09:00AM - 06:00PM', href: null, iconSize: 30 },
    { id: 'email', Icon: Mail, title: 'Email Address', text: 'pinakieyefoundation@gmail.com', href: 'mailto:pinakieyefoundation@gmail.com', iconSize: 30 },
  ],

  // 4. Main Navigation Menu (Bottom Blue Bar)
  mainMenu: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Know Your Doctor', 
      dropdown: true, 
      href: '/doctors',
      subLinks: doctorsData.map(doc => ({
        name: doc.name,
        href: `/doctors/${doc.slug}`
      }))
    },
    { name: 'Insurance & Cashless Facilities', href: '/insurance' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Gallery & Events', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ],

  // 5. Call to Action Button
  cta: {
    name: 'Book An Appointment',
    href: 'https://pinakiray.elihealthsupport.com/'
  }
};


const Navbar = () => {
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  const pathname = usePathname(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); 

  // GSAP Initial Entry Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline();

        tl.from('.logo-anim', { y: -30, duration: 0.6, ease: 'back.out(1.7)' })
          .from('.top-link-anim', { y: -10, stagger: 0.1, duration: 0.4 }, '-=0.4')
          .from('.contact-block-anim', { x: -20, stagger: 0.15, duration: 0.5, ease: 'power2.out' }, '-=0.2')
          .from('.nav-bg-anim', { scaleY: 0, transformOrigin: 'top', duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
          .from('.nav-item-anim', { y: 10, stagger: 0.05, duration: 0.4 }, '-=0.2');
      });

      mm.add("(max-width: 1023px)", () => {
        // No initial opacity animation for mobile to keep it fast
      });

    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Handle Scroll for Sticky Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // Continuous marquee animation for top bulletin
    useEffect(() => {
      if (!marqueeRef.current) return;
      const ctx = gsap.context(() => {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          duration: 24,
          ease: 'none',
          repeat: -1,
        });
      }, marqueeRef);

      return () => ctx.revert();
    }, []);

  return (
    <>
      <div className={`transition-all duration-300 ${isScrolled ? 'h-[70px] lg:h-[176px]' : 'h-[70px] lg:h-[176px]'}`}></div>

      <header 
        ref={headerRef} 
        className="w-full fixed top-0 left-0 z-50 bg-white shadow-md flex flex-col"
      >
        <div className="w-full overflow-hidden bg-[#f59e0b]">
          <div ref={marqueeRef} className="marquee-track flex items-center whitespace-nowrap py-2 px-4">
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base font-semibold">
                Welcome to Pinaki Ray Eye Foundation | National Award Winning Hospital | Cashless Facilities Available | Book your appointment today: +91-8001192095
              </span>
            </div>
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base">
                Experiencing vision issues? Book your comprehensive eye exam today!
              </span>
            </div>
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base">
                For immediate assistance and appointment bookings, call us at +91-8001192095
              </span>
            </div>
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base font-semibold">
                Welcome to Pinaki Ray Eye Foundation | National Award Winning Hospital | Cashless Facilities Available | Book your appointment today: +91-8001192095
              </span>
            </div>
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base">
                Experiencing vision issues? Book your comprehensive eye exam today!
              </span>
            </div>
            <div className="marquee-item flex items-center gap-2 mr-10 shrink-0">
              <span className="h-2 w-2 rounded-full bg-[#1f2937]"></span>
              <span className="text-[#1f2937] text-sm sm:text-base">
                For immediate assistance and appointment bookings, call us at +91-8001192095
              </span>
            </div>
          </div>
        </div>
        {/* =========================================================
            MOBILE HEADER (Visible < 1024px)
        ========================================================= */}
        <div className="flex lg:hidden justify-between items-center px-4 py-3 bg-white w-full h-[70px]">
          <Link href="/" className="relative w-14 h-14">
            <Image 
              src={headerLogo}
              alt="Pinaki Ray Eye Foundation"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Quick access phone call from config */}
            <a href={navConfig.contactInfo.find(c => c.id === 'phone').href} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#f97316]">
              <PhoneCall size={20} />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#2f317b] hover:text-[#f97316] transition-colors p-2"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* =========================================================
            DESKTOP TOP HEADER (Visible >= 1024px)
        ========================================================= */}
        <div 
          className={`hidden lg:flex w-full transition-all duration-500 ease-in-out origin-top overflow-hidden bg-white ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-[150px] opacity-100'
          }`}
        >
          <div className="max-w-6xl w-full mx-auto px-4 py-3 flex gap-8">
            
            <Link href="/" className="w-[180px] shrink-0 flex items-center justify-center logo-anim cursor-pointer">
              <div className="relative w-32 h-32 hover:scale-105 transition-transform duration-300">
                 <Image 
                   src={headerLogo}
                   alt="Pinaki Ray Eye Foundation"
                   fill
                   className="object-contain"
                   priority
                 />
              </div>
            </Link>

            <div className="flex-1 flex flex-col justify-between py-1">
              <div className="flex justify-between items-center w-full">
                
                {/* Socials */}
                <div className="flex items-center gap-2 text-[#2f317b] top-link-anim">
                  <span className="text-sm font-medium">Stay Tuned :</span>
                  <div className="flex gap-1">
                    {navConfig.socials.map((social) => (
                      <a key={social.id} href={social.href} target="_blank" rel="noreferrer" aria-label={social.id} className="w-7 h-7 rounded-full bg-[#f97316] flex items-center justify-center text-white hover:bg-[#2f317b] transition-colors">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Top Links */}
                <div className="flex gap-5 text-sm text-[#2f317b] top-link-anim">
                  {navConfig.topLinks.map((link, idx) => (
                    <Link key={idx} href={link.href} className="hover:text-[#f97316] transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-gray-200 my-2 top-link-anim"></div>

              {/* Contact Blocks */}
              <div className="flex justify-end gap-6 xl:gap-8 items-center w-full pb-1">
                {navConfig.contactInfo.map(({ id, Icon, title, text, href, iconSize }) => {
                  // If href exists render <a>, else render <div> (for Working Time)
                  const Wrapper = href ? 'a' : 'div';
                  return (
                    <Wrapper 
                      key={id} 
                      href={href} 
                      className="flex items-center gap-3 contact-block-anim group cursor-pointer"
                    >
                      <Icon size={iconSize} className="text-[#f97316] group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-[#2f317b] font-bold text-lg leading-tight">{title}</h4>
                        <p className="text-[#2f317b] text-sm">{text}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            DESKTOP BOTTOM NAV
        ========================================================= */}
        <div className="hidden lg:block w-full bg-[#2f317b] nav-bg-anim relative shadow-lg">
          <div className="max-w-6xl mx-auto px-4 h-14 flex justify-between items-center">
            <nav className="flex-1">
              <ul className="flex items-center justify-between gap-2 lg:gap-4">
                {navConfig.mainMenu.map((link, index) => {
                  const isActive = link.href === '/' 
                    ? pathname === '/' 
                    : pathname?.startsWith(link.href);

                  return (
                    <li key={index} className="nav-item-anim group relative">
                      {link.dropdown ? (
                        <span className={`flex cursor-pointer items-center gap-1 text-[13px] xl:text-[14px] font-semibold transition-colors duration-300 py-4 ${
                            isActive ? 'text-[#f97316]' : 'text-white hover:text-[#f97316]'
                          }`}
                        >
                          {link.name}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </span>
                      ) : (
                        <Link 
                          href={link.href} 
                          className={`flex items-center gap-1 text-[13px] xl:text-[14px] font-semibold transition-colors duration-300 py-4 ${
                            isActive ? 'text-[#f97316]' : 'text-white hover:text-[#f97316]'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                      
                      {link.dropdown && (
                        <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-md w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <div className="h-1 w-full bg-[#f97316]"></div>
                          <ul className="flex flex-col py-2">
                            {link.subLinks.map((sub, i) => (
                              <li key={i}>
                                <Link href={sub.href} className="block px-4 py-3 text-sm text-[#2f317b] hover:bg-gray-50 hover:text-[#f97316] transition-colors border-b border-gray-50 last:border-0">
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="nav-item-anim shrink-0 lg:ml-8">
              <a href={navConfig.cta.href} target="_blank" rel="noopener noreferrer" className="bg-white text-[#2f317b] px-6 py-2.5 font-bold text-sm tracking-wide hover:bg-[#f97316] hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md rounded-sm inline-block">
                {navConfig.cta.name}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY & DRAWER (< 1024px)
      ========================================================= */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#2f317b] z-[70] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="text-white font-bold text-lg">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#f97316] transition-colors p-1"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col px-4 gap-2">
            {navConfig.mainMenu.map((link, index) => {
               const isActive = link.href === '/' 
                 ? pathname === '/' 
                 : pathname?.startsWith(link.href);

               return (
                <li key={index} className="flex flex-col">
                  <div 
                    className={`flex justify-between items-center py-3 text-lg font-medium border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#f97316]' : 'text-white hover:text-[#f97316]'
                    }`}
                  >
                    {link.dropdown ? (
                      <span 
                        className="flex-1 cursor-pointer"
                        onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                      >
                        {link.name}
                      </span>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}

                    {link.dropdown && (
                      <button 
                        onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                        className="p-2"
                      >
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${mobileDropdown === index ? 'rotate-180' : ''}`} 
                        />
                      </button>
                    )}
                  </div>

                  {link.dropdown && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileDropdown === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="flex flex-col gap-2 pl-4 border-l-2 border-[#f97316]/50">
                        {link.subLinks.map((sub, i) => (
                          <li key={i}>
                            <Link 
                              href={sub.href} 
                              className="block py-2.5 text-sm text-gray-200 hover:text-[#f97316]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
               );
            })}
          </ul>

          <div className="px-4 mt-8">
             <a href={navConfig.cta.href} onClick={() => setIsMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center bg-[#f97316] text-white py-3 font-bold text-sm tracking-wide rounded hover:bg-white hover:text-[#2f317b] transition-colors shadow-md">
                {navConfig.cta.name}
              </a>
          </div>
        </div>

        {/* Contact Info in Mobile Drawer dynamically pulled from config */}
        <div className="bg-[#1f2156] p-6 text-white text-sm flex flex-col gap-4">
          {navConfig.contactInfo.map(({ id, Icon, text, href }) => {
            const Wrapper = href ? 'a' : 'div';
            return (
              <Wrapper 
                key={id} 
                href={href} 
                className={`flex items-center gap-3 ${href ? 'hover:text-[#f97316] transition-colors' : ''}`}
              >
                <Icon size={18} className="text-[#f97316] shrink-0" />
                <span className={id === 'email' ? 'truncate' : ''}>{text}</span>
              </Wrapper>
            );
          })}
        </div>

      </div>
    </>
  );
};

export default Navbar;