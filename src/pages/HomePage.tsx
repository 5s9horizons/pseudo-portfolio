import React from 'react';
import Hero from '../components/Hero';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData'; 
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const HomePage: React.FC = () => {
  const featuredProjects = projects.slice(0, 3); 

  return (
    <>
      <Hero />
      <SectionContainer className="bg-gray-900/30">
        <SectionTitle subtitle="Explore our latest innovations and creations.">Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
          >
            View All Projects
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </SectionContainer>
      
      <SectionContainer>
        <SectionTitle subtitle="Learn about our mission and the minds behind our work.">Who We Are</SectionTitle>
        <div className="max-w-2xl mx-auto text-center text-gray-300">
            <p className="mb-6 text-lg leading-relaxed">
                Pseudo Line is a future-forward, polymathic enterprise working at the intersection of software engineering, cybersecurity, open-source education, AI tools, and creative development. We are passionate about building impactful solutions and fostering innovation.
            </p>
            <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
            >
                Learn More About Us
                <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-900/30">
        <SectionTitle subtitle="Transparent pricing for our full-stack web development services.">Our Pricing</SectionTitle>
        <div className="max-w-2xl mx-auto text-center text-gray-300">
            <p className="mb-6 text-lg leading-relaxed">
                We offer progressive pricing plans tailored to fit your project's scale and complexity, from simple landing pages to sophisticated web applications. Discover the best fit for your needs.
            </p>
            <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
            >
                View Pricing Plans
                <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
        </div>
      </SectionContainer>
    </>
  );
};

export default HomePage;
