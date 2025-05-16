import React from 'react'

const button = ({text,className}) => {
  return (
    <button className={`text-sm text-white font-dm font-bold bg-black py-4 px-16 border border-transparent hover:bg-transparent hover:text-black
       hover:border-black duration-500 ${className}`}>{text}</button>
  )
}

export default button