import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import SettingsMenu from "../components/settings/SettingsMenu";

export default function AppLayout() {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col flex-1 my-4 mr-4 rounded-xl lm-bg-100 dark:dm-bg-800
    transition duration-300">
                <div className="px-6">
                    <h1 className="pt-4 pb-6 text-4xl font-medium lm-tx-900 dark:dm-tx-100 transition duration-300">
                        Settings
                    </h1>
                    <SettingsMenu />
                </div>
                <hr className="border-[#979797]" />
                <Outlet />
            </div>
        </>
    )
}