import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <h1 className="text-xl">Flocus</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/tasks/show`}>Tasks</Link>
                        </li>
                        <li>
                            <Link to={`/tasks/create`}>Create Task</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}