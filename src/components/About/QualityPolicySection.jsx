"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const policies = [
  "To Ensure Quality, Safety, Care & Quick Service",
  "To make an effort to achieve 100% Patient Satisfaction",
  "Maintaining Cleanliness & Hygiene",
  "Creating Awareness in society about Eye related programs",
  "Adopting Best Technologies & Infrastructure",
  "Treating Each Patient with Respect & Kindness",
  "Humbly Environment",
  "Supporting Undervalued & Underprivileged section of our Society",
];

const QualityPolicySection = () => {
  return (
    <section className="py-20 bg-[#f4e8d9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f317b]">
            Quality Policy
          </h2>
          <div className="w-20 h-[3px] bg-[#ff8a00] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-[#ff8a00] mt-1" size={20} />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicySection;