import React from 'react';

const UCBerkeleyResources = () => {
  const resources = [
    {
      title: 'ESPM 50AC: Introduction to Culture and Natural Resource Management',
      description: 'The class that inspired us to build this website! Neither of us had much exposure to environmental justice prior to taking this class, but a lot of the historical events we learned really inspired us.',
      link: 'https://classes.berkeley.edu/content/2024-spring-espm-50ac-001-lec-001',
      type: 'Course'
    },
    {
      title: 'ESPM Environmental Justice Research',
      description: 'Faculty research projects on environmental justice in the Bay Area, including studies on Richmond, Bayview-Hunters Point, and other communities affected by environmental racism.',
      link: 'https://ourenvironment.berkeley.edu/research/environmental-justice',
      type: 'Research'
    },
    {
      title: 'Othering & Belonging Institute',
      description: 'Research and policy work on racial and environmental justice, including studies on housing discrimination, redlining, and their environmental consequences in the Bay Area.',
      link: 'https://belonging.berkeley.edu/',
      type: 'Research Institute'
    },
    {
      title: 'Environmental Justice Atlas - Bay Area',
      description: 'A database tracking environmental justice conflicts in the Bay Area, including pollution sources, community resistance, and policy changes.',
      link: 'https://ejatlas.org/',
      type: 'Database'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] py-12 border-t border-[#588068]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#315c40] mb-8 text-center border-b-2 border-[#315c40]/30 pb-4">
          UC Berkeley Resources on Environmental Justice
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Check out some of these UC Berkeley & Non-UC Berkeley resources if you want to learn more about and build awareness about environmental justice research and events in the Bay Area!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#588068]/20 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#315c40] mb-2">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#588068] transition-colors">
                      {resource.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                </div>
                <span className="bg-[#315c40]/10 text-[#315c40] px-3 py-1 rounded-full text-sm font-medium">
                  {resource.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UCBerkeleyResources; 