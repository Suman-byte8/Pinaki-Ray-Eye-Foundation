import React from "react";
import { insuranceData } from "@/data/insuranceData";

import CtaStrip from "@/components/Home/CtaStrip";

// Reusable Checkmark Icon Component matching the image
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#f59e0b"
      strokeWidth="2"
      fill="white"
    />
    <path
      d="M7 12L10.5 15.5L17 8"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InsurancePage = () => {
  const { hero, empanelledTPAs, requirements, cta } = insuranceData;

  return (
    <div className="font-sans text-gray-700 bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#3b5998] bg-opacity-90 py-24 flex items-center justify-center overflow-hidden">
        {/* Subtle background geometric overlay mimicking the image */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2a437e] opacity-30 transform skew-x-12 translate-x-20"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center tracking-wide">
          {hero.title}
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Empanelled TPAs Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e3b6a] inline-block relative pb-2">
              {empanelledTPAs.title}
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#f59e0b]"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row relative">
            {/* Left Column */}
            <div className="md:w-1/2 pr-0 md:pr-10 flex flex-col gap-5">
              {empanelledTPAs.leftColumn.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            {/* Middle Divider */}
            <div className="hidden md:block w-px bg-gray-300 absolute left-1/2 top-4 bottom-4"></div>

            {/* Right Column (Right aligned text, icon on right) */}
            <div className="md:w-1/2 pl-0 md:pl-10 mt-10 md:mt-0 flex flex-col gap-5">
              {empanelledTPAs.rightColumn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-3"
                >
                  <span className="text-[15px] text-right">{item}</span>
                  <CheckIcon />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2e3b6a] inline-block relative pb-2">
              {requirements.title}
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#f59e0b]"></span>
            </h2>
          </div>

          {/* Pre-Admission Part */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#2e3b6a] text-center mb-6">
              {requirements.preAdmission.subTitle}
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed">
              {requirements.preAdmission.paragraph1}
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-[15px] leading-relaxed marker:text-gray-500">
              {requirements.preAdmission.list1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mb-6 text-[15px] leading-relaxed">
              {requirements.preAdmission.paragraph2}
            </p>
            <ul className="list-disc pl-8 mb-8 space-y-2 text-[15px] leading-relaxed marker:text-gray-500">
              {requirements.preAdmission.list2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Procedure Part */}
          <div>
            <h3 className="text-xl font-bold text-[#2e3b6a] text-center mb-8">
              {requirements.procedure.subTitle}
            </h3>

            <div className="space-y-4 text-[15px] leading-relaxed mb-8">
              {requirements.procedure.steps.map((step, index) => (
                <div key={index}>
                  <p>
                    <span className="font-bold text-[#f59e0b] mr-1">
                      {step.label}
                    </span>
                    {step.text}
                  </p>
                  {/* Handle nested lists for Step 3 */}
                  {step.nestedList && (
                    <ul className="list-disc pl-14 mt-2 space-y-2 marker:text-gray-500">
                      {step.nestedList.map((nestedItem, idx) => (
                        <li key={idx}>{nestedItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <p className="mb-10 text-[15px] leading-relaxed">
              {requirements.procedure.outroParagraph}
            </p>

            <p className="font-bold text-[#2e3b6a] text-center text-[15px] leading-relaxed">
              {requirements.procedure.importantNotice}
            </p>
          </div>
        </section>
      </div>

      {/* Call To Action Banner (Excluding standard footer) */}
      <div className="bg-[#e49b38] py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <h2 className="text-2xl font-bold text-white">{cta.text}</h2>
          <a href="https://pinakiray.elihealthsupport.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#2e3b6a] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#1a2342] transition duration-300 border border-white">
            {cta.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
