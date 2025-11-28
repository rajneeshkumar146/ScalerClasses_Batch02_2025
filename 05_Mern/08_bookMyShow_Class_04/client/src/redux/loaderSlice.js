import { createSlice } from "@reduxjs/toolkit";


const loaderSlice = createSlice({
    name: "loaders", // Name of slice
    initialState: {
        loading: false, // Intial Value
    },
    reducers: {
        ShowLoading: (state) => {
            state.loading = true;
        },
        HideLoading: (state) => {
            state.loading = false;
        }
    }
});


export const { ShowLoading, HideLoading } = loaderSlice.actions;
export default loaderSlice.reducer;