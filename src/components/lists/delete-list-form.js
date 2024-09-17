'use client'

import { useFormState } from 'react-dom';
import { deleteList } from '@/actions/lists/list-actions';
import Button from '../buttons/button';

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
                <Button buttonType="submit" buttonLabel="Delete List" buttonStyle="ghost" />
            </form>
        </div>
    );
}