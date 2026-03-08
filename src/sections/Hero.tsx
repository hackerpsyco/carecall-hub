import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground-muted">Available for opportunities</span>
          </motion.div>

          <h1 className="font-display font-bold text-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Piyush Tamoli</span>
          </h1>

          <div className="mt-5 text-foreground-muted text-xl sm:text-2xl font-display font-medium">
            <TypeAnimation
              sequence={[
                'Engineering Student', 2000,
                'Full-Stack Developer', 2000,
                'AI Enthusiast', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Building innovative web solutions & AI-powered applications.
            Turning complex problems into elegant, user-friendly experiences.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex justify-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Piyush105454', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:piyushtamoli105454@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1, y: -2 }}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted/50 text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-foreground-muted hover:text-primary transition-colors">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
