import { useEffect } from "react";
import { useFetchTasksQuery } from "../store/store.js";
import { fetchTasks } from "../store/store.js";
import { useThunk } from "../hooks/useThunk.js";
import TaskListItem from "./TaskListItem.jsx";

export default function TaskList() {
    const [doFetchTasks] = useThunk(fetchTasks);

    useEffect(() => {
        doFetchTasks();
    }, [doFetchTasks]);

    // const {
    //     data: tasks,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useFetchTasksQuery();

    // let content;

    // if (isLoading) {
    //     content = <div>Loading</div>
    // } else if (isError) {
    //     content = <div>{error.toString()}</div>
    // } else if (isSuccess) {
    //     content = tasks.map(task => {
    //         return <TaskListItem key={task.id} task={task} />
    //     });
    // }

    return (
        <>
            <div className="flex space-x-4">
                {/* {content} */}
            </div>
        </>
    );
}