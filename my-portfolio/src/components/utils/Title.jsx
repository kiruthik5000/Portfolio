import React from "react";

const Title = ({ children }) => {
  return (
    <div className="inline-block w-fit">
      <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-5xl font-bold">
        {children}
      </span>
      {/* Gradient Underline */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-400 rounded-full mt-2"></div>
    </div>
  );
};

export default Title;
