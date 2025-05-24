import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  let data = useSelector((state)=>state.bread.prevvalue)
  return (
    <div>
        <p>{data} > about</p>

    </div>
  )
}

export default About