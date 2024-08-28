import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex justify-between bg-stone-100 px-8 py-2">
            <Link href="/">Flocus</Link>
            <div>
                <ul className="flex">
                    <li className="pe-3"><Link href="/boards">Boards</Link></li>
                </ul>
            </div>
            <div className="flex">
                <search className="bg-stone-400 p-1 mr-8">
                    <form>
                        <input type="search" />
                        <button type="submit">Search</button>
                    </form>
                </search>
                <Link href="/profile">Profile</Link>
            </div>
        </nav>
    )
}