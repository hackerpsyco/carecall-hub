import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <section id={idName} className="w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="px-6 py-20 md:py-28 max-w-6xl mx-auto"
        >
          <Component />
        </motion.div>
      </section>
    );
  };

export default SectionWrapper;
