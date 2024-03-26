import { createSlice } from "@reduxjs/toolkit";

 const movieSlice= createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        trailorVideo:null
    },
    reducers:{
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        addTrailorVideo:(state,action)=>{
            state.trailorVideo =action.payload;
        }
    }
})
export default movieSlice.reducer;

export const {addNowPlayingMovie,addTrailorVideo}=movieSlice.actions