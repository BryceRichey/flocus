import { useFetchTasksQuery } from "../store/store";
import TaskListItem from "./taskListItem";

function TaskList() {
    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useFetchTasksQuery();

    let content;

    if (isLoading) {
        content = <div>Loading</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    } else if (isSuccess) {
        content = tasks.map(task => {
            return <TaskListItem key={task.id} task={task} />
        });
    }

    return (
        <div>
            <h1>Tasks</h1>
            {content}
        </div>
    )
}

export default TaskList;