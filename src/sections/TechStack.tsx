import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import TechBadge from '../components/TechBadge';
import { technologies } from '../constants';

const TechStack: React.FC = () => {
  const categories = [
    { id: 'frontend', title: 'Frontend' },
    { id: 'backend', title: 'Backend' },
    { id: 'mobile', title: 'Mobile' },
    { id: 'ai', title: 'AI & ML' },
    { id: 'tools', title: 'Tools & DevOps' }
  ];

  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-[#1E90FF] uppercase tracking-wider">
          Technologies
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack
        </h2>
        <p className="mt-3 text-[#A9A9A9] text-[17px] max-w-3xl leading-[30px]">
          I've worked with a variety of technologies in the web development, mobile app, and AI worlds.
          From frontend frameworks to backend systems, from app development to AI models,
          here's a comprehensive look at my technical toolkit.
        </p>
      </motion.div>

      <div className="mt-16">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h3 className="text-[#39FF14] font-bold text-2xl mb-6">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {technologies
                .filter((tech) => tech.category === category.id)
                .map((tech, index) => (
                  <TechBadge 
                    key={tech.id} 
                    skill={tech} 
                    index={index} 
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, "techstack");