import React from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_GREEN } from '../constants';
import LogoIcon from './icons/LogoIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="mb-8">
        <LogoIcon className="h-24 w-24 md:h-32 md:w-32 mx-auto animate-pulse-slow" color={PRIMARY_GREEN} />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        <span className="block text-[#00FF88]">Pseudo Line</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
        We build tools that teach, systems that think, and art that moves.
      </p>
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-[#00FF88] hover:bg-opacity-80 transition-colors duration-300 shadow-lg hover:shadow-[#00FF88]/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
        >
          View Projects
          <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
