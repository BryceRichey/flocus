import UpcomingTaskList from "../components/tasks/upcoming/UpcomingTaskList.jsx";
import { ButtonPrimary, ButtonSecondary } from "../assets/Buttons.jsx";
import Tabs from "../components/tabs/Tabs.jsx";

export default function UpcomingTasks() {
    const tabList = [
        {
            label: 'View All',
            // component: 
        },
        {
            label: 'Priority Level',
            // component: 
        },
        {
            label: 'Due Date',
            // component: 
        },
    ]

    return (
        <div className="px-6 py-4 flex flex-col flex-1 my-4 mr-4 rounded-xl lm-bg-100 dark:dm-bg-800 transition duration-300">
            <div className="flex justify-between">
                <h1 className="text-4xl pb-1 font-medium lm-tx-900 dark:dm-tx-100 transition duration-300">Upcoming Tasks</h1>
                <div className="flex gap-2">
                    <ButtonSecondary label={"Select Tasks"} />
                    <ButtonPrimary label={"Create Task"} />
                </div>
            </div>
            <Tabs tabList={tabList} />
            <UpcomingTaskList />
        </div>
    );
}