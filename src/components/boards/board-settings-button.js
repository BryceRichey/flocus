'use client'

import { useState, useEffect } from "react"
import Button from "../buttons/button";

export default function BoardSettingsButton() {
    const [showSettings, setShowSettings] = useState(false);

    function handleClick() {
        setShowSettings(!showSettings);
    }

    useEffect(() => { }, [showSettings]);

    return (
        <>
            <button type="button" onClick={handleClick} className="bg-cyan-950 hover:bg-cyan-900 text-white text-xs rounded-lg h-6 px-2 mt-4">Settings</button>
            <div className={`${showSettings ? '' : 'hidden'} absolute right-0 bg-cyan-950 h-full px-8 py-4`}>
                <div className="flex text-white items-center">
                    <h3 className="mr-16">Board Settings</h3>
                    {/* <button type="button" onClick={handleClick}>Close</button> */}
                    <Button buttonType="button" buttonStyle="ghost" buttonLabel="Close" onClickFn={handleClick}/>
                </div>
            </div>
        </>
    )
}