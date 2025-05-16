import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slice/counerSlise'

export default configureStore({
  reducer: {
    counter:counterSlice
  },
})