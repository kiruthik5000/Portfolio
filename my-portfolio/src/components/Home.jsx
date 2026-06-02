import React from "react";
import Icons from "./Icons";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ── Marquee tags ── */
const tags = [
  "Full-Stack Developer",
  "ML Enthusiast",
  "Problem Solver",
  "Open Source",
  "Systems Thinker",
  "Team Player",
  "Fast Learner",
  "Creative Coder",
];

const Home = () => (
  <section
    id="home"
    style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}
  >
    {/* ── Main content row ── */}
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "clamp(24px, 6vw, 96px)",
        paddingRight: "clamp(24px, 6vw, 48px)",
        position: "relative",
      }}
    >
      {/* ── LEFT: Text content ── */}
      <div
        className="hero-text-col"
        style={{
          flex: "0 0 auto",
          width: "min(750px, 100%)",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* Status badge */}
        <div
          className="hero-1"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "9999px",
            border: "1px solid var(--accent-border)",
            backgroundColor: "var(--accent-dim)",
            color: "var(--accent)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--green)",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Available for work
        </div>

        {/* Big Heading */}
        <h1
          className="hero-2"
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--text)",
            marginBottom: "20px",
          }}
        >
          Hi, I'm{" "}
          <span style={{ color: "var(--text)", display: "block" }}>
            Kiruthik Vairavel
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </h1>

        {/* Role line */}
        <p
          className="hero-3"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "20px",
          }}
        >
          Full-Stack Developer &nbsp;·&nbsp; ML Enthusiast
        </p>

        {/* Bio */}
        <p
          className="hero-4"
          style={{
            fontSize: "14.5px",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: "460px",
            marginBottom: "32px",
          }}
        >
          B.Tech IT student at{" "}
          <strong style={{ color: "var(--text)", fontWeight: 700 }}>SKCET, Coimbatore</strong>.{" "}
          Building clean, intelligent systems that combine{" "}
          <strong style={{ color: "var(--text)", fontWeight: 700 }}>
            full-stack engineering with machine learning
          </strong>{" "}
          to solve real problems.
          {/* <strong style={{ color: "var(--accent)", fontWeight: 700 }}>8.41</strong>. */}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-5"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "none",
              fontSize: "12px",
              fontWeight: 700,
              backgroundColor: "var(--text)",
              color: "var(--bg)",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Projects <FiArrowRight size={13} />
          </button>

          <a
            href="/resume.pdf"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              fontSize: "12px",
              fontWeight: 700,
              backgroundColor: "transparent",
              color: "var(--text-secondary)",
              cursor: "pointer",
              fontFamily: "inherit",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--text-muted)";
              e.currentTarget.style.color = "var(--text)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <FiDownload size={13} /> Resume
          </a>
        </div>

        {/* Social icons */}
        <div className="hero-6">
          <Icons />
        </div>
      </div>

      {/* ── RIGHT: Full-height photo cutout ── */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          top: 0,
          width: "clamp(320px, 50%, 600px)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <img
          src="/profile-photo.png"
          alt="Kiruthik Vairavel"
          className="hero-img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            userSelect: "none",
          }}
        />
      </div>
    </div>

    {/* ── MARQUEE TICKER ── */}
    <div
      style={{
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        padding: "14px 0",
        backgroundColor: "var(--bg)",
        position: "relative",
        zIndex: 3,
      }}
    >
      <div
        style={{
          display: "flex",
          animation: "marqueeScroll 22s linear infinite",
          width: "max-content",
          whiteSpace: "nowrap",
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...tags, ...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "14px",
              padding: "0 20px",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {tag}
            <span style={{ color: "var(--accent)", fontSize: "14px" }}>✦</span>
          </span>
        ))}
      </div>
    </div>

    {/* ── Marquee keyframe ── */}
    <style>{`
      @keyframes marqueeScroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-33.333%); }
      }
    `}</style>
  </section>
);

export default Home;
