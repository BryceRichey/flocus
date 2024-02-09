import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Fragment>
            <nav className="h-dvh w-48 pl-6 bg-gray-50">
                <h1 className="pt-3 pb-4 text-3xl">Flocus</h1>
                <ul>
                    <li className="text-slate-800">
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li className="text-slate-800">
                        <Link to={`/tasks/create`}>Create Task</Link>
                    </li>
                    <li className="text-slate-800">
                        <Link to={`/tasks/show`}>Tasks</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
}