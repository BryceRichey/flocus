'use client'

import { useState, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createList } from '@/actions/lists/list-actions';
import Button from '../buttons/button';

export default function NewListForm({ boardId }) {
    const initialState = {
        listName: '',
        boardId,
    }

    const [showForm, setShowForm] = useState(false);
    const [state, formAction] = useFormState(createList, initialState);

    function handleClick() {
        setShowForm(!showForm);
    }

    useEffect(() => { }, [showForm]);

    let content;

    if (!showForm) {
        content = (
            <div className='mx-2 w-64'>
                <Button buttonType="button" buttonStyle="fill" buttonLabel="Create another list" onClickFn={handleClick} width="w-64" iconLeft="+" />
            </div>
        );
    } else {
        content = (
            <section>
                <form action={formAction} className={`${showForm ? '' : 'hidden'} flex flex-col justify-between rounded-lg bg-cyan-600 mx-2 mb-2 p-2 w-64`}>
                    <input type="hidden" name="boardId" value={boardId} />
                    <input type="text" name="listName" className='rounded-lg mb-2 p-2' placeholder='Enter a name for this list' />
                    <div className='flex'>
                        <Button buttonType="button" buttonStyle="ghost" buttonLabel="Cancel" onClickFn={handleClick} />
                        <Button buttonType="submit" buttonStyle="fill" buttonLabel="Create" />
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