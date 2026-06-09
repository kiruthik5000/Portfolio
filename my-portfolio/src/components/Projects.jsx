import React, { useRef } from 'react';
import Title from './utils/Title';
import HideOnOutOfView from './utils/HideOnOutOfView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  SiReact, SiSpring, SiMysql,
  SiTailwindcss, SiExpress, SiMongodb,
  SiNodedotjs, SiPython, SiTensorflow,
  SiScikitlearn, SiDatabricks,  
  SiFastapi, SiHtml5, SiCss3, SiJavascript,
} from 'react-icons/si';

/* Map tech name → icon */
const TECH_ICONS = {
  "React": <SiReact size={14} />,
  "React Vite": <SiReact size={14} />,
  "Spring Boot": <SiSpring size={14} />,
  "MySQL": <SiMysql size={14} />,
  "Tailwind CSS": <SiTailwindcss size={14} />,
  "Express.js": <SiExpress size={14} />,
  "MongoDB": <SiMongodb size={14} />,
  "Node.js": <SiNodedotjs size={14} />,
  "Python": <SiPython size={14} />,
  "TensorFlow": <SiTensorflow size={14} />,
  "Scikit-learn": <SiScikitlearn size={14} />,
  "FAISS": <SiDatabricks size={14} />,
  "HTML": <SiHtml5 size={14} />,
  "CSS": <SiCss3 size={14} />,
  "JavaScript": <SiJavascript size={14} />,
  "FASTapi": <SiFastapi size={14} />,
};

