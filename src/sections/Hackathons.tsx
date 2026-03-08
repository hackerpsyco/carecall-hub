import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import HackathonCard from '../components/HackathonCard';
import { hackathons } from '../constants';

const Hackathons: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Achievements
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          Hackathons & <span className="font-bold">Wins</span>
        </h2>
        <p className="mt-6 text-foreground-muted text-base leading-relaxed max-w-xl">
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
