import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group cursor-pointer"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/90 text-black backdrop-blur-sm">
            {project.tags[0]}
          </span>
        </div>

        {/* Hover action buttons */}
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-md bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Text content below image */}
      <div className="px-0.5">
        <h3 className="font-display font-bold text-foreground text-[15px] mb-1 group-hover:underline underline-offset-2 decoration-foreground/30">
          {project.title}
        </h3>
        <p className="text-foreground-muted text-[13px] leading-relaxed line-clamp-1 mb-2">
          {project.description}
        </p>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground text-xs font-medium underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Live url
            <ExternalLink size={10} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
