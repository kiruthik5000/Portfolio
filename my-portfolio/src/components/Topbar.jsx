import { NavLink } from "react-router-dom";

function Topbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 border-b-2 border-blue-500"
      : "text-gray-300 hover:text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-semibold text-white">
          Kiruthik<span className="text-blue-500">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
