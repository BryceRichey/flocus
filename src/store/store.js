import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changePriority } from "./slices/formSlice";
import { taskReducer, createTask } from "./slices/taskSlice";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        form: formReducer,
    },
});

export {
    store,
    changeName,
    changePriority,
    createTask
}

export * from "./thunks/fetchTasks";
export * from "./thunks/createTasks";