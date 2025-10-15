import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todoBox",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        setValue: (state, componentInfoObj) => {
            // console.log("SetValue: ",componentInfoObj);
            state.value = componentInfoObj.payload;

        },
        addTask: (state,componentInfoObj) => {
            // console.log("addTask: ",componentInfoObj);
            const newTask = componentInfoObj.payload;
            state.todoList.push(newTask);
            state.value = "";
        },
    }
});



export default todoSlice
