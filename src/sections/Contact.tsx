import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: <Github size={16} />, link: 'https://github.com/Piyush105454' },
  { name: 'LinkedIn', icon: <Linkedin size={16} />, link: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a' },
  { name: 'Instagram', icon: <Instagram size={16} />, link: 'https://www.instagram.com/piyush_tamoli/' },
];

const Contact: React.FC = () => {
  return (
    <>
      <div className="mb-16">
        <span className="section-divider" />
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-foreground-muted mb-4">
          Get in touch
        </p>
        <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl tracking-tight">
          Let's Talk
        </h2>
        <p className="mt-5 text-foreground-muted text-base leading-relaxed max-w-xl">
          Have a project in mind? I'm always open to discussing new ideas and opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                <Mail size={15} className="text-foreground-muted" />
              </div>
              <div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">Email</h4>
                <a
                  href="mailto:piyushtamoli105454@gmail.com"
                  className="text-foreground-muted text-sm hover:text-foreground transition-colors"
                >
                  piyushtamoli105454@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                <MapPin size={15} className="text-foreground-muted" />
              </div>
              <div>
                <h4 className="font-display font-medium text-foreground text-sm mb-1">Location</h4>
                <p className="text-foreground-muted text-sm">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-medium text-foreground text-sm mb-4">Follow me</h3>
            <div className="flex gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -2 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-foreground/30 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
