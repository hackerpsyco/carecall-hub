import React from 'react';
import { motion } from 'framer-motion';
import { TechSkill } from '../types';

const TechBadge: React.FC<{ skill: TechSkill, index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-[#1a1a2e]/80 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center shadow-[0_0_15px_rgba(30,144,255,0.1)]"
    >
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-12 h-12 object-contain mb-3" 
      />
      <h4 className="text-[#F5F5F5] font-medium text-sm">{skill.name}</h4>
      <div className="w-full h-2 bg-[#1a1a2e] rounded-full mt-2">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ 
            background: `linear-gradient(90deg, #1E90FF ${skill.proficiency - 20}%, #39FF14)` 
          }}
        />
      </div>
    </motion.div>
  );
};

export default TechBadge;