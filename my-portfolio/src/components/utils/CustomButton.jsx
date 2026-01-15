import React from 'react'

const CustomButton = ({children}) => {
  return (
    <>
    <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 
                             text-white font-semibold text-base
                             hover:from-blue-400 hover:to-blue-600 hover:scale-105 
                             transition-all duration-300 shadow-lg hover:shadow-blue-500/50" onClick={()=> scrollToSection({children})}>
              {children}
    </button>
    </>
  )
}

export default CustomButton