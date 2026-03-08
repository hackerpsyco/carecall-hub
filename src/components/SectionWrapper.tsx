import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = (Component: React.FC, idName: string) => 
  function HOC() {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.25,
    });

    const variants = {
      hidden: { opacity: 0, y: 50 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    return (
      <div id={idName} className='w-full min-h-screen'>
        <motion.section
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'
        >
          <Component />
        </motion.section>
      </div>
    );
  };

export default SectionWrapper;