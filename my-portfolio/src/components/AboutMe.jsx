import React from "react";
import Title from "./utils/Title";
import SubTitle from "./utils/SubTitle";
import HideOnOutOfView from "./utils/HideOnOutOfView";
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
      className={`group relative bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6
                  hover:border-slate-700/80 transition-all duration-500
                  hover:shadow-xl hover:shadow-blue-500/5 ${className}`}
    >
      {/* Left accent bar that glows on hover */}
      <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-slate-800 rounded-full
                    group-hover:bg-gradient-to-b group-hover:from-blue-400 group-hover:to-cyan-400
                    transition-all duration-500" />
      {children}
    </div>
  );

  const TagList = ({ items }) => {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/50
                      transition-all duration-300 cursor-default
                      hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const EducationCard = ({ education, index }) => (
    <HideOnOutOfView delay={index * 120} direction="up">
      <Card className="flex gap-8 items-start w-full hover:translate-x-1 transition-transform duration-500">
        {/* Icon */}
        <div className="py-4 text-3xl text-blue-400/80">{education.icon}</div>

        <div className="flex-1">
          <SubTitle>{education.title}</SubTitle>
          <p className="text-slate-400 mt-1 text-sm">{education.institute}</p>
          <p className="text-slate-500 text-sm mt-2">{education.description}</p>
          <div className="inline-flex gap-2 justify-center items-center p-2 mt-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-slate-400 font-medium text-sm">
              {education.percentage}:
            </span>
            <span className="text-blue-400 font-semibold">{education.value}</span>
          </div>
        </div>

        <span
          className="text-xs font-semibold uppercase tracking-wider
                       text-blue-400/80 bg-blue-400/5 border border-blue-800/30 px-3 py-1 rounded-full
                       whitespace-nowrap"
        >
          {education.period}
        </span>
      </Card>
    </HideOnOutOfView>
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
      value: "8.41",
      icon: <FaGraduationCap />,
    },
    {
      title: "Senior Secondary (Class XII)",
      institute: "Mani Matriculation Higher Secondary School, Thanjavur",
      description:
        "Completed secondary education with Computer Science and Mathematics",
      period: "2022-2023",
      percentage: "Percentage",
      value: "89.5%",
      icon: <FaUniversity />,
    },
    {
      title: "Secondary (Class X)",
      institute: "Mani Matriculation Higher Secondary School, Thanjavur",
      description: "Completed secondary education",
      period: "2021-2022",
      percentage: "Percentage",
      value: "95.9%",
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
        "Spring Boot",
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
        "Linux",
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
          HackerRank and so on.
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
      period: "2023-2026",
    },
    {
      title: "Certifications",
      icon: <FaCertificate />,
      content: (
        <>
          Completed numerous courses and obtained certificates on leading
          platforms like{" "}
          <span className="font-semibold text-blue-400">
            Google Cloud Platform, Infosys, NPTEL
          </span>{" "}
          obtaining skills in various fields.
        </>
      ),
      period: "Ongoing",
    },
  ];

  /* ===================== RENDER ===================== */

  return (
    <section
      id="about"
      className="min-h-screen text-slate-200 px-6 py-16 flex justify-center"
    >
      <div className="max-w-5xl w-full space-y-16">
        {/* ================= Education ================= */}
        <div className="space-y-5">
          <Title>Education</Title>
          {education.map((item, index) => (
            <EducationCard key={index} education={item} index={index} />
          ))}
        </div>

        {/* ================= Skills ================= */}
        <div className="space-y-5">
          <Title>Skills</Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <HideOnOutOfView key={skill.title} delay={index * 100} direction="up">
                <Card className="hover:translate-y-[-2px] transition-transform duration-500">
                  <div className="flex gap-3 items-center mb-4 pl-3">
                    <SubTitle>{skill.title}</SubTitle>
                  </div>
                  <div className="pl-3">
                    <TagList items={skill.items} />
                  </div>
                </Card>
              </HideOnOutOfView>
            ))}
          </div>
        </div>

        {/* ================= Achievements ================= */}
        <div className="space-y-5">
          <Title>Achievements</Title>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, index) => (
              <HideOnOutOfView key={index} delay={index * 120} direction="up">
                <Card
                  className="flex items-start justify-between gap-6
                     hover:translate-y-[-2px] transition-transform duration-500"
                >
                  {/* Left: Icon + Content */}
                  <div className="flex items-start gap-4 pl-3">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400/80 text-xl shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <SubTitle>{item.title}</SubTitle>
                      <p className="text-slate-400 leading-relaxed text-sm mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  {/* Right: Period */}
                  <span
                    className="text-xs font-semibold uppercase tracking-wide
                       text-blue-400/80 bg-blue-400/5 border border-blue-800/30
                       px-3 py-1 rounded-full whitespace-nowrap shrink-0"
                  >
                    {item.period}
                  </span>
                </Card>
              </HideOnOutOfView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
