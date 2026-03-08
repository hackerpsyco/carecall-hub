import React from 'react';
import { motion } from 'framer-motion';
import { HackathonAchievement } from '../types';
import { Award } from 'lucide-react';

const HackathonCard: React.FC<{ 
  hackathon: HackathonAchievement, 
  index: number,
  totalItems: number
}> = ({ hackathon, index, totalItems }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex md:contents ${isEven ? '' : 'flex-row-reverse'}`}>
      <div className={`col-start-1 col-end-2 mr-10 md:mx-auto relative ${index === totalItems - 1 ? '' : 'h-full'}`}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-[2px] bg-[#1E90FF] pointer-events-none"></div>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="w-10 h-10 absolute top-0 -ml-2 rounded-full bg-[#1E90FF] flex items-center justify-center shadow-md"
        >
          <Award size={20} className="text-white" />
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ 
          opacity: 0, 
          x: isEven ? -50 : 50 
        }}
        animate={{ 
          opacity: 1, 
          x: 0 
        }}
        transition={{
          delay: index * 0.2,
          duration: 0.5,
          ease: "easeOut"
        }}
        className={`col-start-2 col-end-12 p-5 my-4 rounded-xl ${
          isEven ? 'mr-auto md:mr-0' : 'ml-auto md:ml-0'
        } w-full md:w-[80%] shadow-[0_0_15px_rgba(30,144,255,0.1)] bg-[#1a1a2e]/80 backdrop-blur-sm`}
      >
        <div className="flex w-full justify-between items-center mb-2">
          <h3 className="font-bold text-white text-lg">{hackathon.title}</h3>
          <div className="text-sm bg-[#39FF14] text-[#0f0f2d] font-bold px-2 py-1 rounded-md">
            {hackathon.position}
          </div>
        </div>
        <div className="flex items-center text-[#A9A9A9] text-sm mb-2">
          <span>{hackathon.date}</span>
          {hackathon.team && (
            <>
              <span className="mx-2">•</span>
              <span>Team: {hackathon.team}</span>
            </>
          )}
        </div>
        <p className="text-[#F5F5F5] leading-tight">{hackathon.description}</p>
      </motion.div>
    </div>
  );
};

export default HackathonCard;