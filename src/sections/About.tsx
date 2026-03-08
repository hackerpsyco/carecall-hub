import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Code2, Lightbulb, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: <Code2 size={22} />,
    title: 'Development',
    content: 'Proficient in Python, JavaScript, React.js, Node.js and various AI/ML frameworks. Building production-ready applications.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Innovation',
    content: 'Creative approach to engineering, combining technical expertise with practical solutions for real-world problems.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Education',
    content: 'Pursuing engineering with focus on CS and AI. Learning through hackathons, self-study, and collaborative projects.',
  },
];

const About: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          About me
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          A small <span className="font-bold">Introduction</span>
        </h2>
        <p className="mt-6 text-foreground-muted text-base sm:text-lg leading-relaxed max-w-xl">
          I'm an engineering student passionate about cutting-edge technology.
          Fascinated by AI, web development, and creating applications that solve
          real problems with elegant, user-friendly solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="rounded-2xl border border-border p-7 group hover:bg-foreground hover:border-foreground transition-all duration-400 cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-5 text-foreground group-hover:bg-background/20 group-hover:text-background transition-all duration-400">
              {card.icon}
            </div>
            <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-background transition-colors duration-400">{card.title}</h3>
            <p className="text-foreground-muted text-sm leading-relaxed group-hover:text-background/70 transition-colors duration-400">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
