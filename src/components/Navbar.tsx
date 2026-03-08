import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">PT</span>
          </div>
          <span className="font-display font-semibold text-foreground text-lg tracking-tight">
            Piyush<span className="text-primary ml-0.5">.</span>
          </span>
        </motion.div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <button
                onClick={() => {
                  setActive(nav.title);
                  document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === nav.title
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground-muted hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {nav.title}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Resume
            </a>
          </li>
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 md:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <button
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                        document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        active === nav.title
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground-muted hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {nav.title}
                    </button>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-5 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
                  >
                    Resume
                  </a>
                </li>
                <li className="mt-3 flex justify-center">
                  <ThemeToggle />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
