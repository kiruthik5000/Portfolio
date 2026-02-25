import { useEffect, useRef, useState } from "react";

const HideOnOutOfView = ({ children, className = "", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const directionClasses = {
    up: isVisible ? "translate-y-0" : "translate-y-6",
    down: isVisible ? "translate-y-0" : "-translate-y-6",
    left: isVisible ? "translate-x-0" : "-translate-x-6",
    right: isVisible ? "translate-x-0" : "translate-x-6",
    fade: "", // no translate, just opacity
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${directionClasses[direction] || directionClasses.up}
        ${className}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default HideOnOutOfView;
