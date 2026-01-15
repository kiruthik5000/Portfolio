import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

const PersonInformation = () => {
  const icon_css =
    "w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-300";

  const icon_map = [
    { icon: FaEnvelope, value: "kiruthikvairam5000@gmail.com" },
    { icon: FaPhone, value: "+91 8056586308" },
    { icon: FaLocationArrow, value: "Tamil Nadu, India" },
  ];

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      {icon_map.map((item, index) => (
        <div
          key={index}
          className="group flex items-center gap-3 px-4 py-3 
                     bg-slate-800/30 backdrop-blur-sm rounded-xl 
                     border border-slate-700/50
                     hover:bg-slate-700/30 hover:border-blue-500/50 hover:scale-105
                     transition-all duration-300 cursor-pointer"
        >
          <item.icon className={icon_css} />
          <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PersonInformation;
