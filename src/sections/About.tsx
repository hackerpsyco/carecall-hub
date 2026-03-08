import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Code2, Lightbulb, GraduationCap } from 'lucide-react';

const cards = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: 'Technical Skills',
    content: 'Proficient in Python, JavaScript, React.js, Node.js and various AI/ML frameworks. Continuously expanding my skillset through hands-on projects.',
    accent: 'primary',
  },
  {
    icon: <Lightbulb size={24} className="text-accent" />,
    title: 'Innovation & Creativity',
    content: 'I approach engineering challenges with a creative mindset, combining technical expertise with practical applications to build unique solutions.',
    accent: 'accent',
  },
  {
    icon: <GraduationCap size={24} className="text-highlight" />,
    title: 'Education & Learning',
    content: 'Pursuing engineering with a focus on CS and AI. Supplementing formal education with hackathons, self-learning, and collaborative projects.',
    accent: 'highlight',
  },
];

const About: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-sm font-mono font-medium text-primary tracking-wider uppercase mb-3">
          Introduction
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Who Am I?
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          I'm an engineering student with a passion for cutting-edge technology and problem-solving. 
          Fascinated by AI, web development, and creating innovative applications that turn complex 
          problems into elegant, user-friendly solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-muted/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="font-display font-semibold text-foreground text-lg mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
