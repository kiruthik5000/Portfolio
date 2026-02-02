import { useState, useEffect } from "react";

function Topbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener("scroll", handleScroll);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`
            bg-slate-800/40 backdrop-blur-lg rounded-2xl border border-slate-700/50 
            transition-all duration-300
            ${scrolled ? 'shadow-2xl shadow-blue-500/10' : 'shadow-xl'}
          `}
        >
          <nav className="px-6 py-3 flex items-center justify-between">
            
            {/* LOGO/BRAND - Left */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent
                             hover:scale-105 transition-transform duration-300 cursor-pointer inline-block">
                @Kiruthik
              </span>
            </div>

            {/* CENTER MENU */}
            <ul className="flex gap-2 text-sm">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative cursor-pointer px-4 py-2 rounded-xl text-slate-300 font-medium 
                           hover:text-blue-400 transition-all duration-300 ease-out group"
                >
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-blue-500/10 rounded-xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Active indicator */}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 
                                  bg-blue-500 rounded-full" />
                  )}
                  
                  {/* Hover underline */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                bg-blue-400 rounded-full
                                group-hover:w-3/4 transition-all duration-300" />
                </li>
              ))}
            </ul>

            {/* RIGHT - Contact Button */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection("contact")}
                className="relative px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 
                         text-white font-semibold text-sm overflow-hidden group
                         hover:scale-105 transition-all duration-300 
                         shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10">Contact Me</span>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                              transition-transform duration-1000 bg-gradient-to-r 
                              from-transparent via-white/20 to-transparent" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Topbar;



