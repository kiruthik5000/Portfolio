import React, { useEffect, useRef, useState } from "react";

const Title = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className="inline-block w-fit mb-2">
      <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent text-5xl font-bold">
        {children}
      </span>
      {/* Animated expanding underline */}
      <div
        className="h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-400 rounded-full mt-2 transition-all duration-700 ease-out"
        style={{
          width: visible ? '100%' : '0%',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
};

export default Title;
