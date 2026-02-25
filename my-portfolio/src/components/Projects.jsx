import React from 'react';
import Title from './utils/Title';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  /* ===================== REUSABLE PROJECT CARD COMPONENT ===================== */
  const ProjectCard = ({ project }) => {
    return (
      <div className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden
                    hover:border-slate-700 transition-all duration-300 hover:shadow-xl 
                    hover:shadow-blue-500/10 hover:scale-[1.02]">
        
        {/* Screenshot/Image Section */}
        <div className="relative h-64 overflow-hidden bg-slate-800">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 
                       group-hover:scale-110"
            />
          ) : (
            // Placeholder if no image
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="text-slate-600 text-6xl">
                <FaGithub />
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Project Name */}
          <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 
                       transition-colors duration-300">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies/Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 
                           border border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/10
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 
                         text-slate-300 border border-slate-700 hover:border-blue-500 
                         hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300
                         hover:scale-105"
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
                         from-blue-500 to-blue-600 text-white border border-transparent
                         hover:from-blue-400 hover:to-blue-500 transition-all duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  /* ===================== PROJECT DATA ===================== */
  const projects = [
    {
      name: "Blog Post Management",
      description: "blog post description",
      image: "/blog_post.png", 
      technologies: ["React", "SpringBoot", "MySQL"],
      githubUrl: "https://github.com/iamneo-production/d2cc9c72-613d-4bc8-9a7e-2e30e920eaa7-a130de1c-fce0-4d3b-9c68-315265bea755/tree/SRC-Branch",
      liveUrl: "https://project1.demo.com"
    },
    {
      name: "Bug Tracker App",
      description: "bug tracker description",
      image: "/bug_tracker.png", 
      technologies: ["React vite.js", "SpringBoot", "MySQL", "Tailwindcss"],
      githubUrl: "https://github.com/kiruthik5000/BugTracker",
      liveUrl: "https://project3.demo.com"
    },
    {
      name: "Dine Directory",
      description: "dine directory description",
      image: "/dine_directory.png", // Add your project screenshot path
      technologies: ["React", "MERN", "Experess.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/kiruthik5000/DineDirectory",
      liveUrl: "https://project2.demo.com"
    },
    {
      name: "Food Image Classifier",
      description: "A machine learning project that demonstrates your expertise in AI and data science. Explain the model, dataset, and real-world applications of this project.",
      image: "/food_image.png", // No image - will show placeholder
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Transfer Learning", "Tensorflow"],
      githubUrl: "https://github.com/kiruthik5000/FoodImageClassification",
      liveUrl: "https://project5.demo.com"
    },
    {
      name: "Tetris Game",
      description: "An innovative web application built with modern technologies. Highlight the unique features, user experience improvements, and technical achievements.",
      image: "/tetris.png", // Add your project screenshot path
      technologies: ["Python", "pygame", "html", "css"],
      githubUrl: "https://github.com/kiruthik5000/Notepad",
      liveUrl: "https://project4.demo.com"
    },
    {
      name:"Custom RAG",
      description: "An Industry level RAG which require custom files and it will act as a chatbot with only the give knowledege from the uploaded files",
      image: "/RAG.png",
      technologies: ["Python", "sckit-learn", "tensorflow", "NLP", "Faiss-index"],
      githubUrl: "https://github.com/kiruthik5000/RAG",
      liveUrl: "npn"
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
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
