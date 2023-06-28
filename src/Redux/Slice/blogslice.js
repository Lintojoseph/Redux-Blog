import { createSlice } from "@reduxjs/toolkit";




const blogslice=createSlice({
    name:'blog',
    initialState:{
        blogs:[]
    },
    reducers:{
        addblog:(state,action)=>{
            state.blogs.push(action.payload)

        }
    }
})

export const {addblog}=blogslice.actions
export default blogslice.reducer