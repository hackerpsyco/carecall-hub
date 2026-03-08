import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display font-bold text-foreground text-xl tracking-tight">
              Piyush<span className="text-foreground-muted">.</span>
            </span>
            <p className="text-foreground-muted text-sm leading-relaxed mt-4 max-w-xs">
              Engineering student building innovative solutions through AI, web development, and modern technology.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { icon: Github, href: 'https://github.com/Piyush105454' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush-tamoli-751b2125a' },
                { icon: Mail, href: 'mailto:piyushtamoli105454@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-foreground-muted text-sm hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-4">Contact</h3>
            <div className="space-y-2.5 text-sm text-foreground-muted">
              <p>Bhopal, Madhya Pradesh, India</p>
              <a href="mailto:piyushtamoli105454@gmail.com" className="block hover:text-foreground transition-colors">
                piyushtamoli105454@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground-muted text-xs">
            © {new Date().getFullYear()} Piyush Tamoli. Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
