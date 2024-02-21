import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice.js";
import { taskEditReducer } from "./slices/taskEditSlice.js";
// import { tasksApi } from "./apis/tasksApi.js";

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        taskEdit: taskEditReducer,
        // [tasksApi.reducerPath]: tasksApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware()
    //         .concat(tasksApi.middleware);
    // }
});

export {
    store,
}

export * from './thunks/tasks/fetchTasks.js';
export * from './thunks/tasks/fetchTask.js';
export * from './thunks/tasks/postTask.js';
export * from './thunks/tasks/updateTask.js'
export * from './thunks/tasks/deleteTask.js';

export {
    // useCreateTaskMutation,
    // useFetchTasksQuery,
    // useUpdateTaskMutation,
    // useFetchTaskQuery,
    // useDeleteTaskMutation,
} from './apis/tasksApi.js';