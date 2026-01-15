import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HideOnOutOfView from "./components/utils/HideOnOutOfView";

function App() {
  return (
    <div className="pt-24">
      <HideOnOutOfView>
      
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home/>
      </section>
    </HideOnOutOfView>

        <HideOnOutOfView>
        <section id="about" className="min-h-screen flex items-center justify-center bg-slate-900/20">
        <AboutMe/>
        </section>
      </HideOnOutOfView>

      <HideOnOutOfView>
      <section id="projects" className="min-h-screen flex items-center justify-center">
      <Projects/>
      </section>
    </HideOnOutOfView>

      <HideOnOutOfView>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-slate-900/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-300 text-lg">Let's work together on your next project</p>
        </div>
      </section>
    </HideOnOutOfView>
    </div>
  );
}

export default App;

