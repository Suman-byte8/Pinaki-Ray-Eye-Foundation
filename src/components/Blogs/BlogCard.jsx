import React from 'react';
import Link from 'next/link';

const BlogCard = ({ post }) => {
  return (
    <div className="flex flex-col group cursor-pointer">
      {/* Image Container with Glassmorphism Overlay */}
      <Link href={`/blogs/${post.slug}`} className="relative h-64 w-full rounded-lg overflow-hidden mb-5">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        
        {/* Bottom Frosty Gradient Overlay matching the image */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between p-4 backdrop-blur-[2px]">
          <div>
            <p className="text-white font-semibold text-sm">{post.author}</p>
            <p className="text-gray-300 text-xs">{post.date}</p>
          </div>
          <span className="text-white font-medium text-xs bg-white/20 px-2 py-1 rounded backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <Link href={`/blogs/${post.slug}`}>
          <h2 className="text-xl font-bold text-[#2d307b] mb-2 group-hover:text-[#ff8a00] transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <Link 
          href={`/blogs/${post.slug}`}
          className="text-[#ff8a00] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read post 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;