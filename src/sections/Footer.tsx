import React from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f2d] pt-20 pb-8">
      <div className="max-w-7xl mx-auto sm:px-16 px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="md:w-1/3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex items-center gap-2 mb-4'
            >
              <div className='w-10 h-10 rounded-full bg-[#1E90FF] flex justify-center items-center'>
                <span className='text-white font-bold text-lg'>P</span>
              </div>
              <p className='text-white text-[20px] font-semibold cursor-pointer flex'>
                Piyush <span className='text-[#39FF14] ml-1'>Tamoli</span>
              </p>
            </motion.div>
            <p className="text-[#A9A9A9] mb-6">
              First-year engineering student passionate about creating innovative solutions through
              technology, specializing in AI, web development, and mobile applications.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#39FF14]"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#39FF14]"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:example@example.com"
                className="text-white hover:text-[#39FF14]"
              >
                <Mail size={22} />
              </motion.a>
            </div>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <motion.li
                  whileHover={{ x: 5, color: '#39FF14' }}
                  key={link.id}
                  className="flex items-center gap-2 text-[#A9A9A9] hover:text-[#39FF14] cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <ChevronRight size={16} />
                  <span>{link.title}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-white font-bold text-xl mb-6">Get In Touch</h3>
            <div className="space-y-3 text-[#A9A9A9]">
              <p>Bhopal, Madhya pradesh, India</p>
              <p>piyushtamoli9@example.com</p>
              
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a2e] pt-8 mt-8 text-center text-[#A9A9A9]">
          <p>© {new Date().getFullYear()} Piyush Tamoli. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Designed with passion and code.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;