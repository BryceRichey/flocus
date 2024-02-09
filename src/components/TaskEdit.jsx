import { useFetchTaskQuery } from "../store/store"
import { useParams } from "react-router-dom";
import TaskEditItem from "./TaskEditItem";

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
            <div>Task Edit Form</div>
            {content}
        </>
    );
}