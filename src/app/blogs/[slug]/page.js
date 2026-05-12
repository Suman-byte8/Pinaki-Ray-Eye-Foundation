import React from 'react';
import Link from 'next/link';
import { blogsData } from '@/data/blogsData';
import { notFound } from 'next/navigation';

export default async function SingleBlogPage({ params }) {
  // Find the blog post by matching the slug from the URL
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  // If blog doesn't exist, show 404
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link 
href="/blogs"
          className="inline-flex items-center text-[#ff8a00] font-semibold mb-8 hover:-translate-x-1 transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to all posts
        </Link>

        {/* Article Header */}
        <div className="mb-10 text-center">
          <span className="text-[#ff8a00] font-bold text-sm uppercase tracking-wider bg-[#ff8a00]/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2d307b] mt-6 mb-6">
            {post.title}
          </h1>
          <p className="text-gray-500 flex items-center justify-center gap-3">
            <span className="font-semibold text-gray-800">{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </p>
        </div>

        {/* Feature Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        {/* We use whitespace-pre-line to render the \n\n from our mock data as actual paragraphs */}
        <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </article>

      </div>
    </div>
  );
}

// Optional: Generates static params for all blogs at build time for better performance
export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}