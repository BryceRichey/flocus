import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTask } from "../store/store.js";
import { useThunk } from "../hooks/useThunk.js";

export default function TaskEditItem({ task }) {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const [doUpdateTask] = useThunk(updateTask);
    const [formData, setFormData] = useState({
        name: "",
        tags: "",
        description: "",
        date: null,
        time: null,
        priority: 0,
    });

    useEffect(() => {
        if (task) {
            setFormData({
                name: task.name || "",
                tags: task.tags || "",
                description: task.description || "",
                date: task.due_date || null,
                time: task.due_time || null,
                priority: task.priority || 0,
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(state => ({
            ...state,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await doUpdateTask({
            taskId,
            ...formData,
        });

        navigate("/tasks/show");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" value={formData.name} placeholder={task.name} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="tags" value={formData.tags} placeholder={task.tags} onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="description" value={formData.description} placeholder={task.description} onChange={handleChange} />
                </div>
                <div>
                    <input type="date" name="due_date" value={formData.date} onChange={handleChange} />
                </div>
                <div>
                    <input type="time" name="due_time" value={formData.time} onChange={handleChange} />
                </div>
                <div>
                    <label>Priority </label>
                    <select name="priority" value={formData.priority} onChange={handleChange}>
                        <option hidden value={task.priority}>{task.priority}</option>
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