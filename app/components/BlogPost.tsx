"use client";

import { useState } from 'react';
import type { BlogPost, BibliographyItem } from '../types/blog';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  post: BlogPost;
  isPreview?: boolean;
}

export default function BlogPost({ post, isPreview = false }: BlogPostProps) {
  const [showBibliography, setShowBibliography] = useState(false);
  
  const content = isPreview 
    ? `${post.content.substring(0, 200)}...` 
    : post.content;
    
  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-[#315c40] border-t border-r border-b border-gray-200 relative">
      <div className="flex items-start mb-4">
        <div className="relative h-12 w-12 mr-4 overflow-hidden rounded-full border-2 border-[#315c40] shadow-md transform hover:scale-110 transition-transform duration-300 group">
          <Image 
            src={post.authorImage} 
            alt={`${post.author}'s profile`} 
            fill
            sizes="48px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#315c40]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#315c40] mb-1 hover:text-black transition-colors duration-300">{post.title}</h2>
          <div className="flex flex-wrap items-center text-black/70 text-sm">
            <span className="mr-2">By {post.author}</span>
            <span className="mr-2">•</span>
            <span className="mr-2">{post.date}</span>
            <span className="mr-2">•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none text-black prose-headings:text-[#315c40] prose-a:text-[#315c40] prose-strong:text-[#315c40]">
        {isPreview 
          ? content
          : post.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))
        }
      </div>
      
      {!isPreview && post.bibliography && post.bibliography.length > 0 && (
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowBibliography(!showBibliography)}
            className="flex items-center gap-2 text-[#315c40] hover:text-black transition-colors font-medium"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${showBibliography ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showBibliography ? 'Hide Bibliography' : 'Show Bibliography'}
          </button>
          
          {showBibliography && (
            <div className="mt-4 p-4 bg-[#f5f5f5] rounded-lg border border-gray-200 animate-slideUp">
              <h3 className="text-xl font-bold text-[#315c40] mb-3">Bibliography</h3>
              <ul className="space-y-3">
                {post.bibliography.map((item: BibliographyItem, index: number) => (
                  <li key={index} className="text-black/90 text-sm">
                    <p className="mb-1">
                      <span className="font-semibold">{item.author}</span> ({item.year}). {item.title}.
                    </p>
                    <p className="italic">{item.source}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#315c40] hover:text-black transition-colors text-xs mt-1 inline-block font-medium"
                      >
                        View Source →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      
      {isPreview && (
        <div className="mt-6">
          <Link 
            href={`/posts/${post.id}`} 
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-md bg-[#315c40] text-white shadow-md"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black/80 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center justify-center w-full gap-2 transition-all duration-200 group-hover:text-white">
              Read more
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      )}
      
      {isPreview && post.bibliography && (
        <div className="absolute top-3 right-3">
          <div className="bg-[#315c40] text-white text-xs px-2 py-1 rounded-full font-medium">
            {post.bibliography.length} References
          </div>
        </div>
      )}
    </article>
  );
} 