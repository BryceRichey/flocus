import TaskList from "../components/TaskList.jsx";

export default function ShowTask() {
    return (
        <div className="pt-4 p-10 bg-stone-800">
            <h1 className="pb-4 font-medium text-xl ">All Tasks</h1>
            <TaskList />
        </div>
    );
}