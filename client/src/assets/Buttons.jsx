function ButtonPrimary({ label }) {
    return (
        <>
            <button className="text-white px-3 py-1.5 lm-pm-100 dark:dm-pm-200 rounded-[10px] transition duration-300">
                {label || 'Submit'}
            </button>
        </>
    );
}

function ButtonSecondary({ label }) {
    return (
        <>
            <button className="lm-tx-700 dark:dm-tx-200 px-3 py-1.5 border lm-br-800 dark:dm-br-300 rounded-[10px] transition duration-300">
                {label || 'Cancel'}
            </button>
        </>
    );
}

export {
    ButtonPrimary,
    ButtonSecondary,
}