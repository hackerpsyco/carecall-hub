import React from 'react';

import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const socials = [
  { name: 'GitHub', icon: <Github size={18} />, link: 'https://github.com/Piyush105454' },
  { name: 'LinkedIn', icon: <Linkedin size={18} />, link: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a' },
  { name: 'Instagram', icon: <Instagram size={18} />, link: 'https://www.instagram.com/piyush_tamoli/' },
];

const Contact: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Get in touch
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          Let's <span className="font-bold">Talk</span>
        </h2>
        <p className="mt-6 text-foreground-muted text-base leading-relaxed max-w-xl">
          Have a project in mind? I'm always open to discussing new ideas and opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-foreground-muted flex-shrink-0" />
              <div>
                <p className="text-xs text-foreground-muted mb-0.5">Mail me</p>
                <a
                  href="mailto:piyushtamoli105454@gmail.com"
                  className="text-foreground text-sm font-medium hover:underline underline-offset-2"
                >
                  piyushtamoli105454@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-foreground-muted flex-shrink-0" />
              <div>
                <p className="text-xs text-foreground-muted mb-0.5">Location</p>
                <p className="text-foreground text-sm font-medium">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-foreground-muted mb-4">Follow</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
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
