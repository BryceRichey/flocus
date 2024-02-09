import { useDeleteTaskMutation } from "../store/store";
import { useParams, Link } from "react-router-dom";

export default function TaskListItem({ task }) {
    let { taskId } = useParams();

    const [deleteTask] = useDeleteTaskMutation();

    const handleDeleteClick = async (e) => {
        e.preventDefault();

        await deleteTask({ taskId });
    }

    return (
        <>
            <div className="border rounded-md p-2 max-w-fit">
                <h3 className="text-lg font-medium">{task.name}</h3>
                <div className="flex">
                    <h5>Priority</h5>
                    <h5 className="ml-3">{task.priority}</h5>
                </div>
                <div className="mt-4 space-x-6">
                    <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
                    <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                </div>
            </div>
        </>
    );
}