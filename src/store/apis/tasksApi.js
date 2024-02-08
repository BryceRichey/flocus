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
                            priority: task.name,
                        },
                    };
                },
                invalidatesTags: ['Tasks'],
            }),
            fetchTasks: builder.query({
                query: () => '/tasks',
                providesTags: ['Tasks'],
            }),
        };
    },
});

export const {
    useCreateTaskMutation,
    useFetchTasksQuery,
} = tasksApi;

export { tasksApi };