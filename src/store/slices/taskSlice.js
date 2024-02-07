import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchTasks } from "../thunks/fetchTasks";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        isLoading: false,
        tasks: [],
        error: null,
    },
    reducers: {
        createTask(state, action) {
            state.tasks.push({
                name: action.payload.name,
                priority: action.payload.priority,
                id: nanoid(),
            });
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state, _action) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { createTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;