import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Projects
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          My <span className="font-bold">Latest Works</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
