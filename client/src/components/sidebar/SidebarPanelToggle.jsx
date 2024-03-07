import { useContext } from "react";
import SidebarPanelProvider from "../../context/SidebarToggle";
import {
    ArrowInCircleLeftIconOutline,
    ArrowInCircleLeftIconSolid,
    ArrowInCircleRightIconOutline,
    ArrowInCircleRightIconSolid
} from "../../icons";


export default function SidebarPanelToggle() {
    const sidebarPanel = useContext(SidebarPanelProvider);

    const handleClickSidebarPanel = () => {
        sidebarPanel.toggleSidebar();
    }

    return (
        <button
            className="flex gap-4 px-4 py-2 hover:lm-bg-200 dark:hover:dm-bg-700 rounded-xl tx-sm lm-tx-800 dark:dm-tx-200 hover:lm-tx-900 dark:hover:dm-tx-100 transition duration-300"
            onClick={handleClickSidebarPanel}
        >
            {sidebarPanel.isSidebarPanelClosed ? <ArrowInCircleLeftIconSolid /> : <ArrowInCircleRightIconSolid />}
            {sidebarPanel.isSidebarPanelClosed ? <ArrowInCircleLeftIconOutline /> : <ArrowInCircleRightIconOutline />}
            {sidebarPanel.isSidebarPanelClosed ? "Collapse Panel" : ""}
        </button>
    );
}