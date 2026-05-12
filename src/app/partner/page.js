import React from 'react';
import { partnerData } from '@/data/partnerData';

// Custom Handshake SVG matching the design
const HandshakeGraphic = () => (
  <div className="w-full max-w-[350px] mx-auto relative aspect-square rounded-full border-[3px] border-[#2d307b] flex items-center justify-center p-8">
    <svg viewBox="0 0 512 512" fill="#2d307b" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M366.5 161.7c-17.7-17.7-46.3-17.7-64 0L244 219.2l-21.2-21.2c-17.7-17.7-46.3-17.7-64 0L38.4 318.3c-17.7 17.7-17.7 46.3 0 64s46.3 17.7 64 0l113.8-113.8 21.2 21.2-113.8 113.8c-17.7 17.7-17.7 46.3 0 64s46.3 17.7 64 0l178.9-178.9c17.7-17.7 17.7-46.3 0-64L366.5 161.7zM473.6 193.3c-17.7-17.7-46.3-17.7-64 0L295.8 307.1l21.2 21.2L473.6 193.3z" />
      <path d="M473.6 193.3l-156.6 156.6 21.2 21.2 135.4-135.4c17.7-17.7 46.3-17.7 64 0s17.7 46.3 0 64L358.7 478.6c-17.7 17.7-46.3 17.7-64 0s-17.7-46.3 0-64l52.1-52.1-21.2-21.2-52.1 52.1c-17.7 17.7-46.3 17.7-64 0s-17.7-46.3 0-64L388.4 150.5c17.7-17.7 46.3-17.7 64 0 17.7 17.7 17.7 46.3 0 64z"/>
    </svg>
  </div>
);

export default function PartnerDonatePage() {
  const { hero, partnerWithUs, donationInfo, bankDetails, ourPartners } = partnerData;

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Top Hero Section */}
      <div className="bg-[#838ab3] py-28 flex items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide text-center z-10">
          {hero.title}
        </h1>
      </div>

      {/* Partner With Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2d307b] mb-2">
              {partnerWithUs.title}
            </h2>
            <div className="w-20 h-1 bg-[#f59e0b] mb-8"></div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {partnerWithUs.intro}
            </p>
            
            <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-[17px] leading-relaxed">
              {partnerWithUs.points.map((point, index) => (
                <li key={index} className="pl-2">{point}</li>
              ))}
            </ol>
          </div>

          {/* Right Graphic Column */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <HandshakeGraphic />
          </div>
          
        </div>
      </div>

      {/* Donation & Partners Section with Background Image */}
      {/* Replace the URL in backgroundImage with your actual image path */}
      <div 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        {/* Soft overlay to make text readable */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Two Cards (Make a Donation & Bank Details) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            
            {/* Make A Donation Card */}
            <div className="bg-white/95 p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-[#2d307b] mb-2">
                {donationInfo.title}
              </h3>
              <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>

              <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed">
                {donationInfo.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              <ul className="list-disc pl-6 mt-8 space-y-3 text-gray-700 text-[17px]">
                {donationInfo.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* Send in your Donations Card */}
            <div className="bg-white/95 p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-[#2d307b] mb-2">
                {bankDetails.title}
              </h3>
              <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>

              <p className="font-bold text-gray-900 text-lg mb-6">
                {bankDetails.trustName}
              </p>

              <p className="font-bold text-gray-900 text-lg underline underline-offset-4 decoration-2 mb-6">
                {bankDetails.bankHeader}
              </p>

              <div className="space-y-4 text-gray-700 text-[17px]">
                {bankDetails.details.map((detail, index) => (
                  <p key={index}>
                    <span className="font-bold text-[#2d307b]">{detail.label}:</span> {detail.value}
                  </p>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Card (Our Partners) */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/95 p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-[#2d307b] mb-2">
                {ourPartners.title}
              </h3>
              <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-[17px]">
                {ourPartners.list.map((partner, index) => (
                  <li key={index}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}