import { createSlice } from "@reduxjs/toolkit";
// import { createTask } from "./taskSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        priority: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changePriority(state, action) {
            state.priority = action.payload;
        }
    },
    // extraReducers(builder) {
    //     builder
    //         .addCase(createTask, (state, _action) => {
    //             state.name = '';
    //             state.priority = 0;
    //         });
    // }
});

export const { changeName, changePriority } = formSlice.actions;

export const formReducer = formSlice.reducer;