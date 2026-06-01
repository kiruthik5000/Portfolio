import React from "react";
import {
  FiGithub, FiLinkedin, FiInstagram, FiTwitter
} from "react-icons/fi";

const socialLinks = [
  { Icon: FiGithub,   href: "https://github.com/kiruthik5000",                          label: "GitHub"    },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/kiruthik-vairavel-56244b302/", label: "LinkedIn"  },
  { Icon: FiInstagram,href: "https://www.instagram.com/roshan_kiruthik_/",              label: "Instagram" },
  { Icon: FiTwitter,  href: "https://twitter.com",                                      label: "Twitter"   },
];

const Icons = () => (
  <div className="flex items-center gap-2">
    {socialLinks.map(({ Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800
                   bg-white/60 dark:bg-zinc-900/30
                   text-zinc-500 dark:text-zinc-500
                   hover:text-zinc-900 dark:hover:text-zinc-100
                   hover:border-zinc-400 dark:hover:border-zinc-600
                   hover:bg-zinc-50 dark:hover:bg-zinc-800/50
                   transition-all duration-200"
      >
        <Icon size={15} />
      </a>
    ))}
  </div>
);

export default Icons;
