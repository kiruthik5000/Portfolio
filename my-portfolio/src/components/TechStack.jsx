import React from "react";
import Title from "./utils/Title";

const TechStack = () => {
  const cardContainer = `
    group relative flex flex-col items-center
    transition-all duration-300 ease-out
  `;

  const cardGlass = `
    relative w-32 h-16
    border border-slate-700/50 rounded-2xl
    flex items-center justify-center
    group-hover:border-blue-500/50
    group-hover:bg-slate-800/90
    group-hover:-translate-y-3
    group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)]
    transition-all duration-500
  `;

  // ✅ Flat data structure (no categories, no order dependency)
  const skills = [
    { icon: "spring.png", value: "Spring Boot" },
    { icon: "express.png", value: "ExpressJS" },
    { icon: "node.png", value: "NodeJS" },
    { icon: "react.png", value: "ReactJS" },
    { icon: "tailwind.png", value: "Tailwind CSS" },
    { icon: "tensorflow.png", value: "TensorFlow" },
    { icon: "mysql.png", value: "MySQL" },
    { icon: "mongodb.png", value: "MongoDB" },
    { icon: "aws.png", value: "AWS" },
    { icon: "linux.png", value: "Linux" },
    { icon: "docker.png", value: "Docker" },
  ];

  return (
    <section className="flex flex-col gap-12 p-10">
      {/* Title */}
      <Title >
        <span className="p-6 font-bold md:text-5xl">
          Skills
        </span>
      </Title>

      {/* Single Continuous Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          xl:grid-cols-4
          gap-y-12
        "
      >
        {skills.map((skill) => (
          <div key={skill.value} className={cardContainer}>
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            {/* Card */}
            <div className={cardGlass + " overflow-hidden"}>
              <img
                src={`/skills/${skill.icon}`}
                alt={skill.value}
                className="
      absolute inset-0
      w-full h-full
      object-cover
      transition-transform duration-500
      "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
