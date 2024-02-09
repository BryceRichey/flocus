import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changePriority } from "./slices/formSlice";
import { taskReducer, createTask } from "./slices/taskSlice";
import { tasksApi } from "./apis/tasksApi";

const store = configureStore({
    reducer: {
        // tasks: taskReducer,
        // form: formReducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(tasksApi.middleware);
    }
});

export {
    store,
    // changeName,
    // changePriority,
    // createTask
}

export * from "./thunks/fetchTasks";
export * from "./thunks/createTasks";

export {
    useCreateTaskMutation,
    useFetchTasksQuery,
    useUpdateTaskMutation,
    useFetchTaskQuery,
    useDeleteTaskMutation,
} from './apis/tasksApi';