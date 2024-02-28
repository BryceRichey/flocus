import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../thunks/tasks/fetchTasks.js";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTasks.pending, (state, _action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const taskReducer = taskSlice.reducer;