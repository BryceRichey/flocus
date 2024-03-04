import Sidebar from "../components/sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}