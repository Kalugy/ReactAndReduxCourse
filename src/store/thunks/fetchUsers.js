import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("http://localhost:3000/users");
    //dev delay n sec
    await pause(1000)
    return response.data
})

//dev
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve , duration)
    })
}



export { fetchUsers }