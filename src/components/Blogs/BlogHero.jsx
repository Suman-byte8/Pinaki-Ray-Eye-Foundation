import React from 'react';

const BlogHero = () => {
  return (
    <div className="bg-[#2d307b] text-white rounded-2xl py-24 px-4 mx-4 md:mx-auto mt-12 mb-16 shadow-xl max-w-7xl flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center w-full">
        <p className="text-[#ff8a00] font-bold text-sm uppercase tracking-widest mb-4">
          Resources
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          Eye Health & Wellness Blog
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 font-light">
          Tools and strategies modern teams need to help their companies grow.
        </p>
        
        {/* Newsletter Form
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center w-full">
          <input 
            type="email" 
            placeholder="Enter your email" 
            // FIX: Added bg-white, placeholder-gray-500, and standard text colors
            className="px-4 py-3.5 rounded-lg w-full sm:flex-1 bg-white text-gray-900 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#ff8a00] transition-shadow shadow-sm"
            required
          />
          <button 
            type="submit" 
            className="bg-[#ff8a00] hover:bg-[#e67c00] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form> */}
{/* 
        <p className="text-sm text-gray-400 mt-5">
          We care about your data in our <a href="/privacy-policy" className="underline hover:text-white transition-colors">privacy policy</a>.
        </p> */}
      </div>
    </div>
  );
};

export default BlogHero;