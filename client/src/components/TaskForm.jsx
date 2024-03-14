import { useState } from "react";
import { createTask } from "../store/store.js";
import { useThunk } from "../hooks/useThunk.js";

import InputText from "../assets/InputText.jsx";
import InputDate from "../assets/InputDate.jsx";
import InputTime from "../assets/InputTime.jsx";
import Select from "../assets/Select.jsx";
import { ButtonPrimary, ButtonSecondary } from "../assets/Buttons.jsx";

export default function TaskForm() {
    const [doCreateTasks] = useThunk(createTask);

    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState(0);

    const handleNameChange = (newTitle) => {
        setName(newTitle);
    }

    const handleDescriptionChange = (newDescription) => {
        setDescription(newDescription);
    }

    const handlePriorityChange = (newPriority) => {
        setPriority(newPriority);
    }

    const handleTagChange = (newTags) => {
        setTags(newTags);
    }

    const handleStartTimeChange = (newStartTime) => {
        setStartTime(newStartTime);
    }

    const handleEndTimeChange = (newEndTime) => {
        setEndTime(newEndTime);
    }

    const handleStartDateChange = (newStartDate) => {
        setStartDate(newStartDate);
    }

    const handleEndDateChange = (newEndDate) => {
        setEndDate(newEndDate);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        doCreateTasks({
            name,
            tags,
            description,
            startTime,
            endTime,
            startDate,
            endDate,
            priority,
        });

        setName('');
        setTags('');
        setDescription('');
        setStartDate('');
        setEndDate('');
        setStartTime('');
        setEndTime('');
        setPriority(0);
    }

    return (
        <div className="flex flex-1">
            <div className="px-6 py-4 flex flex-col flex-1 my-4 mr-4 rounded-xl lm-bg-100 dark:dm-bg-800 transition duration-300">
                <h1 className="text-4xl pb-1 font-medium lm-tx-900 dark:dm-tx-100 transition duration-300">Create New Task</h1>
                <p className="text-sm lm-tx-700 mb-8 dark:dm-tx-300 transition duration-300">Enter in your task details</p>
                <form action="/tasks" onSubmit={handleSubmit} className="flex flex-col gap-4 lm-tx-900 dark:dm-tx-100 transition duration-300">
                    <InputText inputLabel={'Title'} maxLength={150} value={name} placeholder={'Enter Title'} onChange={handleNameChange} />
                    <InputText inputLabel={'Description'} maxLength={250} value={description} placeholder={'Enter Desription'} onChange={handleDescriptionChange} />
                    <Select inputLabel={'Priority'} value={priority} onChange={handlePriorityChange}>
                        <option hidden value={0}>Select Priority</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Select>
                    <InputText inputLabel={'Tags'} maxLength={150} value={tags} placeholder={'Task Tags'} onChange={handleTagChange} />
                    <div className="flex gap-4">
                        <InputTime inputLabel={'Start Time'} value={startTime} onChange={handleStartTimeChange} />
                        <InputTime inputLabel={'End Time'} value={endTime} onChange={handleEndTimeChange} />
                    </div>
                    <div className="flex gap-4">
                        <InputDate inputLabel={'Start Date'} value={startDate} onChange={handleStartDateChange} />
                        <InputDate inputLabel={'End Date'} value={endDate} onChange={handleEndDateChange} />
                    </div>
                    <div className="flex gap-2 justify-end">
                        <ButtonSecondary />
                        <ButtonPrimary />
                    </div>
                </form>
            </div>
            <TaskDetails name={name} tags={tags} description={description} priority={priority} startTime={startTime} startDate={startDate} endTime={endTime} endDate={endDate} />
        </div>
    );
}

function TaskDetails({ name, tags, description, priority, endTime, endDate, startTime, startDate }) {
    return (
        <div className="w-80 my-4 mr-4 rounded-xl lm-bg-100 dark:dm-bg-800 lm-tx-900 dark:dm-tx-100 transition duration-300">
            <div className="px-6 py-4 flex flex-col">
                <h2 className="text-xl">{name ? name : 'Task Title'}</h2>
                <p className="text-sm">{tags ? tags : 'Task Tags'}</p>
            </div>
            <hr className="border-[#979797]" />
            <div className="px-6 py-4 flex flex-col gap-4">
                <p>{description ? description : 'Task Description'}</p>
                <p className="text-sm">{priority === 0 ? 'Priority Level' : `Priority ${priority}`}</p>
                <div className="text-sm">
                    <p>{startTime ? `Start time: ${startTime}` : 'Start Time'}</p>
                    <p>{startDate ? `Start date: ${startDate}` : 'Start Date'}</p>
                </div>
                <div className="text-sm">
                    <p>{endTime ? `End time: ${endTime}` : 'End Time'}</p>
                    <p>{endDate ? `End date: ${endDate}` : 'End Date'}</p>
                </div>
            </div>
        </div>
    );
}
