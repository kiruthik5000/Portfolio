import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const PersonInformation = () => {
  const icon_map = [
    { 
      icon: FaEnvelope, 
      value: "kiruthikvairam5000@gmail.com"
    },
    { 
      icon: FaPhone, 
      value: "+91 8056586308"
    },
    { 
      icon: FaLocationArrow, 
      value: "Tamil Nadu, India"
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      {icon_map.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-3 px-4 py-3 
                     bg-slate-800/30 backdrop-blur-sm rounded-xl 
                     border border-slate-700/50
                     hover:bg-slate-700/30 hover:scale-105 hover:border-blue-500/50
                     transition-all duration-300 cursor-pointer
                     overflow-hidden"
        >
          {/* Gradient border on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 rounded-xl
                        bg-blue-500/10" />
          
          {/* Icon with animation */}
          <item.icon className="w-5 h-5 text-slate-300 transition-all duration-300 relative z-10
                              group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-12" />
          
          {/* Text */}
          <span className="text-sm text-slate-300 group-hover:text-slate-100 
                         transition-colors relative z-10 font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PersonInformation;


