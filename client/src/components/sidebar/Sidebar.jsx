import { useContext } from "react";
import SidebarProfile from "./Profile";
import SidebarLink from "./Links";
import ThemeToggle from "./ThemeToggle";
import SidebarPanelToggle from "./SidebarPanelToggle";
import SidebarPanelProvider from "../../context/SidebarToggle";

export default function Sidebar() {
    const sidebarPanel = useContext(SidebarPanelProvider);

    const renderedThemeToggle = ThemeToggle();
    const renderedSidebarPanelToggle = SidebarPanelToggle();

    console.log(sidebarPanel.isSidebarPanelClosed);

    return (
        <nav className={`flex flex-col justify-between min-h-full ${sidebarPanel.isSidebarPanelClosed ? 'w-64' : 'w-[88px]'} m-4 p-4 lm-bg-100 dark:dm-bg-800 rounded-xl transition-[ ,width] duration-300 ease-in-out`}>
            <div>
                <SidebarProfile />
                <ul>
                    <SidebarLink />
                </ul>
            </div>
            <div>
                <div className="flex flex-col group relative">
                    {renderedThemeToggle}
                </div>
                <div className="flex flex-col group relative">
                    {renderedSidebarPanelToggle}
                </div>
            </div>
        </nav>
    );
}