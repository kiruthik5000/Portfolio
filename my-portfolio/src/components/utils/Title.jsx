import React, { useEffect, useRef, useState } from "react";

const Title = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className="inline-flex flex-col gap-2 mb-8">
      <h2
        className={`text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50
                    transition-all duration-700
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        style={{ transitionTimingFunction: "var(--ease)" }}
      >
        {children}
      </h2>
      {/* Expanding underline */}
      <div
        className="h-[1.5px] bg-zinc-200 dark:bg-zinc-800 rounded-full transition-all duration-700"
        style={{
          width: visible ? "100%" : "0%",
          transitionTimingFunction: "var(--ease)",
        }}
      />
    </div>
  );
};

export default Title;
