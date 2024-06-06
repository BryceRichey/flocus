export default function Tabs({ tabList }) {

    return (
        <div className="flex">
            <ul className="flex text-white">
                {tabList.map((list) => {
                    return (
                        <>
                            <li className="flex gap-4 hover:lm-bg-200 dark:hover:dm-bg-700 transition duration-300 rounded-xl lm-tx-800 dark:dm-tx-200 hover:lm-tx-900 dark:hover:dm-tx-100 px-4 py-2">
                                <button>
                                    {list.label}
                                </button>
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
}