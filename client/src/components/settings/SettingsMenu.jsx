import { Link } from "react-router-dom";

export default function SettingsMenu() {
    const menuItems = [
        {
            label: 'Details',
            path: 'details'
        },
        {
            label: 'Profile',
            path: 'profile'

        },
        {
            label: 'Password',
            path: 'password'

        },
        {
            label: 'Boards',
            path: 'boards'

        },
    ];

    const menu = (
        <ul className="flex pb-4">
            {menuItems.map(item => {
                return (
                    <li key={item.label}>
                        <Link to={item.path} className="hover:lm-bg-200 dark:hover:dm-bg-700 transition duration-300 rounded-xl lm-tx-800 dark:dm-tx-200 hover:lm-tx-900 dark:hover:dm-tx-100 px-4 py-2">
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul >
    )

    return (
        <div>
            {menu}
        </div>
    )
}