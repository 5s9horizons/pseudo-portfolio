
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // New Import
import type { Project } from '../types';
import { PRIMARY_GREEN } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const showPlaceholder = !project.imageUrl || imageLoadFailed;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-[#00FF88]/20 group">
      <Link to={`/projects/${project.id}`} className="block cursor-pointer">
        <div className="relative">
          {showPlaceholder ? (
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={PRIMARY_GREEN} className="w-16 h-16 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
          ) : (
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform duration-300" 
              onError={() => setImageLoadFailed(true)}
            />
          )}
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-[#00FF88] group-hover:text-white transition-colors duration-300">{project.name}</h3>
          <p className="text-gray-300 text-sm mb-4 h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-[#00FF88] scrollbar-track-gray-700">{project.description}</p>
          <div className="mb-4">
            <h4 className="text-xs text-gray-400 uppercase font-semibold mb-1">Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      {/* Links are outside the main card Link to ensure they are clickable */}
      <div className="p-6 pt-0 flex items-center space-x-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent card link navigation
            className="inline-flex items-center text-gray-400 hover:text-[#00FF88] transition-colors duration-200 text-sm z-10 relative"
          >
            <GitHubIcon className="h-5 w-5 mr-2" />
            GitHub
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent card link navigation
            className="inline-flex items-center text-gray-400 hover:text-[#00FF88] transition-colors duration-200 text-sm z-10 relative"
          >
            <ExternalLinkIcon className="h-5 w-5 mr-2" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;