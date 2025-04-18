import { samplePosts } from '../../page';
import BlogPost from '../../components/BlogPost';
import Navbar from '../../components/Navbar';
import { notFound } from 'next/navigation';
import type { BlogPost as BlogPostType } from '../../types/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function AuthorPage({ params }: { params: { name: string } }) {
  const authorName = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  const authorPosts = samplePosts.filter((post: BlogPostType) => 
    post.author.toLowerCase() === authorName.toLowerCase()
  );
  
  if (authorPosts.length === 0) {
    notFound();
  }
  
  const authorImage = authorPosts[0].authorImage;

  return (
    <div className="min-h-screen bg-[#1e3a2b] text-[#f5f5f5]">
      <Navbar />
      <div className="bg-[#315c40] py-12 border-b border-[#588068]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-[#8eba92]/50 shadow-xl animate-pulse-slow">
              <Image 
                src={authorImage} 
                alt={`${authorName}'s profile`} 
                fill
                sizes="128px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a2b]/30 to-transparent"></div>
            </div>
            <div className="text-center sm:text-left animate-fadeIn">
              <h1 className="text-4xl font-bold mb-2 text-[#f5f5f5]">
                {authorName}'s Blog
              </h1>
              <p className="text-[#f5f5f5]/80 text-lg max-w-xl">
                Environmental perspectives and insights from {authorName}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#315c40] rounded-lg p-6 mb-8 shadow-md border border-[#588068]/50">
            <h2 className="text-2xl font-bold text-[#f5f5f5] mb-2">About {authorName}</h2>
            <p className="text-[#f5f5f5]/90">
              {authorName} is passionate about exploring the intersection of technology and environmental sustainability. 
              Through thoughtful writing and research, {authorName} shares insights on how we can build a more 
              sustainable digital future.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-[#f5f5f5] mb-6 border-b border-[#588068]/50 pb-2">
            Articles by {authorName}
          </h2>
          
          <div className="space-y-8">
            {authorPosts.map((post: BlogPostType) => (
              <BlogPost key={post.id} post={post} isPreview={true} />
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href="/"
              className="group relative inline-flex items-center px-4 py-2 text-sm font-medium overflow-hidden rounded-md text-[#f5f5f5] bg-[#1e3a2b] border border-[#588068]/50"
            >
              <span className="relative flex items-center gap-2 group-hover:text-[#8eba92] transition-colors duration-300">
                <svg 
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all posts
              </span>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-[#315c40] text-[#f5f5f5] py-8 mt-12 border-t border-[#588068]/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>© 2024 ESPM 50AC Final Project</p>
          <p className="text-[#8eba92] mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
} 