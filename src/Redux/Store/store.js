import { configureStore } from "@reduxjs/toolkit";
import blogslice from '../Slice/blogslice'



export default configureStore({
    reducer:{
        blog:blogslice
    }
})