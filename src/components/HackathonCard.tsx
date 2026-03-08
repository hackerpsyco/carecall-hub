import React from 'react';
import { motion } from 'framer-motion';
import { HackathonAchievement } from '../types';
import { Trophy, ExternalLink } from 'lucide-react';

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
      className="rounded-2xl border border-border p-6 flex gap-5 items-start hover:border-foreground/20 transition-all duration-300 group"
    >
      <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
        <Trophy size={18} className="text-background" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-1.5">
          <h3 className="font-display font-bold text-foreground text-base">{hackathon.title}</h3>
          <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-foreground text-background">
            {hackathon.position}
          </span>
        </div>

        <div className="flex items-center text-foreground-muted text-sm mb-3 gap-2">
          <span>{hackathon.date}</span>
          {hackathon.team && (
            <>
              <span>·</span>
              <span>Team {hackathon.team}</span>
            </>
          )}
        </div>

        <p className="text-foreground-muted text-sm leading-relaxed">{hackathon.description}</p>

        {hackathon.image && (
          <a
            href={hackathon.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-mono text-foreground hover:text-foreground/70 transition-colors"
          >
            View Post <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default HackathonCard;
