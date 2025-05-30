
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import type { TimelineEvent } from '../types';

const timelineEvents: TimelineEvent[] = [
  { id: '1', year: 'Concept', title: 'Genesis of Pseudo Line', description: 'Initial ideas and foundational principles established, focusing on interdisciplinary innovation.' },
  { id: '2', year: 'Incubation', title: 'Core Focus Defined', description: 'Refining the vision to blend software, AI, education, and creative arts into a cohesive strategy.' },
  { id: '3', year: 'Launch', title: 'First Projects Initiated', description: 'Development begins on flagship projects like Codex Terminal and Satori OS, embodying our core philosophy.' },
  { id: '4', year: 'Growth', title: 'Expanding Horizons', description: 'Exploring new avenues in AI-driven education and creative systems, fostering a community of thinkers and builders.' },
];

const AboutPage: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle subtitle="Our story, mission, and the vision that drives us.">About Pseudo Line</SectionTitle>
      
      <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF88]">Our Mission</h3>
          <p className="mb-4">
            Pseudo Line is a future-forward, polymathic enterprise dedicated to operating at the dynamic intersection of cutting-edge software engineering, robust cybersecurity, accessible open-source education, transformative AI tools, and profound creative development.
          </p>
          <p>
            Our core mission is to design and deploy tools that empower learning, build systems that exhibit intelligent behavior, and craft artistic experiences that evoke deep emotional and intellectual responses. We strive for clarity, depth, and confidence in all our endeavors, avoiding corporate clichés to foster an environment that is part digital laboratory, part personal think tank.
          </p>
        </div>

        <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF88]">Founder's Vision</h3>
          <p className="mb-4">
            The vision behind Pseudo Line is rooted in the belief that true innovation arises from the confluence of diverse disciplines. We aim to break down traditional silos between technology, education, and art, creating a synergistic ecosystem where ideas from one domain can spark breakthroughs in others.
          </p>
          <p>
            We envision a future where technology serves as a powerful catalyst for human potential – amplifying creativity, democratizing knowledge, and solving complex global challenges. Our commitment is to develop not just products, but enduring platforms and philosophies that contribute to a more insightful, capable, and inspired world.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-[#00FF88]">Our Journey</h3>
          <div className="relative">
            {/* Desktop: Central Timeline Line */}
            <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-0.5 -ml-px bg-[#00FF88] opacity-30 h-full"></div>
            
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              const contentCardMarkup = (
                <div className={`sm:w-1/2 ${isEven ? 'sm:pr-8' : 'sm:pl-8'}`}> 
                  <div 
                    className={`p-6 rounded-lg shadow-lg bg-gray-800/30 border border-gray-700/50 hover:border-[#00FF88]/50 transition-colors duration-300 max-w-md relative text-left
                                ${isEven ? 'ml-auto' : 'mr-auto'}`}
                  >
                    {/* Desktop: Dot on the card edge, visually connecting to the timeline */}
                    <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-950 border-2 border-[#00FF88] rounded-full 
                                     ${isEven ? 'right-[-2rem]' : 'left-[-2rem]'}`}> 
                    </div>
                    <p className="text-sm font-semibold text-[#00FF88]">{event.year}</p>
                    <h4 className="text-xl font-bold text-gray-100 mt-1 mb-2">{event.title}</h4>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </div>
                </div>
              );

              const spacerMarkup = <div className="hidden sm:block sm:w-1/2"></div>;

              return (
                <div key={event.id} className="mb-10 sm:flex sm:items-start w-full"> 
                  {isEven ? (
                    <>
                      {contentCardMarkup}
                      {spacerMarkup}
                    </>
                  ) : (
                    <>
                      {spacerMarkup}
                      {contentCardMarkup}
                    </>
                  )}
                  {/* Mobile connector line */}
                  {index < timelineEvents.length - 1 && 
                    <div className="sm:hidden h-8 w-px bg-[#00FF88]/30 mx-auto my-2"></div>
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutPage;
