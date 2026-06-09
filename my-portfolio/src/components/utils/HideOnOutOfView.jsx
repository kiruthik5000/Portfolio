import { motion, useReducedMotion } from "framer-motion";

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
  once = true, // default to true for modern feel
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { x, y, scale } = DIRECTION_MAP[direction] ?? DIRECTION_MAP.up;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: shouldReduceMotion ? 0 : x, 
        y: shouldReduceMotion ? 0 : y, 
        scale: shouldReduceMotion ? 1 : scale,
        filter: shouldReduceMotion ? "none" : "blur(4px)" 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1,
        filter: "blur(0px)"
      }}
      viewport={{ once, margin: "-48px" }}
      transition={{ 
        duration: duration / 1000, 
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HideOnOutOfView;
