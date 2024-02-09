import { useState } from "react";
import { useCreateTaskMutation } from "../store/store.js";

export default function TaskForm() {
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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={handleNameChange} placeholder="Task Name"></input>
                </div>
                <div>
                    <label>Priority </label>
                    <select value={priority} onChange={handlePriorityChange}>
                        <option hidden value={0}>Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}