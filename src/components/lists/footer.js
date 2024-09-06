import NewCardForm from "../cards/new-card-button";

export default function Footer({ boardId, listId }) {
    return (
        <div className="flex flex-col">
            <NewCardForm boardId={boardId} listId={listId} />
        </div>
    )
}