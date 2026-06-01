import React from "react";
import Title from "./utils/Title";
import SubTitle from "./utils/SubTitle";
import HideOnOutOfView from "./utils/HideOnOutOfView";
import {
  FaGraduationCap, FaUniversity, FaSchool,
  FaTrophy, FaCode, FaCertificate,
} from "react-icons/fa";
import {
  SiPython, SiOpenjdk, SiJavascript,
  SiReact, SiTailwindcss, SiTensorflow,
  SiScikitlearn, SiSpring, SiMysql,
  SiGit, SiLinux, SiSelenium,
  SiKaggle,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

/* ── Skill icon map ── */
const SKILL_ICONS = {
  "Python":                <SiPython      size={13} />,
  "Java":                  <SiOpenjdk     size={13} />,
  "JavaScript":            <SiJavascript  size={13} />,
  "React":                 <SiReact       size={13} />,
  "Tailwind CSS":          <SiTailwindcss size={13} />,
  "TensorFlow":            <SiTensorflow  size={13} />,
  "Scikit-learn":          <SiScikitlearn size={13} />,
  "Spring Boot":           <SiSpring      size={13} />,
  "MySQL":                 <SiMysql       size={13} />,
  "Git & GitHub":          <SiGit         size={13} />,
  "Linux":                 <SiLinux       size={13} />,
  "Selenium":              <SiSelenium    size={13} />,
  "Kaggle":                <SiKaggle      size={13} />,
  "VS Code":               <VscCode       size={13} />,
};

/* ── DATA ── */
const education = [
  {
    icon: <FaGraduationCap size={18} />,
    title: "B.Tech in Information Technology",
    institute: "Sri Krishna College Of Engineering And Technology, Coimbatore",
    description: "DSA · Machine Learning · AI · DBMS · Operating Systems",
    period: "2023–2027",
    metric: "CGPA",
    value: "8.41",
  },
  {
    icon: <FaUniversity size={18} />,
    title: "Senior Secondary — Class XII",
    institute: "Mani Matriculation Higher Secondary School, Thanjavur",
    description: "Computer Science · Mathematics",
    period: "2022–2023",
    metric: "Percentage",
    value: "89.5%",
  },
  {
    icon: <FaSchool size={18} />,
    title: "Secondary — Class X",
    institute: "Mani Matriculation Higher Secondary School, Thanjavur",
    description: "General Studies",
    period: "2021–2022",
    metric: "Percentage",
    value: "95.9%",
  },
];

const skills = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript"],
  },
  {
    title: "ML & AI",
    items: ["Supervised Learning", "Unsupervised Learning", "NLP", "RNN / LSTM", "Time Series"],
  },
  {
    title: "Frameworks",
    items: ["React", "Spring Boot", "Tailwind CSS", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Linux", "MySQL", "Selenium", "Kaggle", "VS Code"],
  },
];

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Competitive Programming",
    text: <>Solved <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">700+</strong> problems on <a href="https://leetcode.com/u/KIRUTHIKVAIRAVEL/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">LeetCode</a> and other platforms like HackerRank.</>,
    period: "2023 – Present",
  },
  {
    icon: <FaCode />,
    title: "Hackathons & Competitions",
    text: "Competed in multiple college-level hackathons, demonstrating adaptability and performance under pressure.",
    period: "2023 – 2026",
  },
  {
    icon: <FaCertificate />,
    title: "Certifications",
    text: <>Certified on <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Google Cloud Platform, Infosys, NPTEL</strong> across cloud, data science, and software engineering.</>,
    period: "Ongoing",
  },
];

/* ── Card wrapper ── */
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white/60 dark:bg-zinc-900/10
                border border-zinc-200 dark:border-zinc-800/60
                rounded-xl p-5
                hover:border-zinc-300 dark:hover:border-zinc-700
                transition-all duration-300
                card-shimmer
                ${className}`}
  >
    {children}
  </div>
);

/* ── Skill tag ── */
const Tag = ({ label }) => {
  const icon = SKILL_ICONS[label];
  return (
    <span
      className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold rounded-md
                 border border-zinc-200 dark:border-zinc-800
                 bg-white dark:bg-zinc-900/50
                 text-zinc-600 dark:text-zinc-400
                 hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]
                 dark:hover:border-[var(--accent-border)] dark:hover:text-[var(--accent)] dark:hover:bg-[var(--accent-dim)]
                 transition-all duration-200 cursor-default select-none"
    >
      {icon && <span className="opacity-70">{icon}</span>}
      {label}
    </span>
  );
};

const AboutMe = () => (
  <section id="about" className="min-h-screen px-6 py-16 flex justify-center">
    <div className="max-w-4xl w-full space-y-16">

      {/* ═══ Education ═══ */}
      <div>
        <Title>Education</Title>
        <div className="space-y-4">
          {education.map((item, i) => (
            <HideOnOutOfView key={i} delay={i * 80} direction="up">
              <Card className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-2.5 mt-0.5 shrink-0 rounded-lg
                                border border-zinc-200 dark:border-zinc-800
                                bg-zinc-50 dark:bg-zinc-900/60
                                text-zinc-400 dark:text-zinc-500">
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <SubTitle>{item.title}</SubTitle>
                    <span className="text-[9px] font-bold uppercase tracking-wider
                                     px-2 py-0.5 rounded
                                     border border-zinc-200 dark:border-zinc-800
                                     bg-white dark:bg-zinc-900/60
                                     text-zinc-500 dark:text-zinc-400 shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-500 mb-1">{item.institute}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2">{item.description}</p>
                  <div className="inline-flex items-center gap-1.5">
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500">{item.metric}:</span>
                    <span className="text-[12px] font-bold text-[var(--accent)]">{item.value}</span>
                  </div>
                </div>
              </Card>
            </HideOnOutOfView>
          ))}
        </div>
      </div>

      {/* ═══ Skills ═══ */}
      <div>
        <Title>Skills</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <HideOnOutOfView key={skill.title} delay={i * 80} direction="up">
              <Card>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                  {skill.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => <Tag key={item} label={item} />)}
                </div>
              </Card>
            </HideOnOutOfView>
          ))}
        </div>
      </div>

      {/* ═══ Achievements ═══ */}
      <div>
        <Title>Achievements</Title>
        <div className="space-y-4">
          {achievements.map((item, i) => (
            <HideOnOutOfView key={i} delay={i * 80} direction="up">
              <Card className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 shrink-0 rounded-lg
                                  border border-zinc-200 dark:border-zinc-800
                                  bg-zinc-50 dark:bg-zinc-900/60
                                  text-zinc-400 dark:text-zinc-500 text-base">
                    {item.icon}
                  </div>
                  <div>
                    <SubTitle>{item.title}</SubTitle>
                    <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">{item.text}</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider shrink-0
                                 px-2 py-0.5 rounded
                                 border border-zinc-200 dark:border-zinc-800
                                 bg-white dark:bg-zinc-900/60
                                 text-zinc-500 dark:text-zinc-400">
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

export default AboutMe;
