import Sidebar from "../components/sidebar/Sidebar";
// import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <Sidebar />
            <div className="flex flex-col flex-1 mr-4">
                <Navbar />
                {/* <Breadcrumbs /> */}
                <Outlet />
            </div>
        </>
    )
}