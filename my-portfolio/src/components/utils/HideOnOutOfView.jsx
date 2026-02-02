import { useEffect, useRef, useState } from "react";

const HideOnOutOfView = ({ children, className = "", delay = 0 }) => {
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
        threshold: 0.15, // Trigger when 15% is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-8 scale-95"
        }
        ${className}
      `}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {children}
    </div>
  );
};

export default HideOnOutOfView;

