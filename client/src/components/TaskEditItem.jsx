import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTask } from "../store/store.js";
import { useThunk } from "../hooks/useThunk.js";

import InputText from "../assets/InputText.jsx";
import InputDate from "../assets/InputDate.jsx";
import InputTime from "../assets/InputTime.jsx";
import Select from "../assets/Select.jsx";
import { ButtonPrimary, ButtonSecondary } from "../assets/Buttons.jsx";

export default function TaskEditItem({ task }) {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const [doUpdateTask] = useThunk(updateTask);
    const [formData, setFormData] = useState({
        name: "",
        tags: "",
        description: "",
        startTime: "",
        endTime: "",
        startDate: "",
        endDate: "",
        priority: 0,
    });

    useEffect(() => {
        if (task) {
            setFormData({
                name: task.name || "",
                tags: task.tags || "",
                description: task.description || "",
                startTime: task.start_time || "",
                endTime: task.end_time || "",
                startDate: task.start_sate || "",
                endDate: task.end_date || "",
                priority: task.priority || 0,
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e;

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

        navigate("/tasks/dashboard");
    };

    return (
<div className="flex flex-1">
            <div className="px-6 py-4 flex flex-col flex-1 my-4 mr-4 rounded-xl lm-bg-100 dark:dm-bg-800 transition duration-300">
                <h1 className="text-4xl pb-1 font-medium lm-tx-900 dark:dm-tx-100 transition duration-300">Edit Task</h1>
                <p className="text-sm lm-tx-700 mb-8 dark:dm-tx-300 transition duration-300">Change your task details</p>
                <form action="/tasks" onSubmit={handleSubmit} className="flex flex-col gap-4 lm-tx-900 dark:dm-tx-100 transition duration-300">
                    <InputText inputLabel={'Title'} name="title" maxLength={150} value={formData.name} placeholder={'Enter Title'} onChange={handleChange} />
                    <InputText inputLabel={'Description'} name="description" maxLength={250} value={formData.description} placeholder={'Enter Desription'} onChange={handleChange} />
                    <Select inputLabel={'Priority'} name="priority" value={formData.priority} onChange={handleChange}>
                        <option hidden value={0}>Select Priority</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Select>
                    <InputText inputLabel={'Tags'} name="tags" maxLength={150} value={formData.tags} placeholder={'Task Tags'} onChange={handleChange} />
                    <div className="flex gap-4">
                        <InputTime inputLabel={'Start Time'} name="startTime" value={formData.startTime} onChange={handleChange} />
                        <InputTime inputLabel={'End Time'} name="endTime" value={formData.endTime} onChange={handleChange} />
                    </div>
                    <div className="flex gap-4">
                        <InputDate inputLabel={'Start Date'} name="startDate" value={formData.startDate} onChange={handleChange} />
                        <InputDate inputLabel={'End Date'} name="endDate" value={formData.endDate} onChange={handleChange} />
                    </div>
                    <div className="flex gap-2 justify-end">
                        <ButtonSecondary />
                        <ButtonPrimary />
                    </div>
                </form>
            </div>
        </div>
    );
}