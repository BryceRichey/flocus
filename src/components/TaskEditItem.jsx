import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUpdateTaskMutation } from "../store/store.js";

export default function TaskEditItem({ task }) {
    let { taskId } = useParams();

    const [name, setName] = useState(task.name);
    const [tags, setTags] = useState(task.tags);
    const [description, setDescription] = useState(task.description);
    const [date, setDate] = useState(task.date);
    const [time, setTime] = useState(task.time);
    const [priority, setPriority] = useState(task.priority);
    const [updateTask] = useUpdateTaskMutation();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleTagChange = (e) => {
        setTags(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateTask({
            id: taskId,
            name,
            tags,
            description,
            priority
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} placeholder={task.name} onChange={handleNameChange} />
                </div>
                <div>
                    <input type="text" value={tags} onChange={handleTagChange} placeholder="Task Tags" />
                </div>
                <div>
                    <input type="text" value={description} placeholder={task.description} onChange={handleDescriptionChange} />
                </div>
                <div>
                    <input type="date" value={date} placeholder={task.date} onChange={handleDateChange} />
                </div>
                <div>
                    <input type="time" value={time} placeholder={task.time} onChange={handleTimeChange} />
                </div>
                <div>
                    <label>Priority </label>
                    <select value={priority} onChange={handlePriorityChange}>
                        <option hidden value={name.priority}>{name.priority}</option>
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