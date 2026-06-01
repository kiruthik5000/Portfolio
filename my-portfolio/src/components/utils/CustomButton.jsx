import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const CustomButton = ({ children, variant = "primary", onClick, icon }) => {
  const scrollToSection = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    if (onClick) onClick();
    else scrollToSection(children);
  };

  if (variant === "primary") {
    return (
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold
                   bg-zinc-950 dark:bg-zinc-50
                   text-white dark:text-zinc-950
                   hover:bg-zinc-800 dark:hover:bg-zinc-200
                   transition-all duration-200 border border-transparent shadow-sm"
      >
        {children}
        <FiArrowRight size={13} />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold
                 bg-transparent
                 border border-zinc-200 dark:border-zinc-700
                 text-zinc-700 dark:text-zinc-300
                 hover:border-zinc-400 dark:hover:border-zinc-500
                 hover:bg-zinc-50 dark:hover:bg-zinc-900/40
                 transition-all duration-200"
    >
      {icon && <FiDownload size={13} />}
      {children}
    </button>
  );
};

export default CustomButton;
