import React from 'react';
import Title from './utils/Title';
import HideOnOutOfView from './utils/HideOnOutOfView';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  /* ===================== REUSABLE PROJECT CARD COMPONENT ===================== */
  const ProjectCard = ({ project, index }) => {
    return (
      <HideOnOutOfView delay={index * 120} direction="up">
        <div className="group relative bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden
                      hover:border-slate-700/80 transition-all duration-500
                      hover:shadow-xl hover:shadow-blue-500/5
                      hover:translate-y-[-3px]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >

          {/* Screenshot/Image Section */}
          <div className="relative h-56 overflow-hidden bg-slate-800/50">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700
                         group-hover:scale-105"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="text-slate-700 text-5xl">
                  <FaGithub />
                </div>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent
                          opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Frosted badge on hover */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg
                          bg-slate-900/70 backdrop-blur-md border border-slate-700/50
                          opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                          transition-all duration-500">
              <span className="text-sm font-semibold text-blue-400">{project.name}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4">
            {/* Project Name */}
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400
                         transition-colors duration-300">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-slate-400 leading-relaxed text-sm line-clamp-3">
              {project.description}
            </p>

            {/* Technologies/Tags */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-800/60 text-slate-400
                             border border-slate-700/40 hover:border-blue-500/30 hover:bg-blue-500/10
                             hover:text-blue-300 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50
                           text-slate-400 border border-slate-700/50 hover:border-slate-600
                           hover:bg-slate-700/50 hover:text-slate-200 transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r
                           from-blue-500/90 to-blue-600/90 text-white border border-transparent
                           hover:from-blue-400 hover:to-blue-500 transition-all duration-300
                           hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </HideOnOutOfView>
    );
  };

  /* ===================== PROJECT DATA ===================== */
  const projects = [
    {
      name: "Blog Post Management",
      description: "A full-stack blog management system with CRUD operations, user authentication, and a responsive interface built with React and Spring Boot.",
      image: "/blog_post.png",
      technologies: ["React", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/iamneo-production/d2cc9c72-613d-4bc8-9a7e-2e30e920eaa7-a130de1c-fce0-4d3b-9c68-315265bea755/tree/SRC-Branch",
      liveUrl: "https://project1.demo.com"
    },
    {
      name: "Bug Tracker App",
      description: "A comprehensive bug tracking application with role-based access, project management, and real-time status updates for development teams.",
      image: "/bug_tracker.png",
      technologies: ["React Vite", "Spring Boot", "MySQL", "Tailwind CSS"],
      githubUrl: "https://github.com/kiruthik5000/BugTracker",
      liveUrl: "https://project3.demo.com"
    },
    {
      name: "Dine Directory",
      description: "A restaurant discovery platform with search, filtering, and booking features. Built entirely on the MERN stack for seamless user experience.",
      image: "/dine_directory.png",
      technologies: ["React", "Express.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/kiruthik5000/DineDirectory",
      liveUrl: "https://project2.demo.com"
    },
    {
      name: "Food Image Classifier",
      description: "A deep learning model that classifies food images using transfer learning and CNNs, trained on curated datasets with high accuracy.",
      image: "/food_image.png",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Transfer Learning"],
      githubUrl: "https://github.com/kiruthik5000/FoodImageClassification",
      liveUrl: "https://project5.demo.com"
    },
    {
      name: "Tetris Game",
      description: "A classic Tetris game built with Python and Pygame, featuring smooth animations, score tracking, and increasing difficulty levels.",
      image: "/tetris.png",
      technologies: ["Python", "Pygame"],
      githubUrl: "https://github.com/kiruthik5000/Notepad",
      liveUrl: "https://project4.demo.com"
    },
    {
      name: "Custom RAG",
      description: "An industry-level Retrieval-Augmented Generation chatbot that ingests custom documents and answers queries using only the uploaded knowledge base.",
      image: "/RAG.png",
      technologies: ["Python", "TensorFlow", "NLP", "FAISS"],
      githubUrl: "https://github.com/kiruthik5000/RAG",
    }
  ];

  /* ===================== RENDER ===================== */
  return (
    <section className="min-h-screen text-slate-200 px-6 py-16 flex">
      <div className="max-w-7xl w-full space-y-12">
        {/* Section Title */}
        <div className="space-y-4">
          <Title>Projects</Title>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
