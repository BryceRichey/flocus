import SidebarProfile from "./Profile";
import SidebarLink from "./Links";
import ThemeToggle from "./ThemeToggle";
import SidebarPanelToggle from "./SidebarPanelToggle";

export default function OpenedSidebar() {
    const renderedThemeToggle = ThemeToggle();
    const renderedSidebarPanelToggle = SidebarPanelToggle();

    return (
        <nav className={`flex flex-col justify-between min-h-full ${renderedSidebarPanelToggle.isSidebarPanelClosed ? 'w-64' : 'w-fit'} m-4 p-4 lm-bg-100 dark:dm-bg-800 rounded-xl transition duration-300`}>
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