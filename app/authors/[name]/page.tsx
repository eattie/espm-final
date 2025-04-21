import { samplePosts } from '../../page';
import BlogPost from '../../components/BlogPost';
import Navbar from '../../components/Navbar';
import { notFound } from 'next/navigation';
import type { BlogPost as BlogPostType } from '../../types/blog';
import Link from 'next/link';
import Image from 'next/image';

type Params = {
  name: string;
};

export default function AuthorPage({
  params,
}: {
  params: Params;
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const authorName = params.name.charAt(0).toUpperCase() + params.name.slice(1);
  const authorPosts = samplePosts.filter((post: BlogPostType) => 
    post.author.toLowerCase() === authorName.toLowerCase()
  );
  
  if (authorPosts.length === 0) {
    notFound();
  }
  
  const authorImage = authorPosts[0].authorImage;

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="bg-[#315c40] py-12 border-b border-[#588068]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/50 shadow-xl animate-pulse-slow">
              <Image 
                src={authorImage} 
                alt={`${authorName}'s profile`} 
                fill
                sizes="128px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#315c40]/30 to-transparent"></div>
            </div>
            <div className="text-center sm:text-left animate-fadeIn">
              <h1 className="text-4xl font-bold mb-2 text-white">
                {authorName}'s Blog
              </h1>
              <p className="text-white/80 text-lg max-w-xl">
                Environmental perspectives and insights from {authorName}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#315c40] mb-6 border-b-2 border-[#315c40]/30 pb-2">
            Articles by {authorName}
          </h2>
          
          <div className="space-y-8">
            {authorPosts.map((post: BlogPostType) => (
              <BlogPost key={post.id} post={post} isPreview={false} />
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href="/"
              className="group relative inline-flex items-center px-4 py-2 text-sm font-medium overflow-hidden rounded-md text-white bg-[#315c40] border border-gray-200"
            >
              <span className="relative flex items-center gap-2 group-hover:text-white/80 transition-colors duration-300">
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
      
      <footer className="bg-[#f5f5f5] text-[#315c40] py-8 mt-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-medium">© 2024 ESPM 50AC Final Project</p>
          <p className="text-black/70 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
} 