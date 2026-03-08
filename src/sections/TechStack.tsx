import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import TechBadge from '../components/TechBadge';
import { technologies } from '../constants';

const categories = [
  { id: 'frontend', title: 'Frontend Development' },
  { id: 'backend', title: 'Backend Development' },
  { id: 'ai', title: 'AI & Machine Learning' },
  { id: 'tools', title: 'Tools & DevOps' },
];

const TechStack: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Tools & tech
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          My Personal <span className="font-bold">Favourite</span>
        </h2>
      </div>

      <div className="space-y-10">
        {categories.map((category) => {
          const techs = technologies.filter((t) => t.category === category.id);
          if (techs.length === 0) return null;
          return (
            <div key={category.id}>
              <h3 className="text-sm font-medium text-foreground-muted mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
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
