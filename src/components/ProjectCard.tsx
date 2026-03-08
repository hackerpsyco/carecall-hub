import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Project } from "../types";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const tiltOptions = {
    max: 15,
    scale: 1.03,
    speed: 400,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.45,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <Tilt options={tiltOptions} className="w-full">
        <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(30,144,255,0.25)] transition-all duration-300 flex flex-col">

          {/* ✅ Clickable Image */}
          <div
            className="relative w-full h-[220px] group cursor-pointer"
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* ✅ Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white text-sm bg-[#1E90FF] px-4 py-2 rounded-full"
              >
                View Project
              </motion.div>
            </div>

            {/* ✅ Top-right Buttons */}
            <div className="absolute top-3 right-3 flex gap-2">
              {project.github && (
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/70 backdrop-blur-md p-2 rounded-full text-white hover:bg-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, "_blank");
                  }}
                >
                  <Github size={18} />
                </motion.button>
              )}

              {project.link && (
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1E90FF] p-2 rounded-full text-white hover:bg-[#187bcd]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, "_blank");
                  }}
                >
                  <ExternalLink size={18} />
                </motion.button>
              )}
            </div>
          </div>

          {/* ✅ Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-white font-semibold text-lg">
              {project.title}
            </h3>

            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* ✅ Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.id}-${tag}`}
                  className="text-xs bg-[#0f3460] text-[#39FF14] px-2 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
