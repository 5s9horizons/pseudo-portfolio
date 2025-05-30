import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle'; 
import { projects } from '../data/projectsData';
import type { Project } from '../types';
import { PRIMARY_GREEN } from '../constants';
import GitHubIcon from '../components/icons/GitHubIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | undefined>(undefined);
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      const foundProject = projects.find(p => p.id === projectId);
      setProject(foundProject);
    }
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <SectionContainer className="text-center">
        <p className="text-xl text-gray-400">Loading project details...</p>
      </SectionContainer>
    );
  }

  if (!project) {
    return (
      <SectionContainer className="text-center">
        <SectionTitle subtitle="Sorry, we couldn't find that project.">Project Not Found</SectionTitle>
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to All Projects
        </Link>
      </SectionContainer>
    );
  }

  const showPlaceholder = !project.imageUrl || imageLoadFailed;

  return (
    <SectionContainer>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-gray-400 hover:text-[#00FF88] transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to All Projects
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#00FF88] mb-4 md:mb-6 text-center md:text-left">{project.name}</h1>
        
        <div className="mb-8 md:mb-10">
          {showPlaceholder ? (
            <div className="w-full max-w-3xl mx-auto h-64 md:h-96 bg-gray-700/50 flex items-center justify-center rounded-lg shadow-xl border border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={PRIMARY_GREEN} className="w-24 h-24 opacity-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
          ) : (
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="w-full max-w-3xl mx-auto h-auto md:min-h-96 object-cover rounded-lg shadow-xl border border-gray-700/50" 
              onError={() => setImageLoadFailed(true)}
            />
          )}
        </div>

        <div className="bg-gray-800/30 p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4">About this project</h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base md:text-lg">{project.description}</p>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-700 text-gray-200 text-sm rounded-full shadow">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {(project.githubLink || project.demoLink) && (
            <div className="mt-10 pt-6 border-t border-gray-700/50">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">Project Links</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
                  >
                    <GitHubIcon className="h-5 w-5 mr-2" />
                    View on GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#00FF88] text-base font-medium rounded-md text-[#00FF88] hover:bg-[#00FF88] hover:text-gray-950 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-[#00FF88]"
                  >
                    <ExternalLinkIcon className="h-5 w-5 mr-2" />
                    View Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectDetailPage;
