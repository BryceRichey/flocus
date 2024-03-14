import { useState } from "react";

export default function InputText({ inputLabel, inputOptLabel, name, maxLength, value, placeholder, onChange }) {
    const [inputValue, setInputValue] = useState(value);
    const [maxLengthCounter, setMaxLengthCounter] = useState(0);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
        setMaxLengthCounter(e.target.value.length);
    }

    let label;
    let optLabel;
    let inputLengthCounter;

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

    if (maxLength) {
        inputLengthCounter = (
            <p className="flex justify-end pt-2 min-w-56 w-96 bodySub2 lm-tx-600 dark:dm-tx-400 transition duration-300">{maxLengthCounter} / {maxLength}</p>
        )
    }

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex justify-between pb-1 min-w-56 w-96">
                    {label}
                    {optLabel}
                </div>
                <input name={name} type="text" className="min-w-56 w-96 h-8 px-2 focus:outline-none focus:outline-[#444] focus:outline-1 dark:focus:outline-[#929292] lm-bg-200 dark:dm-bg-700 lm-tx-900 dark:dm-tx-100 bodySub1 rounded-lg transition duration-300
                " maxLength={maxLength} value={inputValue} placeholder={placeholder || null} onChange={handleChange} />
                {inputLengthCounter}
            </div>
        </>
    );
}