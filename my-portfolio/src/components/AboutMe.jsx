import React from "react";
import Title from "./utils/Title";
import SubTitle from "./utils/SubTitle";
import {
  FaCertificate,
  FaCode,
  FaGraduationCap,
  FaSchool,
  FaTrophy,
  FaUniversity,
} from "react-icons/fa";

const AboutMe = () => {
  /* ===================== UI HELPERS ===================== */

  const Card = ({ children, className = "" }) => (
    <div
      className={`group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 
                  hover:border-slate-700 transition-all duration-300 hover:shadow-xl 
                  hover:shadow-cyan-500/10 ${className}`}
    >
      {children}
    </div>
  );

  const TagList = ({ items }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700
                      transition-all duration-300 cursor-pointer hover:scale-105
                      hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/50"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const EducationCard = ({ education }) => (
    <Card className="flex gap-8 items-start w-full hover:scale-[1.01] transition-transform duration-300">
      {/* Icon */}
      <div className="py-4 text-4xl text-blue-400">{education.icon}</div>

      <div className="flex-1">
        <SubTitle>{education.title}</SubTitle>
        <p className="text-slate-400 mt-1">{education.institute}</p>
        <p className="text-slate-500 text-sm mt-2">{education.description}</p>
        <div className="inline-flex gap-2 justify-center items-center p-2 mt-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-slate-400 font-medium">
            {education.percentage}:
          </span>
          <span className="text-blue-400 font-semibold">{education.value}</span>
        </div>
      </div>

      <span
        className="text-sm font-semibold uppercase tracking-wider 
                     text-blue-400 bg-blue-400/5 border border-blue-800/50 px-3 py-1 rounded-full
                     whitespace-nowrap"
      >
        {education.period}
      </span>
    </Card>
  );

  /* ===================== DATA ===================== */

  const education = [
    {
      title: "Bachelor's Degree in Information Technology",
      institute:
        "Sri Krishna College Of Engineering And Technology, Coimbatore",
      description:
        "Relevant coursework: Data Structures & Algorithms, Machine Learning, Artificial Intelligence, DBMS, Operating Systems",
      period: "2023–2027",
      percentage: "CGPA",
      value: "8.39",
      icon: <FaGraduationCap />,
    },
    {
      title: "Senior Secondary (Class XII)",
      institute: "Mani Matriculation Higher Secondary Scholl, Thanjavur",
      description:
        "Compeleted My secondary education with Computer Science and Mathematics",
      period: "2022-2023",
      percentage: "percentage",
      value: "89.5 %",
      icon: <FaUniversity />,
    },
    {
      title: "Secondary (Class X)",
      institute: "Mani Matriculation Higher Secondary Scholl, Thanjavur",
      description: "Compeleted My Secondary education",
      period: "2021-2022",
      percentage: "percentage",
      value: "95.9 %",
      icon: <FaSchool />,
    },
  ];

  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "JavaScript"],
    },
    {
      title: "Machine Learning & AI",
      items: [
        "Supervised Learning",
        "Unsupervised Learning",
        "NLP",
        "RNN / LSTM",
        "Time Series Forecasting",
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "React",
        "Tailwind CSS",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "spring-boot",
      ],
    },
    {
      title: "Tools & Technologies",
      items: [
        "Git & GitHub",
        "Kaggle",
        "Selenium",
        "REST APIs",
        "IntelliJ",
        "VS Code",
        "linux",
      ],
    },
  ];

  const achievements = [
    {
      title: "Competitive Programming",
      icon: <FaTrophy />,
      content: (
        <>
          Completed <span className="font-semibold text-blue-400">700+</span>{" "}
          <a
            href="https://leetcode.com/u/KIRUTHIKVAIRAVEL/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold underline underline-offset-4
                     hover:text-blue-300 transition-colors"
          >
            LeetCode
          </a>{" "}
          problems and also solved many questions in other platforms like
          Hackerrank ans so on.
        </>
      ),
      period: "2023 – Present",
    },
    {
      title: "Hackathons & Coding Competitions",
      icon: <FaCode />,

      content: (
        <>
          Competed in several{" "}
          <span className="font-semibold text-blue-400">
            college-level hackathons and coding competitions
          </span>
          , demonstrating strong analytical skills, adaptability, and
          performance in high-pressure environments.
        </>
      ),
      period: "2023-2026"
    },
    {
      title: "Certifications",
      icon: <FaCertificate/>,
      content: (
          <>
          Completed numerous courses and obtained Certificates in leading platforms like{" "}
          <span className="font-semibold text-blue-400"> Google-colud platform, Infosys, NPTEL 
            </span> 
             {" "} obtaining skills in various fields
          </>
          
      ),
      period: "Ongoing"
    }
  ];

  /* ===================== RENDER ===================== */

  return (
    <section
      id="about"
      className="min-h-screen text-slate-200 px-6 py-16 flex justify-center"
    >
      <div className="max-w-5xl w-full space-y-12">
        {/* ================= Education ================= */}
        <div className="space-y-4">
          <Title>Education</Title>
          {education.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>

        {/* ================= Skills ================= */}
        <div className="space-y-4">
          <Title>Skills</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex gap-3 items-center mb-4">
                  <div className="w-1 h-6 bg-blue-500 rounded-full" />
                  <SubTitle>{skill.title}</SubTitle>
                </div>
                <TagList items={skill.items} />
              </Card>
            ))}
          </div>
        </div>

        {/* ================= Achievements ================= */}
        <div className="space-y-4">
          <Title>Achievements</Title>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="flex items-start justify-between gap-6
                   hover:scale-[1.01] transition-transform duration-300"
              >
                {/* Left: Icon + Content */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 text-2xl">
                    {item.icon}
                  </div>

                  <div className="px-4">
                    <SubTitle>{item.title}</SubTitle>
                    <p className="text-slate-400 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Right: Period */}
                <span
                  className="text-sm font-semibold uppercase tracking-wide
                     text-blue-400 bg-blue-400/5 border border-blue-800/50
                     px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {item.period}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
