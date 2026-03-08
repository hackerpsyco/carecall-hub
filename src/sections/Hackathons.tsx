import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import HackathonCard from '../components/HackathonCard';
import { hackathons } from '../constants';

const Hackathons: React.FC = () => {
  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-[#1E90FF] uppercase tracking-wider">
          Achievements
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Wins &amp; Hacks
        </h2>
        <p className="mt-3 text-[#A9A9A9] text-[17px] max-w-3xl leading-[30px]">
          My journey through hackathons and competitions has been a thrilling experience of growth,
          learning, and achievement. These events have not only sharpened my technical skills but
          also enhanced my ability to work under pressure, collaborate effectively, and
          deliver innovative solutions within tight deadlines.
        </p>
      </motion.div>

      <div className="mt-20 relative h-full">
        <div className="container mx-auto w-full">
          <div className="relative wrap p-5 h-full">
            <div className="flex md:hidden justify-center">
              <div className="absolute h-full border-2-2 border border-[#1E90FF] rounded-full left-[15px]"></div>
            </div>
            
            {hackathons.map((hackathon, index) => (
              <HackathonCard 
                key={`hackathon-${index}`} 
                hackathon={hackathon} 
                index={index}
                totalItems={hackathons.length}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hackathons, "hackathons");