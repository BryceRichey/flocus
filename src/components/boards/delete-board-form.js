'use client'

import { useFormState } from 'react-dom';
import { deleteBoard } from '@/actions/boards/board-actions';

export default function DeleteBoardForm({ boardId }) {
    const initialState = {
        boardId,
    }

    const [state, formAction] = useFormState(deleteBoard, initialState);

    return (
        <div>
            <form action={formAction}>
                <input type="hidden" name="boardId" value={boardId} />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Delete Board</button>
            </form>
        </div>
    );
}