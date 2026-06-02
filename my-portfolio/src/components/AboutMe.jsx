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
  SiIntellijidea,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

/* ── Skill icon map ── */
const SKILL_ICONS = {
  "Python":                <SiPython      size={15} />,
  "Java":                  <SiOpenjdk     size={15} />,
  "JavaScript":            <SiJavascript  size={15} />,
  "React":                 <SiReact       size={15} />,
  "Tailwind CSS":          <SiTailwindcss size={15} />,
  "TensorFlow":            <SiTensorflow  size={15} />,
  "Scikit-learn":          <SiScikitlearn size={15} />,
  "Spring Boot":           <SiSpring      size={15} />,
  "MySQL":                 <SiMysql       size={15} />,
  "Git & GitHub":          <SiGit         size={15} />,
  "Linux":                 <SiLinux       size={15} />,
  "Selenium":              <SiSelenium    size={15} />,
  "Kaggle":                <SiKaggle      size={15} />,
  "VS Code":               <VscCode       size={15} />,
  "Intelij":               <SiIntellijidea size={15}/>
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
    value: "8.46",
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
    items: ["Git & GitHub", "Linux", "MySQL", "Selenium", "Kaggle", "VS Code", "Intelij"],
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
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                transition-all duration-300
                card-shimmer
                ${className}`}
  >
    {children}
  </div>
);

/* ── Skill tag ── */
const Tag = ({ label, delay = 0 }) => {
  const icon = SKILL_ICONS[label];
  return (
    <HideOnOutOfView delay={delay} direction="up" duration={500}>
      <span
        className="flex items-center gap-1.5 px-3 py-1.5 text-[14px] font-semibold rounded-md
                   border border-zinc-200 dark:border-zinc-800
                   bg-white dark:bg-zinc-900/50
                   text-zinc-600 dark:text-zinc-400
                   hover:border-[var(--accent-border)] hover:text-[var(--accent)] hover:bg-[var(--accent-dim)]
                   dark:hover:border-[var(--accent-border)] dark:hover:text-[var(--accent)] dark:hover:bg-[var(--accent-dim)]
                   hover:scale-105
                   transition-all duration-200 cursor-default select-none"
      >
        {icon && <span className="opacity-70">{icon}</span>}
        {label}
      </span>
    </HideOnOutOfView>
  );
};

const AboutMe = () => (
  <section id="about" className="min-h-screen px-8 py-20 flex justify-center">
    <div className="max-w-6xl w-full space-y-16">

      {/* ═══ Education ═══ */}
      <div>
        <HideOnOutOfView direction="up" duration={700}>
          <Title>Education</Title>
        </HideOnOutOfView>
        <div className="space-y-4">
          {education.map((item, i) => (
            <HideOnOutOfView key={i} delay={i * 120} direction="left" duration={800}>
              <Card className="flex items-start gap-4">
                {/* Icon */}
                <HideOnOutOfView delay={i * 120 + 200} direction="fade" duration={500}>
                  <div className="p-3 mt-0.5 shrink-0 rounded-lg
                                  border border-zinc-200 dark:border-zinc-800
                                  bg-zinc-50 dark:bg-zinc-900/60
                                  text-zinc-400 dark:text-zinc-500
                                  transition-transform duration-300 hover:scale-110">
                    {item.icon}
                  </div>
                </HideOnOutOfView>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <SubTitle>{item.title}</SubTitle>
                    <HideOnOutOfView delay={i * 120 + 300} direction="right" duration={500}>
                      <span className="text-[13px] font-bold uppercase tracking-wider
                                       px-2.5 py-1 rounded
                                       border border-zinc-200 dark:border-zinc-800
                                       bg-white dark:bg-zinc-900/60
                                       text-zinc-500 dark:text-zinc-400 shrink-0">
                        {item.period}
                      </span>
                    </HideOnOutOfView>
                  </div>
                  <HideOnOutOfView delay={i * 120 + 150} direction="up" duration={600}>
                    <p className="text-[15px] font-semibold text-zinc-500 dark:text-zinc-500 mb-1">{item.institute}</p>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2">{item.description}</p>
                    <div className="inline-flex items-center gap-1.5">
                      <span className="text-[14px] text-zinc-400 dark:text-zinc-500">{item.metric}:</span>
                      <span className="text-[17px] font-bold text-[var(--accent)]">{item.value}</span>
                    </div>
                  </HideOnOutOfView>
                </div>
              </Card>
            </HideOnOutOfView>
          ))}
        </div>
      </div>

      {/* ═══ Skills ═══ */}
      <div>
        <HideOnOutOfView direction="up" duration={700}>
          <Title>Skills</Title>
        </HideOnOutOfView>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <HideOnOutOfView key={skill.title} delay={i * 100} direction="up" duration={750}>
              <Card>
                <HideOnOutOfView delay={i * 100 + 100} direction="fade" duration={400}>
                  <p className="text-[13px] font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-3">
                    {skill.title}
                  </p>
                </HideOnOutOfView>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <Tag key={item} label={item} delay={i * 100 + j * 60 + 150} />
                  ))}
                </div>
              </Card>
            </HideOnOutOfView>
          ))}
        </div>
      </div>

      {/* ═══ Achievements ═══ */}
      <div>
        <HideOnOutOfView direction="up" duration={700}>
          <Title>Achievements</Title>
        </HideOnOutOfView>
        <div className="space-y-4">
          {achievements.map((item, i) => (
            <HideOnOutOfView key={i} delay={i * 120} direction="right" duration={800}>
              <Card className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <HideOnOutOfView delay={i * 120 + 200} direction="zoom" duration={500}>
                    <div className="p-2.5 shrink-0 rounded-lg
                                    border border-zinc-200 dark:border-zinc-800
                                    bg-zinc-50 dark:bg-zinc-900/60
                                    text-zinc-400 dark:text-zinc-500 text-base
                                    transition-transform duration-300 hover:scale-110 hover:text-[var(--accent)]">
                      {item.icon}
                    </div>
                  </HideOnOutOfView>
                  <HideOnOutOfView delay={i * 120 + 100} direction="up" duration={650}>
                    <div>
                      <SubTitle>{item.title}</SubTitle>
                      <p className="mt-1 text-[15px] text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">{item.text}</p>
                    </div>
                  </HideOnOutOfView>
                </div>
                <HideOnOutOfView delay={i * 120 + 300} direction="left" duration={500}>
                  <span className="text-[13px] font-bold uppercase tracking-wider shrink-0
                                   px-2.5 py-1 rounded
                                   border border-zinc-200 dark:border-zinc-800
                                   bg-white dark:bg-zinc-900/60
                                   text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </HideOnOutOfView>
              </Card>
            </HideOnOutOfView>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default AboutMe;
