import { useEffect, useRef, useState } from "react";

const HideOnOutOfView = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // visible when 10% appears
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default HideOnOutOfView;
