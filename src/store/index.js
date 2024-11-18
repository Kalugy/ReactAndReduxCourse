import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";
import { moviesReducer, addMovie, removeMovie, reset } from "./slices/MoviesSlice";
import { addCar, carsReducer, removeCar } from "./slices/CarsSlice";
import { resetAll } from "./action";

const store = configureStore({
    reducer:{
        songs: songsReducer,
        movies: moviesReducer,
        cars: carsReducer
    }
})


// const startingState = store.getState()
// console.log(startingState)
// console.log(store)
export { store }
export { addSong, removeSong, addMovie, removeMovie, reset}
export { addCar, removeCar }
export { resetAll }