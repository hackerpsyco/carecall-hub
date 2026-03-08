import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Cpu, Lightbulb, BookOpen } from 'lucide-react';

const AboutCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  delay: number;
}> = ({ icon, title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col md:flex-row gap-5 w-full bg-[#1a1a2e]/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_15px_rgba(30,144,255,0.15)]"
    >
      <div className="flex items-center justify-center min-w-[80px] h-[80px] bg-[#1E90FF]/10 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-[22px] font-bold text-white">{title}</h3>
        <p className="mt-2 text-[#A9A9A9] text-[16px] leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-[#1E90FF] uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Who Am I?
        </h2>
        <p className="mt-4 text-[#A9A9A9] text-[17px] max-w-3xl leading-[30px]">
          I'm engineering student with a passion for cutting-edge technology 
          and problem-solving. As a budding engineer, I'm fascinated by AI, web development, 
          and creating innovative applications. I love the challenge of turning complex 
          problems into elegant, user-friendly solutions.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col gap-10">
        <AboutCard
          icon={<Cpu size={40} className="text-[#1E90FF]" />}
          title="Technical Skills"
          content="Proficient in Python, JavaScript, React.js, Node.js and various AI/ML frameworks. I continuously expand my skillset through hands-on projects and online courses to stay at the forefront of technology."
          delay={0.2}
        />
        
        <AboutCard
          icon={<Lightbulb size={40} className="text-[#39FF14]" />}
          title="Innovation & Creativity"
          content="I approach engineering challenges with a creative mindset, looking for innovative solutions that combine technical expertise with practical applications. My projects demonstrate my ability to think outside the box."
          delay={0.4}
        />
        
        <AboutCard
          icon={<BookOpen size={40} className="text-[#FF2E8D]" />}
          title="Education & Learning"
          content="Currently pursuing my engineering degree with a focus on computer science and AI. I supplement my formal education with self-directed learning, hackathons, and collaborative projects."
          delay={0.6}
        />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");