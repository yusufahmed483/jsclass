import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h2 className={`text[45px] font-dm font-bold text-[#262626]  ${className}`}>{text}</h2>
  )
}

export default Subheading