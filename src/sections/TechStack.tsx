import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import TechBadge from '../components/TechBadge';
import { technologies } from '../constants';

const categories = [
  { id: 'frontend', title: 'Frontend', color: 'text-primary' },
  { id: 'backend', title: 'Backend', color: 'text-accent' },
  { id: 'ai', title: 'AI & ML', color: 'text-highlight' },
  { id: 'tools', title: 'Tools & DevOps', color: 'text-foreground-muted' },
];

const TechStack: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-sm font-mono font-medium text-primary tracking-wider uppercase mb-3">
          Technologies
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Tech Stack
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          A comprehensive look at the technologies I work with — from frontend 
          frameworks to backend systems and AI tooling.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => {
          const techs = technologies.filter((t) => t.category === category.id);
          if (techs.length === 0) return null;
          return (
            <div key={category.id}>
              <h3 className={`font-display font-semibold text-lg mb-5 ${category.color}`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <TechBadge key={tech.id} skill={tech} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, 'techstack');
