import { twMerge } from 'tailwind-merge';
import className from 'classnames';
import { Link } from 'react-router-dom';

import { SquaresIconOutline, SquaresIconSolid } from '../../icons/SquaresIcons';
import { CalendarIconOutline, CalendarIconSolid } from "../../icons/CalendarIcons";
import { RectangleStackIconOutline, RectangleStackIconSolid } from '../../icons/RectangleStackIcons';
import { FilterIconOutline, FilterIconSolid } from '../../icons/FilterIcons';

function SidebarLink({
    children,
    active,
    inactive,
    ...rest
}) {
    const classes = twMerge(
        className(rest.className, 'flex gap-4 hover:bg-stone-800 transition duration-300 rounded-xl px-4 py-2', {
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

    const renderedLink = links.map((link) => {
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

    return (
        <div className="flex flex-col text-white">
            <p className="bodySub2 text-stone-500 pb-2">Overview</p>
            {renderedLink}
        </div>
    );
}

export default SidebarLink;