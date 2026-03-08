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
      className="group rounded-2xl overflow-hidden relative cursor-pointer"
    >
      {/* Full image background */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/90 text-black backdrop-blur-sm">
            {project.tags[0]}
          </span>
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Bottom content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display font-bold text-white text-lg mb-1">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags row */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(1).map((tag) => (
              <span
                key={`${project.id}-${tag}`}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/15 text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Live link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-white/90 text-xs font-medium underline underline-offset-2 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Live url
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
