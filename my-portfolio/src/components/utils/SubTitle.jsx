import React from 'react'

const SubTitle = ({ children }) => {
  return (
    <span
      className="
        inline-block
        font-semibold text-2xl
        py-1
        bg-gradient-to-r from-blue-400 to-violet-400
        bg-clip-text text-transparent
      "
    >
      {children}
    </span>
  )
}

export default SubTitle