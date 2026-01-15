import React from 'react'

const SubTitle = ({children}) => {
  return (
    <>
    <span className="font-semibold bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
        {children}
    </span>
    </>
  )
}

export default SubTitle