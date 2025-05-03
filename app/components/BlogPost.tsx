"use client";

import { useState } from 'react';
import type { BlogPost, BibliographyItem } from '../types/blog';
import Link from 'next/link';
import Image from 'next/image';

// Generate meaningful headings based on paragraph content
const generateHeading = (paragraph: string, index: number): string => {
  const firstArticleHeadings = [
    "The Cultural Richness of Bayview-Hunters Point", 
    "Environmental Racism: Not by Accident", 
    "Similar Patterns in the South and SF",
    "Community Resistance and Grassroots Action"
  ];
  
  const secondArticleHeadings = [
    "The Legacy of Redlining in Bay Area Communities",
    "Beyond Pollution: Who Gets to Avoid It",
    "Community Organizing Against Environmental Injustice",
    "Taking Action for Environmental Justice"
  ];
  
  // Determine which article we're in based on the content
  if (paragraph.includes("Bayview-Hunters Point") || paragraph.includes("Taylor's Toxic Communities")) {
    return firstArticleHeadings[Math.min(index, firstArticleHeadings.length - 1)];
  } else {
    return secondArticleHeadings[Math.min(index, secondArticleHeadings.length - 1)];
  }
};

// Define image paths by article and section
const getImageForSection = (postId: string, sectionIndex: number): string => {
  // For first article (Etai's article)
  if (postId === "1") {
    if (sectionIndex === 0) return "/photos/etai1.jpeg";  // Etai1
    if (sectionIndex === 1) return "/photos/etai2.jpg";   // Etai2
    if (sectionIndex === 2) return "/photos/etai3.jpeg";  // Etai3
    if (sectionIndex === 3) return "/photos/etai4.jpg";   // Etai4
  }
  
  // For second article (Jimmy's article)
  if (postId === "2") {
    if (sectionIndex === 0) return "/photos/jimmyFirst.jpg";  // Jimmy1
    if (sectionIndex === 1) return "/photos/jimmyTwo.png";    // Jimmy2 (swapped)
    if (sectionIndex === 2) return "/photos/jimmyTwo.jpg";    // Jimmy3 (swapped)
    if (sectionIndex === 3) return "/photos/jimmy4.jpeg";     // Jimmy4
  }
  
  // Default placeholder for other sections
  return "";
};

// Get custom image styles for specific photos
const getImageStyles = (postId: string, sectionIndex: number): string => {
  // For jimmy4.jpeg, use a different object-fit to show the entire image
  if (postId === "2" && sectionIndex === 3) {
    return "object-contain p-2";
  }
  
  // Default styling for most images
  return "object-cover";
};

interface BlogPostProps {
  post: BlogPost;
  isPreview?: boolean;
}

export default function BlogPost({ post, isPreview = false }: BlogPostProps) {
  const [showBibliography, setShowBibliography] = useState(false);
  
  const content = isPreview 
    ? `${post.content.substring(0, 200)}...` 
    : post.content;
  
  // Font families to create visual hierarchy and interest
  const headingFontClass = "font-serif"; // Serif for headings
  const bodyFontClass = "font-sans"; // Sans-serif for body text
  const accentFontClass = "font-mono"; // Monospace for accents
    
  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-[#315c40] border-t border-r border-b border-gray-200 relative">
      <div className="flex items-start mb-8">
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
          <h2 className={`text-2xl sm:text-3xl font-bold text-[#315c40] mb-1 hover:text-black transition-colors duration-300 ${headingFontClass} tracking-tight leading-tight`}>{post.title}</h2>
          <div className={`flex flex-wrap items-center text-black/70 text-sm ${accentFontClass}`}>
            <span className="mr-2">By {post.author}</span>
            <span className="mr-2">•</span>
            <span className="mr-2">{post.date}</span>
            <span className="mr-2">•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>
      
      <div className={`prose prose-lg max-w-none text-black prose-headings:text-[#315c40] prose-a:text-[#315c40] prose-strong:text-[#315c40] ${bodyFontClass} leading-relaxed`}>
        {isPreview 
          ? content
          : post.content.split('\n\n').map((paragraph, i) => {
              const isEven = i % 2 === 0;
              const heading = generateHeading(paragraph, i);
              const imagePath = getImageForSection(post.id, i);
              
              return (
                <section key={i} className="mb-16 py-6">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="md:w-1/2 space-y-5">
                      <div className={`${isEven ? 'text-left' : 'text-right'}`}>
                        <h3 className={`inline-block text-xl font-bold relative px-4 py-2 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#315c40] to-[#1e3a2b] text-white rounded-lg shadow-md ${headingFontClass} tracking-tight leading-tight`}>
                          {heading}
                          <div className={`absolute top-full ${isEven ? 'left-4' : 'right-4'} w-0 h-0 border-8 border-solid border-t-[#1e3a2b] border-r-transparent border-b-transparent border-l-transparent`}></div>
                        </h3>
                      </div>
                      <div className={`${isEven ? 'text-left' : 'text-right'}`}>
                        <p className={`mb-2 leading-relaxed text-base text-black/90`}>{paragraph}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center rounded-lg overflow-hidden h-72 shadow-md border border-gray-200">
                      {imagePath ? (
                        <div className="relative w-full h-full">
                          <Image 
                            src={imagePath}
                            alt={`Image for ${heading}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className={`${getImageStyles(post.id, i)} hover:scale-105 transition-transform duration-500`}
                          />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-gray-50 to-white p-6 flex items-center justify-center h-full w-full">
                          <div className="text-center text-gray-400 transition-all duration-300 hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-3 text-[#315c40]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className={`font-medium text-[#315c40]/60 ${headingFontClass}`}>Visual for {heading}</p>
                            <p className={`text-sm mt-1 text-gray-400 ${accentFontClass}`}>Add supporting imagery here</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {i < post.content.split('\n\n').length - 1 && (
                    <div className="flex justify-center my-12">
                      <div className="relative w-full max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-[#315c40]/15"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-white px-3 text-[#315c40]/60">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 6C12 6 8 10 8 14C8 17.3137 9.79086 20 12 20C14.2091 20 16 17.3137 16 14C16 10 12 6 12 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 6C12 6 16 10 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              );
            })
        }
      </div>
      
      {!isPreview && post.bibliography && post.bibliography.length > 0 && (
        <div className="mt-12 pt-6 border-t border-gray-200">
          <button
            onClick={() => setShowBibliography(!showBibliography)}
            className={`flex items-center gap-2 text-[#315c40] hover:text-black transition-colors font-medium ${accentFontClass}`}
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
              <h3 className={`text-xl font-bold text-[#315c40] mb-3 ${headingFontClass}`}>Bibliography</h3>
              <ul className="space-y-3">
                {post.bibliography.map((item: BibliographyItem, index: number) => (
                  <li key={index} className={`text-black/90 text-sm ${bodyFontClass}`}>
                    <p className="mb-1">
                      <span className="font-semibold">{item.author}</span> ({item.year}). {item.title}.
                    </p>
                    <p className={`italic ${accentFontClass} text-xs`}>{item.source}</p>
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
                    {item.annotation && (
                      <p className="mt-2 text-black/80">{item.annotation}</p>
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