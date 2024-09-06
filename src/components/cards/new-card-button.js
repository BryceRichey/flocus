'use client'

import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createCard } from "@/actions/cards/card-actions"

export default function NewCardForm({ boardId, listId }) {
    const initialState = {
        boardId,
        listId,
        cardName: '',
    }

    const [showForm, setShowForm] = useState(false);
    const [state, formAction] = useFormState(createCard, initialState);

    function handleClick() {
        setShowForm(!showForm);
    }

    useEffect(() => { }, [showForm]);

    let content;

    if (!showForm) {
        content = (
            <div>
                <button type="button" className="bg-stone-600 hover:bg-stone-500 text-white rounded-lg mx-2 px-2 py-1 w-40 h-12" onClick={handleClick}>Create new card</button>
            </div>
        );
    } else {
        content = (
            <section>
                <form action={formAction} className={`${showForm ? '' : 'hidden'} flex flex-col justify-between rounded-lg bg-stone-400 mx-2 mb-2 p-2 w-40`}>
                    <input type="hidden" name="boardId" value={boardId} />
                    <input type="hidden" name="listId" value={listId} />
                    <label className='text-white'>Card Name</label>
                    <input type="text" name="cardName" className='rounded-lg mb-2' />
                    <div className='flex justify-between'>
                        <button type='button' className="bg-stone-600 text-white rounded-lg px-2 py-1" onClick={handleClick}>Cancel</button>
                        <button type="submit" className="bg-stone-600 text-white rounded-lg px-2 py-1">Create</button>
                    </div>
                </form>
            </section>
        );
    }

    return (
        <>
            {content}
        </>
    );
}