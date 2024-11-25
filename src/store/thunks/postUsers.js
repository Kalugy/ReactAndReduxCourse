import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker"

const createNewUser = createAsyncThunk('users/add',async ()=>{
    const response = await axios.post('http://localhost:3000/users', {
        name: faker.name.fullName()
    })
    await pause(1000)
    return response.data
})

const pause = (timer) => {
    return new Promise((resolve) =>{ 
        setInterval(resolve, timer)
    })
}

export { createNewUser }