import React from 'react'
import { FaAt, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaXing } from "react-icons/fa";

const Icons = () => {
  const icon_css = "w-6 h-6 text-slate-300 group-hover:text-blue-400 transition-all duration-300 cursor-pointer";
  
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kiruthik5000", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/kiruthik-vairavel-56244b302/", label: "LinkedIn" },
    { icon: FaInstagram, url: "https://www.instagram.com/roshan_kiruthik_/", label: "Instagram" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
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
                        hover:bg-slate-700/40 hover:border-blue-500 hover:scale-110 hover:rotate-6
                        transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
            <social.icon className={icon_css} />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Icons