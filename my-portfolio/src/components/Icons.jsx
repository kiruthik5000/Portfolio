import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Icons = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/kiruthik5000",
      label: "GitHub",
      hoverColor: "hover:text-white hover:border-slate-500 hover:shadow-slate-500/30",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/kiruthik-vairavel-56244b302/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400 hover:border-blue-400 hover:shadow-blue-500/30",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/roshan_kiruthik_/",
      label: "Instagram",
      hoverColor: "hover:text-pink-400 hover:border-pink-400 hover:shadow-pink-500/30",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com",
      label: "Twitter",
      hoverColor: "hover:text-cyan-400 hover:border-cyan-400 hover:shadow-cyan-500/30",
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
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className={`p-3 rounded-full bg-slate-800/50 border border-slate-700/50
                        transition-all duration-300 shadow-lg
                        hover:scale-110 hover:-translate-y-1
                        ${social.hoverColor}`}
          >
            <social.icon className="w-5 h-5 text-slate-400 transition-colors duration-300
                                  group-hover:text-inherit" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Icons;
