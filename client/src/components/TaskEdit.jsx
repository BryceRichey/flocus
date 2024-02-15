import { useParams } from "react-router-dom";
import { useFetchTaskQuery } from "../store/store.js"
import TaskEditItem from "./TaskEditItem.jsx";

export default function TaskEdit() {
    let { taskId } = useParams();

    const {
        data: task,
        isLoading,
        isSuccess,
        isError,
        error
    } = useFetchTaskQuery(taskId);

    let content;

    if (isLoading) {
        content = <div>Loading</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    } else if (isSuccess) {
        content = <TaskEditItem task={task} />
    }

    return (
        <>
            {content}
        </>
    );
}