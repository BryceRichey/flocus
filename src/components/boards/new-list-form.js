'use client'

import { useFormState } from 'react-dom';
import { createList } from '@/actions/lists/list-actions';

export default function NewListForm({ boardId }) {
    const initialState = {
        listName: '',
        boardId,
    }

    const [state, formAction] = useFormState(createList, initialState);

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="boardId" value={boardId} />
                <input type="text" name="listName" />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Create New List</button>
            </form>
        </div>
    );
}