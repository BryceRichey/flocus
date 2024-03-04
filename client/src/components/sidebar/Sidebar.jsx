import SidebarProfile from "./SidebarProfile";
import SidebarSeach from "./SidebarSearch";
import SidebarLink from "./SidebarLink";
import { Link } from "react-router-dom";

import { AddIconOutline, AddIconSolid } from "../../icons/AddIcons";

export default function Sidebar() {
    return (
        <nav className="h-dvh w-64 p-4 bg-stone-900">
            <SidebarProfile />
            <SidebarSeach />
            <div className="group relative">
                <Link to={'/tasks/create'} className="flex gap-4 w-full px-4 py-2 mb-4 text-white transition duration-300 hover:bg-stone-800 rounded-xl">
                    <AddIconOutline />
                    <AddIconSolid />
                    Add Task
                </Link>
            </div>
            <ul>
                <SidebarLink />
            </ul>
        </nav>
    );
}