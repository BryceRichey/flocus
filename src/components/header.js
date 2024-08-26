import Link from "next/link";

export default function Header() {
    return (
        <div>
            <ul className="flex">
                <li className="pe-3"><Link href="/">Home</Link></li>
                <li className="pe-3"><Link href="/boards">Boards</Link></li>
                <li className="pe-3"><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}