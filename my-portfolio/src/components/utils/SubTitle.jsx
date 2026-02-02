import React from 'react'

const SubTitle = ({children}) => {
  return (
    <>
    <span
  className="
    inline-block
    font-semibold text-2xl
    py-2
    bg-gradient-to-r from-violet-600 to-violet-400
    bg-clip-text text-transparent
    hover:cursor-pointer
    hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-600
    transition-all duration-500
  "
>
    {children}
</span>

    </>
  )
}

export default SubTitle 