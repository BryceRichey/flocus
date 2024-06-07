import { Link } from "react-router-dom";
import { deleteTask } from "../../../store/store";
import { useThunk } from "../../../hooks/useThunk";
import { ButtonPrimary, ButtonSecondary } from "../../../assets/Buttons";

export default function UpcomingTaskListItem({ task }) {
    const [doDeleteTask] = useThunk(deleteTask);

    const handleDeleteClick = async (taskId) => {
        await doDeleteTask(taskId);
    }

    let endDate;
    let noEndDate
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
    } else {
        noEndDate = ( 
            <>
                <div className="flex flex-col gap-1 border-r w-24 pr-4 justify-center">
                    <p className="text-sm text-center">NO DUE DATE</p>
                </div>
            </>
        )
    }

    let taskEndTime;
    if (task.end_time) {
        taskEndTime = (
            task.end_time.split('-')[0]
        );
    }

    return (
        <>
            <div className="mx-4 my-2 rounded-xl lm-bg-200 dark:dm-bg-700 lm-tx-900 dark:dm-tx-100 transition duration-300">
                <div className="px-6 py-4 flex gap-8">
                    {endDate ? endDate : noEndDate}
                    <div className="flex flex-col">
                        <h2 className="text-xl font-medium">{task.name}</h2>
                        <p className="text-sm">{task.description}</p>
                        <p className="text-sm pt-4">{task.tags}</p>
                        {/* <p className="text-sm">{task.priority}</p> */}
                        <div >
                            <ButtonSecondary onClick={() => handleDeleteClick(task.id)} label={'Delete'} />
                                <Link to={`/tasks/${task.id}/edit`}>
                                    <ButtonPrimary label={'Edit'} />
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}