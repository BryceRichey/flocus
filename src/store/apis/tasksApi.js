import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nanoid } from "@reduxjs/toolkit";

const tasksApi = createApi({
    reducerPath: 'tasks',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints(builder) {
        return {
            createTask: builder.mutation({
                query: (task) => {
                    return {
                        url: '/tasks',
                        method: 'POST',
                        body: {
                            id: nanoid(),
                            name: task.name,
                            tags: task.tags,
                            description: task.description,
                            date: task.date,
                            time: task.time,
                            priority: task.priority,
                        },
                    };
                },
                invalidatesTags: ['Tasks'],
            }),
            fetchTasks: builder.query({
                query: () => '/tasks',
                providesTags: ['Tasks'],
            }),
            updateTask: builder.mutation({
                query: (task) => {
                    return {
                        url: `/tasks/${task.id}`,
                        method: "PATCH",
                        body: {
                            name: task.name,
                            tags: task.tags,
                            description: task.description,
                            date: task.date,
                            time: task.time,
                            priority: task.priority,
                        },
                    };
                },
                invalidatesTags: ['Tasks'],
            }),
            fetchTask: builder.query({
                query: (taskId) => `/tasks/${taskId}`
            }),
            deleteTask: builder.mutation({
                query: (taskId) => {
                    return {
                        url: `/tasks/${taskId}`,
                        method: "DELETE",
                    };
                },
                invalidatesTags: ['Tasks'],
            }),
        };
    },
});

export const {
    useCreateTaskMutation,
    useFetchTasksQuery,
    useUpdateTaskMutation,
    useFetchTaskQuery,
    useDeleteTaskMutation,
} = tasksApi;

export { tasksApi };