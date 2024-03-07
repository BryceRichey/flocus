import { useContext } from "react";
import ThemeProvider from "../../context/Theme";
import SidebarPanelProvider from "../../context/SidebarToggle";
import {
    SunIconOutline,
    SunIconSolid,
    MoonIconOutline,
    MoonIconSolid,
} from "../../icons/index";

export default function ThemeToggle() {
    const theme = useContext(ThemeProvider);
    const sidebarPanel = useContext(SidebarPanelProvider);

    const handleClickTheme = () => {
        theme.toggleTheme();
    }

    return (
        <button
            className="flex gap-4 px-4 py-2 hover:lm-bg-200 dark:hover:dm-bg-700 rounded-xl tx-sm lm-tx-800 dark:dm-tx-200 hover:lm-tx-900 dark:hover:dm-tx-100 transition duration-300"
            onClick={handleClickTheme}
        >
            {theme.isDarkMode ? <SunIconOutline /> : <MoonIconOutline />}
            {theme.isDarkMode ? <SunIconSolid /> : <MoonIconSolid />}
            {sidebarPanel.isSidebarPanelClosed ? (theme.isDarkMode ? "Light Mode" : "Dark Mode") : ''}
        </button>
    );
}