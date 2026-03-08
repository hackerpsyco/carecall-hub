import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center">
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
            className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-10"
          >
            Hello and welcome
          </motion.p>

          <h1 className="font-display text-foreground text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight max-w-3xl">
            I'm <span className="font-bold">Piyush,</span>{' '}
            <span className="font-bold">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer.', 2500,
                  'AI Enthusiast.', 2500,
                  'Problem Solver.', 2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="mt-8 text-foreground-muted text-base sm:text-lg max-w-lg leading-relaxed">
            I build innovative web solutions & AI-powered applications.
            Turning complex problems into elegant experiences.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
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
          {/* Scroll indicator */}
          <motion.a
            href="#about"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors text-xs tracking-wider"
          >
            <span className="w-4 h-4 flex items-center justify-center">✕</span>
            <span>Keep Scroll</span>
          </motion.a>

          {/* Social */}
          <div className="flex items-center gap-5">
            <span className="text-xs text-foreground-muted font-medium hidden sm:block">Can follow me on</span>
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
