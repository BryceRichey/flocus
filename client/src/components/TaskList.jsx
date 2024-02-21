import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../store/store.js";
import TaskListItem from "./TaskListItem.jsx";

export default function TaskList() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <div>Loading</div>
    } else if (error) {
        content = <div>{error.toString()}</div>
    } else if (data) {
        content = data.map(task => {
            return <TaskListItem key={task.task_id} task={task} />
        });
    }

    return (
        <>
            <div className="flex space-x-4">
                {content}
            </div>
        </>
    );
}