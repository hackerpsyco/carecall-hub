import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '../constants';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 120, 
        damping: 20 
      } 
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      scale: 0.95,
      transition: { 
        duration: 0.2 
      } 
    },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.2 
      } 
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-[#0f0f2d]/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          className='flex items-center gap-2 cursor-pointer'
        >
          <div className='w-9 h-9 rounded-full bg-[#1E90FF] flex justify-center items-center'>
            <span className='text-white font-bold text-lg'>P</span>
          </div>
          <p className='text-white text-[18px] font-semibold cursor-pointer flex'>
            Piyush <span className='text-[#39FF14] ml-1'>Tamoli</span>
          </p>
        </motion.div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              whileHover={{ scale: 1.1, color: '#39FF14' }}
              whileTap={{ scale: 0.95 }}
              className={`${
                active === nav.title ? 'text-[#39FF14]' : 'text-white'
              } hover:text-[#39FF14] text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                const element = document.getElementById(nav.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {nav.title}
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1, backgroundColor: '#FF2E8D' }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#1E90FF] px-4 py-2 rounded-full flex items-center gap-1 text-white cursor-pointer'
          >
            <span>Resume</span>
            <Download size={16} />
          </motion.li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] cursor-pointer flex items-center justify-center'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <X className='text-white' size={28} />
            ) : (
              <Menu className='text-white' size={28} />
            )}
          </div>

          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={toggle ? "open" : "closed"}
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-[#1a1a2e]/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  whileHover={{ scale: 1.05, x: 5, color: '#39FF14' }}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-[#39FF14]' : 'text-white'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    const element = document.getElementById(nav.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {nav.title}
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.05, backgroundColor: '#FF2E8D' }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#1E90FF] px-4 py-2 rounded-full flex items-center gap-1 text-white w-full justify-center cursor-pointer'
              >
                <span>Resume</span>
                <Download size={16} />
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;