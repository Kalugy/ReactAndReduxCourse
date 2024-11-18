
import { createSlice } from "@reduxjs/toolkit"

import { resetAll } from "../action"

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload)
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        reset(state, action){
            return []
        },
    },
    extraReducers(builder){
        builder.addCase(resetAll, (state, action)=>{
            return []
        })
    }

})

export const { addMovie, removeMovie, reset } = moviesSlice.actions;
//export default moviesSlice.reducer;
export const moviesReducer = moviesSlice.reducer;