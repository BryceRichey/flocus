function TaskListItem({ task }) {
    return (
        <div>
            <h3>{task.name}</h3>
            <div className="flex">
                <h5>Priority</h5>
                <h5>{task.priority}</h5>
            </div>
        </div>
    );
}

export default TaskListItem;