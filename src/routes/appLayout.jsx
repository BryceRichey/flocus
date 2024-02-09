import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default AppLayout;