import { useFetchTasksQuery } from "../store/store";
import TaskListItem from "./TaskListItem";

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
            <div className="flex space-x-4">
                {content}
            </div>
        </div>
    )
}

export default TaskList;