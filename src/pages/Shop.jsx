import Container from '../components/Container'
import React, { useState } from 'react'

const Shop = () => {
  let[count,setCount]=useState(0)
  let handleIncrement= () => {
    setCount(count+10)
  }

  return (
    <Container>
  <button onClick={handleIncrement}>increament</button>
  <h1>{count}</h1>
    </Container>
  )
}

export default Shop
