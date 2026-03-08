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
      <div className="mb-16">
        <span className="section-divider" />
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-foreground-muted mb-4">
          Tools & tech
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          My Personal Favourite
        </h2>
        <p className="mt-5 text-foreground-muted text-base leading-relaxed max-w-xl">
          Technologies I work with daily — from frontend frameworks to backend
          systems and AI tooling.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category) => {
          const techs = technologies.filter((t) => t.category === category.id);
          if (techs.length === 0) return null;
          return (
            <div key={category.id}>
              <h3 className="font-display font-semibold text-sm text-foreground-muted mb-5 tracking-wide">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
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
