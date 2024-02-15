import { createSlice, nanoid } from "@reduxjs/toolkit";

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
});

export const { createTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;