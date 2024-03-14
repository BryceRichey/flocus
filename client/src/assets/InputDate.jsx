import { useState } from "react";

export default function InputDate({ inputLabel, inputOptLabel, name, value, placeholder, onChange }) {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    }

    let label;
    let optLabel;

    if (inputLabel) {
        label = (
            <label className="lm-tx-900 dark:dm-tx-100 transition duration-300">{inputLabel || null}</label>
        )
    }

    if (inputOptLabel) {
        optLabel = (
            <label className="lm-tx-600 dark:dm-tx-400 flex items-center text-sm transition duration-300">{inputOptLabel || null}</label>
        )
    }

    return (
        <>
            <div>
                <div className="flex justify-between pb-1">
                    {label}
                    {optLabel}
                </div>
                <input name={name} type="date" className="w-64 h-8 px-2 focus:outline-none focus:outline-[#444] focus:outline-1 dark:focus:outline-[#929292] lm-bg-200 dark:dm-bg-700 lm-tx-900 dark:dm-tx-100 bodySub1 rounded-lg transition duration-300" value={inputValue} placeholder={placeholder || null} onChange={handleChange} />
            </div>
        </>
    );
}