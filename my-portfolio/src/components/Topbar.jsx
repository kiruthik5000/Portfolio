import { useState, useEffect, useRef } from "react";
import { FiSun, FiMoon, FiArrowRight } from "react-icons/fi";

function Topbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled]         = useState(false);
  const [hidden, setHidden]             = useState(false);
  const lastScrollY                     = useRef(0);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme") || "dark";
    // Apply immediately before any render
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return saved;
  });

  /* ── Apply dark class to <html> ── */
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* ── Scroll tracking ── */
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
  const isDark = theme === "dark";

  return (
    <header
      style={{
        position: "fixed",
        top: "16px",
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
        transition: "opacity 0.4s, transform 0.4s",
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(-20px)" : "translateY(0)",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "8px 10px",
          borderRadius: "9999px",
          border: `1px solid ${isDark ? "#27272a" : "#e2e2de"}`,
          backgroundColor: isDark
            ? "rgba(9,9,11,0.88)"
            : "rgba(250,250,247,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? isDark
              ? "0 4px 24px rgba(0,0,0,0.6)"
              : "0 4px 16px rgba(0,0,0,0.08)"
            : "none",
          transition: "background-color 0.35s cubic-bezier(0.22,1,0.36,1), border-color 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            background: "none",
            border: "none",
            padding: "6px 12px",
            borderRadius: "9999px",
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: "-0.02em",
            color: isDark ? "#f4f4f5" : "#111118",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "color 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          @Kiruthik<span style={{ color: "var(--accent)" }}>.</span>
        </button>

        {/* Separator */}
        <div style={{ width: "1px", height: "16px", backgroundColor: isDark ? "#27272a" : "#e2e2de", margin: "0 4px", transition: "background-color 0.35s cubic-bezier(0.22,1,0.36,1)" }} />

        {/* Nav links */}
        {navItems.map((item) => {
          const isActive = activeSection === item;
          return (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              style={{
                position: "relative",
                background: isActive
                  ? isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
                  : "none",
                border: "none",
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isActive
                  ? isDark ? "#f4f4f5" : "#111118"
                  : isDark ? "#a1a1aa" : "#5a5a64",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "color 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {isActive && (
                <span style={{
                  position: "absolute",
                  bottom: "2px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "4px",
                  height: "4px",
                  borderRadius: "9999px",
                  backgroundColor: "var(--accent)",
                }} />
              )}
            </button>
          );
        })}

        {/* Separator */}
        <div style={{ width: "1px", height: "16px", backgroundColor: isDark ? "#27272a" : "#e2e2de", margin: "0 4px" }} />

        {/* Theme toggle */}
        <button
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          style={{
            background: "none",
            border: "none",
            padding: "8px",
            borderRadius: "9999px",
            color: isDark ? "#a1a1aa" : "#5a5a64",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
        </button>

        {/* Hire Me CTA */}
        <button
          onClick={() => scrollTo("contact")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "7px 16px",
            borderRadius: "9999px",
            border: "none",
            fontSize: "11px",
            fontWeight: 700,
            backgroundColor: isDark ? "#f4f4f5" : "#111118",
            color: isDark ? "#111118" : "#f4f4f5",
            cursor: "pointer",
            fontFamily: "inherit",
            marginLeft: "4px",
            transition: "background-color 0.35s cubic-bezier(0.22,1,0.36,1), color 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Hire Me <FiArrowRight size={11} />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
