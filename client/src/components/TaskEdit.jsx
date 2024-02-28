import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTask } from "../store/store.js";
import TaskEditItem from "./TaskEditItem.jsx";

export default function TaskEdit() {
    const dispatch = useDispatch();
    const { taskId } = useParams();
    const { data, isLoading, error } = useSelector(state => state.taskEdit);

    useEffect(() => {
        dispatch(fetchTask(taskId));
    }, [dispatch, taskId]);

    let content;

    if (isLoading) {
        content = <div>Loading</div>
    } else if (error) {
        content = <div>{error.toString()}</div>
    } else if (data?.[0]) {
        content = <TaskEditItem task={data[0]} />
    } else {
        content = <div>No task found with the given ID</div>;
    }

    return (
        <>
            {content}
        </>
    );
}