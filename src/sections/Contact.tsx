import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: <Github size={20} />, link: 'https://github.com/Piyush105454' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a' },
  { name: 'Instagram', icon: <Instagram size={20} />, link: 'https://www.instagram.com/piyush_tamoli/' },
];

const Contact: React.FC = () => {
  return (
    <>
      <div className="mb-12">
        <p className="text-sm font-mono font-medium text-primary tracking-wider uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Let's Talk
        </h2>
        <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-2xl">
          Have a project in mind or want to collaborate? I'm always open to discussing 
          new ideas and opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Info side */}
        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">Email</h4>
                <a
                  href="mailto:piyushtamoli105454@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  piyushtamoli105454@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-4">Connect</h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted/50 text-foreground-muted hover:text-foreground hover:bg-muted transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Form side */}
        <ContactForm />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
