'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import DeleteListForm from "./delete-list-form";

export default function ListOptionsButton({ boardId, listId }) {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(!showForm);
    }

    useEffect(() => { }, [showForm]);

    return (
        <>
            <div>
                <button type="button" className="bg-stone-600 hover:bg-stone-500 text-white text-xs rounded-lg h-6 px-2" onClick={handleClick}>Options</button>
                <section className={`${showForm ? '' : 'hidden'} absolute  bg-stone-500 p-5`}>
                    <Link href={`/boards/${boardId}/${listId}`} className="bg-stone-600 text-white rounded px-2 py-1 me-2">Edit List</Link>
                    <DeleteListForm boardId={boardId} listId={listId} />
                </section>
            </div>
        </>
    )
}