import DeleteListForm from "../boards/delete-list-form";
import NewCardButton from "../cards/new-card-button";

export default function Footer({ listId }) {
    return (
        <div className="flex flex-col">
            <NewCardButton />
            <DeleteListForm listId={listId} />
        </div>
    )
}