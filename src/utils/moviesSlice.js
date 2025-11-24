import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMoviesState: null,
        trailerVideo:null,
    },
    reducers:{
        NowPlayingCategory: (state,action)=>{
            state.nowPlayingMoviesState = action.payload;
        },
        TrailerVideoPlaying : (state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
})


export const {NowPlayingCategory, TrailerVideoPlaying} = moviesSlice.actions;
export default moviesSlice.reducer;