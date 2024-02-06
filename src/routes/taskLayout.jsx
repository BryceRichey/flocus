import { Fragment } from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <Fragment>
            <NavBar />
            <Outlet />
        </Fragment>
    )
}

export default Root;