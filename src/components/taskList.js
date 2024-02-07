import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchTasks } from "../store/store";
import { useThunk } from "../hooks/useThunk";

function TaskList() {
    const [runFetchTasks] = useThunk(fetchTasks);

    const { tasks } = useSelector((state) => {
        return state.tasks;
    })

    useEffect(() => {
        runFetchTasks();
    }, [runFetchTasks]);

    let content = tasks.map((task) => {
        return (
            <div key={task.id}>
                <p>{task.name} | Priority {task.priority}</p>
            </div>
        )
    })

    return (
        <div>
            <h1>Tasks</h1>
            {content}
        </div>
    )
}

export default TaskList;