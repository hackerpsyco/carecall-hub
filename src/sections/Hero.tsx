import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className='relative w-full h-screen mx-auto'>
      <ParticlesBackground />
      
      <div className='absolute inset-0 flex flex-col items-center justify-center sm:px-16 px-6 max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center justify-center text-center'
        >
          <h1 className='text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] mt-2'>
            Piyush <span className='text-[#1E90FF]'>Tamoli</span>
          </h1>
          
          <div className='mt-4 text-[#F5F5F5] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]'>
            <TypeAnimation
              sequence={[
                'Engineering Student', 2000,
                'AI Enthusiast', 2000,
                'Web Developer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className='mt-6 text-[#A9A9A9] text-[18px] max-w-3xl text-center'>
            Innovating through AI, Web Solutions.Engineering student with a 
            passion for creating innovative technology solutions.
          </p>
          
          <div className='mt-10 flex flex-wrap justify-center gap-5'>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#39FF14', color: '#0f0f2d' }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#1E90FF] text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_5px_15px_rgba(30,144,255,0.4)]'
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore My Work
            </motion.button>
            
<motion.a
  href="https://drive.google.com/file/d/1dapNQSWmEozta4VCf0_zQzlSjFgDBtxH/view?usp=sharing"
  download
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, backgroundColor: '#FF2E8D' }}
  whileTap={{ scale: 0.95 }}
  className="bg-transparent text-white border-2 border-[#1E90FF] font-bold py-3 px-8 rounded-full flex items-center gap-2"
>
  Download Resume
  <Download size={18} />
</motion.a>

          </div>
          
          <div className='mt-10 flex gap-6'>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Piyush105454"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#1a1a2e] p-3 rounded-full'
            >
              <Github className='text-white' size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/piyush-tamoli-751b2125a"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#1a1a2e] p-3 rounded-full'
            >
              <Linkedin className='text-white' size={24} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:piyushtamoli105454@gmail.com"
              className='bg-[#1a1a2e] p-3 rounded-full'
            >
              <Mail className='text-white' size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#1E90FF] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-[#39FF14]'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
