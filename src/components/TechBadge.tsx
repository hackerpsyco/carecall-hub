import React from 'react';
import { motion } from 'framer-motion';
import { TechSkill } from '../types';

const TechBadge: React.FC<{ skill: TechSkill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ y: -2 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border hover:border-foreground/25 transition-all cursor-default bg-background"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
      <span className="text-foreground text-xs font-medium">{skill.name}</span>
    </motion.div>
  );
};

export default TechBadge;
