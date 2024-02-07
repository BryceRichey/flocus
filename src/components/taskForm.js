import { useDispatch, useSelector } from "react-redux";
import { changeName, changePriority, createTask } from "../store/store.js";

function TaskForm() {
    const dispatch = useDispatch();
    const { name, priority } = useSelector((state) => {
        return {
            name: state.form.name,
            priority: state.form.priority
        }
    });

    const handleNameChange = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handlePriorityChange = (e) => {
        dispatch(changePriority(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTask({ name, priority }));
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