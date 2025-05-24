import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
   let data = useSelector((state)=>state.bread.prevvalue)
  return (
    <div>
      <p>{data } > Contact</p>
    </div>
  )
}

export default Contact