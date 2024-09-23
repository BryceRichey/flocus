'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import DeleteListForm from "./delete-list-form";
import MoreIcon from "../icons/more";

export default function ListOptionsButton({ boardId, listId }) {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(!showForm);
    }

    useEffect(() => { }, [showForm]);

    return (
        <>
            <div>
                <button type="button" className="bg-cyan-950 hover:bg-cyan-900 text-white text-xs rounded-lg" onClick={handleClick}>
                    <MoreIcon />
                </button>
                <section className={`${showForm ? '' : 'hidden'} absolute  bg-cyan-950 p-5 rounded-lg`}>
                    <Link href={`/boards/${boardId}/${listId}`} className="font-medium text-base px-3 py-2 rounded-lg w-max text-white/95 hover:text-white hover:bg-cyan-900/20">Edit List</Link>
                    <DeleteListForm boardId={boardId} listId={listId} />
                </section>
            </div>
        </>
    )
}