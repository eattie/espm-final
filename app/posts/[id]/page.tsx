import { samplePosts } from '../../page';
import BlogPost from '../../components/BlogPost';
import Navbar from '../../components/Navbar';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function PostPage({ params }: { params: { id: string } }) {
  const post = samplePosts.find(p => p.id === params.id);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1e3a2b] text-[#f5f5f5]">
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <BlogPost post={post} isPreview={false} />
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