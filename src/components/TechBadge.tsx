import React from 'react';
import { motion } from 'framer-motion';
import { TechSkill } from '../types';

const TechBadge: React.FC<{ skill: TechSkill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileHover={{ y: -3 }}
      className="clean-card rounded-lg p-4 flex flex-col items-center gap-2.5 cursor-default"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-8 h-8 object-contain"
        loading="lazy"
      />
      <span className="text-foreground text-[11px] font-medium text-center leading-tight">{skill.name}</span>
    </motion.div>
  );
};

export default TechBadge;
