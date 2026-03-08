import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Code2, Lightbulb, GraduationCap } from 'lucide-react';

const whatIdo = [
  {
    icon: <Code2 size={20} />,
    title: 'Development',
    content: 'Html, css, Tailwind css, Javascript, React.js, Next.js, Node.js, Express.js, Django, Python',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'AI & Innovation',
    content: 'Machine Learning, Scikit-learn, FastAPI, AI-powered applications, Problem solving',
  },
  {
    icon: <GraduationCap size={20} />,
    title: 'Education',
    content: 'Engineering student with focus on CS and AI. Hackathons, self-study, and collaborative projects.',
  },
];

const About: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - intro */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
            About me
          </p>
          <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight mb-6">
            A small <span className="font-bold">Introduction</span>
          </h2>
          <p className="text-foreground-muted text-base leading-relaxed">
            This is Piyush Tamoli, engineering student from Bhopal, India. I'm a self-taught 
            full-stack developer and AI enthusiast. I build innovative web solutions and love 
            solving complex problems with elegant code.
          </p>
        </div>

        {/* Right side - what I do */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-6">
            What I like to do
          </p>
          <div className="space-y-5">
            {whatIdo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-[13px] leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
