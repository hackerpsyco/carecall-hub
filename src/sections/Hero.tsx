import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pt-32 pb-20"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs font-mono tracking-[0.2em] uppercase text-foreground-muted mb-8"
          >
            Hello and welcome
          </motion.p>

          <h1 className="font-display font-bold text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight max-w-3xl">
            I'm <span className="text-foreground">Piyush,</span>{' '}
            <span className="text-foreground-muted">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer.', 2500,
                  'AI Enthusiast.', 2500,
                  'Problem Solver.', 2500,
                  'Engineering Student.', 2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-8 text-foreground-muted text-lg sm:text-xl max-w-xl leading-relaxed">
            I build innovative web solutions & AI-powered applications.
            Turning complex problems into elegant experiences.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity"
            >
              See my works
              <ArrowUpRight size={16} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-foreground/30 transition-colors"
            >
              My Resume
            </motion.a>
          </div>

          {/* Social */}
          <div className="mt-16 flex items-center gap-6">
            <span className="text-xs text-foreground-muted font-medium tracking-wide">Follow me</span>
            <div className="w-8 h-px bg-border" />
            <div className="flex gap-2">
              {[
                { icon: Github, href: 'https://github.com/Piyush105454', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:piyushtamoli105454@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -2 }}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-foreground-muted hover:text-foreground transition-colors">
          <span className="text-[11px] tracking-wider uppercase font-medium">Scroll</span>
          <ArrowDown size={14} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
