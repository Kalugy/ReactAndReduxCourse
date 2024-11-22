import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        album: []
    },
    reducers: {
        createUser(state, action){
            state.user.push(action.payload)
        },
        setUser(state,action){
            state.user = action.payload
        },
        createAlbum(state,action){
            state.album = action.payload
        },
        setAlbum(state,action){
            state.album = action.payload
        },
    }
})

export const { createUser, setUser, createAlbum, setAlbum } = UsersSlice.actions
export const userReducer = UsersSlice.reducer