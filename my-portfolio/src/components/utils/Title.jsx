import React from "react";


const Title = ({children}) => {
  return (
    <>
    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{children}</span>
    </>
  );
};

export default Title;
