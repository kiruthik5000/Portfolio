import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Icons = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      url: "https://github.com/kiruthik5000", 
      label: "GitHub"
    },
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/kiruthik-vairavel-56244b302/", 
      label: "LinkedIn"
    },
    { 
      icon: FaInstagram, 
      url: "https://www.instagram.com/roshan_kiruthik_/", 
      label: "Instagram"
    },
    { 
      icon: FaTwitter, 
      url: "https://twitter.com", 
      label: "Twitter"
    },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group"
        >
          <div className="p-3 rounded-full bg-slate-800/40 border border-slate-700/50
                        hover:bg-slate-700/40 hover:scale-110 hover:border-blue-500
                        transition-all duration-300 shadow-lg hover:shadow-blue-500/50
                        hover:-translate-y-1">
            <social.icon className="w-6 h-6 text-slate-300 transition-all duration-300
                                  hover:text-blue-400 group-hover:rotate-12" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Icons;

