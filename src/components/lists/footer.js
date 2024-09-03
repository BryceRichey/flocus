import Link from "next/link";
import DeleteListForm from "../boards/delete-list-form";
import NewCardButton from "../cards/new-card-button";

export default function Footer({ boardId, listId }) {
    return (
        <div className="flex flex-col">
            <NewCardButton/>
            <div className="flex">
                <Link href={`/boards/${boardId}/${listId}`} className="bg-stone-600 text-white rounded px-2 py-1 me-2">Edit List</Link>
                <DeleteListForm boardId={boardId} listId={listId} />
            </div>
        </div>
    )
}