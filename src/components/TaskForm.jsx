import {
    useState,
    // useReducer 
} from "react";
import { useCreateTaskMutation } from "../store/store.js";
// import formReducer from "../reducers/formReducer.js";

export default function TaskForm() {
    // const [state, dispatch] = useReducer(formReducer, {
    //     text: '',
    // })
    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(0);
    const [createTask] = useCreateTaskMutation();

    const handleNameChange = (e) => {
        setName(e.target.value);

        // dispatch({
        //     type: 'name',
        //     payload: e.target.value,
        // });
    }

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);

        // dispatch({
        //     type: 'priority',
        //     payload: e.target.value,
        // });
    }

    const handleTagChange = (e) => {
        setTags(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask({
            name,
            tags,
            description,
            priority,
        });

        setName('');
        setTags('');
        setDescription('');
        setPriority(0);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={handleNameChange} placeholder="Task Name"></input>
                </div>
                <div>
                    <input type="text" value={tags} onChange={handleTagChange} placeholder="Task Tags"></input>
                </div>
                <div>
                    <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Task Description"></input>
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