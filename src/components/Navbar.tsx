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
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer"
        >
          <span className="font-display font-bold text-foreground text-xl tracking-tight">
            Piyush<span className="text-foreground-muted">.</span>
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
                className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200 ${
                  active === nav.title
                    ? 'text-foreground'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                {nav.title}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-foreground text-background text-[13px] font-semibold hover:opacity-80 transition-opacity"
            >
              Resume
            </a>
          </li>
          <li className="ml-2">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden"
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
                          ? 'text-foreground bg-muted'
                          : 'text-foreground-muted hover:text-foreground'
                      }`}
                    >
                      {nav.title}
                    </button>
                  </li>
                ))}
                <li className="mt-3">
                  <a
                    href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-5 py-3 rounded-full bg-foreground text-background text-sm font-semibold"
                  >
                    Resume
                  </a>
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
