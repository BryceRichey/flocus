import TaskEdit from "../components/TaskEdit.jsx"

export default function EditTask() {
    return (
        <>
            <div className="pt-4 p-10">
                <h1 className="pb-4 font-medium text-xl">Edit Task</h1>
                <TaskEdit />
            </div>
        </>
    );
}