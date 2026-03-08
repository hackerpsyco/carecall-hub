import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Youtube, Instagram, Play, Sparkles, TrendingUp, Video } from 'lucide-react';

const topics = [
  {
    icon: <Sparkles size={18} />,
    title: 'AI Tools & Reviews',
    description: 'In-depth reviews and tutorials on the latest AI tools for productivity, coding, design, and business automation.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Automation Tutorials',
    description: 'Step-by-step guides on building automation workflows using n8n, Make, Zapier, and custom AI solutions.',
  },
  {
    icon: <Video size={18} />,
    title: 'Tech Updates',
    description: 'Weekly updates on AI breakthroughs, new automation platforms, and emerging tech trends that matter.',
  },
];

const ContentCreator: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - Info */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
            Content Creator
          </p>
          <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight mb-6">
            AI & Automation <span className="font-bold">Content</span>
          </h2>
          <p className="text-foreground-muted text-base leading-relaxed mb-8">
            I create content on YouTube and Instagram sharing AI tools, automation workflows, 
            and tech updates — helping creators and businesses stay ahead with the latest in AI innovation.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.youtube.com/@innoalaxy/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-85 transition-opacity"
            >
              <Youtube size={18} />
              YouTube Channel
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/innoalaxy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-foreground/40 transition-colors"
            >
              <Instagram size={18} />
              Instagram
            </motion.a>
          </div>
        </div>

        {/* Right - Topics */}
        <div>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-6">
            What I share
          </p>
          <div className="space-y-4">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  {topic.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{topic.title}</h3>
                  <p className="text-foreground-muted text-[13px] leading-relaxed">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-muted"
          >
            <Play size={16} className="text-foreground" />
            <span className="text-foreground text-xs font-medium">
              New videos every week on AI tools & automation tips
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(ContentCreator, 'content');
