import { createSlice } from "@reduxjs/toolkit";


const carsSlices = createSlice({
    name:'car2',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addNewCar(state, action){
            state.cars.push(action.payload)
        },
        removeNewCar(state, action){
            const newState= state.cars.filter((car) => car.id != action.payload )
            state.cars = newState
        }
    }

})

export const { addNewCar, removeNewCar, changeSearchTerm } = carsSlices.actions
export const car2Reducer = carsSlices.reducer