import { createSlice } from '@reduxjs/toolkit'

export const breadcrum = createSlice({
  name: 'bread',
  initialState: {
    prevvalue:null,
    presentvalue:null,
  },
  reducers: {
    breadbutton: (state,action) => {
        
        state.prevvalue=state.presentvalue
        state.presentvalue=action.payload
     
    },

    
  },
})

// Action creators are generated for each case reducer function
export const { breadbutton } = breadcrum.actions

export default breadcrum.reducer