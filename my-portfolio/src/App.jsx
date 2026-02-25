import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HideOnOutOfView from "./components/utils/HideOnOutOfView";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="pt-24 relative z-10">
      <HideOnOutOfView>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
      </HideOnOutOfView>

      {/* Section divider */}
      <div className="section-divider" />

      <HideOnOutOfView>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <AboutMe />
        </section>
      </HideOnOutOfView>

      {/* Section divider */}
      <div className="section-divider" />

      <HideOnOutOfView>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
      </HideOnOutOfView>

      {/* Section divider */}
      <div className="section-divider" />

      {/* ==================== CONTACT SECTION ==================== */}
      <HideOnOutOfView>
        <section id="contact" className="min-h-[70vh] flex items-center justify-center px-6 py-20">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
              I'm currently open to new opportunities and collaborations.
              Whether you have a project in mind or just want to say hi, feel free to reach out!
            </p>

            {/* CTA Email Button */}
            <div>
              <a
                href="mailto:kiruthikvairam5000@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl
                         bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold
                         text-base shadow-lg shadow-blue-500/20
                         hover:shadow-blue-500/40 hover:translate-y-[-2px]
                         transition-all duration-300 group"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Say Hello
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://github.com/kiruthik5000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-200 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kiruthik-vairavel-56244b302/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:kiruthikvairam5000@gmail.com"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </HideOnOutOfView>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-slate-800/50 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-2 text-center">
          <p className="text-slate-500 text-sm">
            Designed & Built with <FaHeart className="inline w-3 h-3 text-red-400/70 mx-0.5" /> by Kiruthik
          </p>
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
