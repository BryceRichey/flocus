import TaskForm from "../components/TaskForm.jsx";

export default function CreateTask() {
    return (
        <>
            <div className="w-full pt-4 p-10">
                <h1 className="pb-4 font-medium text-xl">Create Task</h1>
                <TaskForm />
            </div>
        </>
    );
}