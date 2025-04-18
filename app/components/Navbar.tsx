import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#f5f5f5] text-[#315c40] shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold relative group">
            <span className="text-[#315c40] tracking-wide">
              ESPM 50AC Final
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#315c40] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <div className="flex space-x-8">
            <Link href="/authors/etai" className="relative group">
              <span className="text-[#315c40] hover:text-black transition-colors duration-300 font-medium">
                Etai's Blog
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#315c40] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link href="/authors/jimmy" className="relative group">
              <span className="text-[#315c40] hover:text-black transition-colors duration-300 font-medium">
                Jimmy's Blog
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#315c40] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 