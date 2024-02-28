import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
    const {
        loginWithRedirect,
        logout,
        isAuthenticated,
    } = useAuth0();

    let accountLinks;

    if (!isAuthenticated) {
        accountLinks = <button onClick={() => loginWithRedirect()}>Login</button>
    } else {
        accountLinks =
            <>
                <li className="text-slate-800">
                    <Link to={`/accounts/profile`}>Profile</Link>
                </li>
                <li className="text-slate-800">
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </li>
            </>
    }

    return (
        <Fragment>
            <nav className="h-dvh w-48 pl-6 bg-gray-50">
                <h1 className="pt-3 pb-4 text-3xl">Flocus</h1>
                <ul>
                    {accountLinks}
                    <br />
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