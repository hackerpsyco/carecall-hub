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
      className="glass-card rounded-2xl p-6 flex gap-5 items-start hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Trophy size={22} className="text-accent" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="font-display font-semibold text-foreground text-lg">{hackathon.title}</h3>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-accent/15 text-accent">
            {hackathon.position}
          </span>
        </div>

        <div className="flex items-center text-muted-foreground text-sm mb-3 gap-2">
          <span>{hackathon.date}</span>
          {hackathon.team && (
            <>
              <span className="text-border">•</span>
              <span>Team {hackathon.team}</span>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{hackathon.description}</p>
      </div>
    </motion.div>
  );
};

export default HackathonCard;
