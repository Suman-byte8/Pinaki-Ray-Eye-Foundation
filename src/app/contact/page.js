'use client';

import React, { useState } from 'react';

// ==========================================
// SVG ICONS
// ==========================================
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.4739 21.8281 20.7208C21.7121 20.9678 21.5428 21.1786 21.3356 21.3338C21.1284 21.489 20.8903 21.5838 20.6444 21.609C20.3984 21.6343 20.1531 21.5891 19.933 21.478C16.9238 20.0653 14.1951 18.2323 11.905 16.064C9.69741 13.9555 7.92576 11.4552 6.685 8.70701C6.57077 8.48123 6.52627 8.23075 6.55621 7.98188C6.58615 7.73302 6.68945 7.49503 6.85521 7.29299C7.02097 7.09095 7.24304 6.93222 7.49902 6.83227C7.755 6.73233 8.03606 6.69466 8.315 6.72301H11.315C11.7824 6.7183 12.2212 6.93345 12.492 7.30601L13.762 9.84501C13.9113 10.1423 13.9515 10.4764 13.8762 10.7951C13.801 11.1139 13.6146 11.4 13.345 11.605L12.075 12.875C13.4988 15.3789 15.5411 17.4212 18.045 18.845L19.315 17.575C19.5201 17.3054 19.8062 17.119 20.125 17.0438C20.4437 16.9685 20.7778 17.0087 21.075 17.158L23.614 18.428C23.9866 18.6988 24.2017 19.1376 24.197 19.605" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#f59e0b" strokeWidth="2" />
    <path d="M12 6V12L16 14" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


// ==========================================
// PAGE COMPONENT
// ==========================================
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // PURE FRONTEND WHATSAPP SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // The target WhatsApp number in international format (without + or 0s)
    const targetPhoneNumber = "918001192095"; 
    
    // Construct the WhatsApp message using bold formatting (*)
    const messageText = 
      `Hello, I have a new query from the website:\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Message:*\n${formData.message}`;

    // Encode the text for the URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Create the standard WhatsApp API link
    const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="font-sans text-gray-800 bg-white">
      
      {/* Top Hero Section */}
      <div className="relative bg-[#3b5998] bg-opacity-90 py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2a437e] opacity-30 transform skew-x-12 translate-x-20"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide">
          Contact Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Contact Information & Form Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          
          {/* Left Column: Information */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2d307b] mb-4">
              Have queries before the<br className="hidden md:block" /> appointment?
            </h2>
            <div className="w-16 h-1 bg-[#f59e0b] mb-10"></div>

            <div className="space-y-8">
              {/* Let's Talk */}
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-50 p-3 rounded-full"><PhoneIcon /></div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d307b] mb-2">Let's Talk</h3>
                  <div className="space-y-1 text-gray-600 text-[15px]">
                    <p>Phone : <a href="tel:+918001192095" className="hover:text-[#f59e0b] underline transition-colors">+91-8001192095</a></p>
                    <p>WhatsApp : <a href="https://wa.me/918001192095" className="hover:text-[#f59e0b] underline transition-colors">8001192095</a></p>
                    <p>Email : <a href="mailto:pinakieyefoundation@gmail.com" className="hover:text-[#f59e0b] underline transition-colors">pinakieyefoundation@gmail.com</a></p>
                  </div>
                </div>
              </div>

              {/* Our Timing */}
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-50 p-3 rounded-full"><ClockIcon /></div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d307b] mb-2">Our Timing</h3>
                  <p className="text-gray-600 text-[15px]">
                    <span className="font-semibold text-gray-800">Mon - Sat :</span> 09:00 AM – 06:00 PM
                  </p>
                </div>
              </div>

              {/* Our Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-gray-50 p-3 rounded-full"><MapPinIcon /></div>
                <div>
                  <h3 className="text-xl font-bold text-[#2d307b] mb-2">Our Address</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    NH - 34, Sarbamangalapally, Across Hotel Kalinga,<br />
                    Malda. Pin Code: 732101
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:w-1/2 bg-[#fdfdfd] p-8 md:p-10 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#2d307b] inline-block relative pb-2">
                Write Your Queries
                <span className="absolute bottom-0 left-[20%] right-[20%] h-1 bg-[#f59e0b]"></span>
              </h2>
              <p className="text-gray-500 mt-3 text-[15px]">We are happy to assist you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone No."
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                required
                rows="4"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent text-gray-700 placeholder-gray-400 resize-none transition-all"
              ></textarea>

              <button
                type="submit"
                className="bg-[#f59e0b] hover:bg-[#e69200] text-white font-medium px-8 py-3 rounded-full flex items-center justify-center transition-colors shadow-md hover:shadow-lg w-auto"
              >
                Send Message
                <SendIcon />
              </button>
            </form>
          </div>

        </div>

        {/* Maps Section */}
        <div className="pt-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2d307b] inline-block relative pb-2">
              Locate Us On Maps
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#f59e0b]"></span>
            </h2>
          </div>
          
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 relative">
            {/* Embedded Google Map via generic query */}
            <iframe
              src="https://maps.google.com/maps?q=Pinaki%20Ray%20Eye%20Foundation,%20Malda&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pinaki Ray Eye Foundation Location"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}