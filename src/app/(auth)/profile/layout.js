import Link from "next/link";

export default function ProfileLayout({ children }) {
    return (
        <div className="px-8 pt-4">
            <h1 className="text-xl">My Profile</h1>
            <br />
            <main className="flex">
                <nav className="flex flex-col mb-8 rounded bg-stone-400 me-4 p-4 w-40">
                    <Link href="/profile/personal-info">Personal Info</Link>
                    <Link href="/profile/my-boards">My Boards</Link>
                    <Link href="/profile/settings">Settings</Link>
                </nav>
                <div className="flex flex-col mb-8 rounded bg-stone-200 p-4 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}