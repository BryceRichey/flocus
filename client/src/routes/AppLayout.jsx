import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}