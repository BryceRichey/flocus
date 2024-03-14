import { ChevronRightIcon } from "../../icons/index";

export default function Breadcrumbs() {
    const location = window.location.pathname

    const paths = [
        {
            path: '/settings/profile',
            crumbs: ['Settings', 'Profile'],
            label: 'Profile',
        },
        {
            path: '/tasks/show',
            crumbs: 'Dashboard',
            label: 'Dashboard',
        },
        {
            path: '/tasks/create',
            crumbs: 'Tasks',
            labels: 'Create Task'
        },
    ];

    const breadcrumb = paths.find(link => {
        return link.path === location
    });

    return (
        <div className="mt-4 py-2 rounded-xl lm-bg-100 dark:dm-bg-800 lm-tx-800 dark:dm-tx-200 transition duration-300">
            <div className="px-6 text-sm">
                <ol className="flex">
                    {breadcrumb && breadcrumb.crumbs.map((crumb, index) => {
                        const isLastCrumb = index === breadcrumb.crumbs.length - 1;

                        return (
                            <>
                                <li key={index} className="flex items-center">
                                    {crumb}
                                    {!isLastCrumb && (
                                        <ChevronRightIcon />
                                    )}
                                </li>
                            </>
                        );
                    })}
                </ol>
            </div>
        </div >
    )
}