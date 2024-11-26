import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";
import { moviesReducer, addMovie, removeMovie, reset } from "./slices/MoviesSlice";
import { addCar, carsReducer, removeCar } from "./slices/CarsSlice";
import { car2Reducer, addNewCar, removeNewCar, changeSearchTerm } from "./slices/carExample/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/carExample/formSlice";
import { resetAll } from "./action";
import { createUser, userReducer, setUser, createAlbum, setAlbum } from "./slices/UserSlice";
import { usersReducer } from "./slices/userExample/UsersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photoApi } from "./apis/photosApi";

const store = configureStore({
    reducer:{
        songs: songsReducer,
        movies: moviesReducer,
        cars: carsReducer,
        cars2: car2Reducer,
        form: formReducer,
        users: userReducer,
        usersexample: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photoApi.middleware)
    }
})

setupListeners(store.dispatch)

//test
//window.store = store

// const startingState = store.getState()
// console.log(startingState)
// console.log(store)
export { store }
export { addSong, removeSong, addMovie, removeMovie, reset}
export { addCar, removeCar }
export { addNewCar, removeNewCar, changeSearchTerm }
export { changeName, changeCost }
export { resetAll }
export { createUser , setUser, createAlbum, setAlbum}
export * from './thunks/fetchUsers'
export * from './thunks/postUsers'
export * from './thunks/removeUsers'
export {
    useFetchPhotoQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation
} from "./apis/photosApi"
export { useFetchAlbumsQuery, useAddAlbumsMutation, useRemoveAlbumsMutation } from "./apis/albumsApi"
