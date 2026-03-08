import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  index: number;
}> = ({ icon, title, content, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex gap-4 items-start"
    >
      <div className="min-w-[48px] h-[48px] bg-[#1E90FF]/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-[#F5F5F5] font-medium text-lg">{title}</h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A9A9A9] hover:text-[#39FF14] transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-[#A9A9A9]">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const socials = [
    { 
      name: 'GitHub', 
      icon: <Github size={24} className="text-white" />, 
      link: 'https://github.com/Piyush105454' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} className="text-white" />, 
      link: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a' 
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={24} className="text-white" />, 
      link: 'https://www.instagram.com/piyush_tamoli/' 
    },
  ];

  return (
    <>
      <motion.div>
        <p className="sm:text-[18px] text-[14px] text-[#1E90FF] uppercase tracking-wider">
          Get in Touch
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Let's Talk
        </h2>
        <p className="mt-3 text-[#A9A9A9] text-[17px] max-w-3xl leading-[30px]">
          Have a project in mind? Looking to collaborate or hire me? Feel free to reach out using the form below
          or contact me directly through email or social media. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-6 mb-10">
            <ContactInfo
              icon={<Phone size={24} className="text-[#1E90FF]" />}
              title="Call Me"
              content="Email"
              index={0}
            />
            <ContactInfo
              icon={<Mail size={24} className="text-[#1E90FF]" />}
              title="Email"
              content="piyushtamoli9@example.com"
              link="mailto:piyushtamoli9@example.com"
              index={1}
            />
            <ContactInfo
              icon={<MapPin size={24} className="text-[#1E90FF]" />}
              title="Location"
              content="bhopal, Madhya pradesh, India"
              index={2}
            />
          </div>

          <h3 className="text-[#F5F5F5] font-bold text-2xl mb-4">Connect with Me</h3>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a2e] p-3 rounded-full"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
