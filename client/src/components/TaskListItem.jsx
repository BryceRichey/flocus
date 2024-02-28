import { Link } from "react-router-dom";
import { deleteTask } from "../store/store";
import { useThunk } from "../hooks/useThunk";

export default function TaskListItem({ task }) {
    const [doDeleteTask] = useThunk(deleteTask);

    const handleDeleteClick = async (taskId) => {
        await doDeleteTask(taskId);
    }

    return (
        <>
            <div className="border rounded-md p-2 max-w-fit">
                <h3 className="text-lg font-medium">{task.name}</h3>
                <p>{task.tags}</p>
                <p>{task.description}</p>
                <p>{task.due_date}</p>
                <p>{task.due_time}</p>
                <div className="flex">
                    <h5>Priority</h5>
                    <h5 className="ml-3">{task.priority}</h5>
                </div>
                <div className="mt-4 space-x-6">
                    <Link to={`/tasks/${task.task_id}/edit`}>Edit</Link>
                    <button onClick={() => handleDeleteClick(task.task_id)}>Delete</button>
                </div>
            </div>
        </>
    );
}