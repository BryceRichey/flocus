'use client'

import { useState } from "react";

export default function CreateBoard() {
    const [boardName, setBoardName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    function handleChange(e) {
        console.log(boardName);
        setBoardName(e.target.value);
    }

    return (
        <div>
            <h1>Create A Board</h1>
            <form action={handleSubmit}>
                <label>Board Name</label>
                <input type="text" value={boardName} onChange={handleChange}></input>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}