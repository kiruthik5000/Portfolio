import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const PersonInformation = () => {
  const icon_map = [
    {
      icon: FaEnvelope,
      value: "kiruthikvairam5000@gmail.com",
    },
    {
      icon: FaPhone,
      value: "+91 8056586308",
    },
    {
      icon: FaLocationArrow,
      value: "Tamil Nadu, India",
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-md">
      {icon_map.map((item, index) => (
        <div
          key={index}
          className="group relative flex items-center gap-3 px-4 py-2.5
                     bg-slate-800/30 backdrop-blur-sm rounded-xl
                     border border-slate-700/30
                     hover:bg-slate-700/20 hover:border-blue-500/30
                     transition-all duration-300 cursor-pointer
                     overflow-hidden"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Subtle hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 rounded-xl
                        bg-gradient-to-r from-blue-500/5 to-transparent" />

          {/* Icon */}
          <item.icon className="w-4 h-4 text-slate-500 transition-all duration-300 relative z-10
                              group-hover:text-blue-400" />

          {/* Text */}
          <span className="text-sm text-slate-400 group-hover:text-slate-200
                         transition-colors duration-300 relative z-10 font-medium">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PersonInformation;
