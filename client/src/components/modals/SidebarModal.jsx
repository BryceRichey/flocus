import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import { AccountIconOutline, AccountIconSolid } from "../../icons/AccountIcons";
import { SettingsIconOutline, SettingsIconSolid } from "../../icons/SettingsIcons";
import { LogoutIconOutline } from "../../icons/LogoutIcon";

export default function SidebarModal({ isOpen, onClose }) {
    const {
        logout,
    } = useAuth0();

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed left-64 ml-8 w-screen h-svh top-0 bg-black/10 backdrop-blur-sm z-10" onClick={onClose}>
                {/* Backdrop */}
            </div>
            <div className="absolute left-64 mt-32 ml-4 px-4 py-4 bg-stone-900 text-white rounded-xl border-2 border-stone-400/50 z-20">
                <ul className="flex flex-col" onClick={onClose}>
                    <li className="group relative hover:bg-stone-800 transition duration-300 rounded-xl px-4 py-2">
                        <button className="flex gap-4" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            <LogoutIconOutline />
                            Logout
                        </button>
                    </li>
                    <li className="group relative hover:bg-stone-800 transition duration-300 rounded-xl px-4 py-2" onClick={onClose}>
                        <Link to={`/accounts/profile`} className="flex gap-4">
                            <AccountIconOutline />
                            <AccountIconSolid />
                            Profile
                        </Link>
                    </li>
                    <li className="flex gap-4 group relative hover:bg-stone-800 transition duration-300 rounded-xl px-4 py-2" onClick={onClose}>
                        <Link to={`/accounts/settings`} className="flex gap-4">
                            <SettingsIconOutline />
                            <SettingsIconSolid />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}