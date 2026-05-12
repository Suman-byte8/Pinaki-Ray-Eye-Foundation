"use client";
import React, { useState } from 'react';
import { faqData } from '../../data/homeData';
import { Plus, Minus } from 'lucide-react';

const FaqSection = () => {
  const [openId, setOpenId] = useState(faqData[0].id);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f317b]">Frequently Asked Questions</h2>
          <div className="w-24 h-[3px] bg-[#ff8a00] mt-4"></div>
        </div>

        <div className="flex flex-col gap-3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="w-full flex flex-col">
                
                {/* Header Row */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                    isOpen ? 'bg-[#ff8a00] text-white' : 'bg-[#f3f4f6] text-[#2f317b] hover:bg-gray-200'
                  }`}
                >
                  <span className="font-bold text-[17px]">
                    {faq.id}. {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <Minus className="text-white shrink-0" size={24} strokeWidth={3} />
                  ) : (
                    <Plus className="text-[#2f317b] shrink-0" size={24} strokeWidth={3} />
                  )}
                </button>
                
                {/* Answer Body */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden bg-[#f9f9fb]">
                    <div className="p-6 text-[#2f317b] text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;