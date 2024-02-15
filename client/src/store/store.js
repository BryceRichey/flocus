import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "./apis/tasksApi.js";

const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(tasksApi.middleware);
    }
});

export {
    store,
}

export * from './thunks/tasksThunk.js';

export {
    useCreateTaskMutation,
    useFetchTasksQuery,
    useUpdateTaskMutation,
    useFetchTaskQuery,
    useDeleteTaskMutation,
} from './apis/tasksApi.js';