import { useState } from "react";

function Topbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItemClass =
    "cursor-pointer px-4 py-2 rounded-xl text-slate-300 font-medium " +
    "hover:bg-blue-500/10 hover:text-blue-400 hover:scale-105 " +
    "transition-all duration-300 ease-in-out";

  const navItems = ["home", "about", "projects", "contact"];
  const curElement = useState("home")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-xl">
          <nav className="px-6 py-3 flex items-center justify-between">
            
            {/* LOGO/BRAND - Left */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                @Kiruthik
              </span>
            </div>

            {/* CENTER MENU */}
            <ul className="flex gap-8 text-sm">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={navItemClass}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>

            {/* RIGHT - Contact Button */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 
                         text-white font-semibold text-sm
                         hover:from-blue-400 hover:to-blue-600 hover:scale-105 
                         transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Contact Me
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Topbar;

