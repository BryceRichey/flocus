import { Link } from "react-router-dom";
import { deleteTask } from "../../../store/store";
import { useThunk } from "../../../hooks/useThunk";

export default function UpcomingTaskListItem({ task }) {
    const [doDeleteTask] = useThunk(deleteTask);

    const handleDeleteClick = async (taskId) => {
        await doDeleteTask(taskId);
    }

    let endDate;
    if (task.end_date) {
        const taskEndDate = task.end_date.split('T')[0];
        const [year, month, date] = taskEndDate.split('-');

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = monthNames[parseInt(month) - 1];

        endDate = (
            <>
                <div className="flex flex-col gap-1 border-r w-24 pr-4 justify-center">
                    <p className="text-sm text-center">DUE</p>
                    <p className="text-4xl font-semibold text-center">{date}</p>
                    <p className="text-center">{monthName}</p>
                </div>
            </>
        );
    }

    let taskEndTime;
    if (task.end_time) {
        taskEndTime = (
            task.end_time.split('-')[0]
        );
    }

    return (
        <>
            <div className="max-w-80 my-4 mr-4 rounded-xl lm-bg-200 dark:dm-bg-700 lm-tx-900 dark:dm-tx-100 transition duration-300">
                <div className="px-6 py-4 flex gap-4">
                    {endDate}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-medium">Title: {task.name}</h2>
                        <p className="text-sm">Description: {task.description}</p>
                        <p className="text-sm pt-4">Tags: {task.tags}</p>
                        {/* <p className="text-sm">{task.priority}</p> */}
                        {/* <div >
                            <ButtonSecondary onClick={() => handleDeleteClick(task.id)} label={'Delete'} />
                            <ButtonPrimary label={'Edit'}>
                                <Link to={`/tasks/${task.id}/edit`} />
                            </ButtonPrimary>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}