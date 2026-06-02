import { useEffect, useRef, useState } from "react";

const DIRECTION_MAP = {
  up:    { x: 0,   y: 32,  scale: 0.94 },
  down:  { x: 0,   y: -32, scale: 0.94 },
  left:  { x: 40,  y: 0,   scale: 0.94 },
  right: { x: -40, y: 0,   scale: 0.94 },
  fade:  { x: 0,   y: 0,   scale: 0.96 },
  zoom:  { x: 0,   y: 0,   scale: 0.88 },
};

const HideOnOutOfView = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 750,
  once = false, // set true to animate only once
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timerRef.current);
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => setIsVisible(true), delay);
        } else {
          // reset so it re-animates next time it scrolls into view
          if (!once) setIsVisible(false);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      clearTimeout(timerRef.current);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay, once]);

  const { x, y, scale } = DIRECTION_MAP[direction] ?? DIRECTION_MAP.up;

  const hidden = {
    opacity: 0,
    transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
    filter: "blur(4px)",
    willChange: "opacity, transform, filter",
    transition: "none",
  };

  const visible = {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
    filter: "blur(0px)",
    willChange: "auto",
    transition: `
      opacity   ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
      transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms,
      filter    ${duration * 0.8}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms
    `,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? visible : hidden}
    >
      {children}
    </div>
  );
};

export default HideOnOutOfView;
