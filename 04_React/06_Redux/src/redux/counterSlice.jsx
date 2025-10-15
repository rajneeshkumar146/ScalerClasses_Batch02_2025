import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: "counterName",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            // console.log("Hi I'm in Increment: ", state.count);
            state.count += 1;
        },
        decrement: (state) => {
            // console.log("Hi I'm in Decrement: ", state.count);
            state.count -= 1;
        },
    }
});



export default counterSlice
