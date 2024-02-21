import { createSlice } from "@reduxjs/toolkit";
import { fetchTask } from "../store.js";

const taskEditSlice = createSlice({
    name: 'taskEdit',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTask.pending, (state, _action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const taskEditReducer = taskEditSlice.reducer;