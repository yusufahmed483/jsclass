import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-sm text-[#262626] font-normal font-dm list-none hover:text-[#6D6D6D] hover:font-bold cursor-pointer ${className}`}>{text}</li>
        
    
  )
}

export default List