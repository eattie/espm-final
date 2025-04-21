import type { BlogPost as BlogPostType } from './types/blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';

export const samplePosts: BlogPostType[] = [
  {
    id: '1',
    title: 'Breathing Unequally: What Bayview Taught Me',
    author: 'Etai',
    authorImage: '/profiles/etai.svg',
    date: 'April 18, 2025',
    content: "Bayview-Hunters Point is a community in southeast SF that's super rich in culture, history, and community pride - but like many other areas mentioned on this site, is also burdened by decades of toxic development. When I first visited, I was struck by how different it felt from the rest of the city. Not just physically, but environmentally. You could see the remnants of old industrial sites, fenced-off land contaminated by radiation, and even schools and homes next to sites marked by warning signs.\n\nAt first, I thought maybe this was just the result of poor planning or some misfortunate events, but I decided to take a deeper look into it when I got home. The more I read, especially upon finding Dorceta Taylor's Toxic Communities, the clearer it became: this was all planned. Taylor lays out how racist housing policies, weak zoning laws, and the lack of political power allowed pollution to stack up in communities like Bayview. It wasn't that the residents chose to live near these hazards - it's that their choices were limited by a system built against them. In fact, Taylor talks about how even when these communities try to raise health concerns or move, they are faced with even more barriers, such as the lack of resources or market discrimination - putting them in a really tough and complacent situation\n\nRobert Bullard's Dumping in Dixie also reinforces this point. Even though his book is more focused on the South, it helped me realize similar patterns in San Francisco: polluting industries are often placed in Black neighborhoods. What's crazy to me is how early this all started. In Bayview, for example, the government knew there were contamination risks at the Hunters Point Naval Shipyard decades ago. But still, they let people live nearby. Some may say it's negligence, but I would call it environmental racism.\n\nAnd yet, what I didn't expect when I started researching Bayview was the strength of the community resistance. Groups like Greenaction have fought tirelessly to expose the dangers and demand clean air, clean water, and real investment in the neighborhood. Their website shows years of organizing, which shows that they're not waiting for help - they're being proactive and leading the change.",
    readTime: '5 min',
    bibliography: [
      {
        author: 'Taylor, Dorceta E.',
        year: '2014',
        title: 'Toxic Communities: Environmental Racism, Industrial Pollution, and Residential Mobility',
        source: 'NYU Press',
        link: 'https://nyupress.org/9781479861620/toxic-communities/',
        annotation: `Dorceta Taylor is a famous environmental justice researcher. Her book breaks down how racist policies like redlining, bad housing options, and weak zoning laws lead to certain people living in toxic neighborhoods. This book gave me a lot of context/background info on how environmental racism actually works. It's also great because it talks about why people can't just evade their situation - something people often misunderstand.`
      },
      {
        author: 'Bullard, Robert D.',
        year: '2000',
        title: 'Dumping in Dixie: Race, Class, and Environmental Quality',
        source: 'Westview Press',
        annotation: `Robert Bullard is known as one of the founders of the environmental justice movement. In his book, he talks about how toxic waste sites and polluting industries are often placed in Black neighborhoods in the South. Even though this book is focused on the South, similar patterns still apply to the Bay Area. Bullard's work helped reinforce my understanding that these things didn't just "happen" - but that they were planned since long ago.`
      },
      {
        author: 'Greenaction for Health and Environmental Justice',
        year: '2023',
        title: 'Bayview Hunters Point Campaigns',
        source: 'Greenaction',
        link: 'https://greenaction.org/campaigns/bayview-hunters-point/',
        annotation: `Greenaction is a local activist group that's been working in Bayview for years. This website shows their work shutting down polluting facilities and helping the community fight for clean air and water. It's a great and powerful real-world example of active resistance and organized movement. It's not a scholarly article, but I find it super valuable because it comes straight from the people affected.`
      }
    ]
  },
  {
    id: '2',
    title: 'Redlining is Drastically Shaping Pollution in the Bay',
    author: 'Jimmy',
    authorImage: '/profiles/jimmy.svg',
    date: 'April 18, 2025',
    content: "When people talk about places like Richmond or Bayview-Hunters Point, they often mention pollution, asthma, or toxic sites. But none of these happened by accident - these neighborhoods were literally designed to carry the environmental burden, through redlining and zoning decisions made almost 100 years ago.\n\nI learned through Laura Pulido's work that environmental racism isn't just about who lives near pollution - it's also about who avoids it. In her article on urban development and white privilege, she talks about how cities have historically developed in ways that protect white neighborhoods while pushing polluting industries into communities of color. That idea really clicked for me when I looked at CalEnviroScreen maps for Richmond. The data is super shocking: high asthma rates, cancer risks, and toxic releases all concentrated in areas that were redlined almost a century ago. Those same areas were marked in red by the federal government in the 1930s as \"hazardous\" for investment - because they had Black, Latino, or immigrant residents.\n\nManuel Pastor's book on social movements for regional equity highlights how communities in Richmond have organized to fight back against environmental injustice. There's a particularly inspiring section about how residents used their own tools to monitor air quality and push back against Chevron. This shows that change is possible through community organizing and direct action.\n\nAll of this is extremely unfair, so here's the ask: bump this post, share the maps, talk to your friends. The more people know, the harder it gets to ignore - let's stand up for environmental justice!",
    readTime: '4 min',
    bibliography: [
      {
        author: 'Pulido, Laura',
        year: '2000',
        title: 'Rethinking Environmental Racism: White Privilege and Urban Development in Southern California',
        source: 'Annals of the Association of American Geographers, vol. 90, no. 1, pp. 12–40',
        link: 'https://doi.org/10.1111/0004-5608.00182',
        annotation: `Laura Pulido is a geography professor who studies race and the environment. In this article, she argues that environmental racism isn't just about where pollution ends up—it's also about the benefits white communities get by avoiding it. She shows how white privilege shapes cities and neighborhoods in ways that protect some and harm others. This was super relevant to my blog because it helped me better understand the deeper systems behind toxic zoning and redlining. It showed me that the environmental injustice is not the result of one bad decision or a particular consequence, but about a whole structure that pushes pollution toward certain communities.`
      },
      {
        author: 'Pastor, Manuel, et al.',
        year: '2009',
        title: 'This Could Be the Start of Something Big: How Social Movements for Regional Equity Are Reshaping Metropolitan America',
        source: 'Cornell University Press',
        link: 'https://www.cornellpress.cornell.edu/book/9780801476594/this-could-be-the-start-of-something-big/',
        annotation: `Manuel Pastor is a well-known expert on environmental justice and equity, and this book looks at how people in California, especially in the Bay, have organized to fight environmental injustice. There's a part about Richmond where communities used their own tools to monitor air quality and push back against Chevron. This book is super helpful and inspiring because it shows that change is possible and highlights the power of rallies and taking immediate action.`
      },
      {
        author: 'California Environmental Protection Agency',
        year: '2023',
        title: 'CalEnviroScreen 4.0',
        source: 'OEHHA',
        link: 'https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40',
        annotation: `This is a state-run tool that shows pollution and health data by neighborhood. You can search any California ZIP code and see things like asthma rates, poverty levels, and toxic waste sites. I used this tool to look at the environmental statistics for the Richmond Area and show how redlined areas still face some of the worst environmental problems today.`
      }
    ]
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="bg-[#315c40] py-12 border-b border-[#588068]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-5xl font-bold mb-4 text-white">ESPM 50AC Final Project</h1>
          </div>
        </div>
      </div>
      
      <main className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
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
