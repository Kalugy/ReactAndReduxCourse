import { createSlice } from "@reduxjs/toolkit"


const carsSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        addCar(state, action){
            state.push(action.payload)
        },
        removeCar(state, action){
            // const index = state.indexOf(action.payload)
            // state.splice(index, 1)
            //const newState = state.filter((car) => car.id != action.payload)
            return state.filter((car)=> car.id !== action.payload )
        }
    },
})


export const { addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;