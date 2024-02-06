import { Fragment } from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <Fragment>
            <NavBar />
            <Outlet />
        </Fragment>
    )
}

export default AppLayout;