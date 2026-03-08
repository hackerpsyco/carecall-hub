import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import HackathonCard from '../components/HackathonCard';
import { hackathons } from '../constants';

const Hackathons: React.FC = () => {
  return (
    <>
      <div className="mb-16">
        <span className="section-divider" />
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-foreground-muted mb-4">
          Achievements
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Hackathons & Wins
        </h2>
        <p className="mt-5 text-foreground-muted text-base leading-relaxed max-w-xl">
          Sharpening skills through rapid prototyping, teamwork, and
          delivering innovative solutions under pressure.
        </p>
      </div>

      <div className="space-y-5">
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
