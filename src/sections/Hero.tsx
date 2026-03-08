import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import developerSketch from '../assets/developer-sketch.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Geometric pattern background - right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='30' fill='none' stroke='%23000' stroke-width='2'/%3E%3Crect x='10' y='10' width='40' height='40' rx='8' fill='%23000' opacity='0.4'/%3E%3Cpath d='M70 10 L110 10 L90 50 Z' fill='%23000' opacity='0.3'/%3E%3Crect x='70' y='70' width='40' height='40' rx='20' fill='%23000' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }} />
        
        {/* Character illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-[15%] right-[10%] w-[320px] xl:w-[380px]"
        >
          <img 
            src={developerSketch} 
            alt="Developer illustration" 
            className="w-full h-auto opacity-80 dark:opacity-60 dark:invert"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pt-32 pb-20 max-w-xl lg:max-w-2xl"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-10"
          >
            Hello and welcome
          </motion.p>

          <h1 className="font-display text-foreground text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.1] tracking-tight">
            I'm <span className="font-bold">Piyush,</span>{' '}
            <span className="font-bold">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer.', 2500,
                  'AI Automation Expert.', 2500,
                  'Content Creator.', 2500,
                  'Problem Solver.', 2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-7 text-foreground-muted text-base sm:text-[17px] max-w-md leading-relaxed">
            I build AI automation solutions for businesses, create innovative web apps, 
            and share AI tools & automation insights on YouTube and Instagram.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3 rounded-full bg-foreground text-background font-semibold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity"
            >
              See my works
              <ArrowUpRight size={15} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-foreground/40 transition-colors"
            >
              My Resume
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <motion.a
            href="#about"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors text-xs tracking-wider"
          >
            <span className="w-4 h-4 flex items-center justify-center">✕</span>
            <span>Keep Scroll</span>
          </motion.a>

          <div className="flex items-center gap-5">
            <span className="text-xs text-foreground-muted font-medium hidden sm:block italic">Can follow me on</span>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/Piyush105454', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:piyushtamoli105454@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
