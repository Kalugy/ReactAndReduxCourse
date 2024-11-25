import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUsers = createAsyncThunk('user/delete', async (user)=>{
    await axios.delete('http://localhost:3000/users/' + user.id)
    console.log('user',user)
    return user
})


export { removeUsers };