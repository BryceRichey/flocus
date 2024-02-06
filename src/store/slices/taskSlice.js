import { createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: [],
    },
    reducers: {
        createTask(state, action) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                priority: action.payload.priority,
            });
        },
    },
});

export const { createTask } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;