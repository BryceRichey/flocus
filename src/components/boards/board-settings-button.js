'use client'

import { useState, useEffect } from "react"

export default function BoardSettingsButton() {
    const [showSettings, setShowSettings] = useState(false);

    function handleClick() {
        setShowSettings(!showSettings);
    }

    useEffect(() => { }, [showSettings]);

    return (
        <>
            <button type="button" onClick={handleClick} className="bg-stone-600 hover:bg-stone-500 text-white text-xs rounded-lg h-6 px-2">Settings</button>
            <div className={`${showSettings ? '' : 'hidden'} absolute right-0 bg-stone-400 h-full px-8 py-4`}>
                <div className="flex">
                    <h3 className="mr-16">Board Settings</h3>
                    <button type="button" onClick={handleClick}>Close</button>
                </div>
            </div>
        </>
    )
}