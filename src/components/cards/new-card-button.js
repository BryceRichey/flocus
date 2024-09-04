'use client'

import { useFormState } from 'react-dom';
import { createCard } from "@/actions/cards/card-actions"

export default function NewCardForm({ boardId, listId }) {
    const initialState = {
        boardId,
        listId,
        cardName: '',
    }

    const [state, formAction] = useFormState(createCard, initialState);

    return (
        <div>
            <form action={formAction} className="flex flex-col justify-between rounded bg-stone-300 mb-2 p-4">
                <input type="hidden" name="boardId" value={boardId} />
                <input type="hidden" name="listId" value={listId} />
                <input type="text" name="cardName" className='rounded mb-2' />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Create New Card</button>
            </form>
        </div>
    );
}