import React from 'react';
import { motion } from 'framer-motion';
import { TechSkill } from '../types';

const TechBadge: React.FC<{ skill: TechSkill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/30 transition-all duration-300 cursor-default"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
      <span className="text-foreground text-xs font-medium text-center leading-tight">{skill.name}</span>
    </motion.div>
  );
};

export default TechBadge;
