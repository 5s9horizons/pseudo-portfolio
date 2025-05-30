
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const ProjectsPage: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle subtitle="A showcase of our work in software, AI, and creative tech.">Our Projects</SectionTitle>
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No projects to display at the moment. Check back soon!</p>
      )}
    </SectionContainer>
  );
};

export default ProjectsPage;