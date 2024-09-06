'use client'

import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createBoard } from '@/actions/boards/board-actions';

export default function NewBoardForm() {
    const initialState = {
        bordName: ''
    }

    const [showForm, setShowForm] = useState(false);
    const [state, formAction] = useFormState(createBoard, initialState);

    function handleClick() {
        setShowForm(!showForm);
    }

    useEffect(() => { }, [showForm]);

    return (
        <>
            <div>
                <button type="button" className="bg-stone-600 hover:bg-stone-500 text-white rounded-lg px-2 py-1 w-40 h-24" onClick={handleClick}>Create new board</button>
            </div >
            <section>
                <form action={formAction} className={`${showForm ? '' : 'hidden'} flex flex-col justify-between rounded-lg bg-stone-400 mx-2 mb-2 p-2 w-40`}>
                    <label className='text-white'>Board Name</label>
                    <input type="text" name="boardName" className='rounded-lg mb-4' />
                    <div className='flex justify-between'>
                        <button type='button' className="bg-stone-600 text-white rounded-lg px-2 py-1" onClick={handleClick}>Cancel</button>
                        <button type="submit" className="bg-stone-600 text-white rounded-lg px-2 py-1">Create</button>
                    </div>
                </form>
            </section>
        </>
    );
}