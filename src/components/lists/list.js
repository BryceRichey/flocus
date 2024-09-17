import Card from "../cards/card"
import ListOptionsButton from "../lists/list-options-button";
import DeleteCardForm from "../cards/delete-list-form";
import Footer from "./footer";

export default function List({ boardId, list }) {
    return (
        <li key={list.id} className="flex flex-col justify-between rounded-lg bg-cyan-600 mx-2 p-2 w-64 h-fit">
            <div className="flex justify-between">
                <h2 className="mb-2 ps-2 text-white">{list.listName}</h2>
                <ListOptionsButton boardId={boardId} listId={list.id} />
            </div>
            <ul className="flex flex-col">
                {list.cards.map((card) => (
                    <div key={card.id} className="flex">
                        <Card key={card.id} card={card} />
                        <DeleteCardForm boardId={boardId} cardId={card.id} />
                    </div>
                ))}
            </ul>
            <Footer boardId={boardId} listId={list.id} />
        </li>
    );
}