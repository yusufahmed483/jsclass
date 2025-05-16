import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import React, { useState } from 'react'
import { decrement, increment } from '../slice/counterSlice'

const Shop = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.counter.value)

  let handleIncrement= () => {
    dispatch(increment(1))
  }
  let handleDecrement= () => {
    dispatch(decrement(1))
  }

  return (
    <Container>
  <button onClick={handleIncrement}>increament</button>
  <button onClick={handleDecrement}>decreament</button>
  <h1>{data}</h1>
    </Container>
  )
}

export default Shop
