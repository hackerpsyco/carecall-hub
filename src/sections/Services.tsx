import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Bot, Cpu, Workflow, Zap, Globe, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Bot size={24} />,
    title: 'AI Automation Solutions',
    description: 'Custom AI-powered automation workflows for businesses — from chatbots to intelligent document processing and data pipelines.',
    tags: ['Chatbots', 'NLP', 'Process Automation'],
  },
  {
    icon: <Workflow size={24} />,
    title: 'Business Workflow Automation',
    description: 'End-to-end workflow automation for corporate operations — CRM integrations, email sequences, lead scoring, and task management.',
    tags: ['n8n', 'Zapier', 'Make'],
  },
  {
    icon: <Globe size={24} />,
    title: 'Innoalaxy Platform',
    description: 'A dynamic innovation platform fostering collaboration, idea sharing, and project showcasing for creative communities and startups.',
    tags: ['React', 'Community', 'Innovation'],
    link: 'https://www.innoalaxy.in/',
  },
  {
    icon: <Cpu size={24} />,
    title: 'AI Tool Development',
    description: 'Building custom AI tools and APIs — image recognition, text generation, predictive analytics tailored to your business needs.',
    tags: ['FastAPI', 'ML Models', 'APIs'],
  },
  {
    icon: <Zap size={24} />,
    title: 'Social Media Automation',
    description: 'Automated content scheduling, analytics dashboards, and engagement tracking for YouTube, Instagram, and other platforms.',
    tags: ['Content', 'Analytics', 'Growth'],
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Data & Analytics',
    description: 'Transform raw business data into actionable insights with automated reporting dashboards and AI-driven analytics.',
    tags: ['Dashboards', 'Reports', 'Insights'],
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="mb-14">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-foreground-muted mb-4">
          Services
        </p>
        <h2 className="font-display text-foreground text-3xl sm:text-[2.75rem] leading-tight tracking-tight">
          AI & <span className="font-bold">Automation Solutions</span>
        </h2>
        <p className="text-foreground-muted text-base mt-4 max-w-lg leading-relaxed">
          Helping corporates and businesses leverage AI to automate operations, 
          boost productivity, and scale smarter.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="group relative border border-border rounded-2xl p-6 hover:border-foreground/20 transition-all duration-300 bg-background"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-foreground mb-5 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-foreground text-base mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-foreground-muted text-[13px] leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-muted text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {service.link && (
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline"
              >
                Visit Platform →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
