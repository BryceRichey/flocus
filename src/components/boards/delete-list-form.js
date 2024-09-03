'use client'

import { useFormState } from 'react-dom';
import { deleteList } from '@/actions/lists/list-actions';

export default function DeleteListForm({ boardId, listId }) {
    const initialState = {
        listId,
        boardId,
    }

    const [state, formAction] = useFormState(deleteList, initialState);

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="boardId" value={boardId} />
                <input type="hidden" name="listId" value={listId} />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Delete List</button>
            </form>
        </div>
    );
}