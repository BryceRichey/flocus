'use client'

import { useFormState } from 'react-dom';
import { deleteCard } from '@/actions/cards/card-actions';

export default function DeleteCardForm({ boardId, cardId }) {
    const initialState = {
        boardId,
        cardId,
    }

    const [state, formAction] = useFormState(deleteCard, initialState);

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="boardId" value={boardId} />
                <input type="hidden" name="cardId" value={cardId} />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Delete</button>
            </form>
        </div>
    );
}