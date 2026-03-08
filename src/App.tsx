import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import ContentCreator from './sections/ContentCreator';
import Hackathons from './sections/Hackathons';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (!saved || saved === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          className="h-screen w-full flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full"
          />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-background min-h-screen"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <ContentCreator />
            <Hackathons />
            <TechStack />
            <Contact />
          </main>
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
