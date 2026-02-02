import React from "react";
import Icons from "./Icons";
import PersonInformation from "./PersonInformation";
import Title from "./utils/Title";
import CustomButton from "./utils/CustomButton";
import SubTitle from "./utils/SubTitle";

const Home = () => {
  return (
    <section className="min-h-screen p-8">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center m-20 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          
          {/* Profile Image with Gradient Border */}
          <div className="relative group">
            {/* Gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 
                          rounded-full blur opacity-75 group-hover:opacity-100 
                          transition duration-500" />
            
            <div
              className="relative w-64 h-64 rounded-full bg-cover bg-center shadow-2xl ring-4 ring-slate-800
                       group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: "url('/profile-photo.png')" }}
            />
          </div>

          {/* Social Icons */}
          <Icons />

          {/* Contact Information */}
          <PersonInformation />
        </div>

        {/* RIGHT COLUMN */}
        <div className="max-w-[80%] text-center lg:text-left space-y-6">
          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
            Hi, I'm{" "}
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
                           bg-clip-text text-transparent">
              Kiruthik
            </span>
          </h1>

          {/* First paragraph */}
          <p className="text-2xl text-slate-300 leading-relaxed">
            I am a passionate and detail-oriented software developer
            with a strong foundation in full-stack development and a growing specialization in Machine Learning and Artificial Intelligence.
          </p>

          {/* Second paragraph */}
          <p className="text-2xl text-slate-300 leading-relaxed">
            I enjoy building systems that solve real-world problems, combining clean software 
            engineering practices with data-driven intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <CustomButton>Projects</CustomButton>
            <CustomButton variant="secondary">Download CV</CustomButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;


