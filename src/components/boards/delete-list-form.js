'use client'

import { useFormState } from 'react-dom';
import { deleteList } from '@/actions/lists/list-actions';

export default function DeleteListForm({ listId }) {
    const initialState = {
        listId: listId,
    }

    const [state, formAction] = useFormState(deleteList, initialState);

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="listId" value={listId} />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Delete List</button>
            </form>
        </div>
    );
}