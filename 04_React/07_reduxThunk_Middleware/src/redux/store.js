import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import counterSlice from './counterSlice';
import userSlice from './userSlice';


// Redux have there own middlewre which is called by default. Here i'm trying 
// to demonstrate a example to create a custome middleware hook.
const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        userState: userSlice.reducer,
    }
}, applyMiddleware(thunk));

export default store;