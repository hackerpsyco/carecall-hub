import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import HackathonCard from '../components/HackathonCard';
import { hackathons } from '../constants';

const Hackathons: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-sm font-mono font-medium text-primary tracking-wider uppercase mb-3">
          Achievements
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Hackathons & Wins
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          My journey through hackathons has sharpened my skills in rapid prototyping,
          team collaboration, and delivering innovative solutions under pressure.
        </p>
      </div>

      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={hackathon.id}
            hackathon={hackathon}
            index={index}
            totalItems={hackathons.length}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hackathons, 'hackathons');
