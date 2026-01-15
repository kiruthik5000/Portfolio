import React from "react";
import Icons from "./Icons";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import PersonInformation from "./PersonInformation";
import Title from "./utils/Title";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          
          {/* Profile Image with Gradient Border */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div
              className="relative w-64 h-64 rounded-full bg-cover bg-center shadow-2xl ring-4 ring-slate-800"
              style={{ backgroundImage: "url('/profile-photo.png')" }}
            />
          </div>

          {/* Social Icons */}
          <Icons />

          {/* Contact Information */}
          <PersonInformation />
        </div>

        {/* RIGHT COLUMN */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
            Hi, I'm <Title>Kiruthik</Title>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            I'm a passionate developer focused on building clean, modern, and
            user-friendly web applications. I enjoy working with React, Tailwind
            CSS, and creating smooth UI experiences that delight users.
          </p>

          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 
                             text-white font-semibold text-base
                             hover:from-blue-400 hover:to-blue-600 hover:scale-105 
                             transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              View My Work
            </button>
            <button className="px-8 py-3 rounded-xl bg-slate-800/50 border border-slate-700
                             text-slate-200 font-semibold text-base
                             hover:bg-slate-700/50 hover:border-blue-500 hover:scale-105
                             transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
