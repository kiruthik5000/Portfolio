import React from 'react';
import Title from './utils/Title';
import HideOnOutOfView from './utils/HideOnOutOfView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  SiReact, SiSpring, SiMysql,
  SiTailwindcss, SiExpress, SiMongodb,
  SiNodedotjs, SiPython, SiTensorflow,
  SiScikitlearn,
} from 'react-icons/si';

/* Map tech name → icon */
const TECH_ICONS = {
  "React":              <SiReact       size={11} />,
  "React Vite":         <SiReact       size={11} />,
  "Spring Boot":        <SiSpring      size={11} />,
  "MySQL":              <SiMysql       size={11} />,
  "Tailwind CSS":       <SiTailwindcss size={11} />,
  "Express.js":         <SiExpress     size={11} />,
  "MongoDB":            <SiMongodb     size={11} />,
  "Node.js":            <SiNodedotjs   size={11} />,
  "Python":             <SiPython      size={11} />,
  "TensorFlow":         <SiTensorflow  size={11} />,
  "Scikit-learn":       <SiScikitlearn size={11} />,

};

const projects = [
  {
    name:        "Blog Post Management",
    emoji:       "📝",
    description: "Full-stack blog system with CRUD, auth, and responsive interface.",
    image:       "/blog_post.png",
    technologies: ["React", "Spring Boot", "MySQL"],
    githubUrl:   "https://github.com/iamneo-production/d2cc9c72-613d-4bc8-9a7e-2e30e920eaa7-a130de1c-fce0-4d3b-9c68-315265bea755/tree/SRC-Branch",
    liveUrl:     null,
  },
  {
    name:        "Bug Tracker App",
    emoji:       "🐛",
    description: "Role-based bug tracker with real-time status updates and project boards.",
    image:       "/bug_tracker.png",
    technologies: ["React Vite", "Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl:   "https://github.com/kiruthik5000/BugTracker",
    liveUrl:     null,
  },
  {
    name:        "Dine Directory",
    emoji:       "🍽️",
    description: "Restaurant discovery platform — search, filter, and book with MERN stack.",
    image:       "/dine_directory.png",
    technologies: ["React", "Express.js", "MongoDB", "Node.js"],
    githubUrl:   "https://github.com/kiruthik5000/DineDirectory",
    liveUrl:     null,
  },
  {
    name:        "Food Image Classifier",
    emoji:       "🍱",
    description: "Deep learning CNN classifier trained with transfer learning for food recognition.",
    image:       "/food_image.png",
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
    githubUrl:   "https://github.com/kiruthik5000/FoodImageClassification",
    liveUrl:     null,
  },
  {
    name:        "Tetris Game",
    emoji:       "🎮",
    description: "Classic Tetris with smooth animations, score tracking, and increasing difficulty.",
    image:       "/tetris.png",
    technologies: ["Python"],
    githubUrl:   "https://github.com/kiruthik5000/Notepad",
    liveUrl:     null,
  },
  {
    name:        "Custom RAG Chatbot",
    emoji:       "🤖",
    description: "Retrieval-Augmented Generation chatbot that answers queries from uploaded documents.",
    image:       "/RAG.png",
    technologies: ["Python", "TensorFlow", "FAISS"],
    githubUrl:   "https://github.com/kiruthik5000/RAG",
    liveUrl:     null,
  },
];

const ProjectCard = ({ project, index }) => (
  <HideOnOutOfView delay={index * 80} direction="up">
    <div
      className="group flex flex-col overflow-hidden rounded-xl
                 border border-zinc-200 dark:border-zinc-800/60
                 bg-white/60 dark:bg-zinc-900/10
                 hover:border-zinc-300 dark:hover:border-zinc-700
                 transition-all duration-300 card-shimmer"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/40">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover
                       transition-transform duration-700 ease-out
                       group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl opacity-20 select-none">
            {project.emoji}
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/10 dark:group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3.5">
        {/* Title row */}
        <div className="flex items-center gap-2.5">
          <span className="text-xl select-none leading-none">{project.emoji}</span>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-200">
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[11.5px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold rounded-md
                         border border-zinc-200 dark:border-zinc-800
                         bg-white dark:bg-zinc-900/60
                         text-zinc-600 dark:text-zinc-400
                         hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]
                         dark:hover:border-[var(--accent-border)] dark:hover:text-[var(--accent)] dark:hover:bg-[var(--accent-dim)]
                         transition-all duration-200 cursor-default select-none"
            >
              {TECH_ICONS[tech] && <span className="opacity-60">{TECH_ICONS[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/40">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold
                         border border-zinc-200 dark:border-zinc-800
                         bg-white/60 dark:bg-zinc-900/40
                         text-zinc-600 dark:text-zinc-400
                         hover:text-zinc-900 dark:hover:text-zinc-100
                         hover:border-zinc-400 dark:hover:border-zinc-600
                         transition-all duration-200"
            >
              <FiGithub size={12} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold
                         border border-transparent
                         bg-zinc-950 dark:bg-zinc-100
                         text-white dark:text-zinc-950
                         hover:bg-zinc-800 dark:hover:bg-zinc-200
                         transition-all duration-200"
            >
              <FiExternalLink size={12} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  </HideOnOutOfView>
);

const Projects = () => (
  <section id="projects" className="min-h-screen px-6 py-16 flex justify-center">
    <div className="max-w-4xl w-full">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
