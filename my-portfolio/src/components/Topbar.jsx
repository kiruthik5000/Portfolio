import { useState, useEffect, useRef } from "react";

function Topbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Show/hide on scroll direction
      if (currentY > 100) {
        setHidden(currentY > lastScrollY.current && currentY > 200);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      setScrolled(currentY > 20);

      // Track active section
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = currentY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = ["home", "about", "projects", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4
        transition-all duration-500 ease-out
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${hidden ? '-translate-y-full opacity-0' : ''}
      `}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`
            bg-slate-900/60 backdrop-blur-xl rounded-2xl border transition-all duration-500
            ${scrolled
              ? 'border-slate-700/60 shadow-2xl shadow-blue-500/5'
              : 'border-slate-800/40 shadow-xl'
            }
          `}
        >
          <nav className="px-6 py-3 flex items-center justify-between">

            {/* LOGO */}
            <div className="flex-shrink-0">
              <span
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
                           hover:from-cyan-400 hover:to-blue-400
                           transition-all duration-500 cursor-pointer inline-block"
                onClick={() => scrollToSection("home")}
              >
                @Kiruthik
              </span>
            </div>

            {/* CENTER MENU */}
            <ul className="flex gap-1 text-sm">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative cursor-pointer px-4 py-2 rounded-xl font-medium
                            transition-all duration-300 ease-out group
                            ${activeSection === item
                              ? 'text-blue-400'
                              : 'text-slate-400 hover:text-slate-200'
                            }`}
                >
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>

                  {/* Hover background */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300
                    ${activeSection === item
                      ? 'bg-blue-500/10 opacity-100'
                      : 'bg-slate-700/0 opacity-0 group-hover:bg-slate-700/30 group-hover:opacity-100'
                    }`}
                  />

                  {/* Active / Hover underline */}
                  <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5
                                  rounded-full transition-all duration-300
                                  ${activeSection === item
                                    ? 'w-1/2 bg-blue-400'
                                    : 'w-0 bg-slate-500 group-hover:w-1/3'
                                  }`}
                  />
                </li>
              ))}
            </ul>

            {/* RIGHT - Contact Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("contact")}
                className="relative px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600
                         text-white font-semibold text-sm overflow-hidden group
                         hover:shadow-blue-500/40 hover:shadow-xl
                         transition-all duration-300"
              >
                <span className="relative z-10">Contact Me</span>

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                              transition-transform duration-1000 bg-gradient-to-r
                              from-transparent via-white/15 to-transparent" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
