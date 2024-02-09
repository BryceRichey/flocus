import { createSlice } from "@reduxjs/toolkit";

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
});

export const { changeName, changePriority } = formSlice.actions;

export const formReducer = formSlice.reducer;