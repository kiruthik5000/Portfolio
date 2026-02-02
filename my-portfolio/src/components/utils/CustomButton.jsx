import React, { useState } from 'react';

const CustomButton = ({ children, variant = "primary", onClick }) => {
  const [ripples, setRipples] = useState([]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (e) => {
    // Create ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 600);

    // Handle navigation
    if (onClick) {
      onClick();
    } else {
      scrollToSection(children);
    }
  };

  const baseClasses = `
    relative px-8 py-3 rounded-xl font-semibold text-base overflow-hidden
    transition-all duration-300 shadow-lg group
  `;

  const variantClasses = variant === "primary" 
    ? `bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600
       hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500
       text-white hover:shadow-cyan-500/50 hover:scale-105`
    : `bg-slate-800/60 border-2 border-slate-700 text-slate-200
       hover:border-cyan-400 hover:text-cyan-400 hover:shadow-cyan-500/30 hover:scale-105`;

  return (
    <button 
      className={`${baseClasses} ${variantClasses}`}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000 bg-gradient-to-r 
                    from-transparent via-white/20 to-transparent" />
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </button>
  );
};

export default CustomButton;
