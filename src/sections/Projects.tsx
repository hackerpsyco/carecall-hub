import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects: React.FC = () => {
  return (
    <>
      <div className="mb-16">
        <span className="section-divider" />
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-foreground-muted mb-4">
          Latest projects
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Featured Work
        </h2>
        <p className="mt-5 text-foreground-muted text-base leading-relaxed max-w-xl">
          Real-world projects showcasing full-stack development, AI integration,
          and end-to-end problem solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
