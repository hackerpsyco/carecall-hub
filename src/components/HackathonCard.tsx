import React from 'react';
import { motion } from 'framer-motion';
import { HackathonAchievement } from '../types';
import { Trophy } from 'lucide-react';

const HackathonCard: React.FC<{
  hackathon: HackathonAchievement;
  index: number;
  totalItems: number;
}> = ({ hackathon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="clean-card rounded-xl p-6 flex gap-5 items-start"
    >
      <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        <Trophy size={20} className="text-foreground" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-1.5">
          <h3 className="font-display font-semibold text-foreground text-base">{hackathon.title}</h3>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-foreground text-background">
            {hackathon.position}
          </span>
        </div>

        <div className="flex items-center text-foreground-muted text-sm mb-3 gap-2">
          <span>{hackathon.date}</span>
          {hackathon.team && (
            <>
              <span className="text-border">•</span>
              <span>Team {hackathon.team}</span>
            </>
          )}
        </div>

        <p className="text-foreground-muted text-sm leading-relaxed">{hackathon.description}</p>
      </div>
    </motion.div>
  );
};

export default HackathonCard;
