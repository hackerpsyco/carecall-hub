import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-sm font-mono font-medium text-primary tracking-wider uppercase mb-3">
          Portfolio
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Featured Projects
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          Real-world projects showcasing my skills in full-stack development, AI integration, 
          and problem solving. Each project reflects my ability to deliver end-to-end solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
