import NavBar from "../components/NavBar.jsx";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}