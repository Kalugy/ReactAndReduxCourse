import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usercourse',
    initialState: {
        data: []
    },
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        }
    }
})

export const { addUser } = usersSlice.actions
export const usersReducer = usersSlice.reducer