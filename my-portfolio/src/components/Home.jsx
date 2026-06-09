import React from "react";
import Icons from "./Icons";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import clsx from "clsx";
import { motion } from "framer-motion";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const tags = [
  "Full-Stack Developer",
  "ML Enthusiast",
  "Problem Solver",
  "Open Source",
  "Systems Thinker",
  "Team Player",
  "Fast Learner",
  "Creative Coder",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Home = () => (
  <section
    id="home"
    className="min-h-screen relative flex flex-col overflow-hidden"
  >
    {/* ── Main content row ── */}
    <div
      className="flex-1 flex items-center pt-20 pb-20 px-6 sm:px-12 md:px-24 lg:px-24 xl:px-24 relative"
    >
      {/* ── LEFT: Text content ── */}
      <motion.div
        className="hero-text-col z-10 relative w-full max-w-[750px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
          Available for work
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-black leading-none tracking-tighter text-app-text dark:text-app-text-dark mb-5"
        >
          Hi, I'm{" "}
          <span className="text-app-text dark:text-app-text-dark block">
            Kiruthik Vairavel
            <span className="text-accent">.</span>
          </span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#8a8a96] dark:text-[#71717a] mb-5"
        >
          Full-Stack Developer &nbsp;·&nbsp; ML Enthusiast
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-[14.5px] text-[#4a4a54] dark:text-[#a1a1aa] leading-relaxed max-w-[460px] mb-8"
        >
          B.Tech IT student at{" "}
          <strong className="text-app-text dark:text-app-text-dark font-bold">SKCET, Coimbatore</strong>.{" "}
          Building clean, intelligent systems that combine{" "}
          <strong className="text-app-text dark:text-app-text-dark font-bold">
            full-stack engineering with machine learning
          </strong>{" "}
          to solve real problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 flex-wrap mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-[12px] font-bold bg-app-text dark:bg-app-text-dark text-app-bg dark:text-app-bg-dark cursor-pointer transition-opacity hover:opacity-85"
          >
            View Projects <FiArrowRight size={13} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-app-border dark:border-app-border-dark text-[12px] font-bold bg-transparent text-[#4a4a54] dark:text-[#a1a1aa] cursor-pointer no-underline transition-all hover:border-[#8a8a96] dark:hover:border-[#71717a] hover:text-app-text dark:hover:text-app-text-dark"
          >
            <FiDownload size={13} /> Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants}>
          <Icons />
        </motion.div>
      </motion.div>

      {/* ── RIGHT: Full-height photo cutout ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="absolute right-0 bottom-0 top-0 w-full sm:w-1/2 md:w-1/2 lg:w-[50%] max-w-[600px] flex items-end justify-center z-0 pointer-events-none"
      >
        <img
          src="/profile-photo.png"
          alt="Kiruthik Vairavel"
          className="hero-img h-full w-full object-cover object-top select-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        />
      </motion.div>
    </div>

    {/* ── MARQUEE TICKER ── */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="border-t border-app-border dark:border-app-border-dark overflow-hidden py-3.5 bg-app-bg dark:bg-app-bg-dark relative z-10"
    >
      <div
        className="flex animate-marquee w-max whitespace-nowrap"
      >
        {[...tags, ...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3.5 px-5 text-[10px] font-bold tracking-[0.12em] uppercase text-[#8a8a96] dark:text-[#71717a]"
          >
            {tag}
            <span className="text-accent text-sm">✦</span>
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Home;
