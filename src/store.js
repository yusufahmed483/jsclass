import { configureStore } from '@reduxjs/toolkit'


import counterSlice from './slice/counterSlice'
import  breadcrum  from './slice/breadcrum'

export default configureStore({
  reducer: {
    counter:counterSlice,
    bread:breadcrum
  },
})