function TaskListItem({ task }) {
    return (
        <p>{task.name} | Priority {task.priority}</p>
    );
}

export default TaskListItem;