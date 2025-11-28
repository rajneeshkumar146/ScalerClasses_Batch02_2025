import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "users", // Name of slice
    initialState: {
        user: null,
    },
    reducers: {
        SetUser: (state, actions) => {
            state.user = actions.payload;
        }
    }
});

export const { SetUser} = userSlice.actions;
export default userSlice.reducer;