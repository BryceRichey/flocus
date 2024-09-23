'use client'

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { createCard } from "@/actions/cards/card-actions"
import Button from '../buttons/button';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button buttonType="submit" buttonStyle="fill" buttonLabel={pending ? "Creating..." : "Create"} />
    );
}

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
                <Button buttonType="button" buttonStyle="ghost" buttonLabel="Add a card" onClickFn={handleClick} iconLeft="+" />
            </div>
        );
    } else {
        content = (
            <section>
                <form action={formAction} className={`${showForm ? '' : 'hidden'} flex flex-col justify-between w-full`}>
                    <input type="hidden" name="boardId" value={boardId} />
                    <input type="hidden" name="listId" value={listId} />
                    <input type="text" name="cardName" className='rounded-lg mb-2 p-2' placeholder='Enter a name for this card' />
                    <div className='flex'>
                        <SubmitButton />
                        <Button buttonType="button" buttonStyle="ghost" buttonLabel="Cancel" onClickFn={handleClick} />
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