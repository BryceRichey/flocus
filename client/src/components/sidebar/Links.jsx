import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import className from 'classnames';
import SidebarPanelProvider from '../../context/SidebarToggle';

import {
    SquaresIconOutline,
    SquaresIconSolid,
    CalendarIconOutline,
    CalendarIconSolid,
    RectangleStackIconOutline,
    RectangleStackIconSolid,
    FilterIconOutline,
    FilterIconSolid
} from '../../icons/index';

function SidebarLink({
    children,
    active,
    inactive,
    ...rest
}) {
    const sidebarPanel = useContext(SidebarPanelProvider);

    const classes = twMerge(
        className(rest.className, 'flex gap-4 hover:lm-bg-200 dark:hover:dm-bg-700 transition duration-300 rounded-xl lm-tx-800 dark:dm-tx-200 hover:lm-tx-900 dark:hover:dm-tx-100 px-4 py-2', {
            'text-white bg-stone-800': active,
            'text-stone-300': inactive,
        }),
    );

    const links = [
        {
            label: 'Dashboard',
            path: '/tasks/show',
            icon: <SquaresIconOutline />,
            iconSolid: <SquaresIconSolid />,
        },
        {
            label: 'Today',
            path: '/tasks/today',
            icon: <CalendarIconOutline />,
            iconSolid: <CalendarIconSolid />,
        },
        {
            label: 'Upcoming',
            path: '/tasks/upcoming',
            icon: <RectangleStackIconOutline />,
            iconSolid: <RectangleStackIconSolid />,
        },
        {
            label: 'Filters & Labels',
            path: '/tasks/filter',
            icon: <FilterIconOutline />,
            iconSolid: <FilterIconSolid />,
        },
    ]

    let renderedLink;

    if (sidebarPanel.isSidebarPanelClosed) {
        renderedLink = links.map((link) => {
            return (
                <li key={link.label} className="group relative">
                    <Link
                        to={link.path}
                        className={classes}
                    >
                        {link.icon}
                        {link.iconSolid}
                        {link.label}
                    </Link>
                </li>
            );
        });
    } else {
        renderedLink = links.map((link) => {
            return (
                <li key={link.label} className="group relative">
                    <Link
                        to={link.path}
                        className={classes}
                    >
                        {link.icon}
                        {link.iconSolid}
                    </Link>
                </li>
            );
        });
    }

    return (
        <div className="flex flex-col lm-tx-900">
            {renderedLink}
        </div>
    );
}

export default SidebarLink;