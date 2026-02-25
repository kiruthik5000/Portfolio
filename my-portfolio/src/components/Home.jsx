import React from "react";
import Icons from "./Icons";
import PersonInformation from "./PersonInformation";
import Title from "./utils/Title";
import CustomButton from "./utils/CustomButton";

const Home = () => {
  return (
    <section className="min-h-screen p-8">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center m-20 gap-16 lg:gap-24">

        {/* LEFT COLUMN — stagger animation */}
        <div className="flex flex-col items-center lg:items-start gap-6">

          {/* Profile Image with Gradient Border */}
          <div
            className="relative group animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Animated gradient glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
                          rounded-full blur-md opacity-60 group-hover:opacity-100
                          transition-opacity duration-700 animate-[pulseGlow_4s_ease-in-out_infinite]" />

            <div
              className="relative w-64 h-64 rounded-full bg-cover bg-center shadow-2xl ring-4 ring-slate-800/80
                       group-hover:scale-[1.03] transition-transform duration-700"
              style={{
                backgroundImage: "url('/profile-photo.png')",
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {/* Social Icons */}
          <div className="animate-[fadeInUp_0.8s_ease-out_both]" style={{ animationDelay: '0.3s' }}>
            <Icons />
          </div>

          {/* Contact Information */}
          <div className="animate-[fadeInUp_0.8s_ease-out_both]" style={{ animationDelay: '0.5s' }}>
            <PersonInformation />
          </div>
        </div>

        {/* RIGHT COLUMN — stagger animation */}
        <div className="max-w-[80%] text-center lg:text-left space-y-6">
          {/* Heading */}
          <h1
            className="text-5xl lg:text-6xl font-bold text-slate-100 leading-tight
                       animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm{" "}
            <span
              className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
                         bg-clip-text text-transparent bg-[length:200%_200%]
                         animate-[textGradientShift_6s_ease-in-out_infinite]"
            >
              Kiruthik
            </span>
          </h1>

          {/* Role subtitle with typing cursor */}
          <p
            className="text-lg text-slate-400 font-medium tracking-wide uppercase
                       animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.35s' }}
          >
            Full-Stack Developer &bull; ML Enthusiast
            <span className="inline-block w-0.5 h-5 bg-blue-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
          </p>

          {/* First paragraph */}
          <p
            className="text-xl text-slate-300 leading-relaxed
                       animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.45s' }}
          >
            I am a passionate and detail-oriented software developer
            with a strong foundation in full-stack development and a growing specialization in Machine Learning and Artificial Intelligence.
          </p>

          {/* Second paragraph */}
          <p
            className="text-xl text-slate-300 leading-relaxed
                       animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.55s' }}
          >
            I enjoy building systems that solve real-world problems, combining clean software
            engineering practices with data-driven intelligence.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex gap-4 justify-center lg:justify-start
                       animate-[fadeInUp_0.8s_ease-out_both]"
            style={{ animationDelay: '0.65s' }}
          >
            <CustomButton>Projects</CustomButton>
            <CustomButton variant="secondary">Download CV</CustomButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
