import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import usersReducer from "./userSlice";


const store = configureStore({
    reducer: {
        loaders: loaderSlice,
        users: usersReducer
    },
});


export default store;