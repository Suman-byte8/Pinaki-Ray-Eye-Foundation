import React from 'react';

import { blogsData } from '@/data/blogsData';
import BlogHero from '@/components/Blogs/BlogHero';
import BlogCard from '@/components/Blogs/BlogCard';

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Hero Section */}
        <BlogHero />

        {/* Blog Grid */}
        <div className="px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blogsData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-16 flex justify-center">
            <button className="border-2 border-gray-200 text-gray-600 font-medium px-6 py-2 rounded-md hover:border-[#2d307b] hover:text-[#2d307b] transition-colors flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Load more
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}