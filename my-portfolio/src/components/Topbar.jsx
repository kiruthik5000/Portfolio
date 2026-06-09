import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiArrowRight } from "react-icons/fi";
import clsx from "clsx";

function Topbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled]         = useState(false);
  const [hidden, setHidden]             = useState(false);
  const lastScrollY                     = useRef(0);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme") || "dark";
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return saved;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastScrollY.current && y > 160);
      lastScrollY.current = y;
      setScrolled(y > 24);

      const ids = ["home", "about", "projects", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (y + 200 >= top && y + 200 < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ 
        y: hidden ? -20 : 0, 
        opacity: hidden ? 0 : 1 
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.4 }
      }}
      className={clsx(
        "fixed top-4 left-0 right-0 z-50 flex justify-center px-4",
        hidden && "pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-1 p-2 rounded-full border backdrop-blur-2xl transition-all duration-300",
          "border-app-border dark:border-app-border-dark bg-app-bg/88 dark:bg-app-bg-dark/88",
          scrolled && (
            "shadow-lg dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          )
        )}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="px-3 py-1.5 rounded-full font-extrabold text-[13px] tracking-tight text-app-text dark:text-app-text-dark cursor-pointer transition-colors"
        >
          @Kiruthik<span className="text-accent">.</span>
        </button>

        {/* Separator */}
        <div className="w-[1px] h-4 bg-app-border dark:bg-app-border-dark mx-1 transition-colors" />

        {/* Nav links */}
        {navItems.map((item) => {
          const isActive = activeSection === item;
          return (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={clsx(
                "relative px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase cursor-pointer transition-all",
                isActive
                  ? "bg-black/6 dark:bg-white/8 text-app-text dark:text-app-text-dark"
                  : "text-[#5a5a64] dark:text-[#a1a1aa]"
              )}
            >
              {item}
              {isActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </button>
          );
        })}

        {/* Separator */}
        <div className="w-[1px] h-4 bg-app-border dark:bg-app-border-dark mx-1" />

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="p-2 rounded-full text-[#5a5a64] dark:text-[#a1a1aa] flex items-center justify-center transition-colors hover:text-app-text dark:hover:text-app-text-dark"
        >
          {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
        </button>

        {/* Hire Me CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold bg-app-text dark:bg-app-text-dark text-app-bg dark:text-app-bg-dark cursor-pointer transition-colors ml-1"
        >
          Hire Me <FiArrowRight size={11} />
        </button>
      </div>
    </motion.header>
  );
}

export default Topbar;
