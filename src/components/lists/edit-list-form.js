'use client'

import { useFormState } from 'react-dom';
import { updateList } from '@/actions/lists/list-actions';

export default function EditListForm({ boardId, listData }) {
    const initialState = {
        boardId,
        listId: listData.id,
        listName: listData.listName,
    }

    const [state, formAction] = useFormState(updateList, initialState);

    return (
        <div>
            <form action={formAction}>
                <label>List Name:</label>
                <input type="hidden" name="boardId" value={boardId} />
                <input type="hidden" name="listId" value={listData.id} />
                <input type="text" name="listName" placeholder={listData.listName} />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Update List</button>
            </form>
        </div>
    );
}