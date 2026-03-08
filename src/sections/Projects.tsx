import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects: React.FC = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-[#1E90FF] uppercase tracking-wider">
          My Work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h2>
        <p className="mt-3 text-[#A9A9A9] text-[17px] max-w-3xl leading-[30px]">
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my
          ability to solve complex problems, work with different technologies,
          and effectively manage projects.
        </p>
      </motion.div>

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");