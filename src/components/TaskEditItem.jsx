import { useUpdateTaskMutation } from "../store/store";
import { useState } from "react";
import { useParams } from "react-router-dom";

function TaskEditItem({ task }) {
    let { taskId } = useParams();

    const [name, setName] = useState(task.name);
    const [priority, setPriority] = useState(task.priority);
    const [updateTask] = useUpdateTaskMutation();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateTask({ id: taskId, name, priority });
    }

    return (
        <div>
            <h1>Edit Task</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>Task Name</label>
                <input type="text" value={name} placeholder={task.name} onChange={handleNameChange}></input>

                <br />

                <label>Priority</label>
                <select value={priority} onChange={handlePriorityChange}>
                    <option hidden value={name.priority}>{name.priority}</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>

                <br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default TaskEditItem;