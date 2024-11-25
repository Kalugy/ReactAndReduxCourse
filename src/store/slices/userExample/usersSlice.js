import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "../../thunks/fetchUsers";
import { createNewUser } from "../../thunks/postUsers";
import { removeUsers } from "../../thunks/removeUsers";

const usersSlice = createSlice({
    name: 'usercourse',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action ) => {
            state.isLoading = false
            state.error = action.error
        });
        
        builder.addCase(createNewUser.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(createNewUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.data.push(action.payload)
        });
        builder.addCase(createNewUser.rejected, (state, action ) => {
            state.isLoading = false
            state.error = action.error
        });

        
        builder.addCase(removeUsers.pending, (state, action ) => {
            state.isLoading = true
        })
        builder.addCase(removeUsers.fulfilled, (state, action ) => {
            state.isLoading = false
            state.data = state.data.filter(data => data.id != action.payload.id)
            
        })
        builder.addCase(removeUsers.rejected, (state, action ) => {
            state.isLoading = false
            state.error = action.error
        })
        
    }
})

export const usersReducer = usersSlice.reducer