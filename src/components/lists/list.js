import Card from "../cards/card"
import DeleteCardForm from "../cards/delete-list-form";
import Footer from "./footer";

export default function List({ boardId, listId, listCards }) {
    return (
        <>
            <ul className="flex flex-col">
                {listCards.map((card) => (
                    <div key={card.id} className="flex">
                        <Card key={card.id} card={card}/>
                        <DeleteCardForm boardId={boardId} cardId={card.id} />
                    </div>
                ))}
            </ul>
            <Footer boardId={boardId} listId={listId} />
        </>
    );
}