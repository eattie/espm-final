import type { BlogPost as BlogPostType } from './types/blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';

export const samplePosts: BlogPostType[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    author: 'Etai',
    authorImage: '/profiles/etai.svg',
    date: 'April 18, 2025',
    content: 'Web development is constantly evolving, and staying ahead of the curve is crucial. In this post, I explore the latest trends in web development, including the rise of AI-powered applications, the continued dominance of JavaScript frameworks like Next.js, and the growing importance of performance optimization. As we move forward, developers must adapt to new technologies while maintaining a focus on creating accessible and user-friendly experiences. I\'ll also discuss how environmental considerations are becoming increasingly important in the tech world, with sustainable web practices gaining momentum. From reducing server energy consumption to optimizing for bandwidth efficiency, environmental consciousness is becoming a crucial aspect of modern web development.',
    readTime: '5 min',
    bibliography: [
      {
        author: 'Smith, J.',
        year: '2024',
        title: 'Sustainable Web Development Practices',
        source: 'Journal of Green Computing, 12(3), 45-67',
        link: 'https://example.com/sustainable-web'
      },
      {
        author: 'Chen, L. & Wang, T.',
        year: '2023',
        title: 'Environmental Impact of Cloud Computing Infrastructure',
        source: 'Environmental Technology Review, 8(2), 112-128',
        link: 'https://example.com/cloud-impact'
      }
    ]
  },
  {
    id: '2',
    title: 'Redlining is Drastically Shaping Pollution in the Bay',
    author: 'Jimmy',
    authorImage: '/profiles/jimmy.svg',
    date: 'April 18, 2025',
    content: "When people talk about places like Richmond or Bayview-Hunters Point, they often mention pollution, asthma, or toxic sites. But none of these happened by accident - these neighborhoods were literally designed to carry the environmental burden, through redlining and zoning decisions made almost 100 years ago.\n\nI learned through Laura Pulido's work that environmental racism isn't just about who lives near pollution - it's also about who avoids it. In her article on urban development and white privilege, she talks about how cities have historically developed in ways that protect white neighborhoods while pushing polluting industries into communities of color. That idea really clicked for me when I looked at CalEnviroScreen maps for Richmond. The data is super shocking: high asthma rates, cancer risks, and toxic releases all concentrated in areas that were redlined almost a century ago. Those same areas were marked in red by the federal government in the 1930s as \"hazardous\" for investment - because they had Black, Latino, or immigrant residents.\n\nAll of this is extremely unfair, so here's the ask: bump this post, share the maps, talk to your friends. The more people know, the harder it gets to ignore - let's stand up for environmental justice!",
    readTime: '4 min',
    bibliography: [
      {
        author: 'Pulido, L.',
        year: '2000',
        title: 'Rethinking Environmental Racism: White Privilege and Urban Development in Southern California',
        source: 'Annals of the Association of American Geographers, 90(1), 12-40',
        link: 'https://doi.org/10.1111/0004-5608.00182'
      },
      {
        author: 'California Office of Environmental Health Hazard Assessment',
        year: '2023',
        title: 'CalEnviroScreen 4.0',
        source: 'California Environmental Protection Agency',
        link: 'https://oehha.ca.gov/calenviroscreen'
      },
      {
        author: 'Rothstein, R.',
        year: '2017',
        title: 'The Color of Law: A Forgotten History of How Our Government Segregated America',
        source: 'Liveright Publishing',
        link: 'https://www.coloroflawbook.com/'
      }
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="bg-[#315c40] py-16 border-b border-[#588068]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl font-bold mb-4 text-white">ESPM 50AC Final</h1>
            <p className="text-xl max-w-2xl mx-auto text-white/90">
              Exploring the intersection of technology, sustainability, and environmental consciousness
            </p>
          </div>
        </div>
      </div>
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 mb-8 shadow-md border-l-4 border-[#315c40] border-t border-r border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#315c40] mb-2">Welcome to our ESPM 50AC Blog!</h2>
            <p className="text-black/90">
              This blog showcases our final project, exploring environmental themes through technology.
              Each post reflects our perspectives on sustainability in the digital age.
            </p>
          </div>
        
          <h2 className="text-3xl font-bold text-[#315c40] mb-8 text-center border-b-2 border-[#315c40]/30 pb-4">
            Latest Articles
          </h2>
          <div className="space-y-8">
            {samplePosts.map((post) => (
              <BlogPost key={post.id} post={post} isPreview={true} />
            ))}
          </div>
        </div>
      </main>
      
      <footer className="bg-[#f5f5f5] text-[#315c40] py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-medium">© 2024 ESPM 50AC Final Project</p>
          <p className="text-black/70 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
