'use client'

import { useFormState } from 'react-dom';
import { createBoard } from '@/actions/boards/board-actions';

export default function NewBoardForm() {
    const initialState = {
        bordName: ''
    }

    const [state, formAction] = useFormState(createBoard, initialState);

    return (
        <div>
            <form action={formAction} className="flex flex-col justify-between rounded bg-stone-400 mx-2 p-4">
                <input type="text" name="boardName" className='rounded mb-2' />
                <button type="submit" className="bg-stone-600 text-white rounded px-2 py-1">Create New Board</button>
            </form>
        </div>
    );
}