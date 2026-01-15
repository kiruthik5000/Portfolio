import React from "react";
import Icons from "./Icons";
import PersonInformation from "./PersonInformation";
import Title from "./utils/Title";
import CustomButton from "./utils/CustomButton";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section className="min-h-screen p-8">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center m-20 gap-16 lg:gap-24">
        
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
        <div className="max-w-[80%] text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
            Hi, I'm <Title>Kiruthik</Title>
          </h1>

          <p className="mt-6 text-2xl text-slate-300 leading-relaxed">
            I am a passionate and detail-oriented software developer with a strong foundation in full-stack development and a growing specialization in Machine Learning and Artificial Intelligence. 
          </p>

          <p className="mt-6 text-2xl text-slate-300 leading-relaxed">
I enjoy building systems that solve real-world problems, combining clean software engineering practices with data-driven intelligence.
          </p>

          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <CustomButton>projects</CustomButton>
            <CustomButton>Download CV</CustomButton>
          </div>
        </div>

      </div>
      <div className="px-8">
        <TechStack/>
      </div>
    </section>
  );
};

export default Home;