const projects = [
  {
    name: "Custom RAG Chatbot",
    emoji: "🤖",
    description: "Retrieval-Augmented Generation chatbot that answers queries from uploaded documents.",
    image: "/RAG.png",
    technologies: ["Python", "TensorFlow", "FAISS", "FASTapi"],
    githubUrl: "https://github.com/kiruthik5000/RAG",
    liveUrl: null,
  },
  {
  name: "WGAN-Based Intrusion Detection System",
  emoji: "🛡️",
  description: "An anomaly-based Intrusion Detection System that leverages Wasserstein GAN (WGAN) to learn benign network traffic patterns and detect anomalous activities. The system further employs an XGBoost classifier to identify and categorize detected attacks into specific threat types, enabling accurate and intelligent network security monitoring.",
  image: "/ids.png",
  technologies: ["Python", "WGAN", "XGBoost", "TensorFlow", "Scikit-learn", "FASTapi"],
  githubUrl: "https://github.com/kiruthik5000/Capstone_project",
  liveUrl: null,
  },
  {
    name: "AI Interview Preparation Platform",
    emoji: "🤖",
    description: "AI-powered interview preparation platform featuring role-based mock interviews, real-time feedback, aptitude and coding assessments, personalized learning paths, and performance analytics to help candidates excel in technical and HR interviews.",
    image: "/ai-interview.png",
    technologies: ["React", "Spring Boot", "MySQL", "OpenAI API"],
    githubUrl: "https://github.com/kiruthik5000/BehaviorTracker",
    liveUrl: null,
  },
  {
    name: "Bug Tracker App",
    emoji: "🐛",
    description: "Role-based bug tracker with real-time status updates and project boards.",
    image: "/bug_tracker.png",
    technologies: ["React Vite", "Spring Boot", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/kiruthik5000/BugTracker",
    liveUrl: null,
  },
  {
    name: "Dine Directory",
    emoji: "🍽️",
    description: "Restaurant discovery platform — search, filter, and book with MERN stack.",
    image: "/dine_directory.png",
    technologies: ["React", "Express.js", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/kiruthik5000/DineDirectory",
    liveUrl: null,
  },
   {
    name: "Tetris Game",
    emoji: "🎮",
    description: "Classic Tetris with smooth animations, score tracking, and increasing difficulty.",
    image: "/tetris.png",
    technologies: ["Python"],
    githubUrl: "https://github.com/kiruthik5000/Notepad",
    liveUrl: null,
  },
  {
    name: "Food Image Classifier",
    emoji: "🍱",
    description: "Deep learning CNN classifier trained with transfer learning for food recognition.",
    image: "/food_image.png",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/kiruthik5000/FoodImageClassification",
    liveUrl: null,
  },
  {
    name: "Blog Post Management",
    emoji: "📝",
    description: "Full-stack blog system with CRUD, auth, and responsive interface.",
    image: "/blog_post.png",
    technologies: ["React", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/iamneo-production/d2cc9c72-613d-4bc8-9a7e-2e30e920eaa7-a130de1c-fce0-4d3b-9c68-315265bea755/tree/SRC-Branch",
    liveUrl: null,  
  }  
];

/* 3D magnetic tilt hook */
function useTilt(strength = 10) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    el.style.transform = `perspective(900px) rotateY(${dx * strength}deg) rotateX(${-dy * strength}deg) scale3d(1.03,1.03,1.03)`;
    el.style.transition = 'transform 0.08s linear';
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    el.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  return { cardRef, handleMove, handleLeave };
}

const ProjectCard = ({ project, index }) => {
  const { cardRef, handleMove, handleLeave } = useTilt(6);

  return (
    <HideOnOutOfView delay={index * 100} direction="up" duration={800}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="project-card group flex flex-col overflow-hidden rounded-2xl
                   border border-zinc-200 dark:border-zinc-800/60
                   bg-white/70 dark:bg-zinc-900/20
                   backdrop-blur-sm
                   shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.35)]
                   hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
        style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
      >
        {/* Glow border on hover */}
        <div className="project-glow-ring" />

        {/* Thumbnail */}
        <div className="relative h-56 overflow-hidden bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/40">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         group-hover:scale-[1.06]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl opacity-20 select-none">
              {project.emoji}
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3.5">
          {/* Title row */}
          <HideOnOutOfView delay={index * 100 + 80} direction="up" duration={600}>
            <div className="flex items-center gap-2.5">
              <span className="text-xl select-none leading-none">{project.emoji}</span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug
                             group-hover:text-[var(--accent)] transition-colors duration-300">
                {project.name}
              </h3>
            </div>
          </HideOnOutOfView>

          {/* Description */}
          <HideOnOutOfView delay={index * 100 + 160} direction="up" duration={600}>
            <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3 flex-1">
              {project.description}
            </p>
          </HideOnOutOfView>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, ti) => (
              <HideOnOutOfView key={tech} delay={index * 100 + 220 + ti * 50} direction="up" duration={450}>
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[13px] font-semibold rounded-md
                             border border-zinc-200 dark:border-zinc-800
                             bg-white dark:bg-zinc-900/60
                             text-zinc-600 dark:text-zinc-400
                             hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]
                             dark:hover:border-[var(--accent-border)] dark:hover:text-[var(--accent)] dark:hover:bg-[var(--accent-dim)]
                             hover:scale-105
                             transition-all duration-200 cursor-default select-none"
                >
                  {TECH_ICONS[tech] && <span className="opacity-60">{TECH_ICONS[tech]}</span>}
                  {tech}
                </span>
              </HideOnOutOfView>
            ))}
          </div>

          {/* Action buttons */}
          <HideOnOutOfView delay={index * 100 + 350} direction="up" duration={500}>
            <div className="flex items-center gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/40">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-semibold
                             border border-zinc-200 dark:border-zinc-800
                             bg-white/60 dark:bg-zinc-900/40
                             text-zinc-600 dark:text-zinc-400
                             hover:text-zinc-900 dark:hover:text-zinc-100
                             hover:border-zinc-400 dark:hover:border-zinc-600
                             hover:scale-[1.04]
                             transition-all duration-200 active:scale-95"
                >
                  <FiGithub size={14} /> Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-bold
                             border border-transparent
                             bg-zinc-950 dark:bg-zinc-100
                             text-white dark:text-zinc-950
                             hover:bg-zinc-800 dark:hover:bg-zinc-200
                             hover:scale-[1.04]
                             transition-all duration-200 active:scale-95"
                >
                  <FiExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </HideOnOutOfView>
        </div>
      </div>
    </HideOnOutOfView>
  );
};

const Projects = () => (
  <section id="projects" className="min-h-screen px-8 py-20 flex justify-center">
    <div className="max-w-6xl w-full">
      <HideOnOutOfView direction="up" duration={700}>
        <Title>Projects</Title>
      </HideOnOutOfView>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
