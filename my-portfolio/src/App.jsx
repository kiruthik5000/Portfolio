import "./App.css";
import Topbar from "./components/Topbar";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import HideOnOutOfView from "./components/utils/HideOnOutOfView";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Topbar />

      <main className="relative z-10">
        {/* ─── HERO ─── */}
        <Home />

        <div className="section-divider" />

        {/* ─── ABOUT ─── */}
        <AboutMe />

        <div className="section-divider" />

        {/* ─── PROJECTS ─── */}
        <Projects />

        <div className="section-divider" />

        {/* ─── CERTIFICATIONS ─── */}
        <Certifications />

        <div className="section-divider" />

        {/* ─── CONTACT ─── */}
        <HideOnOutOfView direction="up">
          <section
            id="contact"
            className="min-h-[60vh] flex items-center justify-center px-6 py-24 md:py-32"
          >
            <div className="max-w-lg w-full text-center space-y-6">
              {/* Label */}
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Let's connect
              </p>

              {/* Headline */}
              <h2 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight">
                Got a project in mind?<br />
                <span className="text-accent">Let's talk.</span>
              </h2>

              {/* Sub-text */}
              <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto">
                I'm currently open to new roles and freelance opportunities.
                If you want to collaborate or just say hi — I'd love to hear from you.
              </p>

              {/* CTA */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href="mailto:kiruthikvairam5000@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-[12px] font-bold
                             bg-app-text dark:bg-app-text-dark text-app-bg dark:text-app-bg-dark
                             transition-all duration-200 shadow-sm hover:opacity-80 active:scale-95 border border-transparent"
                >
                  <FiMail size={14} />
                  Send an Email
                </a>
              </div>

              {/* Social icons */}
              <div className="flex justify-center items-center gap-3 pt-4">
                {[
                  { href: "https://github.com/kiruthik5000",                          Icon: FiGithub,   label: "GitHub"   },
                  { href: "https://www.linkedin.com/in/kiruthik-vairavel-56244b302/", Icon: FiLinkedin, label: "LinkedIn" },
                  { href: "mailto:kiruthikvairam5000@gmail.com",                      Icon: FiMail,     label: "Email"    },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800
                               bg-white/60 dark:bg-zinc-900/30
                               text-zinc-500 dark:text-zinc-500
                               hover:text-zinc-900 dark:hover:text-zinc-100
                               hover:border-zinc-400 dark:hover:border-zinc-600
                               transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </HideOnOutOfView>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800/60 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            Designed & Built with{" "}
            <FiHeart className="inline w-3 h-3 text-red-400 dark:text-red-500 mx-0.5 align-[-1px]" />{" "}
            by <span className="font-semibold text-zinc-600 dark:text-zinc-400">Kiruthik Vairavel</span>
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} · All rights reserved.
          </p>
        </div>
      </footer>
    </AnimatePresence>
  );
}

export default App;
