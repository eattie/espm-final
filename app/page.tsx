import type { BlogPost as BlogPostType } from './types/blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import UCBerkeleyResources from './components/UCBerkeleyResources';

export const samplePosts: BlogPostType[] = [
  {
    id: '1',
    title: "Breathing Unequally: What Bayview Taught Me",
    author: "Etai",
    authorImage: "/photos/etaiheadshot.jpeg",
    date: "April 18, 2025",
    content: "Bayview-Hunters Point is a community in southeast San Francisco that's super rich in culture, history, and community pride - but like many other areas mentioned on this site, is also burdened by decades of toxic development. When I first visited, I was struck by how different it felt from the rest of the city. Not just physically, but environmentally. You could see the remnants of old industrial sites, fenced-off land contaminated by radiation, and even schools and homes next to sites marked by warning signs. Honestly, it's pretty sad to see that the state of some parts of the area in which we all live in sometimes. When I first moved to the bay area (Berkeley), I never would have imagined the state of some places that are within 30 minutes of us.     \n\nAt first, I thought maybe this was just the result of poor planning or some misfortunate events, but I decided to take a deeper look into it when I got home. The more I read, especially upon finding Dorceta Taylor's Toxic Communities, the clearer it became: this was all planned. Taylor lays out how racist housing policies, weak zoning laws, and the lack of political power allowed pollution to stack up in communities like Bayview. It wasn't that the residents chose to live near these hazards - it's that their choices were limited by a system built against them. In fact, Taylor talks about how even when these communities try to raise health concerns or move, they are faced with even more barriers, such as the lack of resources or market discrimination - putting them in a really tough and complacent situation. It's sad to see the circumstances that many people had to live in. \n\nRobert Bullard's Dumping in Dixie also reinforces this point. Even though his book is more focused on the South, it helped me realize similar patterns in San Francisco: polluting industries are often placed in Black neighborhoods. Many black dominant neighborhoods are very not well maintained by the city, and we can see how apparent it truly is. What's crazy to me is how early this all started. In Bayview, for example, the government knew there were contamination risks at the Hunters Point Naval Shipyard decades ago. But still, they let people live nearby. The government should be held accountable for damanging the lives of so many innocent civilians who were forced to live in these very suboptimal conditions. Some may say it's negligence, but I would call it environmental racism.\n\nAnd yet, what I didn't expect when I started researching Bayview was the strength of the community resistance. Groups like Greenaction have fought tirelessly to expose the dangers and demand clean air, clean water, and real investment in the neighborhood. It's really inspiring to see how much these people care, and how they are willing to sacrifice so much time and effort to make a real change in these communities that are affected. Their website shows years of organizing, which shows that they're not waiting for help - they're being proactive and leading the change. I really hope that their efforts aren't in vain and they are able to help these areas be more safe and increase the quality of living for people who are in these areas.",
    readTime: "5 min",
    bibliography: [
      {
        author: "Taylor, Dorceta E.",
        year: "2014",
        title: "Toxic Communities: Environmental Racism, Industrial Pollution, and Residential Mobility",
        source: "NYU Press",
        link: "https://nyupress.org/9781479861620/toxic-communities/",
        annotation: "Dorceta Taylor is a famous environmental justice researcher. Her book breaks down how racist policies like redlining, bad housing options, and weak zoning laws lead to certain people living in toxic neighborhoods. This book gave me a lot of context/background info on how environmental racism actually works. It's also great because it talks about why people can't just evade their situation - something people often misunderstand."
      },
      {
        author: "Bullard, Robert D.",
        year: "2000",
        title: "Dumping in Dixie: Race, Class, and Environmental Quality",
        source: "Westview Press",
        annotation: "Robert Bullard is known as one of the founders of the environmental justice movement. In his book, he talks about how toxic waste sites and polluting industries are often placed in Black neighborhoods in the South. Even though this book is focused on the South, similar patterns still apply to the Bay Area. Bullard's work helped reinforce my understanding that these things didn't just 'happened' - but that they were planned since long ago."
      },
      {
        author: "Greenaction for Health and Environmental Justice",
        year: "2023",
        title: "Bayview Hunters Point Campaigns",
        source: "Greenaction",
        link: "https://greenaction.org/campaigns/bayview-hunters-point/",
        annotation: "Greenaction is a local activist group that's been working in Bayview for years. This website shows their work shutting down polluting facilities and helping the community fight for clean air and water. It's a great and powerful real-world example of active resistance and organized movement. It's not a scholarly article, but I find it super valuable because it comes straight from the people affected."
      }
    ]
  },
  {
    id: "2",
    title: "Redlining is Drastically Shaping Pollution in the Bay",
    author: "Jimmy",
    authorImage: "/profiles/jimmy.jpg",
    date: "April 18, 2025",
    content: "When people talk about places like Richmond or Bayview-Hunters Point, they often mention pollution, asthma, or toxic sites. But none of these happened by accident - these neighborhoods were literally designed to carry the environmental burden, through redlining and zoning decisions made almost 100 years ago.\n\nI learned through Laura Pulido's work that environmental racism isn't just about who lives near pollution - it's also about who avoids it. In her article on urban development and white privilege, she talks about how cities have historically developed in ways that protect white neighborhoods while pushing polluting industries into communities of color. That idea really clicked for me when I looked at CalEnviroScreen maps for Richmond. The data is super shocking: high asthma rates, cancer risks, and toxic releases all concentrated in areas that were redlined almost a century ago. Those same areas were marked in red by the federal government in the 1930s as 'hazardous' for investment - because they had Black, Latino, or immigrant residents.\n\nManuel Pastor's book on social movements for regional equity highlights how communities in Richmond have organized to fight back against environmental injustice. There's a particularly inspiring section about how residents used their own tools to monitor air quality and push back against Chevron. This shows that change is possible through community organizing and direct action.\n\nAll of this is extremely unfair, so here's the ask: bump this post, share the maps, talk to your friends. The more people know, the harder it gets to ignore - let's stand up for environmental justice!",
    readTime: "4 min",
    bibliography: [
      {
        author: "Pulido, Laura",
        year: "2000",
        title: "Rethinking Environmental Racism: White Privilege and Urban Development in Southern California",
        source: "Annals of the Association of American Geographers, vol. 90, no. 1, pp. 12–40",
        link: "https://doi.org/10.1111/0004-5608.00182",
        annotation: "Laura Pulido is a geography professor who studies race and the environment. In this article, she argues that environmental racism isn't just about where pollution ends up—it's also about the benefits white communities get by avoiding it. She shows how white privilege shapes cities and neighborhoods in ways that protect some and harm others. This was super relevant to my blog because it helped me better understand the deeper systems behind toxic zoning and redlining. It showed me that the environmental injustice is not the result of one bad decision or a particular consequence, but about a whole structure that pushes pollution toward certain communities."
      },
      {
        author: "Pastor, Manuel, et al.",
        year: "2009",
        title: "This Could Be the Start of Something Big: How Social Movements for Regional Equity Are Reshaping Metropolitan America",
        source: "Cornell University Press",
        link: "https://www.cornellpress.cornell.edu/book/9780801476594/this-could-be-the-start-of-something-big/",
        annotation: "Manuel Pastor is a well-known expert on environmental justice and equity, and this book looks at how people in California, especially in the Bay, have organized to fight environmental injustice. There's a part about Richmond where communities used their own tools to monitor air quality and push back against Chevron. This book is super helpful and inspiring because it shows that change is possible and highlights the power of rallies and taking immediate action."
      },
      {
        author: "California Environmental Protection Agency",
        year: "2023",
        title: "CalEnviroScreen 4.0",
        source: "OEHHA",
        link: "https://oehha.ca.gov/calenviroscreen/report/calenviroscreen-40",
        annotation: "This is a state-run tool that shows pollution and health data by neighborhood. You can search any California ZIP code and see things like asthma rates, poverty levels, and toxic waste sites. I used this tool to look at the environmental statistics for the Richmond Area and show how redlined areas still face some of the worst environmental problems today."
      }
    ]
  },
  {
    id: "3",
    title: "Mapping Pollution: What Data Reveals About West Oakland",
    author: "Jimmy",
    authorImage: "/profiles/jimmy.jpg",
    date: "April 25, 2025",
    content: "As I started researching environmental justice in the Bay Area, I found myself really drawn to West Oakland, not only because it's so close to us but also because of its long history with air pollution and activism. I spent a while looking through community air quality data and mapping tools like CalEnviroScreen, and what I found was genuinely pretty shocking - the data showed that West Oakland consistently ranks among the worst neighborhoods in California for diesel pollution and asthma rates.\n\nWhat really stood out to me was how a lot these numbers strongly correlated with a lot of the stories I was reading too - about how highways and warehouses were built right next to homes, and how these decisions were rarely made with any community input. Thankfully, I also learned about local organizations like the West Oakland Environmental Indicators Project, which empowers residents to collect and share their own air quality data - allowing even people living on the other side of the world to learn and realize the state of pollution in West Oakland. This kind of community science is a super powerful way to shed light on what would otherwise by invisible problems.\n\nSeeing all the data and reading about these efforts made me realize how important of a role that especially technology has in the fight against environmental injustice. Coming into this class as a Computer Science major I never realized that the things I'd learn in this class are things I could directly contribute to, but seeing the power of data science and analysis in using numbers to tell the stories of peoples' lives made me feel really inspired, and in a way more taken a back at the impact that my major could potentially have.",
    readTime: "4 min",
    bibliography: [
      {
        author: "Pastor, Manuel",
        year: "2018",
        title: "State of Resistance: What California's Dizzying Descent and Remarkable Resurgence Mean for America's Future",
        source: "The New Press",
        link: "https://thenewpress.com/books/state-of-resistance",
        annotation: "Pastor's book explores how California communities have organized for environmental justice, with a focus on activism and policy change. It helped me understand the broader context of West Oakland's activism."
      },
      {
        author: "West Oakland Environmental Indicators Project",
        year: "2024",
        title: "Community Air Quality Data",
        source: "WOEIP",
        link: "https://woeip.org/",
        annotation: "WOEIP is a local group that collects and shares air quality data in West Oakland. Their work shows how community science can drive change."
      }
    ]
  },
  {
    id: "4",
    title: "Richmond's Fight for Clean Air: What I Learned from Community Science",
    author: "Etai",
    authorImage: "/photos/etaiheadshot.jpeg",
    date: "April 25, 2025",
    content: "While doing some research on environmental justice in the Bay Area, I kept coming across stories about Richmond and its long struggle with pollution from oil refineries. As someone who has lived in the bay area for a few years and wants to potentially keep living her after graduaton, I did some digging.I wanted to better understand how residents were responding, so I started reading up on community science projects and local advocacy groups - I learned that a lot of Richmond residents, even those without a background in science, have actually been trained to use air quality sensors to monitor pollution around their homes and schools.\n\nIt was one thing to use this data to respond locally, but what really struck me was how this data has actually been used to push for real policy changes - like getting air filters installed in schools and demanding stricter regulations on refinery emissions. I find it so cool that Richmond's collective community action is so strong and that people are able to empower themselves to take deliberate action and create impact on such a large scale. Groups like the Asian Pacific Environmental Network and the Richmond Our Power Coalition also played a huge role in organizing these efforts and making sure the community voices are heard. It's really amazing seeing how much people can do they when they choose to work together and begin taking leaps of faith to improve their health.\n\nAll this research made me realize that environmental justice isn't just constrained to laws and policies - it's also about encouraging small pieces of action and giving people the tools and knowledge to fight for their own health and future. Researching into this has made me also care a lot more about my health, in particular, pollution and how it affects the communities I live in. The power of community science is really something I never fully appreciated until now.",
    readTime: "4 min",
    bibliography: [
      {
        author: "Morello-Frosch, Rachel",
        year: "2011",
        title: "Community-Based Participatory Research and Policy Advocacy to Reduce Diesel Exposure in West Oakland",
        source: "American Journal of Public Health, 101(S1), S166–S175",
        link: "https://ajph.aphapublications.org/doi/10.2105/AJPH.2010.300045",
        annotation: "This article describes how community-driven research in the Bay Area has led to real policy changes. It gave me a lot of insight into Richmond's community science efforts."
      },
      {
        author: "Asian Pacific Environmental Network",
        year: "2023",
        title: "Richmond Our Power Coalition",
        source: "APEN",
        link: "https://apen4ej.org/richmond-our-power-coalition/",
        annotation: "APEN is a grassroots group in Richmond that organizes for environmental justice. Their coalition is a great example of collective action in the city."
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
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A platform for sharing experiences and raising awareness about environmental racism in the Bay Area. 
              Through our stories and research, we aim to highlight these injustices, foster community understanding, 
              and work together towards meaningful change.
            </p>
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

      <UCBerkeleyResources />
      
      <footer className="bg-[#f5f5f5] text-[#315c40] py-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="font-medium">© 2025 ESPM 50AC Final Project</p>
          <p className="text-black/70 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
