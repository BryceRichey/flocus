import { useCreateTaskMutation } from "../store/store.js";
import { useState } from "react";

function TaskForm() {
    const [name, setName] = useState('');
    const [priority, setPriority] = useState(0);
    const [createTask] = useCreateTaskMutation();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask({ name, priority });

        setName('');
        setPriority(0);
    }

    return (
        <div>
            <h1>Create Task</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <label>Task Name</label>
                <input type="text" value={name} onChange={handleNameChange}></input>

                <br />

                <label>Priority</label>
                <select value={priority} onChange={handlePriorityChange}>
                    <option hidden value={0}>Select Priority</option>
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

export default TaskForm;