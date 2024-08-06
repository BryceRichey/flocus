import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex place-content-between bg-zinc-300">
            <a href="/">LOGO HERE</a>
            <div>
                <ul className="flex">
                    <li>
                        <select >
                            <option value="" disabled selected>Recent</option>
                        </select>
                    </li>
                    <li>
                        <button className="bg-black text-white">Stared</button>
                    </li>
                    <li>
                        <Link href="/calendar">Calendar</Link>
                    </li>
                </ul>
            </div>
            <input type="search" placeholder="Search"/>
            <div className="flex">
                <div className="me-3">
                    SETTINGS
                </div>
                <div className="me-3">
                    NOTIFICATIONS
                </div>
                <div>
                    PROFILE PIC
                </div>
            </div>
        </nav>
    );
}